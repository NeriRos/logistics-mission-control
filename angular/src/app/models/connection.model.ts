import { IUser } from "./user.model";
import { Globals } from "../shared/globals";
import { SocketEventMessage } from "../shared/socketEventMesssage";

declare let global: {connections: {chat: Array<Connection>, missions: Array<Connection>}};

export class Connection {
    socket: WebSocket;
    user: IUser;
    _nodeConnectionId: number;
    _phpConnectionId: number;

    constructor(socket: any, user: IUser, nodeConnectionId: number) {
        this.socket = socket;
        this.user = user;
        this._nodeConnectionId = nodeConnectionId;
    }

    static newConnection(socket, user) {
        return new Connection(socket, user, -1);
    }

    public sendServerMessage(message: SocketEventMessage, event: string) {
        let response;

        if (event === Globals.SOCKET_EVENTS.SUPPORT_INIT) {
            console.log("Sending init message to server");
        }

        message.event = event;

        if (!this.socket) {
            response = {error: true, status: "error", message: "NO SOCKET"};
        } else if (this.socket.readyState === 3) {
            response = {error: true, status: "error", message: "CONNECTION CLOSED"};
        } else if (this.socket && this.socket.readyState === 1) {
            response = {error: false, status: "ok", message: "message sent successfully!"};

            this.socket.send(JSON.stringify(message)); // send message
        }

        return response;
    }

    get nodeConnectionId(): number | undefined {
        if (this._nodeConnectionId >= 0) {
            return this._nodeConnectionId;
        }

        return undefined;
    }

    set nodeConnectionId(nodeConnectionId: number) {
        if (this._nodeConnectionId < 0) {
            this._nodeConnectionId = nodeConnectionId;
        }
    }

    get phpConnectionId(): number | undefined {
        if (this._phpConnectionId >= 0) {
            return this._phpConnectionId;
        }

        return undefined;
    }

    set phpConnectionId(phpConnectionId: number) {
        if (this._phpConnectionId < 0) {
            this._phpConnectionId = phpConnectionId;
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
