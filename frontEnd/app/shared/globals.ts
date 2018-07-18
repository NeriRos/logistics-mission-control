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
        this.server = { ip: "10.0.2.1", dns: "cargo-express.co.il", port: "80", protocol: "http" };
    }
}
