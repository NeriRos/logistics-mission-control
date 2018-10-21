import { Injectable } from "@angular/core";
import { IChat } from "~/models/chat.model";
import { NetworkingService } from "~/services/network.service";

@Injectable()
export class ChatService {
    constructor(private network: NetworkingService) {

    }

    getChats(conversantID) {
        return this.network.http("GET", `/chat/getChats?id=${conversantID}`).toPromise();
    }

    sendMessage(message: IChat) {
        return this.network.http("POST", "/chat/sendMessage", {}, message).toPromise();
    }
}
