"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var network_service_1 = require("~/services/network.service");
var localStorage = require("nativescript-localstorage");
var base64 = require("base-64");
var UserService = /** @class */ (function () {
    function UserService(network) {
        this.network = network;
    }
    UserService.prototype.register = function (user) {
        var _this = this;
        var options = {
            method: "POST",
            headers: { "Accepts": "application/json" }
        };
        return this.network.fetch("/signup", options, user).then(function (r) { return r.json(); }).then(function (r) { _this.saveToken((r.user || {}).token); return r; });
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var options = {
            method: "POST",
            headers: { "Accepts": "application/json" }
        };
        return this.network.fetch("/login", options, user).then(function (r) { return r.json(); }).then(function (r) { _this.saveToken((r.user || {}).token); return r; });
    };
    UserService.prototype.isAuthenticated = function () {
        var token = this.getToken();
        var payload;
        if (token && token.length > 0) {
            payload = token.split(".")[1];
            payload = base64.decode(payload);
            payload = JSON.parse(payload);
            return payload.exp > Date.now() / 1000;
        }
        else {
            console.log("NOT AUTHENTICATED!");
            return false;
        }
    };
    UserService.prototype.saveToken = function (token) {
        if (token) {
            localStorage.setItem("token", token);
        }
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    UserService.prototype.getID = function () {
        var payload = localStorage.getItem("token");
        payload = payload.split(".")[1];
        payload = base64.decode(payload);
        payload = JSON.parse(payload);
        return payload.sub;
    };
    UserService.prototype.logout = function () {
        this.network.fetch("/logout", {
            method: "GET",
        }).then(function (res) {
            localStorage.removeItem("token");
        }).catch(function (err) {
            if (err)
                console.log(err);
        });
    };
    UserService.prototype.handleErrors = function (error) {
        console.error(error.message);
        return error.message;
    };
    UserService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBRTNDLDhEQUErRDtBQUMvRCx3REFBMEQ7QUFDMUQsZ0NBQW1DO0FBSW5DO0lBRUUscUJBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQzlDLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUFuQixpQkFPQztRQU5DLElBQU0sT0FBTyxHQUFHO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7U0FDekMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0ksQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQWhCLGlCQU1DO1FBTEMsSUFBTSxPQUFPLEdBQUc7WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztTQUN6QyxDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBTyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1SSxDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLE9BQU8sQ0FBQztRQUVaLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUMzQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUdELCtCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0UsSUFBSSxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNyQixDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUM1QixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQVk7UUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDdkIsQ0FBQztJQXZFVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7aURBR2tCLG1DQUFpQjtPQUZuQyxXQUFXLENBd0V2QjtJQUFELGtCQUFDO0NBQUEsQUF4RUQsSUF3RUM7QUF4RVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbmV0d29yay5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGxvY2FsU3RvcmFnZSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiO1xyXG5pbXBvcnQgKiBhcyAgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldHdvcms6IE5ldHdvcmtpbmdTZXJ2aWNlKSB7XHJcbiAgfVxyXG4gIFxyXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcIkFjY2VwdHNcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLm5ldHdvcmsuZmV0Y2goXCIvc2lnbnVwXCIsIG9wdGlvbnMsIHVzZXIpLnRoZW4oKHIpID0+IHIuanNvbigpKS50aGVuKChyKSA9PiB7IHRoaXMuc2F2ZVRva2VuKChyLnVzZXIgfHwge30pLnRva2VuKTsgcmV0dXJuIHI7IH0pO1xyXG4gIH1cclxuXHJcbiAgbG9naW4odXNlcjogVXNlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XCJBY2NlcHRzXCI6IFwiYXBwbGljYXRpb24vanNvblwifSBcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5uZXR3b3JrLmZldGNoKFwiL2xvZ2luXCIsIG9wdGlvbnMsIHVzZXIpLnRoZW4oKHIpID0+IHIuanNvbigpKS50aGVuKChyKSA9PiB7IHRoaXMuc2F2ZVRva2VuKChyLnVzZXIgfHwge30pLnRva2VuKTsgcmV0dXJuIHI7IH0pO1xyXG4gIH1cclxuXHJcbiAgaXNBdXRoZW50aWNhdGVkKCkgOiBib29sZWFuIHtcclxuICAgIHZhciB0b2tlbiA9IHRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIGxldCBwYXlsb2FkO1xyXG4gICAgXHJcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHBheWxvYWQgPSB0b2tlbi5zcGxpdChcIi5cIilbMV07XHJcbiAgICAgICAgcGF5bG9hZCA9IGJhc2U2NC5kZWNvZGUocGF5bG9hZCk7XHJcbiAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UocGF5bG9hZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXlsb2FkLmV4cCA+IERhdGUubm93KCkgLyAxMDAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5PVCBBVVRIRU5USUNBVEVEIVwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICBzYXZlVG9rZW4odG9rZW4pOiB2b2lkIHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHRva2VuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICB9XHJcblxyXG4gIGdldElEKCk6IHN0cmluZyB7XHJcbiAgICB2YXIgcGF5bG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBwYXlsb2FkID0gcGF5bG9hZC5zcGxpdChcIi5cIilbMV07XHJcbiAgICBwYXlsb2FkID0gYmFzZTY0LmRlY29kZShwYXlsb2FkKTtcclxuICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKHBheWxvYWQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQuc3ViO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZXR3b3JrLmZldGNoKFwiL2xvZ291dFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGlmKGVycilcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IEVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XHJcbiAgfVxyXG59Il19