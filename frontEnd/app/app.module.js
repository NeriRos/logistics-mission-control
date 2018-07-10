"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    AppModule = __decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0NBQTJDO0FBQzNDLDZDQUEyRTtBQUMzRSxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHdFQUE4RTtBQUU5RSwyREFBd0Q7QUFDeEQsaURBQStDO0FBRS9DLHlFQUFvRTtBQUVwRSw0Q0FBMkM7QUFDM0MsMERBQXVEO0FBQ3ZELDhEQUErRDtBQUMvRCxzRUFBNkQ7QUFnQzdEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUE5QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIscUNBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLHVCQUFnQjtnQkFDaEIsaUJBQVU7YUFDYjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGlEQUFxQjtnQkFDckIsZ0NBQWtCO2dCQUNsQiwyQkFBVztnQkFDWCxtQ0FBaUI7Z0JBQ2pCO29CQUNJLE9BQU8sRUFBRSx3QkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxpQ0FBVztvQkFDckIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0gsaUJBQU87YUFDVjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBbmRyb2lkQXBwbGljYXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwifi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IExvZ2dlZEluTGF6eUxvYWRHdWFyZCB9IGZyb20gXCJ+L2xvZ2dlZC1pbi1sYXp5LWxvYWQuZ3VhcmRcIjtcblxuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCJ+L3NoYXJlZC9nbG9iYWxzXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbmV0d29yay5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJbnRlcmNlcHRvciB9IGZyb20gXCJ+L3NlcnZpY2VzL2ludGVyY2VwdG9yLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIEh0dHBNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBMb2dnZWRJbkxhenlMb2FkR3VhcmQsXG4gICAgICAgIEFuZHJvaWRBcHBsaWNhdGlvbixcbiAgICAgICAgVXNlclNlcnZpY2UsXG4gICAgICAgIE5ldHdvcmtpbmdTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICAgIHVzZUNsYXNzOiBJbnRlcmNlcHRvcixcbiAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgR2xvYmFsc1xuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=