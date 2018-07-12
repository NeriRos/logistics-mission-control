"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var helpers_service_1 = require("~/services/helpers.service");
var login_service_1 = require("~/services/login.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_routerExtensions, page, userService, helpers) {
        this._routerExtensions = _routerExtensions;
        this.page = page;
        this.userService = userService;
        this.helpers = helpers;
        this.page.actionBarHidden = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
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
        tslib_1.__metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page, login_service_1.UserService, helpers_service_1.HelpersService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0U7QUFDdEUsc0RBQStEO0FBQy9ELHNEQUFvRDtBQUlwRCw4REFBNEQ7QUFDNUQsMERBQXVEO0FBUXZEO0lBR0ksdUJBQW9CLGlCQUFtQyxFQUFVLElBQVUsRUFBVSxXQUF3QixFQUFVLE9BQXVCO1FBQTFILHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUMxSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVELGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxpQ0FBaUM7SUFDakMsdUNBQWUsR0FBZixVQUFnQixJQUFlO1FBQzNCLElBQU0sU0FBUyxHQUFpQixJQUFJLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsMENBQWtCLEdBQWxCO1FBQ0ksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXpCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO2lEQUl5Qyx5QkFBZ0IsRUFBZ0IsV0FBSSxFQUF1QiwyQkFBVyxFQUFtQixnQ0FBYztPQUhySSxhQUFhLENBMEJ6QjtJQUFELG9CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dFwiO1xuXG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2hlbHBlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBsb2dnZWRVc2VyOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIGhlbHBlcnM6IEhlbHBlcnNTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5oZWxwZXJzLm5hdmlnYXRlKFtcImxvZ2luXCJdKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0ZSB0byBjb3JyZXNwb25kaW5nIHBhZ2VcbiAgICBvbk1lbnVCdXR0b25UYXAoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlTmFtZSA9ICg8U3RhY2tMYXlvdXQ+YXJncy5vYmplY3QpLnBhcmVudC5nZXQoXCJkYXRhLW5hbWVcIik7XG4gICAgICAgIHRoaXMuaGVscGVycy5uYXZpZ2F0ZShbcm91dGVOYW1lXSk7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGUgdG8gcHJvZmlsZSBwYWdlIGhlcmVcbiAgICBvblByb2ZpbGVCdXR0b25UYXAoKSB7XG4gICAgICAgIGFsZXJ0KFwiTmF2aWdhdGUgdG8gcHJvZmlsZSBwYWdlXCIpO1xuICAgIH1cbn1cbiJdfQ==