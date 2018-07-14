"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var application_1 = require("application");
var network_service_1 = require("~/services/network.service");
var login_service_1 = require("~/services/login.service");
var helpers_service_1 = require("~/services/helpers.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(helpers, page, userService, networking, application) {
        this.helpers = helpers;
        this.page = page;
        this.userService = userService;
        this.networking = networking;
        this.application = application;
        this.LOGIN_STATUS_NAME = "התחבר";
        this.REGISTER_STATUS_NAME = "הרשם";
        this.isLoginLayoutVisible = false;
        this.authenticationDetails = { email: "", password: "", name: "", code: "" };
        this.isRegister = false;
        this.authenticationStatusName = this.LOGIN_STATUS_NAME;
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
        this.networking.checkNetwork();
        if (!this.networking.isOnline)
            this.authenticationStatusName = this.networking.networkStatus;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.backPressInit();
    };
    LoginComponent.prototype.authenticate = function (isValid) {
        var _this = this;
        var user = this.authenticationDetails;
        if (isValid && user) {
            if (this.isRegister && user.confirmPassword === user.password) {
                this.userService.register(user).then(function (userData) {
                    if (!userData.error)
                        _this.helpers.navigate(["home"]);
                    else
                        alert("Email already exist");
                }).catch(function (err) {
                    console.log('[!] Error register', err);
                });
            }
            else {
                this.userService.login(user).then(function (userData) {
                    if (!userData.error) {
                        _this.helpers.navigate(["home"]);
                    }
                    else {
                        switch (userData.code) {
                            case 1:// NO USER
                                _this.authenticationStatusName = _this.REGISTER_STATUS_NAME;
                                _this.isRegister = true;
                                break;
                            case 2:// Password not match
                                alert("Password or email is incorrect");
                                break;
                        }
                    }
                }).catch(function (err) {
                    console.log("Login was unsuccessful", err);
                });
            }
        }
        else {
            alert('Form or user is not valid..');
        }
    };
    LoginComponent.prototype.backPressInit = function () {
        var _this = this;
        var backEvent = function (args) {
            if (!!false) {
                args.cancel = true;
            }
            _this.authenticationStatusName = _this.LOGIN_STATUS_NAME;
            _this.isRegister = false;
        };
        if (this.application) {
            this.application.on("activityBackPressed", backEvent);
        }
    };
    tslib_1.__decorate([
        core_1.ViewChild('loginLayout'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "loginLayout", void 0);
    tslib_1.__decorate([
        core_1.ViewChild('showLoginLayout'),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "showLoginLayout", void 0);
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ["login.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [helpers_service_1.HelpersService,
            page_1.Page,
            login_service_1.UserService,
            network_service_1.NetworkingService,
            application_1.AndroidApplication])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFpRjtBQUNqRixzREFBcUQ7QUFFckQsMkNBQWlEO0FBRWpELDhEQUErRDtBQUUvRCwwREFBdUQ7QUFDdkQsOERBQTREO0FBUTVEO0lBWUksd0JBQW9CLE9BQXVCLEVBQ3ZCLElBQVUsRUFDVixXQUF3QixFQUN4QixVQUE2QixFQUM3QixXQUErQjtRQUovQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBWm5DLHNCQUFpQixHQUFXLE9BQU8sQ0FBQztRQUNwQyx5QkFBb0IsR0FBVyxNQUFNLENBQUM7UUFFOUMseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBQ3RDLDBCQUFxQixHQUFHLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBQ3RFLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFRaEMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBRWxDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0Is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QUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMxRCxDQUFDO0lBRUwsQ0FBQztJQWpGeUI7UUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7MENBQWMsaUJBQVU7dURBQWM7SUFDakM7UUFBN0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQzswQ0FBa0IsaUJBQVU7MkRBQWM7SUFGOUQsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDckMsQ0FBQztpREFhK0IsZ0NBQWM7WUFDakIsV0FBSTtZQUNHLDJCQUFXO1lBQ1osbUNBQWlCO1lBQ2hCLGdDQUFrQjtPQWhCMUMsY0FBYyxDQW1GMUI7SUFBRCxxQkFBQztDQUFBLEFBbkZELElBbUZDO0FBbkZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nWm9uZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24gfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgTmV0d29ya2luZ1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9uZXR3b3JrLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2hlbHBlcnMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibG9naW4uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZCgnbG9naW5MYXlvdXQnKSBsb2dpbkxheW91dDogRWxlbWVudFJlZjxTdGFja0xheW91dD47XG4gICAgQFZpZXdDaGlsZCgnc2hvd0xvZ2luTGF5b3V0Jykgc2hvd0xvZ2luTGF5b3V0OiBFbGVtZW50UmVmPFN0YWNrTGF5b3V0PjtcblxuICAgIHB1YmxpYyByZWFkb25seSBMT0dJTl9TVEFUVVNfTkFNRTogc3RyaW5nID0gXCLXlNeq15fXkdeoXCI7XG4gICAgcHVibGljIHJlYWRvbmx5IFJFR0lTVEVSX1NUQVRVU19OQU1FOiBzdHJpbmcgPSBcIteU16jXqdedXCI7XG4gICAgcHVibGljIGF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgaXNMb2dpbkxheW91dFZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uRGV0YWlscyA9IHtlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIG5hbWU6IFwiXCIsIGNvZGU6IFwiXCJ9O1xuICAgIHByaXZhdGUgaXNSZWdpc3RlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoZWxwZXJzOiBIZWxwZXJzU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuZXR3b3JraW5nOiBOZXR3b3JraW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFwcGxpY2F0aW9uOiBBbmRyb2lkQXBwbGljYXRpb24pIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXR1c05hbWUgPSB0aGlzLkxPR0lOX1NUQVRVU19OQU1FO1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuY2xhc3NOYW1lID0gXCJwYWdlLWxvZ2luLWNvbnRhaW5lclwiO1xuICAgICAgICB0aGlzLnBhZ2Uuc3RhdHVzQmFyU3R5bGUgPSBcImRhcmtcIjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubmV0d29ya2luZy5jaGVja05ldHdvcmsoKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCF0aGlzLm5ldHdvcmtpbmcuaXNPbmxpbmUpXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IHRoaXMubmV0d29ya2luZy5uZXR3b3JrU3RhdHVzO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhY2tQcmVzc0luaXQoKTtcbiAgICB9XG5cbiAgICBhdXRoZW50aWNhdGUoaXNWYWxpZCk6IHZvaWQge1xuICAgICAgICBsZXQgdXNlcjogVXNlciA9IHRoaXMuYXV0aGVudGljYXRpb25EZXRhaWxzO1xuXG4gICAgICAgIGlmKGlzVmFsaWQgJiYgdXNlcikge1xuICAgICAgICAgICAgaWYodGhpcy5pc1JlZ2lzdGVyICYmIHVzZXIuY29uZmlybVBhc3N3b3JkID09PSB1c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih1c2VyKS50aGVuKHVzZXJEYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIXVzZXJEYXRhLmVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwZXJzLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVtYWlsIGFscmVhZHkgZXhpc3RcIik7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1shXSBFcnJvciByZWdpc3RlcicsIGVycik7XG4gICAgICAgICAgICAgICAgfSk7ICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih1c2VyKS50aGVuKHVzZXJEYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIXVzZXJEYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlcnMubmF2aWdhdGUoW1wiaG9tZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2godXNlckRhdGEuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gTk8gVVNFUlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IHRoaXMuUkVHSVNURVJfU1RBVFVTX05BTUU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZWdpc3RlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gUGFzc3dvcmQgbm90IG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGFzc3dvcmQgb3IgZW1haWwgaXMgaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gd2FzIHVuc3VjY2Vzc2Z1bFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ0Zvcm0gb3IgdXNlciBpcyBub3QgdmFsaWQuLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmFja1ByZXNzSW5pdCgpIHtcbiAgICAgICAgY29uc3QgYmFja0V2ZW50ID0gKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIGlmICghIWZhbHNlKSB7IGFyZ3MuY2FuY2VsID0gdHJ1ZTsgfVxuXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IHRoaXMuTE9HSU5fU1RBVFVTX05BTUU7XG4gICAgICAgICAgICB0aGlzLmlzUmVnaXN0ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLm9uKFwiYWN0aXZpdHlCYWNrUHJlc3NlZFwiLCBiYWNrRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==