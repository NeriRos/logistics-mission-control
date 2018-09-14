import { Injectable } from "@angular/core";
import { NetworkingService } from "../services/network.service";
import { IUser } from "../models/user.model";

@Injectable()
export class ChatService {
    constructor(private network: NetworkingService) {
    }

    getUsers(): Promise<any> {
        return this.network.http("GET", "support/getUsers").toPromise().catch((err) => {
            console.log("error getUsers:", err);

            return new Promise((reject) => {
                reject({error: err});
            });
        });
    }

    getSupports(): Promise<any> {
        return this.network.http("GET", "support/getSupports").toPromise().catch((err) => {
            console.log("error getSupports:", err);

            return new Promise((reject) => {
                reject({error: err});
            });
        });
    }

    getChats(supportID): Promise<any> {
        return this.network.http("GET", `support/getChats/${supportID}`).toPromise().catch((err) => {
            console.log("error getSupports:", err);

            return new Promise((reject) => {
                reject({error: err});
            });
        });
    }

    handleErrors(error: Error) {
        console.error(error.message);

        return error.message;
    }
}
