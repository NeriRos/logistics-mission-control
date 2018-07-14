// globals.ts
import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    server: {
        DNS: "cargo-express.co.il"
    };
    readonly DEFAULT_USER_PICTURE = "default_user";
}