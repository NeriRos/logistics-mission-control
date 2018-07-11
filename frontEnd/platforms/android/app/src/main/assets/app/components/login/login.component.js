"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            if (this.isRegister) {
                this.userService.register(user).then(function (userData) {
                    console.log("register", userData);
                    _this.helpers.navigate(["home"]);
                }).catch(function (err) {
                    console.log('[!] Error register', err);
                });
            }
            else {
                this.userService.login(user).then(function (userData) {
                    if (userData.user) {
                        _this.helpers.navigate(["home"]);
                    }
                    else {
                        _this.authenticationStatusName = _this.REGISTER_STATUS_NAME;
                        _this.isRegister = true;
                    }
                }).catch(function (err) {
                    console.log("Login was unsuccessful", err);
                    if (err instanceof SyntaxError) {
                        _this.authenticationStatusName = _this.REGISTER_STATUS_NAME;
                        _this.isRegister = true;
                    }
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
        __metadata("design:paramtypes", [helpers_service_1.HelpersService,
            page_1.Page,
            login_service_1.UserService,
            network_service_1.NetworkingService,
            application_1.AndroidApplication])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlGO0FBQ2pGLHNEQUFxRDtBQUVyRCwyQ0FBaUQ7QUFFakQsOERBQStEO0FBRS9ELDBEQUF1RDtBQUN2RCw4REFBNEQ7QUFRNUQ7SUFZSSx3QkFBb0IsT0FBdUIsRUFDdkIsSUFBVSxFQUNWLFdBQXdCLEVBQ3hCLFVBQTZCLEVBQzdCLFdBQStCO1FBSi9CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFabkMsc0JBQWlCLEdBQVcsT0FBTyxDQUFDO1FBQ3BDLHlCQUFvQixHQUFXLE1BQU0sQ0FBQztRQUU5Qyx5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDdEMsMEJBQXFCLEdBQUcsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFZLEtBQUssQ0FBQztRQVFoQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFFbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUvQixF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QUFVO3VEQUFjO0lBQ2pDO1FBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7a0NBQWtCLGlCQUFVOzJEQUFjO0lBRjlELGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7eUNBYStCLGdDQUFjO1lBQ2pCLFdBQUk7WUFDRywyQkFBVztZQUNaLG1DQUFpQjtZQUNoQixnQ0FBa0I7T0FoQjFDLGNBQWMsQ0E4RTFCO0lBQUQscUJBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbmV0d29yay5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgSGVscGVyc1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9oZWxwZXJzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxvZ2luLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoJ2xvZ2luTGF5b3V0JykgbG9naW5MYXlvdXQ6IEVsZW1lbnRSZWY8U3RhY2tMYXlvdXQ+O1xuICAgIEBWaWV3Q2hpbGQoJ3Nob3dMb2dpbkxheW91dCcpIHNob3dMb2dpbkxheW91dDogRWxlbWVudFJlZjxTdGFja0xheW91dD47XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgTE9HSU5fU1RBVFVTX05BTUU6IHN0cmluZyA9IFwi15TXqteX15HXqFwiO1xuICAgIHB1YmxpYyByZWFkb25seSBSRUdJU1RFUl9TVEFUVVNfTkFNRTogc3RyaW5nID0gXCLXlNeo16nXnVwiO1xuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblN0YXR1c05hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIGlzTG9naW5MYXlvdXRWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSB7ZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiLCBuYW1lOiBcIlwiLCBjb2RlOiBcIlwifTtcbiAgICBwcml2YXRlIGlzUmVnaXN0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVscGVyczogSGVscGVyc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbmV0d29ya2luZzogTmV0d29ya2luZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBsaWNhdGlvbjogQW5kcm9pZEFwcGxpY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0dXNOYW1lID0gdGhpcy5MT0dJTl9TVEFUVVNfTkFNRTtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmNsYXNzTmFtZSA9IFwicGFnZS1sb2dpbi1jb250YWluZXJcIjtcbiAgICAgICAgdGhpcy5wYWdlLnN0YXR1c0JhclN0eWxlID0gXCJkYXJrXCI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5ldHdvcmtpbmcuY2hlY2tOZXR3b3JrKCk7XG4gICAgICAgIFxuICAgICAgICBpZighdGhpcy5uZXR3b3JraW5nLmlzT25saW5lKVxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXR1c05hbWUgPSB0aGlzLm5ldHdvcmtpbmcubmV0d29ya1N0YXR1cztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYWNrUHJlc3NJbml0KCk7XG4gICAgfVxuXG4gICAgYXV0aGVudGljYXRlKGlzVmFsaWQpOiB2b2lkIHtcbiAgICAgICAgbGV0IHVzZXI6IFVzZXIgPSB0aGlzLmF1dGhlbnRpY2F0aW9uRGV0YWlscztcblxuICAgICAgICBpZihpc1ZhbGlkICYmIHVzZXIpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNSZWdpc3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodXNlcikudGhlbih1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJcIiwgdXNlckRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlcnMubmF2aWdhdGUoW1wiaG9tZVwiXSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1shXSBFcnJvciByZWdpc3RlcicsIGVycik7XG4gICAgICAgICAgICAgICAgfSk7ICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih1c2VyKS50aGVuKHVzZXJEYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlckRhdGEudXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwZXJzLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXR1c05hbWUgPSB0aGlzLlJFR0lTVEVSX1NUQVRVU19OQU1FO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlZ2lzdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9naW4gd2FzIHVuc3VjY2Vzc2Z1bFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICBpZihlcnIgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXR1c05hbWUgPSB0aGlzLlJFR0lTVEVSX1NUQVRVU19OQU1FO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlZ2lzdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ0Zvcm0gb3IgdXNlciBpcyBub3QgdmFsaWQuLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmFja1ByZXNzSW5pdCgpIHtcbiAgICAgICAgY29uc3QgYmFja0V2ZW50ID0gKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIGlmICghIWZhbHNlKSB7IGFyZ3MuY2FuY2VsID0gdHJ1ZTsgfVxuXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IHRoaXMuTE9HSU5fU1RBVFVTX05BTUU7XG4gICAgICAgICAgICB0aGlzLmlzUmVnaXN0ZXIgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLm9uKFwiYWN0aXZpdHlCYWNrUHJlc3NlZFwiLCBiYWNrRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==