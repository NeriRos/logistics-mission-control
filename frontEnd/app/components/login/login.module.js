"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    LoginModule = __decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBb0U7QUFFcEUsZ0ZBQTZFO0FBQzdFLHNFQUFvRTtBQUNwRSxtRkFBdUU7QUFFdkUsMERBQXVEO0FBQ3ZELDhEQUErRDtBQUMvRCw4REFBNEQ7QUFFNUQsNENBQTJDO0FBa0IzQztJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBZnZCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHlDQUFrQjtnQkFDbEIsK0JBQXVCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFLENBQUMsMkJBQVcsRUFBRSxpQkFBTyxFQUFFLG1DQUFpQixFQUFFLGdDQUFjLENBQUM7WUFDcEUsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLGtDQUFVO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcblxuaW1wb3J0IHsgTG9naW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRmxvYXRMYWJlbCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvc2hhcmVkL2Zsb2F0LWxhYmVsLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbmV0d29yay5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2hlbHBlcnMuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIn4vc2hhcmVkL2dsb2JhbHNcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBMb2dpblJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgR2xvYmFscywgTmV0d29ya2luZ1NlcnZpY2UsIEhlbHBlcnNTZXJ2aWNlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIEZsb2F0TGFiZWxcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Nb2R1bGUgeyB9XG4iXX0=