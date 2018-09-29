import { IUser, UserDocument } from "../types/User";
import * as http from "http";
import { Response } from "express";

declare let global: {connections: {chat: Array<Connection>, missions: Array<Connection>}};

export class Connection {
    socket: WebSocket;
    user: UserDocument;
    id: number;

    constructor(socket: any, user: UserDocument, id: number) {
        this.socket = socket;
        this.user = user;
        this.id = id;
    }

    public sendClientMessage(message: any, cb: any = {representative: {}, json: (data) => {}}) {
        if (message.init) {
            console.log("Sending init message for connection:", message.connectionID, "to client");
        }

        if (!this.socket) {
            cb.json({error: true, status: "error", message: "NO SOCKET"});
        } else if (this.socket.readyState === 3) {
            cb.json({error: true, status: "error", message: "CONNECTION CLOSED"});
        } else if (this.socket && this.socket.readyState === 1) {
            this.socket.send(JSON.stringify(message)); // send message to representative
            const response: any = {error: false, status: "ok", message: "message sent successfully!"};

            if (message.init) {
                response.representative = cb.representative;
            }

            cb.json(response); // send ok to php server
        }
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
        for (const connection of global.connections.chat.reverse()) {
            if (connection.user && connection.user._id == userID && connection.id > result.id) {
                result = connection;
            }
        }

        return result.id == -1 ? undefined : result;
    }

    static sendClientMessageByUserId(cb: Response, userID: string, message: any) {
        const connection = Connection.findConnectionByUserId(userID);

        if (connection) {
            console.log("FOUND CONNECTION id " + connection.id + " WITH READYSTATE:", connection.socket.readyState);
            connection.sendClientMessage(message, cb);
        } else {
            console.log("NO CONNECTION FOUND FOR ID:", userID);
            cb.json({error: true, status: "error", message: "NO CONNECTION FOUND FOR USER ID: " + userID});
        }
    }

    static sendServerMessage(cb: Response | {json: any}, message: any) {
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
            let data = "";

            res.on("data", (chunk) => {
                data += chunk;
            }).on("end", () => {
                if (res.statusCode === 200) {
                    cb.json({error: false, status: "ok", message: JSON.parse(data)});
                }
                if (res.statusCode === 500) {
                    cb.json({error: true, status: "error", message: data});
                }
            });
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