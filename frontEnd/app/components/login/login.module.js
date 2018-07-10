"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var login_routing_module_1 = require("./login-routing.module");
var login_component_1 = require("./login.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBb0U7QUFFcEUsK0RBQTREO0FBQzVELHFEQUFtRDtBQUNuRCxtRkFBdUU7QUFFdkUsMERBQXVEO0FBQ3ZELDhEQUErRDtBQUMvRCw4REFBNEQ7QUFFNUQsNENBQTJDO0FBa0IzQztJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBZnZCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHlDQUFrQjtnQkFDbEIsK0JBQXVCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFLENBQUMsMkJBQVcsRUFBRSxpQkFBTyxFQUFFLG1DQUFpQixFQUFFLGdDQUFjLENBQUM7WUFDcEUsWUFBWSxFQUFFO2dCQUNWLGdDQUFjO2dCQUNkLGtDQUFVO2FBQ2I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcblxuaW1wb3J0IHsgTG9naW5Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbG9naW4tcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vbG9naW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGbG9hdExhYmVsIH0gZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvZmxvYXQtbGFiZWwuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgTmV0d29ya2luZ1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9uZXR3b3JrLnNlcnZpY2VcIjtcbmltcG9ydCB7IEhlbHBlcnNTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvaGVscGVycy5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwifi9zaGFyZWQvZ2xvYmFsc1wiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIExvZ2luUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlLCBHbG9iYWxzLCBOZXR3b3JraW5nU2VydmljZSwgSGVscGVyc1NlcnZpY2VdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgRmxvYXRMYWJlbFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7IH1cbiJdfQ==