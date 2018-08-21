import { Injectable } from "@angular/core";
import { IChat } from "~/models/chat.model";
import { NetworkingService } from "~/services/network.service";

@Injectable()
export class SupportService {
    constructor(private network: NetworkingService) {
    }

    getSupports() {
        return this.network.http("GET", "/support/getSupports").toPromise();
    }

    takeSupport(id: string) {
        return this.network.http("GET", "/support/takeSupport/" + id).toPromise();
    }

    sendMessage(message: IChat) {
        return this.network.http("POST", "/support/sendMessage", {}, message).toPromise();
    }

    getChats(id: string) {
        return this.network.http("GET", "/support/getChats/" + id).toPromise();
    }
}
