"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFDdkUseUVBQW9FO0FBRXBFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSw2Q0FBNkMsRUFBRTtJQUM5RSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLDBDQUEwQyxFQUFFLE9BQU8sRUFBRSxDQUFDLGlEQUFxQixDQUFDLEVBQUU7SUFDNUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSwwQ0FBMEMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxpREFBcUIsQ0FBQyxFQUFFO0lBQzVHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsc0RBQXNELEVBQUUsT0FBTyxFQUFFLENBQUMsaURBQXFCLENBQUMsRUFBRTtDQUMvSCxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBMb2dnZWRJbkxhenlMb2FkR3VhcmQgfSBmcm9tIFwifi9sb2dnZWQtaW4tbGF6eS1sb2FkLmd1YXJkXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiLCBjYW5Mb2FkOiBbTG9nZ2VkSW5MYXp5TG9hZEd1YXJkXSB9LFxuICAgIHsgcGF0aDogXCJjaGF0XCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvY2hhdC9jaGF0Lm1vZHVsZSNDaGF0TW9kdWxlXCIsIGNhbkxvYWQ6IFtMb2dnZWRJbkxhenlMb2FkR3VhcmRdIH0sXG4gICAgeyBwYXRoOiBcImNvbnRhY3RzXCIsIGxvYWRDaGlsZHJlbjogXCIuL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMubW9kdWxlI0NvbnRhY3RzTW9kdWxlXCIsIGNhbkxvYWQ6IFtMb2dnZWRJbkxhenlMb2FkR3VhcmRdIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=