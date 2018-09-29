import { Injectable } from "@angular/core";
import { NetworkingService } from "../services/network.service";

@Injectable()
export class ChatService {
    private prefix: string;

    constructor(private network: NetworkingService) {
        this.prefix = "support";
    }

    getUsers(): Promise<any> {
        return this.network.http("GET", `${this.prefix}/getUsers`).toPromise().catch((err) => {
            console.log("error getUsers:", err);

            return new Promise((reject) => {
                reject({error: err});
            });
        });
    }

    getSupports(): Promise<any> {
        return this.network.http("GET", `${this.prefix}/getSupports`).toPromise().catch((err) => {
            console.log("error getSupports:", err);

            return new Promise((reject) => {
                reject({error: err});
            });
        });
    }

    getChats(supportID): Promise<any> {
        return this.network.http("GET", `${this.prefix}/getChats/${supportID}`).toPromise().catch((err) => {
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
