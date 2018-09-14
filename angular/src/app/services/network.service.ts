import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Globals } from "../shared/globals";

@Injectable()
export class NetworkingService {
    private _networkStatus = "";
    private _isOnline = false;

    constructor(private httpProvider: HttpClient, private globals: Globals) {
    }

    fetch(url: string, options: RequestInit = {}, body?: any) {
        const isLocal = url.startsWith("/");
        // tslint:disable-next-line:max-line-length
        const requestURL = isLocal ? `${this.globals.server.uri}${url}` : url;

        if (body && !options.body && options.method === "POST") {
            options.headers = {
                "Content-Type": "application/json"
            };
        }
        options.body = (typeof body).toLowerCase() !== "string" ? JSON.stringify(body) : body;

        return fetch(requestURL, options);
    }

    http(method: string, url: string, options: any = {}, data?: any): Observable<any> {
        const headers = new HttpHeaders({
            Accepts: "application/json",
            "Content-Type": options.contentType || "application/json"
        });

        if (!options.responseType) {
            options.responseType = "json";
        }

        options.headers = options.headers || headers;

        // tslint:disable-next-line:max-line-length
        const promise = method.toUpperCase() === "GET" ? this.httpProvider.get(url, options) : this.httpProvider.post(url, data, options);

        return promise;
    }

    get networkStatus(): string {
        return this._networkStatus;
    }

    get isOnline(): boolean {
        return this._isOnline;
    }

}
