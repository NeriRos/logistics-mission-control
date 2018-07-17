"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var contacts_component_1 = require("~/components/contacts/contacts.component");
var routes = [
    { path: "", component: contacts_component_1.ContactsComponent }
];
var ContactsRoutingModule = /** @class */ (function () {
    function ContactsRoutingModule() {
    }
    ContactsRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ContactsRoutingModule);
    return ContactsRoutingModule;
}());
exports.ContactsRoutingModule = ContactsRoutingModule;
