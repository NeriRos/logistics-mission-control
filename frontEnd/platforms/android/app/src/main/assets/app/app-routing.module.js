"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var logged_in_lazy_load_guard_1 = require("~/logged-in-lazy-load.guard");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", loadChildren: "./components/login/login.module#LoginModule" },
    { path: "home", loadChildren: "./components/home/home.module#HomeModule", canLoad: [logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard] },
    { path: "chat", loadChildren: "./components/chat/chat.module#ChatModule", canLoad: [logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard] },
    { path: "contacts", loadChildren: "./components/contacts/contacts.module#ContactsModule", canLoad: [logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSx5RUFBb0U7QUFFcEUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLDZDQUE2QyxFQUFFO0lBQzlFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsMENBQTBDLEVBQUUsT0FBTyxFQUFFLENBQUMsaURBQXFCLENBQUMsRUFBRTtJQUM1RyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLDBDQUEwQyxFQUFFLE9BQU8sRUFBRSxDQUFDLGlEQUFxQixDQUFDLEVBQUU7SUFDNUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxzREFBc0QsRUFBRSxPQUFPLEVBQUUsQ0FBQyxpREFBcUIsQ0FBQyxFQUFFO0NBQy9ILENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvZ2dlZEluTGF6eUxvYWRHdWFyZCB9IGZyb20gXCJ+L2xvZ2dlZC1pbi1sYXp5LWxvYWQuZ3VhcmRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIsIGNhbkxvYWQ6IFtMb2dnZWRJbkxhenlMb2FkR3VhcmRdIH0sXG4gICAgeyBwYXRoOiBcImNoYXRcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9jaGF0L2NoYXQubW9kdWxlI0NoYXRNb2R1bGVcIiwgY2FuTG9hZDogW0xvZ2dlZEluTGF6eUxvYWRHdWFyZF0gfSxcbiAgICB7IHBhdGg6IFwiY29udGFjdHNcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5tb2R1bGUjQ29udGFjdHNNb2R1bGVcIiwgY2FuTG9hZDogW0xvZ2dlZEluTGF6eUxvYWRHdWFyZF0gfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==