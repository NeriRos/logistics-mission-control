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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLWxhenktbG9hZC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2dlZC1pbi1sYXp5LWxvYWQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBRzNDLHNEQUErRDtBQUMvRCwwREFBdUQ7QUFHdkQ7SUFDSSwrQkFBb0IsaUJBQW1DLEVBQVUsV0FBd0I7UUFBckUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUU5Rix1Q0FBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBVFEscUJBQXFCO1FBRGpDLGlCQUFVLEVBQUU7aURBRThCLHlCQUFnQixFQUF1QiwyQkFBVztPQURoRixxQkFBcUIsQ0FVakM7SUFBRCw0QkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2FuTG9hZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2VkSW5MYXp5TG9hZEd1YXJkIGltcGxlbWVudHMgQ2FuTG9hZCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHsgfVxuXG4gICAgY2FuTG9hZCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImxvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn0iXX0=