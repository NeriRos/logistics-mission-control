// globals.ts
import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
    server: {
        dns: string,
        ip: string,
        port: string,
        protocol: string
    };

    readonly DEFAULT_USER_PICTURE = "default_user";

    constructor() {
        this.server = { ip: "141.226.21.44", dns: "cargo-express.co.il", port: "8887", protocol: "http" };
        // this.server = { ip: "10.0.2.1", dns: "localhost", port: "8887", protocol: "http" };
    }

    get dns(): string {
        return this.server.dns;
    }
    set dns(value: string) {
        this.server.dns = value;
    }

    get ip(): string {
        return this.server.ip;
    }
    set ip(value: string) {
        this.server.ip = value;
    }

    get port(): string {
        return this.server.port;
    }
    set port(value: string) {
        this.server.port = value;
    }

    get protocol(): string {
        return this.server.protocol;
    }
    set protocol(value: string) {
        this.server.protocol = value;
    }
}
