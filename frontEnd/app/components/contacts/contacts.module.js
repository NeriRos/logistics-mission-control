"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var contacts_routing_module_1 = require("~/components/contacts/contacts-routing.module");
var contacts_component_1 = require("~/components/contacts/contacts.component");
var fab_component_1 = require("~/components/contacts/components/fab/fab.component");
var contacts_service_1 = require("~/services/contacts.service");
var helpers_service_1 = require("~/services/helpers.service");
var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                contacts_routing_module_1.ContactsRoutingModule
            ],
            declarations: [
                contacts_component_1.ContactsComponent,
                fab_component_1.FabComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyRDtBQUUzRCxzREFBdUU7QUFFdkUseUZBQXNGO0FBQ3RGLCtFQUE2RTtBQUM3RSxvRkFBa0Y7QUFFbEYsZ0VBQThEO0FBQzlELDhEQUE0RDtBQW9CNUQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFsQjFCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLCtDQUFxQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDWixzQ0FBaUI7Z0JBQ2pCLDRCQUFZO2FBRWI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asa0NBQWU7Z0JBQ2YsZ0NBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb250YWN0c1JvdXRpbmdNb2R1bGUgfSBmcm9tICd+L2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ29udGFjdHNDb21wb25lbnQgfSBmcm9tICd+L2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50JztcbmltcG9ydCB7IEZhYkNvbXBvbmVudCB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWN0cy9jb21wb25lbnRzL2ZhYi9mYWIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29udGFjdHNTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvY29udGFjdHMuc2VydmljZVwiO1xuaW1wb3J0IHsgSGVscGVyc1NlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2VzL2hlbHBlcnMuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgQ29udGFjdHNSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENvbnRhY3RzQ29tcG9uZW50LFxuICAgIEZhYkNvbXBvbmVudCxcbiAgICBcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgICBDb250YWN0c1NlcnZpY2UsXG4gICAgICBIZWxwZXJzU2VydmljZVxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RzTW9kdWxlIHsgfVxuIl19