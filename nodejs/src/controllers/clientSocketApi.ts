import { Server } from "ws";
import { Response } from "express";

import { Output } from "../models/output";
import { Connection, CONNECTION_MESSAGE_TEXTS, CONNECTION_MESSAGE_CODES, SOCKET_EVENTS, CONNECTION_TYPES } from "../models/Connection";

import { ISocketEventMessage, ISupportMessageBody } from "../types/interfaces";
import { ISupport } from "../types/Support";

import { sendMessage as sendChatMessage } from "./chat";
import { prepareAndSendSupportMessage } from "./dynamiChatApi";
import { ChatModel } from "../models/Chat";
import { CHAT_STATUS, IChat } from "../types/Chat";
import { createMission } from "./missions";
import { each } from "async";
import { IMission } from "~/types/Mission";

declare let global: {connections: {chats: Array<Connection>, missions: Array<Connection>}};

/**
 * Websocket handler, incoming messages and open connection and more.
 * @param io websocket server object
 */
export let websocketChatServerHandler = (io: Server) => {
    io.on("connection", (socket) => {
        socket.on("disconnect", () => {
            global.connections.chats =  [];
        });

        socket.on("error", () => {
            global.connections.chats = [];
        });

        socket.on("message", (msg: any) => {
            const data = JSON.parse(msg);

            messageHandler(socket, data);
        });
    });

    const messageHandler = (socket, data: ISocketEventMessage) => {
        const events = typeof data.event !== "object" ? [data.event] : data.event;

        events.forEach((event) => {
                Output.info("Event from client: " + event);
            switch (event) {
                case SOCKET_EVENTS.SUPPORT_INIT:
                    clientSocketEventHandlers.onSupportInit(socket, data);
                    break;
                case SOCKET_EVENTS.CHAT_INIT:
                    clientSocketEventHandlers.onChatInit(socket, data);
                    break;
                case SOCKET_EVENTS.MISSIONS_INIT:
                    clientSocketEventHandlers.onMissionInit(socket, data);
                    break;
                case SOCKET_EVENTS.MISSION_DELETE:
                    clientSocketEventHandlers.onMissionDelete(socket, data);
                    break;
                case SOCKET_EVENTS.MISSION_CREATION:
                    clientSocketEventHandlers.onMissionCreation(socket, data);
                    break;
                case SOCKET_EVENTS.SUPPORT_MESSAGE:
                    clientSocketEventHandlers.onSupportMessage(socket, data);
                    break;
                case SOCKET_EVENTS.CHAT_MESSAGE:
                    clientSocketEventHandlers.onChatMessage(socket, data);
                    break;
                case SOCKET_EVENTS.MESSAGE_READ:
                    clientSocketEventHandlers.onMessageRead(socket, data);
                    break;
            }
        });
    };
};

export let clientSocketEventHandlers = {
    onChatInit: (socket: WebSocket, data: ISocketEventMessage) => {
        const connection = Connection.createChatConnection(socket, data.user);

        global.connections.chats.push(connection);

        data.nodeConnectionId = connection.nodeConnectionId;

        connection.sendClientMessage(data, SOCKET_EVENTS.CHAT_INIT);
    },
    /**
     * Initiate support connection on node and php backends.
     *
     * @param {WebSocket} socket connection to client.
     * @param {support: ISupport, user: IUser} data from client to initiate conenction.
     *
     * @remarks
     * send support and nodeConnectionId to php server,
     * for session identification and init on php side.
     * when php backend response,
     * send init event with node connection ids to node client.
     *
     * @sealed
     */
    onSupportInit: (socket: WebSocket, data: ISocketEventMessage) => {
        const connection = Connection.createChatConnection(socket, data.user);

        global.connections.chats.push(connection);

        connection.sendServerMessage({support: data.support}, SOCKET_EVENTS.SUPPORT_INIT, customResponse(
            (rtdata) => {
                if (rtdata.error)
                    Output.error("Got error on SupportInit from php backend:", rtdata);

                rtdata.nodeConnectionId = connection.nodeConnectionId;
                connection.phpConnectionId = rtdata.phpConnectionId;

                Output.info("Sending init message with connection ids - php:", rtdata.phpConnectionId, "and node: ", rtdata.nodeConnectionId, " to client");

                connection.sendClientMessage(rtdata, SOCKET_EVENTS.SUPPORT_INIT);
            }
        ));
    },
    onSupportMessage: (socket: WebSocket, data, cb?: Response) => {
        const connection = Connection.findConnectionByUserId(data.user._id, CONNECTION_TYPES.CHAT);
        const res = customResponse(
            (resdata: ISocketEventMessage) => {
                if (!resdata.error) {
                    if (connection.isConnected()) {
                        connection.sendServerMessage({chat: resdata.chat, support: resdata.support}, SOCKET_EVENTS.SUPPORT_MESSAGE, customResponse(
                            (rtdata: ISocketEventMessage) => {
                                if (cb)
                                    cb.json(rtdata);

                                connection.sendClientMessage(rtdata, SOCKET_EVENTS.MESSAGE_CALLBACK);
                            }
                        ));
                    } else {
                        Output.debug("Connection was not found for user id: " + data.user._id);
                    }
                } else {
                    Output.debug("error!", resdata);
                }
            }
        );

        prepareAndSendSupportMessage(data, res, (err) => {
            connection.sendClientMessage(err, SOCKET_EVENTS.MESSAGE_CALLBACK);
        });
    },
    onChatMessage: (socket: WebSocket, data) => {
        const connection = Connection.findConnectionByUserId(data.user.id, CONNECTION_TYPES.CHAT);
        const req = {
            user: data.user,
            body: data,
            params: { id: data.id },
            openSupport: {
                isOK: true,
                initial: false
            }
        };
        const res = customResponse(
            (responseData) => {
                const conversantConnection = Connection.findConnectionByUserId(responseData.user, CONNECTION_TYPES.CHAT);

                if (conversantConnection) {
                    conversantConnection.sendClientMessage(responseData.message, SOCKET_EVENTS.CHAT_MESSAGE);
                } else {
                    customNext(connection, CONNECTION_MESSAGE_CODES.FRIEND_OFFLINE)(" - but message sent");
                }
            }
        );
        const next = customNext(connection, CONNECTION_MESSAGE_CODES.ERROR);

        sendChatMessage(req, res, next);
    },
    onMessageRead: (socket: WebSocket, data: ISocketEventMessage) => {
        const userId = data.user._id;
        const connection = Connection.findConnectionByUserId(userId, CONNECTION_TYPES.CHAT);

        ChatModel.findById(data.chat._id, (err, chat) => {
            if (err) {
                const errorMessage = {
                    error: {
                        message: "chat not found - id: " + data.chat._id,
                        status: "chatNotFound"
                    }
                };
                connection.sendClientMessage(errorMessage, SOCKET_EVENTS.ERROR);

                return Output.error("Error finding chat:", err, "chat id: " + data.chat._id);
            }

            chat.status = CHAT_STATUS.READ;

            chat.save((err, savedChat: IChat) => {
                if (err) {
                    const errorMessage = {
                        error: {
                            message: "chat couldn't save",
                            status: "chatNotSaved"
                        }
                    };
                    connection.sendClientMessage(errorMessage, SOCKET_EVENTS.ERROR);

                    return Output.error("Error saving chat:", err);
                }

                data.chat = savedChat;

                connection.sendServerMessage(data, SOCKET_EVENTS.MESSAGE_READ, customResponse(
                    (rtdata) => {
                        const connection = Connection.findConnectionByUserId(userId, CONNECTION_TYPES.CHAT);

                        if (connection) {
                            connection.sendClientMessage(rtdata, SOCKET_EVENTS.MESSAGE_READ, customResponse(
                                (res) => {
                                    if (res.error) {
                                        Output.error("Error in sending message read to node client: " + res.message);
                                    }
                                }));
                        } else {
                            const message: ISocketEventMessage = {
                                error: {
                                    message: CONNECTION_MESSAGE_TEXTS[CONNECTION_MESSAGE_CODES.FRIEND_OFFLINE] + " - " + userId,
                                    code: CONNECTION_MESSAGE_CODES.FRIEND_OFFLINE
                                }
                            };

                            Output.error("onMessageRead error", message, userId);

                            connection.sendClientMessage(message, SOCKET_EVENTS.MESSAGE_CALLBACK);
                        }
                    }
                ));
            });
        });
    },
    onMissionInit: (socket: WebSocket, data: ISocketEventMessage) => {
        const connection = Connection.createMissionConnection(socket, data.user);

        global.connections.missions.push(connection);

        connection.sendClientMessage({nodeConnectionId: connection.nodeConnectionId},
            SOCKET_EVENTS.MISSIONS_INIT, customResponse(
            (returnData) => {
                if (returnData.error) {
                    Output.error("client didn't got init message", returnData.message);
                }
            })
        );
    },
    onMissionDelete: (socket: WebSocket, data: ISocketEventMessage) => {
        data.mission.receivers.forEach((receiver) => {
            const connection = Connection.findConnectionByUserId(receiver._id, CONNECTION_TYPES.MISSION);

            if (connection.isConnected()) {
                connection.sendClientMessage(data, SOCKET_EVENTS.MISSION_DELETE);
            }
        });
    },
    onMissionCreation: (socket: WebSocket, data: ISocketEventMessage) => {
        const connection = Connection.findConnectionById(data.nodeConnectionId);

        createMission({body: data.mission}, customResponse((mission: IMission) => {
            each(mission.receivers, (receiver, callback) => {
                const receiverId = receiver._id;
                const receiverConnection = Connection.findConnectionByUserId(receiverId, CONNECTION_TYPES.MISSION);

                if (receiverConnection.isConnected()) {
                    receiverConnection.sendClientMessage({mission}, SOCKET_EVENTS.MISSION_MESSAGE, customResponse(
                        (messageReturnData) => {
                            if (messageReturnData.error) {
                                callback("error in sending mission to receiver id: " + receiverId  + " error: " + messageReturnData.message);
                            } else {
                                callback(false);
                            }
                        }
                    ));
                } else {
                    callback(false);
                }
            }, (err) => {
                const connection = Connection.findConnectionByUserId(mission.creator._id, CONNECTION_TYPES.MISSION);

                if (err) {
                    Output.error(err);
                    customNext(connection, CONNECTION_MESSAGE_CODES.ERROR)(err);

                    connection.sendClientMessage({error: err ? {message: err, } : false}, SOCKET_EVENTS.ERROR);
                } else {
                    connection.sendClientMessage({mission}, SOCKET_EVENTS.MISSION_CREATION);
                }
            });
        }), customNext(connection, CONNECTION_MESSAGE_CODES.ERROR));
    }
};

export let findAvailableRepsWithSocket = (support: ISupport, nodeConnectionId: number) => {
    Connection.sendMessageToAllReps({support, nodeConnectionId}, SOCKET_EVENTS.FIND_AVAILABLE_REP);
};

export let notifyPhpForAvailableRep = (support: ISupport, chat: IChat) => {
    const connection = Connection.findConnectionByUserId(support.representative.id, CONNECTION_TYPES.CHAT);

    if (connection.isConnected()) {
        connection.sendServerMessage({support, chat}, SOCKET_EVENTS.FIND_AVAILABLE_REP);
    } else {
        console.log("notifyPhpForAvailableRep", support.representative.id);
    }
};

export function customResponse(cb: Function, statusCb?: Function, extraData?: any): {json: Function, status: Function} {
    return {
        json: (data) => {
            cb(data, extraData);
        },
        status: (code) => {
            if (statusCb) {
                statusCb(code);
            }

            return this;
        }
    };
}

export function customNext(connection: Connection, errorCode: number) {
    return (err) => {
        const errorMessage = {
            error: {
                message: CONNECTION_MESSAGE_TEXTS[errorCode] + " err: " + err.toString(),
                code: errorCode
            }
        };

        if (connection) {
            connection.sendClientMessage(errorMessage, SOCKET_EVENTS.MESSAGE_CALLBACK);
        } else {
            Output.error("customNext no connection:", errorMessage.error.message);
        }
    };
}