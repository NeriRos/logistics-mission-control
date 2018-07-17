"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var login_routing_module_1 = require("~/components/login/login-routing.module");
var login_component_1 = require("~/components/login/login.component");
var float_label_component_1 = require("~/components/shared/float-label.component");
var helpers_service_1 = require("~/services/helpers.service");
var login_service_1 = require("~/services/login.service");
var network_service_1 = require("~/services/network.service");
var globals_1 = require("~/shared/globals");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                login_routing_module_1.LoginRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            providers: [login_service_1.UserService, globals_1.Globals, network_service_1.NetworkingService, helpers_service_1.HelpersService],
            declarations: [
                login_component_1.LoginComponent,
                float_label_component_1.FloatLabelComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
