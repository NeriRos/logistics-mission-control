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
            if (this.isRegister) {
                this.userService.register(user).then(function (userData) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFpRjtBQUNqRixzREFBcUQ7QUFFckQsMkNBQWlEO0FBRWpELDhEQUErRDtBQUUvRCwwREFBdUQ7QUFDdkQsOERBQTREO0FBUTVEO0lBWUksd0JBQW9CLE9BQXVCLEVBQ3ZCLElBQVUsRUFDVixXQUF3QixFQUN4QixVQUE2QixFQUM3QixXQUErQjtRQUovQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBWm5DLHNCQUFpQixHQUFXLE9BQU8sQ0FBQztRQUNwQyx5QkFBb0IsR0FBVyxNQUFNLENBQUM7UUFFOUMseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBQ3RDLDBCQUFxQixHQUFHLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBQ3RFLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFRaEMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBRWxDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0Is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LGlCQUFVOzJEQUFjO0lBRjlELGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7aURBYStCLGdDQUFjO1lBQ2pCLFdBQUk7WUFDRywyQkFBVztZQUNaLG1DQUFpQjtZQUNoQixnQ0FBa0I7T0FoQjFDLGNBQWMsQ0E2RTFCO0lBQUQscUJBQUM7Q0FBQSxBQTdFRCxJQTZFQztBQTdFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbmV0d29yay5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgSGVscGVyc1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9oZWxwZXJzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxvZ2luLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoJ2xvZ2luTGF5b3V0JykgbG9naW5MYXlvdXQ6IEVsZW1lbnRSZWY8U3RhY2tMYXlvdXQ+O1xuICAgIEBWaWV3Q2hpbGQoJ3Nob3dMb2dpbkxheW91dCcpIHNob3dMb2dpbkxheW91dDogRWxlbWVudFJlZjxTdGFja0xheW91dD47XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgTE9HSU5fU1RBVFVTX05BTUU6IHN0cmluZyA9IFwi15TXqteX15HXqFwiO1xuICAgIHB1YmxpYyByZWFkb25seSBSRUdJU1RFUl9TVEFUVVNfTkFNRTogc3RyaW5nID0gXCLXlNeo16nXnVwiO1xuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblN0YXR1c05hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIGlzTG9naW5MYXlvdXRWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSB7ZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiLCBuYW1lOiBcIlwiLCBjb2RlOiBcIlwifTtcbiAgICBwcml2YXRlIGlzUmVnaXN0ZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVscGVyczogSGVscGVyc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbmV0d29ya2luZzogTmV0d29ya2luZ1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBsaWNhdGlvbjogQW5kcm9pZEFwcGxpY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0dXNOYW1lID0gdGhpcy5MT0dJTl9TVEFUVVNfTkFNRTtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmNsYXNzTmFtZSA9IFwicGFnZS1sb2dpbi1jb250YWluZXJcIjtcbiAgICAgICAgdGhpcy5wYWdlLnN0YXR1c0JhclN0eWxlID0gXCJkYXJrXCI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5ldHdvcmtpbmcuY2hlY2tOZXR3b3JrKCk7XG4gICAgICAgIFxuICAgICAgICBpZighdGhpcy5uZXR3b3JraW5nLmlzT25saW5lKVxuICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXR1c05hbWUgPSB0aGlzLm5ldHdvcmtpbmcubmV0d29ya1N0YXR1cztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iYWNrUHJlc3NJbml0KCk7XG4gICAgfVxuXG4gICAgYXV0aGVudGljYXRlKGlzVmFsaWQpOiB2b2lkIHtcbiAgICAgICAgbGV0IHVzZXI6IFVzZXIgPSB0aGlzLmF1dGhlbnRpY2F0aW9uRGV0YWlscztcblxuICAgICAgICBpZihpc1ZhbGlkICYmIHVzZXIpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNSZWdpc3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodXNlcikudGhlbih1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVscGVycy5uYXZpZ2F0ZShbXCJob21lXCJdKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWyFdIEVycm9yIHJlZ2lzdGVyJywgZXJyKTtcbiAgICAgICAgICAgICAgICB9KTsgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHVzZXIpLnRoZW4odXNlckRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih1c2VyRGF0YS51c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlcnMubmF2aWdhdGUoW1wiaG9tZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IHRoaXMuUkVHSVNURVJfU1RBVFVTX05BTUU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVnaXN0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiB3YXMgdW5zdWNjZXNzZnVsXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IHRoaXMuUkVHSVNURVJfU1RBVFVTX05BTUU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVnaXN0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnRm9ybSBvciB1c2VyIGlzIG5vdCB2YWxpZC4uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYWNrUHJlc3NJbml0KCkge1xuICAgICAgICBjb25zdCBiYWNrRXZlbnQgPSAoYXJncykgPT4ge1xuICAgICAgICAgICAgaWYgKCEhZmFsc2UpIHsgYXJncy5jYW5jZWwgPSB0cnVlOyB9XG5cbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0dXNOYW1lID0gdGhpcy5MT0dJTl9TVEFUVVNfTkFNRTtcbiAgICAgICAgICAgIHRoaXMuaXNSZWdpc3RlciA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ub24oXCJhY3Rpdml0eUJhY2tQcmVzc2VkXCIsIGJhY2tFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuIl19