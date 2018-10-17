import { IUser } from "../types/User";
import * as http from "http";
import { Response } from "express";
import { ISocketEventMessage } from "~/types/interfaces";
import { Socket } from "net";
import { Output } from "./output";

declare let global: {connections: {chat: Array<Connection>, missions: Array<Connection>}};

export class Connection {
    static SOCKET_EVENTS = {
        MISSIONS_INIT: "innerChatInit",

        CHAT_INIT: "chatInit",
        CHAT_MESSAGE: "chatMessage",

        CLIENT_MESSAGE: "clientMessage",

        SUPPORT_INIT: "supportInit",
        SUPPORT_MESSAGE: "supportMessage",

        MESSAGE_CALLBACK: "messageCallback",
        ERROR: "error",

        INNER_MESSAGE: "innerMessage",
        INNER_CHAT_INIT: "innerChatInit",
        MESSAGE_READ: "messageRead",
        GET_CONNECTION_ID: "getConnectionID"
    };

    socket: WebSocket;
    user: IUser;
    id: number;

    constructor(socket: any, user: IUser, id: number) {
        this.socket = socket;
        this.user = user;
        this.id = id;
    }

    public sendClientMessage(message: ISocketEventMessage, event: string, responseData?: Object, cb?: any) {
        let response: any = {error: false, status: "ok", message: "message sent successfully!", event};

        Object.keys(message).forEach((key) => {
            response[key] = message[key];
        });

        if (!this.socket) {
            response = {error: true, status: "error", message: "NO SOCKET"};
        } else if (this.socket.readyState === 3) {
            response = {error: true, status: "error", message: "CONNECTION TO CLOSED"};
        } else if (this.socket.readyState === 1) {
            Connection.sendMessageToSocket(this.socket, message, event); // send message to representative
        }

        if (cb && typeof cb !== "undefined")
            cb.json(response);
    }

    static findConnectionById(id: number): Connection {
        for (const connection of global.connections.chat) {
            if (connection.id == id) {
                return connection;
            }
        }

        return undefined;
    }

    static findConnectionByUserId(userID: string): Connection {
        let result: any = {id: -1};

        global.connections.chat.reverse().forEach(connection => {
            if (typeof connection.user !== "undefined" && connection.user._id == userID && connection.id > result.id) {
                result = connection;
            }
        });

        return result.id == -1 ? undefined : result;
    }

    static getIdByUserId(userId: string) {
        const connection = Connection.findConnectionByUserId(userId);
        return connection ? connection.id : -1;
    }

    static sendClientMessageByUserId(message: ISocketEventMessage, event: string, userID: string, cb: Response) {
        const connection = Connection.findConnectionByUserId(userID);

        if (connection) {
            connection.sendClientMessage(message, event, undefined, cb);
        } else {
            cb.json(global.connections.chat.length > 0 ?
                {error: true, status: "noConnection", message: "NO CONNECTION FOUND FOR USER ID: " + userID} :
                {error: true, status: "noConnections", message: "there are no connections on node"});
        }
    }

    static sendServerMessage(message: ISocketEventMessage, event: string, cb: Response | {json: any} = {json: () => {}}) {
        const options = {
            hostname: "localhost",
            port: 9001,
            path: "/",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        };

        const req = http.request(options, (res) => {
            let chunks = "";

            res.on("data", (chunk) => {
                chunks += chunk;
            }).on("end", () => {
                if (!chunks.startsWith("Error 500")) {
                    const data = JSON.parse(chunks);

                    if (res.statusCode === 200) {
                        cb.json({error: false, status: "ok", phpConnectionId: data.phpConnectionId, nodeConnectionId: data.nodeConnectionId, chat: message.chat, support: message.support});
                    } else if (res.statusCode === 500) {
                        cb.json({error: true, status: data.status, message: "[!] PHP MESSAGE - " + data.message});
                    }
                } else {
                    cb.json({error: true, status: "error500", message: chunks});
                }
            }).on("error", (e) => {
                Output.error("Request failed:", e);
                cb.json({error: true, status: "error", message: "message was not sent to php server" + JSON.stringify(e)});
            });
        });
        // console.log("Sending message to php:", message);
        // write data to request body
        message.event = event;

        req.write(JSON.stringify(message));
        req.end();
    }

    static sendMessageToAllReps(message: ISocketEventMessage, event: string, cb: Response | {json: any} = {json: () => {}}) {
        for (const connection of global.connections.chat) {
            connection.sendClientMessage(message, event, undefined, cb);
        }
    }

    static sendMessageToSocket(socket: WebSocket, message: ISocketEventMessage, event: string) {
        if (socket.readyState === 1) {
            message.event = event;
            socket.send(JSON.stringify(message));
        } else {
            console.log("Socket closed, didn't send message:", message.event);
        }
    }
}

export let CONNECTION_MESSAGE_CODES = {
    ERROR: 0,
    FRIEND_OFFLINE: 1
};
export let CONNECTION_MESSAGE_TEXTS = {
    [CONNECTION_MESSAGE_CODES.ERROR]: "Unknown error",
    [CONNECTION_MESSAGE_CODES.FRIEND_OFFLINE]: "Friend is not online"
};
export let SOCKET_EVENTS = {
    MISSIONS_INIT: "innerChatInit",

    CHAT_INIT: "chatInit",
    CHAT_MESSAGE: "chatMessage",

    SUPPORT_INIT: "supportInit",
    SUPPORT_MESSAGE: "supportMessage",
    CLIENT_MESSAGE: "clientMessage",

    MESSAGE_CALLBACK: "messageCallback",
    ERROR: "error",

    MESSAGE_READ: "messageRead",
    GET_CONNECTION_ID: "getConnectionID",

    FIND_AVAILABLE_REP: "findAvailableRep"
};
