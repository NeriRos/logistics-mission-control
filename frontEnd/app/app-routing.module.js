"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var logged_in_lazy_load_guard_1 = require("~/logged-in-lazy-load.guard");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", loadChildren: "./components/login/login.module#LoginModule" },
    { path: "home", loadChildren: "./components/home/home.module#HomeModule", canLoad: [logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard] },
    { path: "chat", loadChildren: "./components/chat/chat.module#ChatModule", canLoad: [logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard] },
    // tslint:disable-next-line:max-line-length
    { path: "contacts", loadChildren: "./components/contacts/contacts.module#ContactsModule", canLoad: [logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
