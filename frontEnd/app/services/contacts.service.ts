import { Injectable } from "@angular/core";
import { NetworkingService } from "~/services/network.service";
import { Observable } from 'rxjs';

@Injectable()
export class ContactsService {
    constructor(private network: NetworkingService) {
        
    }

    getFriends(): Observable<any> {
        return this.network.http("GET", `/getFriends`);
    }

    addFriend(email: string): Observable<any> {
        return this.network.http("POST", `/addFriend`, {}, {email: email});
    }

    
}