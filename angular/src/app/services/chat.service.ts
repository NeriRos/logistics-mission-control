import { Injectable } from "@angular/core";
import { NetworkingService } from "../services/network.service";

@Injectable()
export class ChatService {
    protected prefix: string;

    constructor(protected network: NetworkingService) {
        this.prefix = "chat";
    }

    getChats(id: string): Promise<any> {
        return this.network.http("GET", `${this.prefix}/getChats/${id}`).toPromise();
    }

    getConversantById(conversantID): Promise<any> {
        return this.network.http("GET", `${this.prefix}/getConversant/${conversantID}`).toPromise();
    }

    handleErrors(error: Error) {
        console.error(error.message);

        return error.message;
    }
}
