import { Injectable } from "@angular/core";
import { IChat } from "../models/chat.model";
import { NetworkingService } from "./network.service";
import { ChatService } from "./chat.service";

@Injectable()
export class SupportService extends ChatService {

    constructor(protected network: NetworkingService) {
        super(network);
        this.prefix = "support";
    }
    protected prefix: string;

    getSupports() {
        return this.network.http("GET", `${this.prefix}/getSupports`).toPromise();
    }

    getSupportById(supportId: string): Promise<any> {
        return this.network.http("GET", `${this.prefix}/getSupportById/${supportId}`).toPromise();
    }

    takeSupport(id: string) {
        return this.network.http("GET", `${this.prefix}/takeSupport/${id}`).toPromise();
    }

    sendMessage(message: IChat) {
        return this.network.http("POST", `${this.prefix}/sendMessage`, {}, message).toPromise();
    }
}
