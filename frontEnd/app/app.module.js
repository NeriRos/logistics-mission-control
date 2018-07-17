"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var application_1 = require("tns-core-modules/application/application");
var app_routing_module_1 = require("~/app-routing.module");
var app_component_1 = require("~/app.component");
var logged_in_lazy_load_guard_1 = require("~/logged-in-lazy-load.guard");
var globals_1 = require("~/shared/globals");
var login_service_1 = require("~/services/login.service");
var network_service_1 = require("~/services/network.service");
var interceptor_service_1 = require("~/services/interceptor.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                http_2.HttpClientModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard,
                application_1.AndroidApplication,
                login_service_1.UserService,
                network_service_1.NetworkingService,
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: interceptor_service_1.Interceptor,
                    multi: true
                },
                globals_1.Globals
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJEO0FBQzNELHNDQUEyQztBQUMzQyw2Q0FBMkU7QUFDM0UsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSx3RUFBOEU7QUFFOUUsMkRBQXdEO0FBRXhELGlEQUErQztBQUUvQyx5RUFBb0U7QUFFcEUsNENBQTJDO0FBQzNDLDBEQUF1RDtBQUN2RCw4REFBK0Q7QUFDL0Qsc0VBQTZEO0FBZ0M3RDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBOUJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qix1QkFBZ0I7Z0JBQ2hCLGlCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRTtnQkFDUCxpREFBcUI7Z0JBQ3JCLGdDQUFrQjtnQkFDbEIsMkJBQVc7Z0JBQ1gsbUNBQWlCO2dCQUNqQjtvQkFDSSxPQUFPLEVBQUUsd0JBQWlCO29CQUMxQixRQUFRLEVBQUUsaUNBQVc7b0JBQ3JCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNILGlCQUFPO2FBQ1Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwifi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IExvZ2dlZEluTGF6eUxvYWRHdWFyZCB9IGZyb20gXCJ+L2xvZ2dlZC1pbi1sYXp5LWxvYWQuZ3VhcmRcIjtcblxuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCJ+L3NoYXJlZC9nbG9iYWxzXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbmV0d29yay5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJbnRlcmNlcHRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2ludGVyY2VwdG9yLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBMb2dnZWRJbkxhenlMb2FkR3VhcmQsXG4gICAgICAgIEFuZHJvaWRBcHBsaWNhdGlvbixcbiAgICAgICAgVXNlclNlcnZpY2UsXG4gICAgICAgIE5ldHdvcmtpbmdTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICAgIHVzZUNsYXNzOiBJbnRlcmNlcHRvcixcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgR2xvYmFsc1xuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=