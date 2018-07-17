import { Injectable } from "@angular/core";
import { Chat } from "~/models/chat.model";
import { NetworkingService } from "~/services/network.service";


@Injectable()
export class ChatService {
    constructor(private network: NetworkingService) {

    }

    getChats(friendID) {
        return this.network.http("GET", `/chat/getChats?id=${friendID}`);
    }

    sendMessage(message: Chat) {
        return this.network.http("POST", "/chat/sendMessage", {}, message).toPromise();
    }
}