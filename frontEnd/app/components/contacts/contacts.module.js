"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var contacts_routing_module_1 = require("~/components/contacts/contacts-routing.module");
var contacts_component_1 = require("~/components/contacts/contacts.component");
var login_service_1 = require("~/services/login.service");
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
                contacts_component_1.ContactsComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBRTNELHNEQUF1RTtBQUV2RSx5RkFBc0Y7QUFDdEYsK0VBQTZFO0FBRTdFLDBEQUF1RDtBQWlCdkQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFmMUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGlDQUF3QjtnQkFDeEIsK0NBQXFCO2FBQ3RCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLHNDQUFpQjthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwyQkFBVzthQUNkO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgQ29udGFjdHNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnfi9jb21wb25lbnRzL2NvbnRhY3RzL2NvbnRhY3RzLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IENvbnRhY3RzQ29tcG9uZW50IH0gZnJvbSAnfi9jb21wb25lbnRzL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgIENvbnRhY3RzUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb250YWN0c0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAgIFVzZXJTZXJ2aWNlXG4gIF0sXG4gIHNjaGVtYXM6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdHNNb2R1bGUgeyB9XG4iXX0=