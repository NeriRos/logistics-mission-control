"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var login_routing_module_1 = require("./login-routing.module");
var login_component_1 = require("./login.component");
var login_service_1 = require("./login.service");
var float_label_component_1 = require("~/components/shared/float-label.component");
var globals_1 = require("~/shared/globals");
var network_service_1 = require("~/services/network.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxvREFBb0U7QUFFcEUsK0RBQTREO0FBQzVELHFEQUFtRDtBQUNuRCxpREFBOEM7QUFFOUMsbUZBQXVFO0FBQ3ZFLDRDQUEyQztBQUUzQyw4REFBd0Q7QUFpQnhEO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFmdkIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIseUNBQWtCO2dCQUNsQiwrQkFBdUI7YUFDMUI7WUFDRCxTQUFTLEVBQUUsQ0FBQywyQkFBVyxFQUFFLGlCQUFPLEVBQUUsNEJBQVUsQ0FBQztZQUM3QyxZQUFZLEVBQUU7Z0JBQ1YsZ0NBQWM7Z0JBQ2Qsa0NBQVU7YUFDYjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csV0FBVyxDQUFJO0lBQUQsa0JBQUM7Q0FBQSxBQUE1QixJQUE0QjtBQUFmLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuXG5pbXBvcnQgeyBMb2dpblJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9sb2dpbi1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vbG9naW4uc2VydmljZVwiO1xuXG5pbXBvcnQgeyBGbG9hdExhYmVsIH0gZnJvbSBcIn4vY29tcG9uZW50cy9zaGFyZWQvZmxvYXQtbGFiZWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIn4vc2hhcmVkL2dsb2JhbHNcIjtcblxuaW1wb3J0IHsgTmV0d29ya2luZyB9IGZyb20gXCJ+L3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBMb2dpblJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtVc2VyU2VydmljZSwgR2xvYmFscywgTmV0d29ya2luZ10sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBGbG9hdExhYmVsXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luTW9kdWxlIHsgfVxuIl19