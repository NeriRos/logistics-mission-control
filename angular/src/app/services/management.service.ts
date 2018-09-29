import { Injectable } from "@angular/core";
import { NetworkingService } from "../services/network.service";

@Injectable()
export class ManagementService {
    private prefix;

    constructor(private network: NetworkingService) {
        this.prefix = "management";
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

    updateSupport(support): Promise<any> {
        return this.network.http("POST", `${this.prefix}/updateSupport`, {}, support).toPromise().catch((err) => {
            console.log("error updateSupport:", err);

            return new Promise((reject) => {
                reject({error: err});
            });
        });
    }

    deleteSupport(supportID, all: boolean = false) {
        return this.network.http("GET", `${this.prefix}/deleteSupport/${all ? "all" : supportID}`).toPromise().catch((err) => {
            console.log("error deleteSupport:", err);

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
