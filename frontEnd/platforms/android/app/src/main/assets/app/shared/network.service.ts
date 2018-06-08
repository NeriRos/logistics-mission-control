import { Injectable } from "@angular/core";
import * as connectivity from "connectivity";

@Injectable()
export class Networking {
    private _networkStatus: string = "";
    private _isOnline: boolean = false;

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

    
    public get networkStatus() : string {
        return this._networkStatus;
    }
    
    public get isOnline() : boolean {
        return this._isOnline;
    }
    
}