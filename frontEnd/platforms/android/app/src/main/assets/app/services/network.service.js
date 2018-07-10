"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var connectivity = require("connectivity");
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
        var promise;
        if (options && !options.responseType)
            options.responseType = "json";
        if (method.toUpperCase() === "GET")
            promise = this.httpProvider.get(url, options);
        else
            promise = this.httpProvider.post(url, data, options);
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
    NetworkingService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NetworkingService);
    return NetworkingService;
}());
exports.NetworkingService = NetworkingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV0d29yay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUNsRCwyQ0FBNkM7QUFJN0M7SUFLSSwyQkFBb0IsWUFBd0I7UUFBeEIsaUJBQVksR0FBWixZQUFZLENBQVk7UUFKcEMsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUM1QixXQUFNLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUczRixDQUFDO0lBRUQsaUNBQUssR0FBTCxVQUFNLEdBQVcsRUFBRSxPQUF5QixFQUFFLElBQVU7UUFBckMsd0JBQUEsRUFBQSxZQUF5QjtRQUN4QyxJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFFekcsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEQsT0FBTyxDQUFDLE9BQU8sR0FBRztnQkFDZCxjQUFjLEVBQUUsa0JBQWtCO2FBQ3JDLENBQUM7UUFDTixDQUFDO1FBQ0csT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxD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N0UsQ0FBQztJQUdELHNCQUFXLDRDQUFhO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx1Q0FBUTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBMUZRLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO3lDQU15QixpQkFBVTtPQUxuQyxpQkFBaUIsQ0E0RjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVGRCxJQTRGQztBQTVGWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcImNvbm5lY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5ldHdvcmtpbmdTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX25ldHdvcmtTdGF0dXM6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIF9pc09ubGluZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNlcnZlciA9IHsgaXA6IFwiMTAuMC4yLjFcIiwgZG5zOiBcImNhcmdvLWV4cHJlc3MuY28uaWxcIiwgcG9ydDogODAsIHByb3RvY29sOiBcImh0dHBcIiB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFByb3ZpZGVyOiBIdHRwQ2xpZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2godXJsOiBzdHJpbmcsIG9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge30sIGJvZHk/OiBhbnkgKSB7XHJcbiAgICAgICAgY29uc3QgaXNMb2NhbCA9IHVybC5zdGFydHNXaXRoKFwiL1wiKTtcclxuICAgICAgICBsZXQgcmVxdWVzdFVSTCA9IGlzTG9jYWwgPyBgJHt0aGlzLnNlcnZlci5wcm90b2NvbH06Ly8ke3RoaXMuc2VydmVyLmlwfToke3RoaXMuc2VydmVyLnBvcnR9JHt1cmx9YCA6IHVybDtcclxuXHJcbiAgICAgICAgaWYoYm9keSAmJiAhb3B0aW9ucy5ib2R5ICYmIG9wdGlvbnMubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgb3B0aW9ucy5ib2R5ID0gKHR5cGVvZiBib2R5KS50b0xvd2VyQ2FzZSgpICE9PSBcInN0cmluZ1wiID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5O1xyXG5cclxuICAgICAgICByZXR1cm4gZmV0Y2gocmVxdWVzdFVSTCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaHR0cChtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcsIG9wdGlvbnM/OiBhbnksIGRhdGE/OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHZhciBwcm9taXNlO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zICYmICFvcHRpb25zLnJlc3BvbnNlVHlwZSlcclxuICAgICAgICAgICAgb3B0aW9ucy5yZXNwb25zZVR5cGUgPSBcImpzb25cIjtcclxuXHJcbiAgICAgICAgaWYobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09IFwiR0VUXCIpXHJcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLmh0dHBQcm92aWRlci5nZXQodXJsLCBvcHRpb25zKTsgICAgXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5odHRwUHJvdmlkZXIucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja05ldHdvcmsoKSB7XHJcbiAgICAgICAgY29uc3QgY29ubmVjdGlvblR5cGUgPSBjb25uZWN0aXZpdHkuZ2V0Q29ubmVjdGlvblR5cGUoKTtcclxuICAgICAgICBzd2l0Y2ggKGNvbm5lY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm5vbmU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXR3b3JrU3RhdHVzID0gXCJObyBuZXR3b3JrIGNvbm5lY3Rpb24gYXZhaWxhYmxlIVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNPbmxpbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS53aWZpOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IFwiWW91IGFyZSBvbiB3aWZpIVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNPbmxpbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm1vYmlsZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuX25ldHdvcmtTdGF0dXMgPSBcIllvdSBhcmUgb24gYSBtb2JpbGUgZGF0YSBuZXR3b3JrIVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNPbmxpbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPbmxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgbW9uaXRvck5ldHdvcmtTdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9uZXR3b3JrU3RhdHVzID0gXCJNb25pdG9yaW5nIG5ldHdvcmsgY29ubmVjdGlvbiBjaGFuZ2VzLlwiO1xyXG4gICAgICAgIGNvbnN0IG9uQ29ubmVjdGlvblR5cGVDaGFuZ2VkID0gKG5ld0Nvbm5lY3Rpb25UeXBlKSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobmV3Q29ubmVjdGlvblR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm5vbmU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IFwiTm8gbmV0d29yayBjb25uZWN0aW9uIGF2YWlsYWJsZSFcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc09ubGluZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUud2lmaTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXR3b3JrU3RhdHVzID0gXCJZb3UgYXJlIG5vdyBvbiB3aWZpIVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzT25saW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm1vYmlsZTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9uZXR3b3JrU3RhdHVzID0gXCJZb3UgYXJlIG5vdyBvbiBhIG1vYmlsZSBkYXRhIG5ldHdvcmshXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNPbmxpbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25uZWN0aXZpdHkuc3RhcnRNb25pdG9yaW5nKG9uQ29ubmVjdGlvblR5cGVDaGFuZ2VkKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBtb25pdG9yTmV0d29ya1N0b3AoKSB7XHJcbiAgICAgICAgY29ubmVjdGl2aXR5LnN0b3BNb25pdG9yaW5nKCk7XHJcbiAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IFwiTm8gbG9uZ2VyIG1vbml0b3JpbmcgbmV0d29yayBjb25uZWN0aW9uIGNoYW5nZXMuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IG5ldHdvcmtTdGF0dXMoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25ldHdvcmtTdGF0dXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgaXNPbmxpbmUoKSA6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc09ubGluZTtcclxuICAgIH1cclxuICAgIFxyXG59Il19