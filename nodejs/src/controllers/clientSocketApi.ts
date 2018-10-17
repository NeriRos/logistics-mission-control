import { Server } from "ws";
import { Response } from "express";

import { Output } from "../models/output";
import { Connection, CONNECTION_MESSAGE_TEXTS, CONNECTION_MESSAGE_CODES, SOCKET_EVENTS } from "../models/Connection";

import { ISocketEventMessage } from "../types/interfaces";
import { ISupport } from "../types/Support";

import { sendMessage as sendChatMessage } from "./chat";
import { prepareAndSendSupportMessage } from "./dynamiChatApi";
import { ChatModel } from "../models/Chat";
import { CHAT_STATUS, IChat } from "../types/Chat";

declare let global: {connections: {chat: Array<Connection>, missions: Array<Connection>}};

/**
 * Websocket handler, incoming messages and open connection and more.
 * @param io websocket server object
 */
export let websocketChatServerHandler = (io: Server) => {
    io.on("connection", (socket) => {
        socket.on("disconnect", () => {
            global.connections.chat =  [];
        });

        socket.on("error", () => {
            global.connections.chat = [];
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
                case Connection.SOCKET_EVENTS.SUPPORT_INIT:
                    clientSocketEventHandlers.onSupportInit(socket, data);
                    break;
                case Connection.SOCKET_EVENTS.CHAT_INIT:
                    clientSocketEventHandlers.onChatInit(socket, data);
                    break;
                case Connection.SOCKET_EVENTS.SUPPORT_MESSAGE:
                    clientSocketEventHandlers.onSupportMessage(socket, data);
                    break;
                case Connection.SOCKET_EVENTS.CHAT_MESSAGE:
                    clientSocketEventHandlers.onChatMessage(socket, data);
                    break;
                case Connection.SOCKET_EVENTS.MESSAGE_READ:
                    clientSocketEventHandlers.onMessageRead(socket, data);
                    break;
            }
        });
    };
};

export let clientSocketEventHandlers = {
    onChatInit: (socket: WebSocket, data: ISocketEventMessage) => {
        const connection = new Connection(socket, data.user, global.connections.chat.length);

        global.connections.chat.push(connection);

        data.nodeConnectionId = connection.id;

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
        const connection = new Connection(socket, data.user, global.connections.chat.length);

        global.connections.chat.push(connection);

        Connection.sendServerMessage({support: data.support, nodeConnectionId: connection.id}, Connection.SOCKET_EVENTS.SUPPORT_INIT, customResponse(
            (rtdata) => {
                if (rtdata.error)
                    Output.error("Got error on SupportInit from php backend:", rtdata);

                rtdata.nodeConnectionId = connection.id;

                const responseData = {
                    nodeConnectionId: rtdata.nodeConnectionId,
                    phpConnectionId: rtdata.phpConnectionId,
                    representative: rtdata.representative
                };

                console.log("Sending init message with connection ids php:", responseData.phpConnectionId, "and node: ", responseData.nodeConnectionId, " to client");

                connection.sendClientMessage(rtdata, Connection.SOCKET_EVENTS.SUPPORT_INIT, responseData);
            }
        ));
    },
    onSupportMessage: (socket: WebSocket, data, cb?: Response) => {
        const res = customResponse((resdata: ISocketEventMessage) => {
            if (!resdata.error) {
                Connection.sendServerMessage({chat: resdata.chat, support: resdata.support}, Connection.SOCKET_EVENTS.SUPPORT_MESSAGE, customResponse(
                    (rtdata: ISocketEventMessage) => {
                        if (cb)
                            cb.json(rtdata);

                        Connection.sendMessageToSocket(socket, rtdata, Connection.SOCKET_EVENTS.MESSAGE_CALLBACK);
                    }
                ));
            } else {
                Output.debug("error!", resdata);
            }
        });

        prepareAndSendSupportMessage(data, res, (err) => {
            Connection.sendMessageToSocket(socket, err, Connection.SOCKET_EVENTS.MESSAGE_CALLBACK);
        });
    },
    onChatMessage: (socket: WebSocket, data) => {
        const req = {
            user: data.user,
            body: data,
            params: { id: data.id },
            openSupport: {
                isOK: true,
                initial: false
            }
        }, res = customResponse((data) => {
            const friendConnection = Connection.findConnectionByUserId(data.user);
            if (friendConnection) {
                friendConnection.sendClientMessage(data.message, Connection.SOCKET_EVENTS.CHAT_MESSAGE);
            } else {
                Connection.sendMessageToSocket(socket, {error: {data, message: CONNECTION_MESSAGE_TEXTS[CONNECTION_MESSAGE_CODES.FRIEND_OFFLINE] + " - but message sent", code: CONNECTION_MESSAGE_CODES.FRIEND_OFFLINE}}, Connection.SOCKET_EVENTS.MESSAGE_CALLBACK);
            }
        }), next = (err) => {
            Connection.sendMessageToSocket(socket, {error: {message: CONNECTION_MESSAGE_TEXTS[CONNECTION_MESSAGE_CODES.ERROR] + " err: " + err.toString(), code: CONNECTION_MESSAGE_CODES.ERROR}}, Connection.SOCKET_EVENTS.MESSAGE_CALLBACK);
        };

        sendChatMessage(req, res, next);
    },
    onMessageRead: (socket: WebSocket, data: ISocketEventMessage) => {
        const userId = data.user._id;

        // TODO: update db for new status, add new status to data.
        // TODO: if support send message to server.

        ChatModel.findById(data.chat._id, (err, chat) => {
            if (err) {
                // TODO: error handling
                return Output.error("Error finding chat:", err, "chat id: " + data.chat._id);
            }

            chat.status = CHAT_STATUS.READ;

            chat.save((err, savedChat: IChat) => {
                if (err) {
                    // TODO: error handling
                    return Output.error("Error saving chat:", err);
                }

                data.chat = savedChat;

                Connection.sendServerMessage(data, SOCKET_EVENTS.MESSAGE_READ, customResponse(
                    (rtdata) => {
                        const connection = Connection.findConnectionByUserId(userId);

                        if (connection) {
                            connection.sendClientMessage(rtdata, SOCKET_EVENTS.MESSAGE_READ, {chat: rtdata.chat}, customResponse(
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

                            Connection.sendMessageToSocket(socket, message, Connection.SOCKET_EVENTS.MESSAGE_CALLBACK);
                        }
                    }
                ));
            });
        });
    },
    onMissionInit: (socket: WebSocket, data: ISocketEventMessage) => {
    }
};

export let findAvailableRepsWithSocket = (support: ISupport) => {
    Connection.sendMessageToAllReps({support}, SOCKET_EVENTS.FIND_AVAILABLE_REP);
};

export let notifyPhpForAvailableRep = (support: ISupport) => {
    Connection.sendServerMessage({support}, SOCKET_EVENTS.FIND_AVAILABLE_REP);
};

export function customResponse(cb: Function, statusCb?: Function): {json: Function, status: Function} {
    return {
        json: (data) => {
            cb(data);
        },
        status: (code) => {
            if (statusCb) {
                statusCb(code);
            }

            return this;
        }
    };
}