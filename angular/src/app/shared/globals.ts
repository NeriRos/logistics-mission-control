import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
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
        // this.server = { ip: "141.226.21.44", dns: "cargo-express.co.il", port: "8887", protocol: "http" };
        this.server = { ip: "127.0.0.1", dns: "localhost", port: "8888", protocol: "http" };
        this.server.uri = this.server.protocol + "://" + this.server.ip + ":" + this.server.port;
        this.socketServer = { ip: "127.0.0.1", dns: "localhost", port: "8889", protocol: "ws" };
        this.socketServer.uri = this.socketServer.protocol + "://" + this.socketServer.ip + ":" + this.socketServer.port;
    }
}
