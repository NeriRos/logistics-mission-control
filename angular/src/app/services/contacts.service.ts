import { Injectable, OnInit } from "@angular/core";
import { NetworkingService } from "./network.service";

@Injectable()
export class ContactsService {
    protected prefix: string;

    constructor(private network: NetworkingService) {
        this.prefix = "contacts";
    }

    getFriends() {
        return this.network.http("GET", `${this.prefix}/getFriends`).toPromise();
    }
}
