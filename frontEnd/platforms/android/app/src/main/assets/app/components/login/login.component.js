"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var network_service_1 = require("~/services/network.service");
var login_service_1 = require("~/services/login.service");
var helpers_service_1 = require("~/services/helpers.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(helpers, page, userService, networking) {
        this.helpers = helpers;
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
                        _this.authenticationStatusName = "הרשם";
                        _this.isRegister = true;
                    }
                }).catch(function (err) {
                    console.log("Login was unsuccessful", err);
                    if (err instanceof SyntaxError) {
                        _this.authenticationStatusName = "הרשם";
                        _this.isRegister = true;
                    }
                });
            }
        }
        else {
            alert('Form or user is not valid..');
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
            network_service_1.NetworkingService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBRXpFLGlEQUFnRDtBQUdoRCw4REFBK0Q7QUFFL0QsMERBQXVEO0FBQ3ZELDhEQUE0RDtBQVE1RDtJQVdJLHdCQUFvQixPQUF1QixFQUN2QixJQUFVLEVBQ1YsV0FBd0IsRUFDeEIsVUFBNkI7UUFIN0IsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBVDFDLDZCQUF3QixHQUFXLE9BQU8sQ0FBQztRQUMxQyx5QkFBb0IsR0FBWSxLQUFLLENBQUM7UUFDdEMsMEJBQXFCLEdBQUcsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFZLEtBQUssQ0FBQztRQU9oQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1FBRWxDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFL0IsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUFDdEUsQ0FBQztJQUVELHFDQUFZLEdBQVosVUFBYSxPQUFPO1FBQXBCLGlCQThCQztRQTdCRyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFFNUMsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNsQyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtvQkFDdEMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ2YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLEtBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUM7d0JBQ3ZDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUMzQixDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDM0MsRUFBRSxDQUFBLENBQUMsR0FBRyxZQUFZLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQzVCLEtBQUksQ0FBQyx3QkFBd0IsR0FBRyxNQUFNLENBQUM7d0JBQ3ZDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUMzQixDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBdER5QjtRQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FBYyxpQkFBVTt1REFBYztJQUNqQztRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDO2tDQUFrQixpQkFBVTsyREFBYztJQUg5RCxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNyQyxDQUFDO3lDQVkrQixnQ0FBYztZQUNqQixXQUFJO1lBQ0csMkJBQVc7WUFDWixtQ0FBaUI7T0FkeEMsY0FBYyxDQXlEMUI7SUFBRCxxQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQvc3RhY2stbGF5b3V0XCI7XG5cbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbmV0d29yay5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgSGVscGVyc1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9oZWxwZXJzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImxvZ2luLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gICAgQFZpZXdDaGlsZCgnbG9naW5MYXlvdXQnKSBsb2dpbkxheW91dDogRWxlbWVudFJlZjxTdGFja0xheW91dD47XG4gICAgQFZpZXdDaGlsZCgnc2hvd0xvZ2luTGF5b3V0Jykgc2hvd0xvZ2luTGF5b3V0OiBFbGVtZW50UmVmPFN0YWNrTGF5b3V0PjtcblxuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvblN0YXR1c05hbWU6IHN0cmluZyA9IFwi15TXqteX15HXqFwiO1xuICAgIHByaXZhdGUgaXNMb2dpbkxheW91dFZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uRGV0YWlscyA9IHtlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIsIG5hbWU6IFwiXCIsIGNvZGU6IFwiXCJ9O1xuICAgIHByaXZhdGUgaXNSZWdpc3RlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlbHBlcnM6IEhlbHBlcnNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5ldHdvcmtpbmc6IE5ldHdvcmtpbmdTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZFNwYW5VbmRlclN0YXR1c0JhciA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5jbGFzc05hbWUgPSBcInBhZ2UtbG9naW4tY29udGFpbmVyXCI7XG4gICAgICAgIHRoaXMucGFnZS5zdGF0dXNCYXJTdHlsZSA9IFwiZGFya1wiO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uZXR3b3JraW5nLmNoZWNrTmV0d29yaygpO1xuICAgICAgICBcbiAgICAgICAgaWYoIXRoaXMubmV0d29ya2luZy5pc09ubGluZSlcbiAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TdGF0dXNOYW1lID0gdGhpcy5uZXR3b3JraW5nLm5ldHdvcmtTdGF0dXM7XG4gICAgfVxuXG4gICAgYXV0aGVudGljYXRlKGlzVmFsaWQpIHtcbiAgICAgICAgbGV0IHVzZXI6IFVzZXIgPSB0aGlzLmF1dGhlbnRpY2F0aW9uRGV0YWlscztcblxuICAgICAgICBpZihpc1ZhbGlkICYmIHVzZXIpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuaXNSZWdpc3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodXNlcikudGhlbih1c2VyRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJcIiwgdXNlckRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlbHBlcnMubmF2aWdhdGUoW1wiaG9tZVwiXSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1shXSBFcnJvciByZWdpc3RlcicsIGVycik7XG4gICAgICAgICAgICAgICAgfSk7ICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih1c2VyKS50aGVuKHVzZXJEYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlckRhdGEudXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWxwZXJzLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblN0YXR1c05hbWUgPSBcIteU16jXqdedXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVnaXN0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiB3YXMgdW5zdWNjZXNzZnVsXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU3RhdHVzTmFtZSA9IFwi15TXqNep151cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZWdpc3RlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdGb3JtIG9yIHVzZXIgaXMgbm90IHZhbGlkLi4nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==