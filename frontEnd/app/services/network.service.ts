import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import * as connectivity from "tns-core-modules/connectivity/connectivity";
import { Globals } from "~/shared/globals";

@Injectable()
export class NetworkingService {
    private _networkStatus: string = "";
    private _isOnline: boolean = false;

    constructor(private httpProvider: HttpClient, private globals: Globals) {
    }

    fetch(url: string, options: RequestInit = {}, body?: any) {
        const isLocal = url.startsWith("/");
        // tslint:disable-next-line:max-line-length
        const requestURL = isLocal ? `${this.globals.server.protocol}://${this.globals.server.ip}:${this.globals.server.port}${url}` : url;

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

    checkNetwork() {
        const connectionType = connectivity.getConnectionType();
        switch (connectionType) {
            case connectivity.connectionType.none:
                this._networkStatus = "No network connection available!";
                this._isOnline = false;
                break;
            case connectivity.connectionType.wifi:
                this._networkStatus = "You are on wifi!";
                this._isOnline = true;
                break;
            case connectivity.connectionType.mobile:
                this._networkStatus = "You are on a mobile data network!";
                this._isOnline = true;
                break;
        }

        return this._isOnline;
    }

    monitorNetworkStart() {
        this._networkStatus = "Monitoring network connection changes.";
        const onConnectionTypeChanged = (newConnectionType) => {
            switch (newConnectionType) {
                case connectivity.connectionType.none:
                    this._networkStatus = "No network connection available!";
                    this._isOnline = false;
                    break;
                case connectivity.connectionType.wifi:
                    this._networkStatus = "You are now on wifi!";
                    this._isOnline = true;
                    break;
                case connectivity.connectionType.mobile:
                    this._networkStatus = "You are now on a mobile data network!";
                    this._isOnline = true;
                    break;
            }
        };
        connectivity.startMonitoring(onConnectionTypeChanged);

    }

    monitorNetworkStop() {
        connectivity.stopMonitoring();
        this._networkStatus = "No longer monitoring network connection changes.";
    }

    get networkStatus(): string {
        return this._networkStatus;
    }

    get isOnline(): boolean {
        return this._isOnline;
    }

}
