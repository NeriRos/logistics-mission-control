"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsOERBQStEO0FBQy9ELHdEQUEwRDtBQUMxRCxnQ0FBbUM7QUFHbkM7SUFFRSxxQkFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFDOUMsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQW5CLGlCQU9DO1FBTkMsSUFBTSxPQUFPLEdBQUc7WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztTQUN6QyxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBTyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3SSxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFBaEIsaUJBTUM7UUFMQyxJQUFNLE9BQU8sR0FBRztZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1NBQ3pDLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FB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O0NBQUEsQUE1RUQsSUE0RUM7QUE1RVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbmV0d29yay5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGxvY2FsU3RvcmFnZSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiO1xyXG5pbXBvcnQgKiBhcyAgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV0d29yazogTmV0d29ya2luZ1NlcnZpY2UpIHtcclxuICB9XHJcbiAgXHJcbiAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1wiQWNjZXB0c1wiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubmV0d29yay5mZXRjaChcIi9zaWdudXBcIiwgb3B0aW9ucywgdXNlcikudGhlbigocikgPT4gci5qc29uKCkpLnRoZW4oKHIpID0+IHsgdGhpcy5zYXZlVG9rZW4oKHIudXNlciB8fCB7fSkudG9rZW4pOyByZXR1cm4gcjsgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbih1c2VyOiBVc2VyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcIkFjY2VwdHNcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9IFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLm5ldHdvcmsuZmV0Y2goXCIvbG9naW5cIiwgb3B0aW9ucywgdXNlcikudGhlbigocikgPT4gci5qc29uKCkpLnRoZW4oKHIpID0+IHsgdGhpcy5zYXZlVG9rZW4oKHIudXNlciB8fCB7fSkudG9rZW4pOyByZXR1cm4gcjsgfSk7XHJcbiAgfVxyXG5cclxuICBpc0F1dGhlbnRpY2F0ZWQoKSA6IGJvb2xlYW4ge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgbGV0IHBheWxvYWQ7XHJcbiAgICBcclxuICAgIGlmICh0b2tlbiAmJiB0b2tlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcGF5bG9hZCA9IHRva2VuLnNwbGl0KFwiLlwiKVsxXTtcclxuICAgICAgICBwYXlsb2FkID0gYmFzZTY0LmRlY29kZShwYXlsb2FkKTtcclxuICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShwYXlsb2FkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBheWxvYWQuZXhwID4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTk9UIEFVVEhFTlRJQ0FURUQhXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIHNhdmVUb2tlbih0b2tlbik6IHZvaWQge1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RnJpZW5kcygpIHtcclxuICAgIHJldHVybiB0aGlzLm5ldHdvcmsuaHR0cChcIkdFVFwiLCBgL2dldEZyaWVuZHNgKTtcclxuICB9XHJcblxyXG4gIGdldFRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICB9XHJcblxyXG4gIGdldElEKCk6IHN0cmluZyB7XHJcbiAgICB2YXIgcGF5bG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBwYXlsb2FkID0gcGF5bG9hZC5zcGxpdChcIi5cIilbMV07XHJcbiAgICBwYXlsb2FkID0gYmFzZTY0LmRlY29kZShwYXlsb2FkKTtcclxuICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKHBheWxvYWQpO1xyXG4gICAgcmV0dXJuIHBheWxvYWQuc3ViO1xyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5uZXR3b3JrLmZldGNoKFwiL2xvZ291dFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGlmKGVycilcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IEVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XHJcbiAgfVxyXG59Il19