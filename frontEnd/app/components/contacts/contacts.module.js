"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var contacts_routing_module_1 = require("~/components/contacts/contacts-routing.module");
var contacts_component_1 = require("~/components/contacts/contacts.component");
var fab_component_1 = require("~/components/contacts/components/fab/fab.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyRDtBQUUzRCxzREFBdUU7QUFFdkUseUZBQXNGO0FBQ3RGLCtFQUE2RTtBQUM3RSxvRkFBa0Y7QUFDbEYsaUZBQTJFO0FBRTNFLGdFQUE4RDtBQUM5RCw4REFBNEQ7QUFvQjVEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBbEIxQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7Z0JBQ3JCLHNDQUFlO2FBQ2hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLHNDQUFpQjtnQkFDakIsNEJBQVk7YUFDYjtZQUNELFNBQVMsRUFBRTtnQkFDUCxrQ0FBZTtnQkFDZixnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDUCx1QkFBZ0I7YUFDakI7U0FDRixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbnRhY3RzUm91dGluZ01vZHVsZSB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBDb250YWN0c0NvbXBvbmVudCB9IGZyb20gJ34vY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFiQ29tcG9uZW50IH0gZnJvbSAnfi9jb21wb25lbnRzL2NvbnRhY3RzL2NvbXBvbmVudHMvZmFiL2ZhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aW9uQmFyTW9kdWxlIH0gZnJvbSAnfi9jb21wb25lbnRzL3NoYXJlZC9hY3Rpb24tYmFyLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbnRhY3RzU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2NvbnRhY3RzLnNlcnZpY2VcIjtcbmltcG9ydCB7IEhlbHBlcnNTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlcy9oZWxwZXJzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgIENvbnRhY3RzUm91dGluZ01vZHVsZSxcbiAgICBBY3Rpb25CYXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ29udGFjdHNDb21wb25lbnQsXG4gICAgRmFiQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgICAgQ29udGFjdHNTZXJ2aWNlLFxuICAgICAgSGVscGVyc1NlcnZpY2VcbiAgXSxcbiAgc2NoZW1hczogW1xuICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0c01vZHVsZSB7IH1cbiJdfQ==