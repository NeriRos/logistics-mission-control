import { Injectable } from "@angular/core";
import { NetworkingService } from "../services/network.service";
import { IUser } from "../models/user.model";

@Injectable()
export class ManagementService {
    constructor(private network: NetworkingService) {
    }

    getUsers(): Promise<any> {
        return this.network.http("GET", "management/getUsers").toPromise().catch((err) => {
            console.log("error getUsers:", err);

            return new Promise((reject) => {
                reject({error: err});
            });
        });
    }

    getSupports(): Promise<any> {
        return this.network.http("GET", "management/getSupports").toPromise().catch((err) => {
            console.log("error getSupports:", err);

            return new Promise((reject) => {
                reject({error: err});
            });
        });
    }

    updateSupport(support): Promise<any> {
        return this.network.http("POST", "management/updateSupport", {}, support).toPromise().catch((err) => {
            console.log("error updateSupport:", err);

            return new Promise((reject) => {
                reject({error: err});
            });
        });
    }

    deleteSupport(supportID, all: boolean = false) {
        return this.network.http("GET", `management/deleteSupport/${all ? "all" : supportID}`).toPromise().catch((err) => {
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
