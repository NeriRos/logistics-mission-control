"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    LoggedInLazyLoadGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions, login_service_1.UserService])
    ], LoggedInLazyLoadGuard);
    return LoggedInLazyLoadGuard;
}());
exports.LoggedInLazyLoadGuard = LoggedInLazyLoadGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLWxhenktbG9hZC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2dlZC1pbi1sYXp5LWxvYWQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0Msc0RBQStEO0FBQy9ELDBEQUF1RDtBQUd2RDtJQUNJLCtCQUFvQixpQkFBbUMsRUFBVSxXQUF3QjtRQUFyRSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDO0lBRTlGLHVDQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFUUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTt5Q0FFOEIseUJBQWdCLEVBQXVCLDJCQUFXO09BRGhGLHFCQUFxQixDQVVqQztJQUFELDRCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDYW5Mb2FkIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dnZWRJbkxhenlMb2FkR3VhcmQgaW1wbGVtZW50cyBDYW5Mb2FkIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkgeyB9XG5cbiAgICBjYW5Mb2FkKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIXRoaXMudXNlclNlcnZpY2UuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wibG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSJdfQ==