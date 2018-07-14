"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var contacts_routing_module_1 = require("~/components/contacts/contacts-routing.module");
var contacts_component_1 = require("~/components/contacts/contacts.component");
var login_service_1 = require("~/services/login.service");
var fab_component_1 = require("~/components/contacts/components/fab/fab.component");
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
                login_service_1.UserService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyRDtBQUUzRCxzREFBdUU7QUFFdkUseUZBQXNGO0FBQ3RGLCtFQUE2RTtBQUU3RSwwREFBdUQ7QUFDdkQsb0ZBQWtGO0FBQ2xGLDhEQUE0RDtBQW9CNUQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFsQjFCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLCtDQUFxQjthQUN0QjtZQUNELFlBQVksRUFBRTtnQkFDWixzQ0FBaUI7Z0JBQ2pCLDRCQUFZO2FBRWI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMkJBQVc7Z0JBQ1gsZ0NBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb250YWN0c1JvdXRpbmdNb2R1bGUgfSBmcm9tICd+L2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ29udGFjdHNDb21wb25lbnQgfSBmcm9tICd+L2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGYWJDb21wb25lbnQgfSBmcm9tICd+L2NvbXBvbmVudHMvY29udGFjdHMvY29tcG9uZW50cy9mYWIvZmFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gJ34vc2VydmljZXMvaGVscGVycy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBDb250YWN0c1JvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29udGFjdHNDb21wb25lbnQsXG4gICAgRmFiQ29tcG9uZW50LFxuICAgIFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgSGVscGVyc1NlcnZpY2VcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0c01vZHVsZSB7IH1cbiJdfQ==