import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
    static SOCKET_EVENTS = {
        MISSIONS_INIT: "missionInit",
        MISSION_CREATION: "missionCreation",
        MISSION_MESSAGE: "missionMessage",
        MISSION_DELETE: "missionDelete",

        CHAT_INIT: "chatInit",
        CHAT_MESSAGE: "chatMessage",

        CLIENT_MESSAGE: "clientMessage",

        SUPPORT_INIT: "supportInit",
        SUPPORT_MESSAGE: "supportMessage",

        MESSAGE_CALLBACK: "messageCallback",
        ERROR: "error",

        MESSAGE_READ: "messageRead",
        GET_CONNECTION_ID: "getConnectionID",
        FIND_AVAILABLE_REP: "findAvailableRep"
    };

    server: {
        dns: string,
        ip: string,
        port: string,
        protocol: string,
        uri?: string
    };
    socketServer: {
        dns: string,
        ip: string,
        port: string,
        protocol: string,
        uri?: string
    };

    readonly DEFAULT_USER_PICTURE = "default_user";

    constructor() {
        this.debugInit();
    }

    productionInit() {
        this.server = { ip: "141.226.21.44", dns: "cargo-express.co.il", port: "8887", protocol: "http" };
        this.server.uri = this.server.protocol + "://" + this.server.ip + ":" + this.server.port;

        this.socketServer = {
                ip: "141.226.21.44",
                dns: "cargo-express.co.il",
                port: "8890",
                protocol: "ws",
                uri: ""
        };

        // tslint:disable-next-line:max-line-length
        this.socketServer.uri = this.socketServer.protocol + "://" + this.socketServer.ip + ":" + this.socketServer.port;
    }

    debugInit() {
        // this.server = { ip: "141.226.21.44", dns: "cargo-express.co.il", port: "8887", protocol: "http" };
        this.server = { ip: "127.0.0.1", dns: "localhost", port: "8888", protocol: "http" };
        this.server.uri = this.server.protocol + "://" + this.server.ip + ":" + this.server.port;

        this.socketServer = {
            ip: "127.0.0.1",
            dns: "localhost",
            port: "8890",
            protocol: "ws",
            uri: ""
        };

        // tslint:disable-next-line:max-line-length
        this.socketServer.uri = this.socketServer.protocol + "://" + this.socketServer.ip + ":" + this.socketServer.port;
    }
}
