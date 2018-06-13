"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var network_service_1 = require("~/services/network.service");
var login_service_1 = require("~/components/login/login.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_routerExtensions, zone, page, userService, networking) {
        this._routerExtensions = _routerExtensions;
        this.zone = zone;
        this.page = page;
        this.userService = userService;
        this.networking = networking;
        this.authenticationStatusName = "התחבר";
        this.isLoginLayoutVisible = false;
        this.authenticationDetails = { email: "", password: "", name: "", code: "" };
        this.isRegister = false;
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
        this.networking.checkNetwork();
        if (!this.networking.isOnline)
            this.authenticationStatusName = this.networking.networkStatus;
    }
    LoginComponent.prototype.authenticate = function (isValid) {
        var _this = this;
        var user = this.authenticationDetails;
        var isUser = !!user;
        if (isValid && isUser) {
            if (this.isRegister) {
                this.userService.register(user).then(function (userData) {
                    console.log("register", userData);
                    _this.navigateHome();
                }).catch(function (err) {
                    console.log('[!] Error register', err);
                });
            }
            else {
                this.userService.login(user).then(function (userData) {
                    console.log("login", userData);
                    _this.navigateHome();
                }).catch(function (err) {
                    _this.authenticationStatusName = "הרשם";
                    _this.isRegister = true;
                });
            }
        }
        else {
            alert('Form or user is not valid..');
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
    __decorate([
        core_1.ViewChild('loginLayout'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "loginLayout", void 0);
    __decorate([
        core_1.ViewChild('showLoginLayout'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "showLoginLayout", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ["login.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            core_1.NgZone,
            page_1.Page,
            login_service_1.UserService,
            network_service_1.Networking])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLHNEQUErRDtBQUMvRCxpREFBZ0Q7QUFHaEQsOERBQXdEO0FBRXhELGtFQUErRDtBQVEvRDtJQVdJLHdCQUFvQixpQkFBbUMsRUFDbkMsSUFBWSxFQUNaLElBQVUsRUFDVixXQUF3QixFQUN4QixVQUFzQjtRQUp0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVZuQyw2QkFBd0IsR0FBVyxPQUFPLENBQUM7UUFDMUMseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBQ3RDLDBCQUFxQixHQUFHLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBQ3RFLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFRaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUVsQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRS9CLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3RFLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsT0FBTztRQUFwQixpQkF3QkM7UUF2QkcsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQzVDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFcEIsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNsQyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtvQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQy9CLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDeEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztvQkFDUixLQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDO29CQUN2QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNMLENBQUM7SUFFTyxxQ0FBWSxHQUFwQjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDVixLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RDLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFFBQVEsRUFBRSxHQUFHO29CQUNiLEtBQUssRUFBRSxNQUFNO2lCQUNoQjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9EeUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7a0NBQWMsaUJBQVU7dURBQWM7SUFDakM7UUFBN0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrQ0FBa0IsaUJBQVU7MkRBQWM7SUFIOUQsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDckMsQ0FBQzt5Q0FZeUMseUJBQWdCO1lBQzdCLGFBQU07WUFDTixXQUFJO1lBQ0csMkJBQVc7WUFDWiw0QkFBVTtPQWZqQyxjQUFjLENBa0UxQjtJQUFELHFCQUFDO0NBQUEsQUFsRUQsSUFrRUM7QUFsRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXRcIjtcblxuaW1wb3J0IHsgTmV0d29ya2luZyB9IGZyb20gXCJ+L3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L2NvbXBvbmVudHMvbG9naW4vbG9naW4uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibG9naW4uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG5cbiAgICBAVmlld0NoaWxkKCdsb2dpbkxheW91dCcpIGxvZ2luTGF5b3V0OiBFbGVtZW50UmVmPFN0YWNrTGF5b3V0PjtcbiAgICBAVmlld0NoaWxkKCdzaG93TG9naW5MYXlvdXQnKSBzaG93TG9naW5MYXlvdXQ6IEVsZW1lbnRSZWY8U3RhY2tMYXlvdXQ+O1xuXG4gICAgcHVibGljIGF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZTogc3RyaW5nID0gXCLXlNeq15fXkdeoXCI7XG4gICAgcHJpdmF0ZSBpc0xvZ2luTGF5b3V0VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25EZXRhaWxzID0ge2VtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiwgbmFtZTogXCJcIiwgY29kZTogXCJcIn07XG4gICAgcHJpdmF0ZSBpc1JlZ2lzdGVyOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbmV0d29ya2luZzogTmV0d29ya2luZykge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuY2xhc3NOYW1lID0gXCJwYWdlLWxvZ2luLWNvbnRhaW5lclwiO1xuICAgICAgICB0aGlzLnBhZ2Uuc3RhdHVzQmFyU3R5bGUgPSBcImRhcmtcIjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubmV0d29ya2luZy5jaGVja05ldHdvcmsoKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCF0aGlzLm5ldHdvcmtpbmcuaXNPbmxpbmUpXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IHRoaXMubmV0d29ya2luZy5uZXR3b3JrU3RhdHVzO1xuICAgIH1cblxuICAgIGF1dGhlbnRpY2F0ZShpc1ZhbGlkKSB7XG4gICAgICAgIGxldCB1c2VyOiBVc2VyID0gdGhpcy5hdXRoZW50aWNhdGlvbkRldGFpbHM7XG4gICAgICAgIGxldCBpc1VzZXIgPSAhIXVzZXI7XG5cbiAgICAgICAgaWYoaXNWYWxpZCAmJiBpc1VzZXIpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNSZWdpc3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodXNlcikudGhlbih1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJcIiwgdXNlckRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlSG9tZSgpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbIV0gRXJyb3IgcmVnaXN0ZXInLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0pOyAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odXNlcikudGhlbih1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW5cIiwgdXNlckRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlSG9tZSgpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0dXNOYW1lID0gXCLXlNeo16nXnVwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVnaXN0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ0Zvcm0gb3IgdXNlciBpcyBub3QgdmFsaWQuLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZUhvbWUoKSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7XG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzUwLFxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19