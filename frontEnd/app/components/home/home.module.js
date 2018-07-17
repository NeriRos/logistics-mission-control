"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var home_routing_module_1 = require("~/components/home/home-routing.module");
var home_component_1 = require("~/components/home/home.component");
var action_bar_component_1 = require("~/components/shared/action-bar.component");
var helpers_service_1 = require("~/services/helpers.service");
var login_service_1 = require("~/services/login.service");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                home_routing_module_1.HomeRoutingModule,
                action_bar_component_1.ActionBarModule
            ],
            declarations: [
                home_component_1.HomeComponent
            ],
            providers: [
                login_service_1.UserService,
                helpers_service_1.HelpersService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
