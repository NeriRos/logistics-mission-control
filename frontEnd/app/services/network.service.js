"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var connectivity = require("tns-core-modules/connectivity/connectivity");
var NetworkingService = /** @class */ (function () {
    function NetworkingService(httpProvider) {
        this.httpProvider = httpProvider;
        this.server = { ip: "10.0.2.1", dns: "cargo-express.co.il", port: 80, protocol: "http" };
        this._networkStatus = "";
        this._isOnline = false;
    }
    NetworkingService.prototype.fetch = function (url, options, body) {
        if (options === void 0) { options = {}; }
        var isLocal = url.startsWith("/");
        var requestURL = isLocal ? this.server.protocol + "://" + this.server.ip + ":" + this.server.port + url : url;
        if (body && !options.body && options.method === "POST") {
            options.headers = {
                "Content-Type": "application/json"
            };
        }
        options.body = (typeof body).toLowerCase() !== "string" ? JSON.stringify(body) : body;
        return fetch(requestURL, options);
    };
    NetworkingService.prototype.http = function (method, url, options, data) {
        if (options === void 0) { options = {}; }
        var headers = new http_1.HttpHeaders({
            Accepts: "application/json",
            "Content-Type": options.contentType || "application/json"
        });
        if (!options.responseType) {
            options.responseType = "json";
        }
        options.headers = options.headers || headers;
        // tslint:disable-next-line:max-line-length
        var promise = method.toUpperCase() === "GET" ? this.httpProvider.get(url, options) : this.httpProvider.post(url, data, options);
        return promise;
    };
    NetworkingService.prototype.checkNetwork = function () {
        var connectionType = connectivity.getConnectionType();
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
    };
    NetworkingService.prototype.monitorNetworkStart = function () {
        var _this = this;
        this._networkStatus = "Monitoring network connection changes.";
        var onConnectionTypeChanged = function (newConnectionType) {
            switch (newConnectionType) {
                case connectivity.connectionType.none:
                    _this._networkStatus = "No network connection available!";
                    _this._isOnline = false;
                    break;
                case connectivity.connectionType.wifi:
                    _this._networkStatus = "You are now on wifi!";
                    _this._isOnline = true;
                    break;
                case connectivity.connectionType.mobile:
                    _this._networkStatus = "You are now on a mobile data network!";
                    _this._isOnline = true;
                    break;
            }
        };
        connectivity.startMonitoring(onConnectionTypeChanged);
    };
    NetworkingService.prototype.monitorNetworkStop = function () {
        connectivity.stopMonitoring();
        this._networkStatus = "No longer monitoring network connection changes.";
    };
    Object.defineProperty(NetworkingService.prototype, "networkStatus", {
        get: function () {
            return this._networkStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetworkingService.prototype, "isOnline", {
        get: function () {
            return this._isOnline;
        },
        enumerable: true,
        configurable: true
    });
    NetworkingService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient])
    ], NetworkingService);
    return NetworkingService;
}());
exports.NetworkingService = NetworkingService;
