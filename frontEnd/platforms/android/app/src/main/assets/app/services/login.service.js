"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var network_service_1 = require("./network.service");
var localStorage = require("nativescript-localstorage");
var base64 = require("base-64");
var UserService = /** @class */ (function () {
    function UserService(network) {
        this.network = network;
    }
    UserService.prototype.register = function (user) {
        var options = {
            method: "POST",
            headers: { "Accepts": "application/json" }
        };
        return this.network.fetch("/signup", options, user).then(function (r) { return r.json(); });
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var options = {
            method: "POST",
            headers: { "Accepts": "application/json" }
        };
        return this.network.fetch("/login", options, user).then(function (r) { return r.json(); }).then(function (r) { _this.saveToken(r.user.token); return r; });
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
    UserService.prototype.getFriends = function () {
        return this.network.http("GET", "/getFriends");
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
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MscURBQXNEO0FBQ3RELHdEQUEwRDtBQUMxRCxnQ0FBbUM7QUFHbkM7SUFFRSxxQkFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFDOUMsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCLElBQU0sT0FBTyxHQUFHO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7U0FDekMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFBaEIsaUJBTUM7UUFMQyxJQUFNLE9BQU8sR0FBRztZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1NBQ3pDLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFPLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwSSxDQUFDO0lBRUQscUNBQWUsR0FBZjtRQUNFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLE9BQU8sQ0FBQztRQUVaLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUMzQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUdELCtCQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsMkJBQUssR0FBTDtRQUNFLElBQUksT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDckIsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDNUIsTUFBTSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNULFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNWLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFZO1FBQ3ZCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQ3ZCLENBQUM7SUExRVUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdrQixtQ0FBaUI7T0FGbkMsV0FBVyxDQTJFdkI7SUFBRCxrQkFBQztDQUFBLEFBM0VELElBMkVDO0FBM0VZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBOZXR3b3JraW5nU2VydmljZSB9IGZyb20gXCIuL25ldHdvcmsuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBsb2NhbFN0b3JhZ2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIjtcclxuaW1wb3J0ICogYXMgIGJhc2U2NCBmcm9tIFwiYmFzZS02NFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldHdvcms6IE5ldHdvcmtpbmdTZXJ2aWNlKSB7XHJcbiAgfVxyXG4gIFxyXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcIkFjY2VwdHNcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLm5ldHdvcmsuZmV0Y2goXCIvc2lnbnVwXCIsIG9wdGlvbnMsIHVzZXIpLnRoZW4oKHIpID0+IHIuanNvbigpKTtcclxuICB9XHJcblxyXG4gIGxvZ2luKHVzZXI6IFVzZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1wiQWNjZXB0c1wiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0gXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMubmV0d29yay5mZXRjaChcIi9sb2dpblwiLCBvcHRpb25zLCB1c2VyKS50aGVuKChyKSA9PiByLmpzb24oKSkudGhlbigocikgPT4geyB0aGlzLnNhdmVUb2tlbihyLnVzZXIudG9rZW4pOyByZXR1cm4gcjsgfSk7XHJcbiAgfVxyXG5cclxuICBpc0F1dGhlbnRpY2F0ZWQoKSA6IGJvb2xlYW4ge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgbGV0IHBheWxvYWQ7XHJcbiAgICBcclxuICAgIGlmICh0b2tlbiAmJiB0b2tlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcGF5bG9hZCA9IHRva2VuLnNwbGl0KFwiLlwiKVsxXTtcclxuICAgICAgICBwYXlsb2FkID0gYmFzZTY0LmRlY29kZShwYXlsb2FkKTtcclxuICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShwYXlsb2FkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBheWxvYWQuZXhwID4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTk9UIEFVVEhFTlRJQ0FURUQhXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIHNhdmVUb2tlbih0b2tlbik6IHZvaWQge1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RnJpZW5kcygpIHtcclxuICAgIHJldHVybiB0aGlzLm5ldHdvcmsuaHR0cChcIkdFVFwiLCBgL2dldEZyaWVuZHNgKTtcclxuICB9XHJcblxyXG4gIGdldFRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICB9XHJcbiAgZ2V0SUQoKTogc3RyaW5nIHtcclxuICAgIHZhciBwYXlsb2FkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIHBheWxvYWQgPSBwYXlsb2FkLnNwbGl0KFwiLlwiKVsxXTtcclxuICAgIHBheWxvYWQgPSBiYXNlNjQuZGVjb2RlKHBheWxvYWQpO1xyXG4gICAgcGF5bG9hZCA9IEpTT04ucGFyc2UocGF5bG9hZCk7XHJcbiAgICByZXR1cm4gcGF5bG9hZC5zdWI7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm5ldHdvcmsuZmV0Y2goXCIvbG9nb3V0XCIsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgaWYoZXJyKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogRXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcclxuICB9XHJcbn0iXX0=