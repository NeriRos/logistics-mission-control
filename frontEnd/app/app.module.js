"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var application_1 = require("tns-core-modules/application/application");
var logged_in_lazy_load_guard_1 = require("~/logged-in-lazy-load.guard");
var app_routing_module_1 = require("~/app-routing.module");
var app_component_1 = require("~/app.component");
var globals_1 = require("~/shared/globals");
var interceptor_service_1 = require("~/services/interceptor.service");
var login_service_1 = require("~/services/login.service");
var network_service_1 = require("~/services/network.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                http_1.HttpClientModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard,
                application_1.AndroidApplication,
                login_service_1.UserService,
                network_service_1.NetworkingService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: interceptor_service_1.Interceptor,
                    multi: true
                },
                globals_1.Globals
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
