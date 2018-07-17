"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var HelpersService = /** @class */ (function () {
    function HelpersService(_routerExtensions, zone) {
        this._routerExtensions = _routerExtensions;
        this.zone = zone;
    }
    HelpersService.prototype.changeVisibility = function (elementRef, state) {
        elementRef.nativeElement.visibility = state;
    };
    HelpersService.prototype.navigate = function (route, data, transition) {
        var _this = this;
        this.zone.run(function () {
            var transitionArgs = transition || {
                name: "slideTop",
                duration: 350,
                curve: "ease"
            };
            var options = {
                clearHistory: false,
                animated: true,
                transition: transitionArgs,
                queryParams: data
            };
            _this._routerExtensions.navigate(route, options);
        });
    };
    HelpersService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterExtensions, core_1.NgZone])
    ], HelpersService);
    return HelpersService;
}());
exports.HelpersService = HelpersService;
