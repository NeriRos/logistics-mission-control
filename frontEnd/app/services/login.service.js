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
    UserService.prototype.getUser = function () {
        return this.network.http("GET", "/account");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBRTNDLDhEQUErRDtBQUMvRCx3REFBMEQ7QUFDMUQsZ0NBQW1DO0FBSW5DO0lBRUUscUJBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQzlDLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUFuQixpQkFPQztRQU5DLElBQU0sT0FBTyxHQUFHO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7U0FDekMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFPLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3SSxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFBaEIsaUJBTUM7UUFMQyxJQUFNLE9BQU8sR0FBRztZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1NBQ3pDLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBTyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUksQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMzQixPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU5QixPQUFPLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztTQUMxQzthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztJQUdELCtCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsSUFBSSxLQUFLLEVBQUU7WUFDVCxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0UsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0UsSUFBSSxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUM1QixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ1QsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsSUFBRyxHQUFHO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQVk7UUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUEzRVUsV0FBVztRQUR2QixpQkFBVSxFQUFFO2lEQUdrQixtQ0FBaUI7T0FGbkMsV0FBVyxDQTRFdkI7SUFBRCxrQkFBQztDQUFBLEFBNUVELElBNEVDO0FBNUVZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBOZXR3b3JraW5nU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBsb2NhbFN0b3JhZ2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIjtcclxuaW1wb3J0ICogYXMgIGJhc2U2NCBmcm9tIFwiYmFzZS02NFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JraW5nU2VydmljZSkge1xyXG4gIH1cclxuICBcclxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XCJBY2NlcHRzXCI6IFwiYXBwbGljYXRpb24vanNvblwifVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5uZXR3b3JrLmZldGNoKFwiL3NpZ251cFwiLCBvcHRpb25zLCB1c2VyKS50aGVuKChyKSA9PiByLmpzb24oKSkudGhlbigocikgPT4geyB0aGlzLnNhdmVUb2tlbigoci51c2VyIHx8IHt9KS50b2tlbik7IHJldHVybiByOyB9KTtcclxuICB9XHJcblxyXG4gIGxvZ2luKHVzZXI6IFVzZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1wiQWNjZXB0c1wiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0gXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMubmV0d29yay5mZXRjaChcIi9sb2dpblwiLCBvcHRpb25zLCB1c2VyKS50aGVuKChyKSA9PiByLmpzb24oKSkudGhlbigocikgPT4geyB0aGlzLnNhdmVUb2tlbigoci51c2VyIHx8IHt9KS50b2tlbik7IHJldHVybiByOyB9KTtcclxuICB9XHJcblxyXG4gIGlzQXV0aGVudGljYXRlZCgpIDogYm9vbGVhbiB7XHJcbiAgICB2YXIgdG9rZW4gPSB0aGlzLmdldFRva2VuKCk7XHJcbiAgICBsZXQgcGF5bG9hZDtcclxuICAgIFxyXG4gICAgaWYgKHRva2VuICYmIHRva2VuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBwYXlsb2FkID0gdG9rZW4uc3BsaXQoXCIuXCIpWzFdO1xyXG4gICAgICAgIHBheWxvYWQgPSBiYXNlNjQuZGVjb2RlKHBheWxvYWQpO1xyXG4gICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKHBheWxvYWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gcGF5bG9hZC5leHAgPiBEYXRlLm5vdygpIC8gMTAwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJOT1QgQVVUSEVOVElDQVRFRCFcIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgc2F2ZVRva2VuKHRva2VuKTogdm9pZCB7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBnZXRJRCgpOiBzdHJpbmcge1xyXG4gICAgdmFyIHBheWxvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgcGF5bG9hZCA9IHBheWxvYWQuc3BsaXQoXCIuXCIpWzFdO1xyXG4gICAgcGF5bG9hZCA9IGJhc2U2NC5kZWNvZGUocGF5bG9hZCk7XHJcbiAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShwYXlsb2FkKTtcclxuICAgIHJldHVybiBwYXlsb2FkLnN1YjtcclxuICB9XHJcblxyXG4gIGdldFVzZXIoKTogT2JzZXJ2YWJsZTxVc2VyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5uZXR3b3JrLmh0dHAoXCJHRVRcIiwgXCIvYWNjb3VudFwiKTtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmV0d29yay5mZXRjaChcIi9sb2dvdXRcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBpZihlcnIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xyXG4gIH1cclxufSJdfQ==