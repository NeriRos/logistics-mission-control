"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_service_1 = require("~/services/login.service");
var LoggedInLazyLoadGuard = /** @class */ (function () {
    function LoggedInLazyLoadGuard(_routerExtensions, userService) {
        this._routerExtensions = _routerExtensions;
        this.userService = userService;
    }
    LoggedInLazyLoadGuard.prototype.canLoad = function () {
        if (!this.userService.isAuthenticated()) {
            this._routerExtensions.navigate(["login"], { clearHistory: true });
        }
        return true;
    };
    LoggedInLazyLoadGuard = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterExtensions, login_service_1.UserService])
    ], LoggedInLazyLoadGuard);
    return LoggedInLazyLoadGuard;
}());
exports.LoggedInLazyLoadGuard = LoggedInLazyLoadGuard;
