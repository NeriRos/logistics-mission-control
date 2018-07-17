"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var fab_component_1 = require("~/components/contacts/components/fab/fab.component");
var contacts_routing_module_1 = require("~/components/contacts/contacts-routing.module");
var contacts_component_1 = require("~/components/contacts/contacts.component");
var action_bar_component_1 = require("~/components/shared/action-bar.component");
var contacts_service_1 = require("~/services/contacts.service");
var helpers_service_1 = require("~/services/helpers.service");
var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                contacts_routing_module_1.ContactsRoutingModule,
                action_bar_component_1.ActionBarModule
            ],
            declarations: [
                contacts_component_1.ContactsComponent,
                fab_component_1.FabComponent
            ],
            providers: [
                contacts_service_1.ContactsService,
                helpers_service_1.HelpersService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ContactsModule);
    return ContactsModule;
}());
exports.ContactsModule = ContactsModule;
