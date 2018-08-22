import { Injectable } from "@angular/core";
import { IChat } from "~/models/chat.model";
import { NetworkingService } from "~/services/network.service";

@Injectable()
export class ChatService {
    constructor(private network: NetworkingService) {

    }

    getChats(friendID) {
        return this.network.http("GET", `/chat/getChats?id=${friendID}`).toPromise();
    }

    sendMessage(message: IChat) {
        return this.network.http("POST", "/chat/sendMessage", {}, message).toPromise();
    }
}
