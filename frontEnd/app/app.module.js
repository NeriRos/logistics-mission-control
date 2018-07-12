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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJEO0FBQzNELHNDQUEyQztBQUMzQyw2Q0FBMkU7QUFDM0UsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSx3RUFBOEU7QUFFOUUsMkRBQXdEO0FBQ3hELGlEQUErQztBQUUvQyx5RUFBb0U7QUFFcEUsNENBQTJDO0FBQzNDLDBEQUF1RDtBQUN2RCw4REFBK0Q7QUFDL0Qsc0VBQTZEO0FBZ0M3RDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBOUJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qix1QkFBZ0I7Z0JBQ2hCLGlCQUFVO2FBQ2I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRTtnQkFDUCxpREFBcUI7Z0JBQ3JCLGdDQUFrQjtnQkFDbEIsMkJBQVc7Z0JBQ1gsbUNBQWlCO2dCQUNqQjtvQkFDSSxPQUFPLEVBQUUsd0JBQWlCO29CQUMxQixRQUFRLEVBQUUsaUNBQVc7b0JBQ3JCLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNILGlCQUFPO2FBQ1Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24vYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCJ+L2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIn4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBMb2dnZWRJbkxhenlMb2FkR3VhcmQgfSBmcm9tIFwifi9sb2dnZWQtaW4tbGF6eS1sb2FkLmd1YXJkXCI7XG5cbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwifi9zaGFyZWQvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOZXR3b3JraW5nU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xuaW1wb3J0IHsgSW50ZXJjZXB0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTG9nZ2VkSW5MYXp5TG9hZEd1YXJkLFxuICAgICAgICBBbmRyb2lkQXBwbGljYXRpb24sXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICBOZXR3b3JraW5nU2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgICB1c2VDbGFzczogSW50ZXJjZXB0b3IsXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgIEdsb2JhbHNcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19