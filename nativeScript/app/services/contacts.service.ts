import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NetworkingService } from "~/services/network.service";

@Injectable()
export class ContactsService {
    constructor(private network: NetworkingService) {

    }

    getConversants(): Observable<any> {
        return this.network.http("GET", `/getConversants`);
    }

    addConversant(email: string): Observable<any> {
        return this.network.http("POST", `/addConversant`, {}, {email});
    }

}
