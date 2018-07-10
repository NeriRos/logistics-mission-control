"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var logged_in_lazy_load_guard_1 = require("./logged-in-lazy-load.guard");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", loadChildren: "./components/login/login.module#LoginModule" },
    { path: "home", loadChildren: "./components/home/home.module#HomeModule", canLoad: [logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard] },
    { path: "chat", loadChildren: "./components/chat/chat.module#ChatModule", canLoad: [logged_in_lazy_load_guard_1.LoggedInLazyLoadGuard] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSx5RUFBb0U7QUFFcEUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLDZDQUE2QyxFQUFFO0lBQzlFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsMENBQTBDLEVBQUUsT0FBTyxFQUFFLENBQUMsaURBQXFCLENBQUMsRUFBRTtJQUM1RyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLDBDQUEwQyxFQUFFLE9BQU8sRUFBRSxDQUFDLGlEQUFxQixDQUFDLEVBQUU7Q0FDL0csQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTG9nZ2VkSW5MYXp5TG9hZEd1YXJkIH0gZnJvbSBcIi4vbG9nZ2VkLWluLWxhenktbG9hZC5ndWFyZFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiwgY2FuTG9hZDogW0xvZ2dlZEluTGF6eUxvYWRHdWFyZF0gfSxcbiAgICB7IHBhdGg6IFwiY2hhdFwiLCBsb2FkQ2hpbGRyZW46IFwiLi9jb21wb25lbnRzL2NoYXQvY2hhdC5tb2R1bGUjQ2hhdE1vZHVsZVwiLCBjYW5Mb2FkOiBbTG9nZ2VkSW5MYXp5TG9hZEd1YXJkXSB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19