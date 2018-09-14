import { IUser, UserDocument } from "../types/User";
import * as http from "http";
import { Response } from "express";

declare let global: {connections: Array<Connection>};

export class Connection {
    socket: WebSocket;
    user: UserDocument;
    id: number;

    constructor(socket: any, user: UserDocument, id: number) {
        this.socket = socket;
        this.user = user;
        this.id = id;
    }

    public sendClientMessage(cb: Response, message: any) {
        if (message.init) {
            console.log("Sending init message for connection:", message.connectionID, "to client");
        }

        if (!this.socket) {
            cb.json({error: true, status: "error", message: "NO SOCKET"});
        } else if (this.socket.readyState === 3) {
            cb.json({error: true, status: "error", message: "CONNECTION CLOSED"});
        } else if (this.socket && this.socket.readyState === 1) {
            this.socket.send(JSON.stringify(message));
            cb.json({error: false, status: "ok", message: "message sent successfully!"});
        }
    }

    static findConnectionById(id: number): Connection {
        for (const connection of global.connections) {
            if (connection.id == id) {
                return connection;
            }
        }

        return undefined;
    }

    static findConnectionByUserId(userID: string): Connection {
        for (const connection of global.connections.reverse()) {
            if (connection.user && connection.user._id == userID) {
                return connection;
            }
        }

        return undefined;
    }

    static sendClientMessageById(cb: Response, userID: string, message: any) {
        const connection = Connection.findConnectionByUserId(userID);

        if (connection) {
            connection.sendClientMessage(cb, message);
        } else {
            console.log("NO CONNECTION FOUND FOR ID:", userID);
            cb.json({error: true, status: "error", message: "NO CONNECTION FOUND FOR ID: " + userID});
        }
    }

    static sendServerMessage(cb: Response, message: any) {
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
            if (res.statusCode === 200) {
                cb.json({error: false, status: "ok", message: "Message received by php server"});
            }
        });
        req.on("error", function(e) {
            cb.json({error: true, status: "error", message: "message was not sent to php server"});
        });
        // console.log("Sending message to php:", message);
        // write data to request body
        req.write(JSON.stringify(message));
        req.end();
    }
}