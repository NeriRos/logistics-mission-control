"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var logged_in_lazy_load_guard_1 = require("./logged-in-lazy-load.guard");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0NBQTJDO0FBQzNDLDZDQUEyRTtBQUMzRSxnRkFBOEU7QUFDOUUsb0RBQW9FO0FBRXBFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFFL0MseUVBQW9FO0FBRXBFLDRDQUEyQztBQUMzQywwREFBdUQ7QUFDdkQsOERBQStEO0FBQy9ELHNFQUE2RDtBQStCN0Q7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQTdCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsdUJBQWdCO2dCQUNoQixpQkFBVTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsaURBQXFCO2dCQUNyQiwyQkFBVztnQkFDWCxtQ0FBaUI7Z0JBQ2pCO29CQUNJLE9BQU8sRUFBRSx3QkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxpQ0FBVztvQkFDckIsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0gsaUJBQU87YUFDVjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCJcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBMb2dnZWRJbkxhenlMb2FkR3VhcmQgfSBmcm9tIFwiLi9sb2dnZWQtaW4tbGF6eS1sb2FkLmd1YXJkXCI7XG5cbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwifi9zaGFyZWQvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBOZXR3b3JraW5nU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xuaW1wb3J0IHsgSW50ZXJjZXB0b3IgfSBmcm9tIFwifi9zZXJ2aWNlcy9pbnRlcmNlcHRvci5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBIdHRwTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTG9nZ2VkSW5MYXp5TG9hZEd1YXJkLFxuICAgICAgICBVc2VyU2VydmljZSxcbiAgICAgICAgTmV0d29ya2luZ1NlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgICAgICAgdXNlQ2xhc3M6IEludGVyY2VwdG9yLFxuICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICBHbG9iYWxzXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==