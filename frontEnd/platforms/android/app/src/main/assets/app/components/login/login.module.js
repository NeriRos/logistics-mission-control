"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var login_routing_module_1 = require("./login-routing.module");
var login_component_1 = require("./login.component");
var login_service_1 = require("./login.service");
var float_label_component_1 = require("~/components/shared/float-label.component");
var authentication_form_component_1 = require("~/components/login/components/authentication-form.component");
var globals_1 = require("~/shared/globals");
var network_service_1 = require("~/shared/network.service");
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                login_routing_module_1.LoginRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            providers: [login_service_1.UserService, globals_1.Globals, network_service_1.Networking],
            declarations: [
                login_component_1.LoginComponent,
                float_label_component_1.FloatLabel,
                authentication_form_component_1.AuthenticationForm
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], LoginModule);
    return LoginModule;
}());
exports.LoginModule = LoginModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBb0U7QUFFcEUsK0RBQTREO0FBQzVELHFEQUFtRDtBQUNuRCxpREFBOEM7QUFFOUMsbUZBQXVFO0FBQ3ZFLDZHQUFpRztBQUNqRyw0Q0FBMkM7QUFFM0MsNERBQXNEO0FBa0J0RDtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBaEJ2QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix5Q0FBa0I7Z0JBQ2xCLCtCQUF1QjthQUMxQjtZQUNELFNBQVMsRUFBRSxDQUFDLDJCQUFXLEVBQUUsaUJBQU8sRUFBRSw0QkFBVSxDQUFDO1lBQzdDLFlBQVksRUFBRTtnQkFDVixnQ0FBYztnQkFDZCxrQ0FBVTtnQkFDVixrREFBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcblxuaW1wb3J0IHsgTG9naW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL2xvZ2luLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgRmxvYXRMYWJlbCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2Zsb2F0LWxhYmVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Gb3JtIH0gZnJvbSBcIn4vY29tcG9uZW50cy9sb2dpbi9jb21wb25lbnRzL2F1dGhlbnRpY2F0aW9uLWZvcm0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIn4vc2hhcmVkL2dsb2JhbHNcIjtcblxuaW1wb3J0IHsgTmV0d29ya2luZyB9IGZyb20gXCJ+L3NoYXJlZC9uZXR3b3JrLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgTG9naW5Sb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIEdsb2JhbHMsIE5ldHdvcmtpbmddLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgRmxvYXRMYWJlbCxcbiAgICAgICAgQXV0aGVudGljYXRpb25Gb3JtXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfVxuIl19