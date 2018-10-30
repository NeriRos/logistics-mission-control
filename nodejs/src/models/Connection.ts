import { IUser } from "../types/User";
import * as http from "http";
import { Response } from "express";
import { ISocketEventMessage } from "~/types/interfaces";
import { Socket, connect } from "net";
import { Output } from "./output";

declare let global: {connections: {chats: Array<Connection>, missions: Array<Connection>}};

export class Connection {
    private _socket: WebSocket;
    private _user: IUser;
    private  _isEmpty: boolean;
    private _nodeConnectionId: number;
    private _phpConnectionId: number;
    private _type: string;

    constructor(socket: any, user: IUser, _nodeConnectionId: number, isEmpty?: boolean) {
        this._socket = socket;
        this._user = user;
        this._nodeConnectionId = _nodeConnectionId;
        this._isEmpty = isEmpty;

        if (this._socket) {
            this._socket.onclose = this.closeConnection.bind(this);
            this._socket.onerror = this.socketErrorHandler.bind(this);
        }
    }

    static createChatConnection(socket: any, user: IUser, isEmpty?: boolean) {
        const connection = new Connection(socket, user, global.connections.chats.length, isEmpty);

        connection._type = CONNECTION_TYPES.CHAT;

        return connection;
    }

    static createMissionConnection(socket: any, user: IUser, isEmpty?: boolean) {
        const connection = new Connection(socket, user, global.connections.missions.length, isEmpty);

        connection._type = CONNECTION_TYPES.MISSION;

        return connection;
    }

    static findConnectionById(id: number): Connection {
        for (const connection of global.connections.chats) {
            if (connection._nodeConnectionId == id) {
                return connection;
            }
        }

        return undefined;
    }

    static findConnectionByUserId(userId: string, type: string): Connection {
        let result: Connection = new Connection(undefined, undefined, -1, true);

        global.connections[type].reverse().forEach(connection => {
            if (typeof connection._user !== "undefined" && connection._user._id == userId && connection._nodeConnectionId > result._nodeConnectionId) {
                result = connection;
            }
        });

        return result;
    }

    static sendClientMessageByUserId(message: ISocketEventMessage, event: string, userID: string, type: string, cb: Response) {
        const connection = Connection.findConnectionByUserId(userID, type);

        if (connection._nodeConnectionId != -1) {
            connection.sendClientMessage(message, event, cb);
        } else {
            const errorMessage = global.connections.chats.length > 0 ?
                {error: true, status: "noConnection", message: "NO CONNECTION FOUND FOR USER ID: " + userID} :
                {error: true, status: "noConnections", message: "there are no connections on node"};

            Output.error(errorMessage.message);
            cb.json(errorMessage);
        }
    }

    static sendMessageToAllReps(message: ISocketEventMessage, event: string, cb: Response | {json: any} = {json: () => {}}) {
        for (const connection of global.connections.chats) {
            connection.sendClientMessage(message, event, cb);
        }
    }

    public sendClientMessage(message: ISocketEventMessage, event: string, cb?: any) {
        let response: any = {error: false, status: "ok", message: "message sent successfully!", event};

        Object.keys(message).forEach((key) => {
            response[key] = message[key];
        });

        if (!this._socket) {
            response = {error: true, status: "error", message: "NO SOCKET"};
        } else if (this._socket.readyState === 3) {
            response = {error: true, status: "error", message: "CONNECTION TO CLOSED"};
        } else if (this._socket.readyState === 1) {
            this.sendMessageToSocket(message, event); // send message to representative
        }

        if (cb && typeof cb !== "undefined") {
            Output.extraDebug("Return for event: " + event + " to php:", response);
            cb.json(response);
        }
    }

    public sendServerMessage(message: ISocketEventMessage, event: string, cb: Response | {json: any} = {json: () => {}}) {
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
        }).on("error", (e) => {
            Output.error("Request failed:", e);
            cb.json({error: true, status: "error", message: "message was not sent to php server" + JSON.stringify(e)});
        });
        // console.log("Sending message to php:", message);
        // write data to request body
        message.event = event;
        message.nodeConnectionId = this._nodeConnectionId;
        message.phpConnectionId = this._phpConnectionId;

        req.write(JSON.stringify(message));
        req.end();
    }

    public closeConnection() {
        console.log("ON CON CLLOSE");
        this._nodeConnectionId = -1;
    }

    public socketErrorHandler(e) {
        Output.error("error in socket nodeId: " + this._nodeConnectionId, e);
    }

    private sendMessageToSocket(message: ISocketEventMessage, event: string) {
        message.event = event;
        message.nodeConnectionId = this._nodeConnectionId;
        message.phpConnectionId = this._phpConnectionId;

        if (this._socket.readyState === 1 && this.isConnected()) {
            this._socket.send(JSON.stringify(message));
        } else {
            console.log("Socket closed, didn't send message:", message.event);
        }
    }

    public isConnected(): boolean {
        return this._nodeConnectionId != -1;
    }

    get nodeConnectionId(): number {
        return this._isEmpty ? -1 : this._nodeConnectionId;
    }
    set nodeConnectionId(nodeConnectionId: number) {
        this._nodeConnectionId = nodeConnectionId;
    }

    get phpConnectionId(): number {
        return this._isEmpty ? -1 : this._phpConnectionId;
    }
    set phpConnectionId(phpConnectionId: number) {
        this._phpConnectionId = phpConnectionId;
    }

    get isEmpty(): boolean {
        return this._isEmpty;
    }
    set isEmpty(isEmpty: boolean) {
        this._isEmpty = isEmpty;
    }

    get user(): IUser {
        return this._user;
    }
    set user(user: IUser) {
        this._user = user;
    }

    get socket(): WebSocket {
        return this._socket;
    }
    set socket(socket: WebSocket) {
        this._socket = socket;
    }
}

export let CONNECTION_MESSAGE_CODES = {
    ERROR: 0,
    FRIEND_OFFLINE: 1
};
export let CONNECTION_MESSAGE_TEXTS = {
    [CONNECTION_MESSAGE_CODES.ERROR]: "Unknown error",
    [CONNECTION_MESSAGE_CODES.FRIEND_OFFLINE]: "Conversant is not online"
};
export let SOCKET_EVENTS = {
    MISSIONS_INIT: "missionInit",
    MISSION_CREATION: "missionCreation",
    MISSION_MESSAGE: "missionMessage",
    MISSION_DELETE: "missionDelete",

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
export let CONNECTION_TYPES = {
    CHAT: "chats",
    MISSION: "missions",
};
