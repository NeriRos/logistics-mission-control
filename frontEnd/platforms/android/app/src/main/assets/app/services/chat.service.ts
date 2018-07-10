import { Injectable } from "@angular/core";
import { Chat } from "~/models/chat.model";
import { NetworkingService } from "./network.service";


@Injectable()
export class ChatService {
    constructor(private network: NetworkingService) {

    }

    getChats() {
        // return this.network.fetch("/chat/getChats", {
        //     method: "GET",
        //     headers: { "Accept": "application/json" },
        //     credentials: "include" 
        // }).then((r) => r.json());

        return this.network.http("GET", "/chat/getChats");
    }

    sendMessage(message: string, to: string, userID: string) {
        const newMessage: Chat = {
            message: message,
            from: userID,
            date: new Date(),
            to: to
        };

        return this.network.http("POST", "/chat/sendMessage", {}, newMessage).toPromise();
    }
}