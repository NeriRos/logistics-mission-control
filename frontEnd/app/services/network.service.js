"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var connectivity = require("tns-core-modules/connectivity/connectivity");
var NetworkingService = /** @class */ (function () {
    function NetworkingService(httpProvider) {
        this.httpProvider = httpProvider;
        this._networkStatus = "";
        this._isOnline = false;
        this.server = { ip: "10.0.2.1", dns: "cargo-express.co.il", port: 80, protocol: "http" };
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
        var promise;
        var headers = new http_1.HttpHeaders({
            Accepts: "application/json",
            "Content-Type": options.contentType || "application/json"
        });
        if (!options.responseType)
            options.responseType = "json";
        options.headers = options.headers || headers;
        if (method.toUpperCase() === "GET")
            promise = this.httpProvider.get(url, options);
        else {
            promise = this.httpProvider.post(url, data, options);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV0d29yay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFDL0QseUVBQTJFO0FBSTNFO0lBS0ksMkJBQW9CLFlBQXdCO1FBQXhCLGlCQUFZLEdBQVosWUFBWSxDQUFZO1FBSnBDLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDNUIsV0FBTSxHQUFHLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFHM0YsQ0FBQztJQUVELGlDQUFLLEdBQUwsVUFBTSxHQUFXLEVBQUUsT0FBeUIsRUFBRSxJQUFVO1FBQXJDLHdCQUFBLEVBQUEsWUFBeUI7UUFDeEMsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxXQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBRXpHLElBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtZQUNuRCxPQUFPLENBQUMsT0FBTyxHQUFHO2dCQUNkLGNBQWMsRUFBRSxrQkFBa0I7YUFDckMsQ0FBQztTQUNMO1FBQ0csT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMs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QzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsa0RBQWtELENBQUM7SUFDN0UsQ0FBQztJQUdELHNCQUFXLDRDQUFhO2FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsdUNBQVE7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFsR1EsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7aURBTXlCLGlCQUFVO09BTG5DLGlCQUFpQixDQW9HN0I7SUFBRCx3QkFBQztDQUFBLEFBcEdELElBb0dDO0FBcEdZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5L2Nvbm5lY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5ldHdvcmtpbmdTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX25ldHdvcmtTdGF0dXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIF9pc09ubGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNlcnZlciA9IHsgaXA6IFwiMTAuMC4yLjFcIiwgZG5zOiBcImNhcmdvLWV4cHJlc3MuY28uaWxcIiwgcG9ydDogODAsIHByb3RvY29sOiBcImh0dHBcIiB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFByb3ZpZGVyOiBIdHRwQ2xpZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2godXJsOiBzdHJpbmcsIG9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge30sIGJvZHk/OiBhbnkgKSB7XHJcbiAgICAgICAgY29uc3QgaXNMb2NhbCA9IHVybC5zdGFydHNXaXRoKFwiL1wiKTtcclxuICAgICAgICBsZXQgcmVxdWVzdFVSTCA9IGlzTG9jYWwgPyBgJHt0aGlzLnNlcnZlci5wcm90b2NvbH06Ly8ke3RoaXMuc2VydmVyLmlwfToke3RoaXMuc2VydmVyLnBvcnR9JHt1cmx9YCA6IHVybDtcclxuXHJcbiAgICAgICAgaWYoYm9keSAmJiAhb3B0aW9ucy5ib2R5ICYmIG9wdGlvbnMubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gKHR5cGVvZiBib2R5KS50b0xvd2VyQ2FzZSgpICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5O1xyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2gocmVxdWVzdFVSTCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaHR0cChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9LCBkYXRhPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICB2YXIgcHJvbWlzZTtcclxuXHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICBBY2NlcHRzOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogb3B0aW9ucy5jb250ZW50VHlwZSB8fCBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmKCFvcHRpb25zLnJlc3BvbnNlVHlwZSlcclxuICAgICAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IGhlYWRlcnM7XHJcblxyXG4gICAgICAgIGlmKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBcIkdFVFwiKVxyXG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5odHRwUHJvdmlkZXIuZ2V0KHVybCwgb3B0aW9ucyk7ICAgIFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5odHRwUHJvdmlkZXIucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tOZXR3b3JrKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb25UeXBlID0gY29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKCk7XHJcbiAgICAgICAgc3dpdGNoIChjb25uZWN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IFwiTm8gbmV0d29yayBjb25uZWN0aW9uIGF2YWlsYWJsZSFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzT25saW5lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUud2lmaTpcclxuICAgICAgICAgICAgICAgIHRoaXMuX25ldHdvcmtTdGF0dXMgPSBcIllvdSBhcmUgb24gd2lmaSFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzT25saW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXR3b3JrU3RhdHVzID0gXCJZb3UgYXJlIG9uIGEgbW9iaWxlIGRhdGEgbmV0d29yayFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzT25saW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT25saW5lO1xyXG4gICAgfVxyXG5cclxuICAgIG1vbml0b3JOZXR3b3JrU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IFwiTW9uaXRvcmluZyBuZXR3b3JrIGNvbm5lY3Rpb24gY2hhbmdlcy5cIjtcclxuICAgICAgICBjb25zdCBvbkNvbm5lY3Rpb25UeXBlQ2hhbmdlZCA9IChuZXdDb25uZWN0aW9uVHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG5ld0Nvbm5lY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25ldHdvcmtTdGF0dXMgPSBcIk5vIG5ldHdvcmsgY29ubmVjdGlvbiBhdmFpbGFibGUhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNPbmxpbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLndpZmk6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IFwiWW91IGFyZSBub3cgb24gd2lmaSFcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc09ubGluZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IFwiWW91IGFyZSBub3cgb24gYSBtb2JpbGUgZGF0YSBuZXR3b3JrIVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzT25saW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29ubmVjdGl2aXR5LnN0YXJ0TW9uaXRvcmluZyhvbkNvbm5lY3Rpb25UeXBlQ2hhbmdlZCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbW9uaXRvck5ldHdvcmtTdG9wKCkge1xyXG4gICAgICAgIGNvbm5lY3Rpdml0eS5zdG9wTW9uaXRvcmluZygpO1xyXG4gICAgICAgIHRoaXMuX25ldHdvcmtTdGF0dXMgPSBcIk5vIGxvbmdlciBtb25pdG9yaW5nIG5ldHdvcmsgY29ubmVjdGlvbiBjaGFuZ2VzLlwiO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBuZXR3b3JrU3RhdHVzKCkgOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uZXR3b3JrU3RhdHVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGlzT25saW5lKCkgOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPbmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==