"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["home.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page, login_service_1.UserService, helpers_service_1.HelpersService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRTtBQUN0RSxzREFBK0Q7QUFDL0Qsc0RBQW9EO0FBSXBELDhEQUE0RDtBQUM1RCwwREFBdUQ7QUFRdkQ7SUFHSSx1QkFBb0IsaUJBQW1DLEVBQVUsSUFBVSxFQUFVLFdBQXdCLEVBQVUsT0FBdUI7UUFBMUgsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQzFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGlDQUFpQztJQUNqQyx1Q0FBZSxHQUFmLFVBQWdCLElBQWU7UUFDM0IsSUFBTSxTQUFTLEdBQWlCLElBQUksQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGdDQUFnQztJQUNoQywwQ0FBa0IsR0FBbEI7UUFDSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBekJRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBSXlDLHlCQUFnQixFQUFnQixXQUFJLEVBQXVCLDJCQUFXLEVBQW1CLGdDQUFjO09BSHJJLGFBQWEsQ0EwQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIlxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQvc3RhY2stbGF5b3V0XCI7XG5cbmltcG9ydCB7IEhlbHBlcnNTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvaGVscGVycy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGxvZ2dlZFVzZXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgaGVscGVyczogSGVscGVyc1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICB0aGlzLmhlbHBlcnMubmF2aWdhdGUoW1wibG9naW5cIl0pO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRlIHRvIGNvcnJlc3BvbmRpbmcgcGFnZVxuICAgIG9uTWVudUJ1dHRvblRhcChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3Qgcm91dGVOYW1lID0gKDxTdGFja0xheW91dD5hcmdzLm9iamVjdCkucGFyZW50LmdldChcImRhdGEtbmFtZVwiKTtcbiAgICAgICAgdGhpcy5oZWxwZXJzLm5hdmlnYXRlKFtyb3V0ZU5hbWVdKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0ZSB0byBwcm9maWxlIHBhZ2UgaGVyZVxuICAgIG9uUHJvZmlsZUJ1dHRvblRhcCgpIHtcbiAgICAgICAgYWxlcnQoXCJOYXZpZ2F0ZSB0byBwcm9maWxlIHBhZ2VcIik7XG4gICAgfVxufVxuIl19