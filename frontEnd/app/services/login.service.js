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
    UserService.prototype.getFriends = function () {
        return this.network.http("GET", "/getFriends");
    };
    UserService.prototype.addFriend = function (email) {
        return this.network.http("POST", "/addFriend", {}, { email: email });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBRTNDLDhEQUErRDtBQUMvRCx3REFBMEQ7QUFDMUQsZ0NBQW1DO0FBSW5DO0lBRUUscUJBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQzlDLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUFuQixpQkFPQztRQU5DLElBQU0sT0FBTyxHQUFHO1lBQ2QsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsRUFBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7U0FDekMsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0ksQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQWhCLGlCQU1DO1FBTEMsSUFBTSxPQUFPLEdBQUc7WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztTQUN6QyxDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9B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SyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUN2QixDQUFDO0lBL0VVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtpREFHa0IsbUNBQWlCO09BRm5DLFdBQVcsQ0FnRnZCO0lBQUQsa0JBQUM7Q0FBQSxBQWhGRCxJQWdGQztBQWhGWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgTmV0d29ya2luZ1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9uZXR3b3JrLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgbG9jYWxTdG9yYWdlIGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCI7XHJcbmltcG9ydCAqIGFzICBiYXNlNjQgZnJvbSBcImJhc2UtNjRcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV0d29yazogTmV0d29ya2luZ1NlcnZpY2UpIHtcclxuICB9XHJcbiAgXHJcbiAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1wiQWNjZXB0c1wiOiBcImFwcGxpY2F0aW9uL2pzb25cIn1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubmV0d29yay5mZXRjaChcIi9zaWdudXBcIiwgb3B0aW9ucywgdXNlcikudGhlbigocikgPT4gci5qc29uKCkpLnRoZW4oKHIpID0+IHsgdGhpcy5zYXZlVG9rZW4oKHIudXNlciB8fCB7fSkudG9rZW4pOyByZXR1cm4gcjsgfSk7XHJcbiAgfVxyXG5cclxuICBsb2dpbih1c2VyOiBVc2VyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcIkFjY2VwdHNcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9IFxyXG4gICAgfTtcclxuICAgIHJldHVybiB0aGlzLm5ldHdvcmsuZmV0Y2goXCIvbG9naW5cIiwgb3B0aW9ucywgdXNlcikudGhlbigocikgPT4gci5qc29uKCkpLnRoZW4oKHIpID0+IHsgdGhpcy5zYXZlVG9rZW4oKHIudXNlciB8fCB7fSkudG9rZW4pOyByZXR1cm4gcjsgfSk7XHJcbiAgfVxyXG5cclxuICBpc0F1dGhlbnRpY2F0ZWQoKSA6IGJvb2xlYW4ge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgbGV0IHBheWxvYWQ7XHJcbiAgICBcclxuICAgIGlmICh0b2tlbiAmJiB0b2tlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcGF5bG9hZCA9IHRva2VuLnNwbGl0KFwiLlwiKVsxXTtcclxuICAgICAgICBwYXlsb2FkID0gYmFzZTY0LmRlY29kZShwYXlsb2FkKTtcclxuICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShwYXlsb2FkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBheWxvYWQuZXhwID4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTk9UIEFVVEhFTlRJQ0FURUQhXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIHNhdmVUb2tlbih0b2tlbik6IHZvaWQge1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RnJpZW5kcygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmV0d29yay5odHRwKFwiR0VUXCIsIGAvZ2V0RnJpZW5kc2ApO1xyXG4gIH1cclxuXHJcbiAgYWRkRnJpZW5kKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmV0d29yay5odHRwKFwiUE9TVFwiLCBgL2FkZEZyaWVuZGAsIHt9LCB7ZW1haWw6IGVtYWlsfSk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBnZXRJRCgpOiBzdHJpbmcge1xyXG4gICAgdmFyIHBheWxvYWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgcGF5bG9hZCA9IHBheWxvYWQuc3BsaXQoXCIuXCIpWzFdO1xyXG4gICAgcGF5bG9hZCA9IGJhc2U2NC5kZWNvZGUocGF5bG9hZCk7XHJcbiAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShwYXlsb2FkKTtcclxuICAgIHJldHVybiBwYXlsb2FkLnN1YjtcclxuICB9XHJcblxyXG4gIGxvZ291dCgpOiB2b2lkIHtcclxuICAgIHRoaXMubmV0d29yay5mZXRjaChcIi9sb2dvdXRcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICBpZihlcnIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xyXG4gIH1cclxufSJdfQ==