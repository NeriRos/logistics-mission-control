import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { NetworkingService } from "~/services/network.service";

@Injectable()
export class ContactsService {
    constructor(private network: NetworkingService) {

    }

    getFriends(): Observable<any> {
        return this.network.http("GET", `/getFriends`);
    }

    addFriend(email: string): Observable<any> {
        return this.network.http("POST", `/addFriend`, {}, {email});
    }

}
