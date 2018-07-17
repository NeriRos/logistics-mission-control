"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var application_1 = require("application");
var page_1 = require("tns-core-modules/ui/page/page");
var helpers_service_1 = require("~/services/helpers.service");
var login_service_1 = require("~/services/login.service");
var network_service_1 = require("~/services/network.service");
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
        this.authenticationDetails = { email: "", password: "", name: "", code: "", confirmPassword: "" };
        this.isRegister = false;
        this.authenticationStatusName = this.LOGIN_STATUS_NAME;
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
        this.networking.checkNetwork();
        if (!this.networking.isOnline) {
            this.authenticationStatusName = this.networking.networkStatus;
        }
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
                    if (!userData.error) {
                        _this.helpers.navigate(["home"]);
                    }
                    else {
                        alert("Email already exist");
                    }
                }).catch(function (err) {
                    console.log("[!] Error register", err);
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
            alert("Form or user is not valid..");
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
        core_1.ViewChild("loginLayout"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "loginLayout", void 0);
    tslib_1.__decorate([
        core_1.ViewChild("showLoginLayout"),
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
