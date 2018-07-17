"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var helpers_service_1 = require("~/services/helpers.service");
var login_service_1 = require("~/services/login.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page, userService, helpers) {
        this.page = page;
        this.userService = userService;
        this.helpers = helpers;
        this.page.actionBarHidden = false;
    }
    HomeComponent.prototype.logout = function () {
        this.userService.logout();
        this.helpers.navigate(["login"]);
    };
    // Navigate to corresponding page
    HomeComponent.prototype.onMenuButtonTap = function (args) {
        var routeName = args.object.parent.get("data-name");
        this.helpers.navigate([routeName]);
    };
    // Navigate to profile page here
    HomeComponent.prototype.onProfileButtonTap = function () {
        alert("Navigate to profile page");
    };
    HomeComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["home.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [page_1.Page, login_service_1.UserService, helpers_service_1.HelpersService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
