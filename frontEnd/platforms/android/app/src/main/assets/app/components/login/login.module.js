"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var login_routing_module_1 = require("~/components/login/login-routing.module");
var login_component_1 = require("~/components/login/login.component");
var float_label_component_1 = require("~/components/shared/float-label.component");
var login_service_1 = require("~/services/login.service");
var network_service_1 = require("~/services/network.service");
var helpers_service_1 = require("~/services/helpers.service");
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
                float_label_component_1.FloatLabel
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQW9FO0FBRXBFLGdGQUE2RTtBQUM3RSxzRUFBb0U7QUFDcEUsbUZBQXVFO0FBRXZFLDBEQUF1RDtBQUN2RCw4REFBK0Q7QUFDL0QsOERBQTREO0FBRTVELDRDQUEyQztBQWtCM0M7SUFBQTtJQUEyQixDQUFDO0lBQWYsV0FBVztRQWZ2QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix5Q0FBa0I7Z0JBQ2xCLCtCQUF1QjthQUMxQjtZQUNELFNBQVMsRUFBRSxDQUFDLDJCQUFXLEVBQUUsaUJBQU8sRUFBRSxtQ0FBaUIsRUFBRSxnQ0FBYyxDQUFDO1lBQ3BFLFlBQVksRUFBRTtnQkFDVixnQ0FBYztnQkFDZCxrQ0FBVTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiXG5cbmltcG9ydCB7IExvZ2luUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L2NvbXBvbmVudHMvbG9naW4vbG9naW4tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIn4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEZsb2F0TGFiZWwgfSBmcm9tIFwifi9jb21wb25lbnRzL3NoYXJlZC9mbG9hdC1sYWJlbC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOZXR3b3JraW5nU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xuaW1wb3J0IHsgSGVscGVyc1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9oZWxwZXJzLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCJ+L3NoYXJlZC9nbG9iYWxzXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTG9naW5Sb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIEdsb2JhbHMsIE5ldHdvcmtpbmdTZXJ2aWNlLCBIZWxwZXJzU2VydmljZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBGbG9hdExhYmVsXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfVxuIl19