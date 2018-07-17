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
                            case 1: // NO USER
                                _this.authenticationStatusName = _this.REGISTER_STATUS_NAME;
                                _this.isRegister = true;
                                break;
                            case 2: // Password not match
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFpRjtBQUNqRixzREFBcUQ7QUFFckQsMkNBQWlEO0FBRWpELDhEQUErRDtBQUUvRCwwREFBdUQ7QUFDdkQsOERBQTREO0FBUTVEO0lBWUksd0JBQW9CLE9BQXVCLEVBQ3ZCLElBQVUsRUFDVixXQUF3QixFQUN4QixVQUE2QixFQUM3QixXQUErQjtRQUovQixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBWm5DLHNCQUFpQixHQUFXLE9BQU8sQ0FBQztRQUNwQyx5QkFBb0IsR0FBVyxNQUFNLENBQUM7UUFFOUMseUJBQW9CLEdBQVksS0FBSyxDQUFDO1FBQ3RDLDBCQUFxQixHQUFHLEVBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDO1FBQ3RFLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFRaEMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBRWxDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0IsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUN4QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdEUsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxPQUFPO1FBQXBCLGlCQW1DQztRQWxDRyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFFNUMsSUFBRyxPQUFPLElBQUksSUFBSSxFQUFFO1lBQ2hCLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ3pDLElBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSzt3QkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O3dCQUVoQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQzthQUNOO2lCQUFNO2dCQUNILElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ3RDLElBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO3dCQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7cUJBQ25DO3lCQUFNO3dCQUNILFFBQU8sUUFBUSxDQUFDLElBQUksRUFBRTs0QkFDbEIsS0FBSyxDQUFDLEVBQUUsVUFBVTtnQ0FDZCxLQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDO2dDQUMxRCxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQ0FDdkIsTUFBTTs0QkFDVixLQUFLLENBQUMsRUFBRSxxQkFBcUI7Z0NBQ3pCLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO2dDQUN4QyxNQUFNO3lCQUNiO3FCQUNKO2dCQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNKO2FBQU07WUFDSCxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUN4QztJQUNMLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQUEsaUJBWUM7UUFYRyxJQUFNLFNBQVMsR0FBRyxVQUFDLElBQUk7WUFDbkIsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQUU7WUFFcEMsS0FBSSxDQUFDLHdCQUF3QixHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUN2RCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDLENBQUE7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDekQ7SUFFTCxDQUFDO0lBakZ5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQzswQ0FBYyxpQkFBVTt1REFBYztJQUNqQztRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDOzBDQUFrQixpQkFBVTsyREFBYztJQUY5RCxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNyQyxDQUFDO2lEQWErQixnQ0FBYztZQUNqQixXQUFJO1lBQ0csMkJBQVc7WUFDWixtQ0FBaUI7WUFDaEIsZ0NBQWtCO09BaEIxQyxjQUFjLENBbUYxQjtJQUFELHFCQUFDO0NBQUEsQUFuRkQsSUFtRkM7QUFuRlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lLCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBOZXR3b3JraW5nU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IEhlbHBlcnNTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvaGVscGVycy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJsb2dpbi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKCdsb2dpbkxheW91dCcpIGxvZ2luTGF5b3V0OiBFbGVtZW50UmVmPFN0YWNrTGF5b3V0PjtcbiAgICBAVmlld0NoaWxkKCdzaG93TG9naW5MYXlvdXQnKSBzaG93TG9naW5MYXlvdXQ6IEVsZW1lbnRSZWY8U3RhY2tMYXlvdXQ+O1xuXG4gICAgcHVibGljIHJlYWRvbmx5IExPR0lOX1NUQVRVU19OQU1FOiBzdHJpbmcgPSBcIteU16rXl9eR16hcIjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgUkVHSVNURVJfU1RBVFVTX05BTUU6IHN0cmluZyA9IFwi15TXqNep151cIjtcbiAgICBwdWJsaWMgYXV0aGVudGljYXRpb25TdGF0dXNOYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpc0xvZ2luTGF5b3V0VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25EZXRhaWxzID0ge2VtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiwgbmFtZTogXCJcIiwgY29kZTogXCJcIn07XG4gICAgcHJpdmF0ZSBpc1JlZ2lzdGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlbHBlcnM6IEhlbHBlcnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5ldHdvcmtpbmc6IE5ldHdvcmtpbmdTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwbGljYXRpb246IEFuZHJvaWRBcHBsaWNhdGlvbikge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IHRoaXMuTE9HSU5fU1RBVFVTX05BTUU7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhciA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5jbGFzc05hbWUgPSBcInBhZ2UtbG9naW4tY29udGFpbmVyXCI7XG4gICAgICAgIHRoaXMucGFnZS5zdGF0dXNCYXJTdHlsZSA9IFwiZGFya1wiO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uZXR3b3JraW5nLmNoZWNrTmV0d29yaygpO1xuICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMubmV0d29ya2luZy5pc09ubGluZSlcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0dXNOYW1lID0gdGhpcy5uZXR3b3JraW5nLm5ldHdvcmtTdGF0dXM7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFja1ByZXNzSW5pdCgpO1xuICAgIH1cblxuICAgIGF1dGhlbnRpY2F0ZShpc1ZhbGlkKTogdm9pZCB7XG4gICAgICAgIGxldCB1c2VyOiBVc2VyID0gdGhpcy5hdXRoZW50aWNhdGlvbkRldGFpbHM7XG5cbiAgICAgICAgaWYoaXNWYWxpZCAmJiB1c2VyKSB7XG4gICAgICAgICAgICBpZih0aGlzLmlzUmVnaXN0ZXIgJiYgdXNlci5jb25maXJtUGFzc3dvcmQgPT09IHVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHVzZXIpLnRoZW4odXNlckRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZighdXNlckRhdGEuZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlcnMubmF2aWdhdGUoW1wiaG9tZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRW1haWwgYWxyZWFkeSBleGlzdFwiKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWyFdIEVycm9yIHJlZ2lzdGVyJywgZXJyKTtcbiAgICAgICAgICAgICAgICB9KTsgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHVzZXIpLnRoZW4odXNlckRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZighdXNlckRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGVscGVycy5uYXZpZ2F0ZShbXCJob21lXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCh1c2VyRGF0YS5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiAvLyBOTyBVU0VSXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0dXNOYW1lID0gdGhpcy5SRUdJU1RFUl9TVEFUVVNfTkFNRTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlZ2lzdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiAvLyBQYXNzd29yZCBub3QgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQYXNzd29yZCBvciBlbWFpbCBpcyBpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiB3YXMgdW5zdWNjZXNzZnVsXCIsIGVycik7XG4gICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnRm9ybSBvciB1c2VyIGlzIG5vdCB2YWxpZC4uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYWNrUHJlc3NJbml0KCkge1xuICAgICAgICBjb25zdCBiYWNrRXZlbnQgPSAoYXJncykgPT4ge1xuICAgICAgICAgICAgaWYgKCEhZmFsc2UpIHsgYXJncy5jYW5jZWwgPSB0cnVlOyB9XG5cbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0dXNOYW1lID0gdGhpcy5MT0dJTl9TVEFUVVNfTkFNRTtcbiAgICAgICAgICAgIHRoaXMuaXNSZWdpc3RlciA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ub24oXCJhY3Rpdml0eUJhY2tQcmVzc2VkXCIsIGJhY2tFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufVxuIl19