"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_routerExtensions, page) {
        this._routerExtensions = _routerExtensions;
        this.page = page;
        this.page.actionBarHidden = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        kinvey_nativescript_sdk_1.Kinvey.User.me()
            .then(function (user) {
            _this.loggedUser = user.data['_socialIdentity'].kinveyAuth.id;
        });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        kinvey_nativescript_sdk_1.Kinvey.User.logout()
            .then(function () {
            _this._routerExtensions.navigate(["login"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideBottom",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    };
    HomeComponent.prototype.onMenuButtonTap = function (args) {
        // Navigate to corresponding page
        var menuButtonParent = args.object.parent;
        alert("Navigate to " + menuButtonParent.get("data-name"));
    };
    HomeComponent.prototype.onProfileButtonTap = function () {
        // Navigate to profile page here
        alert("Navigate to profile page");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RDtBQUU5RCxtRUFBdUQ7QUFDdkQsc0RBQStEO0FBQy9ELGlEQUErQztBQVMvQztJQUdJLHVCQUFvQixpQkFBbUMsRUFBVSxJQUFVO1FBQXZELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkcsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsSUFBVTtZQUNiLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUE7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUFBLGlCQWNDO1FBYkcsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2FBQ2YsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUNyQztnQkFDSSxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxhQUFhO29CQUNuQixRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUUsTUFBTTtpQkFDaEI7YUFDSixDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLElBQWU7UUFDM0IsaUNBQWlDO1FBQ2pDLElBQU0sZ0JBQWdCLEdBQWlCLElBQUksQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQzNELEtBQUssQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDBDQUFrQixHQUFsQjtRQUNJLGdDQUFnQztRQUNoQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBdkNRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBSXlDLHlCQUFnQixFQUFnQixXQUFJO09BSGxFLGFBQWEsQ0F3Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ1aS9idXR0b25cIjtcbmltcG9ydCB7IEtpbnZleSwgVXNlciB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgbG9nZ2VkVXNlcjogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgS2ludmV5LlVzZXIubWUoKVxuICAgICAgICAgICAgLnRoZW4oKHVzZXI6IFVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZFVzZXIgPSB1c2VyLmRhdGFbJ19zb2NpYWxJZGVudGl0eSddLmtpbnZleUF1dGguaWRcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgS2ludmV5LlVzZXIubG9nb3V0KClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImxvZ2luXCJdLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlQm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDM1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk1lbnVCdXR0b25UYXAoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIC8vIE5hdmlnYXRlIHRvIGNvcnJlc3BvbmRpbmcgcGFnZVxuICAgICAgICBjb25zdCBtZW51QnV0dG9uUGFyZW50ID0gKDxTdGFja0xheW91dD5hcmdzLm9iamVjdCkucGFyZW50O1xuICAgICAgICBhbGVydChcIk5hdmlnYXRlIHRvIFwiICsgbWVudUJ1dHRvblBhcmVudC5nZXQoXCJkYXRhLW5hbWVcIikpO1xuICAgIH1cblxuICAgIG9uUHJvZmlsZUJ1dHRvblRhcCgpIHtcbiAgICAgICAgLy8gTmF2aWdhdGUgdG8gcHJvZmlsZSBwYWdlIGhlcmVcbiAgICAgICAgYWxlcnQoXCJOYXZpZ2F0ZSB0byBwcm9maWxlIHBhZ2VcIik7XG4gICAgfVxufVxuIl19