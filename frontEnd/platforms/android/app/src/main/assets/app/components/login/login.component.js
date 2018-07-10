"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var application_1 = require("tns-core-modules/application/application");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlGO0FBQ2pGLHNEQUFxRDtBQUVyRCx3RUFBOEU7QUFFOUUsOERBQStEO0FBRS9ELDBEQUF1RDtBQUN2RCw4REFBNEQ7QUFRNUQ7SUFZSSx3QkFBb0IsT0FBdUIsRUFDdkIsSUFBVSxFQUNWLFdBQXdCLEVBQ3hCLFVBQTZCLEVBQzdCLFdBQStCO1FBSi9CLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFabkMsc0JBQWlCLEdBQVcsT0FBTyxDQUFDO1FBQ3BDLHlCQUFvQixHQUFXLE1BQU0sQ0FBQztRQUU5Qyx5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDdEMsMEJBQXFCLEdBQUcsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFZLEtBQUssQ0FBQztRQVFoQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7UUFFbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUvQixF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QUFVO3VEQUFjO0lBQ2pDO1FBQTdCLGdCQUFTLENBQUMsaUJBQWlCLENBQUM7a0NBQWtCLGlCQUFVOzJEQUFjO0lBRjlELGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7eUNBYStCLGdDQUFjO1lBQ2pCLFdBQUk7WUFDRywyQkFBVztZQUNaLG1DQUFpQjtZQUNoQixnQ0FBa0I7T0FoQjFDLGNBQWMsQ0E4RTFCO0lBQUQscUJBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgTmV0d29ya2luZ1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9uZXR3b3JrLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2hlbHBlcnMuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wibG9naW4uY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZCgnbG9naW5MYXlvdXQnKSBsb2dpbkxheW91dDogRWxlbWVudFJlZjxTdGFja0xheW91dD47XG4gICAgQFZpZXdDaGlsZCgnc2hvd0xvZ2luTGF5b3V0Jykgc2hvd0xvZ2luTGF5b3V0OiBFbGVtZW50UmVmPFN0YWNrTGF5b3V0PjtcblxuICAgIHB1YmxpYyByZWFkb25seSBMT0dJTl9TVEFUVVNfTkFNRTogc3RyaW5nID0gXCLXlNeq15fXkdeoXCI7XG4gICAgcHVibGljIHJlYWRvbmx5IFJFR0lTVEVSX1NUQVRVU19OQU1FOiBzdHJpbmcgPSBcIteU16jXqdedXCI7XG4gICAgcHVibGljIGF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgaXNMb2dpbkxheW91dFZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uRGV0YWlscyA9IHtlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIG5hbWU6IFwiXCIsIGNvZGU6IFwiXCJ9O1xuICAgIHByaXZhdGUgaXNSZWdpc3RlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoZWxwZXJzOiBIZWxwZXJzU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBuZXR3b3JraW5nOiBOZXR3b3JraW5nU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGFwcGxpY2F0aW9uOiBBbmRyb2lkQXBwbGljYXRpb24pIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXR1c05hbWUgPSB0aGlzLkxPR0lOX1NUQVRVU19OQU1FO1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuY2xhc3NOYW1lID0gXCJwYWdlLWxvZ2luLWNvbnRhaW5lclwiO1xuICAgICAgICB0aGlzLnBhZ2Uuc3RhdHVzQmFyU3R5bGUgPSBcImRhcmtcIjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubmV0d29ya2luZy5jaGVja05ldHdvcmsoKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCF0aGlzLm5ldHdvcmtpbmcuaXNPbmxpbmUpXG4gICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IHRoaXMubmV0d29ya2luZy5uZXR3b3JrU3RhdHVzO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJhY2tQcmVzc0luaXQoKTtcbiAgICB9XG5cbiAgICBhdXRoZW50aWNhdGUoaXNWYWxpZCk6IHZvaWQge1xuICAgICAgICBsZXQgdXNlcjogVXNlciA9IHRoaXMuYXV0aGVudGljYXRpb25EZXRhaWxzO1xuXG4gICAgICAgIGlmKGlzVmFsaWQgJiYgdXNlcikge1xuICAgICAgICAgICAgaWYodGhpcy5pc1JlZ2lzdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih1c2VyKS50aGVuKHVzZXJEYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlclwiLCB1c2VyRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVscGVycy5uYXZpZ2F0ZShbXCJob21lXCJdKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWyFdIEVycm9yIHJlZ2lzdGVyJywgZXJyKTtcbiAgICAgICAgICAgICAgICB9KTsgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHVzZXIpLnRoZW4odXNlckRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih1c2VyRGF0YS51c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlcnMubmF2aWdhdGUoW1wiaG9tZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IHRoaXMuUkVHSVNURVJfU1RBVFVTX05BTUU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVnaXN0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiB3YXMgdW5zdWNjZXNzZnVsXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IHRoaXMuUkVHSVNURVJfU1RBVFVTX05BTUU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVnaXN0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnRm9ybSBvciB1c2VyIGlzIG5vdCB2YWxpZC4uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYWNrUHJlc3NJbml0KCkge1xuICAgICAgICBjb25zdCBiYWNrRXZlbnQgPSAoYXJncykgPT4ge1xuICAgICAgICAgICAgaWYgKCEhZmFsc2UpIHsgYXJncy5jYW5jZWwgPSB0cnVlOyB9XG5cbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0dXNOYW1lID0gdGhpcy5MT0dJTl9TVEFUVVNfTkFNRTtcbiAgICAgICAgICAgIHRoaXMuaXNSZWdpc3RlciA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ub24oXCJhY3Rpdml0eUJhY2tQcmVzc2VkXCIsIGJhY2tFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuIl19