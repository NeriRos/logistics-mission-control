"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var router_1 = require("nativescript-angular/router");
var core_2 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_routerExtensions, zone, page) {
        this._routerExtensions = _routerExtensions;
        this.zone = zone;
        this.page = page;
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (kinvey_nativescript_sdk_1.Kinvey.User.getActiveUser() == null) {
            kinvey_nativescript_sdk_1.Kinvey.User.loginWithMIC('http://example.com')
                .then(function (user) {
                _this.navigateHome();
                console.log("user: " + JSON.stringify(user));
            })
                .catch(function (error) {
                alert("An error occurred. Check your Kinvey settings.");
                console.log("error: " + error);
            });
        }
        else {
            this.navigateHome();
        }
    };
    LoginComponent.prototype.navigateHome = function () {
        var _this = this;
        this.zone.run(function () {
            _this._routerExtensions.navigate(["home"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, core_2.NgZone, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLG1FQUFpRDtBQUNqRCxzREFBK0Q7QUFDL0Qsc0NBQXVDO0FBQ3ZDLGlEQUErQztBQVMvQztJQUVJLHdCQUFvQixpQkFBbUMsRUFBVSxJQUFZLEVBQVUsSUFBVTtRQUE3RSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDN0YsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQWNDO1FBYkcsRUFBRSxDQUFDLENBQUMsZ0NBQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7aUJBQ3pDLElBQUksQ0FBQyxVQUFDLElBQWlCO2dCQUNwQixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsS0FBdUI7Z0JBQzNCLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDO0lBQ0wsQ0FBQztJQUVPLHFDQUFZLEdBQXBCO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNWLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDdEMsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsVUFBVTtvQkFDaEIsUUFBUSxFQUFFLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLE1BQU07aUJBQ2hCO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBckNRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBR3lDLHlCQUFnQixFQUFnQixhQUFNLEVBQWdCLFdBQUk7T0FGeEYsY0FBYyxDQXNDMUI7SUFBRCxxQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ1aS9idXR0b25cIjtcbmltcG9ydCB7IEtpbnZleSB9IGZyb20gJ2tpbnZleS1uYXRpdmVzY3JpcHQtc2RrJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIlxuaW1wb3J0ICogYXMgcGxhdGZvcm0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIGNvbG9yIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuY2xhc3NOYW1lID0gXCJwYWdlLWxvZ2luLWNvbnRhaW5lclwiO1xuICAgICAgICB0aGlzLnBhZ2Uuc3RhdHVzQmFyU3R5bGUgPSBcImRhcmtcIjtcbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgaWYgKEtpbnZleS5Vc2VyLmdldEFjdGl2ZVVzZXIoKSA9PSBudWxsKSB7XG4gICAgICAgICAgICBLaW52ZXkuVXNlci5sb2dpbldpdGhNSUMoJ2h0dHA6Ly9leGFtcGxlLmNvbScpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHVzZXI6IEtpbnZleS5Vc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVIb21lKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlcjogXCIgKyBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBLaW52ZXkuQmFzZUVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQuIENoZWNrIHlvdXIgS2ludmV5IHNldHRpbmdzLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRlSG9tZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZUhvbWUoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7XG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzUwLFxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19