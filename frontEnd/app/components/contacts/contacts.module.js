"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var contacts_routing_module_1 = require("~/components/contacts/contacts-routing.module");
var contacts_component_1 = require("~/components/contacts/contacts.component");
var login_service_1 = require("~/services/login.service");
var fab_component_1 = require("~/components/contacts/components/fab/fab.component");
var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                contacts_routing_module_1.ContactsRoutingModule
            ],
            declarations: [
                contacts_component_1.ContactsComponent,
                fab_component_1.FabComponent
            ],
            providers: [
                login_service_1.UserService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ContactsModule);
    return ContactsModule;
}());
exports.ContactsModule = ContactsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBRTNELHNEQUF1RTtBQUV2RSx5RkFBc0Y7QUFDdEYsK0VBQTZFO0FBRTdFLDBEQUF1RDtBQUN2RCxvRkFBa0Y7QUFrQmxGO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBaEIxQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osc0NBQWlCO2dCQUNqQiw0QkFBWTthQUNiO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDJCQUFXO2FBQ2Q7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb250YWN0c1JvdXRpbmdNb2R1bGUgfSBmcm9tICd+L2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ29udGFjdHNDb21wb25lbnQgfSBmcm9tICd+L2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGYWJDb21wb25lbnQgfSBmcm9tICd+L2NvbXBvbmVudHMvY29udGFjdHMvY29tcG9uZW50cy9mYWIvZmFiLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgQ29udGFjdHNSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbnRhY3RzQ29tcG9uZW50LFxuICAgIEZhYkNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAgIFVzZXJTZXJ2aWNlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdHNNb2R1bGUgeyB9XG4iXX0=