"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var base64 = require("base-64");
var localStorage = require("nativescript-localstorage");
var network_service_1 = require("~/services/network.service");
var UserService = /** @class */ (function () {
    function UserService(network) {
        this.network = network;
    }
    UserService.prototype.register = function (user) {
        var _this = this;
        var options = {
            method: "POST",
            headers: { Accepts: "application/json" }
        };
        return this.network.fetch("/signup", options, user).then(function (r) { return r.json(); }).then(function (r) {
            _this.saveToken((r.user || {}).token);
            return r;
        });
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        var options = {
            method: "POST",
            headers: { Accepts: "application/json" }
        };
        // tslint:disable-next-line:max-line-length
        return this.network.fetch("/login", options, user).then(function (r) { return r.json(); }).then(function (r) {
            _this.saveToken((r.user || {}).token);
            return r;
        });
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
            method: "GET"
        }).then(function (res) {
            localStorage.removeItem("token");
        }).catch(function (err) {
            if (err) {
                console.log(err);
            }
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
