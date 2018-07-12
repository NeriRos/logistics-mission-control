"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var globals_1 = require("~/shared/globals");
var router_1 = require("nativescript-angular/router");
var application_1 = require("application");
var nativescript_floatingactionbutton_1 = require("nativescript-floatingactionbutton");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Fab", function () { return nativescript_floatingactionbutton_1.Fab; });
var AppComponent = /** @class */ (function () {
    function AppComponent(globals, routerExtensions, application) {
        this.globals = globals;
        this.routerExtensions = routerExtensions;
        this.application = application;
        this.networkStatus = "";
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.backPressInit = function () {
        var backEvent = function (args) {
            if (!!false) {
                args.cancel = true;
            }
        };
        if (this.application) {
            this.application.on("activityBackPressed", backEvent);
        }
    };
    AppComponent.prototype.backEvent = function () {
        this.routerExtensions.backToPreviousPage();
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            styleUrls: ["app.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [globals_1.Globals,
            router_1.RouterExtensions,
            application_1.AndroidApplication])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtEO0FBQ2xELDRDQUEyQztBQUMzQyxzREFBK0Q7QUFDL0QsMkNBQWlEO0FBQ2pELHVGQUF3RDtBQUN4RCwwRUFBd0U7QUFFeEUsa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLHVDQUFHLEVBQUgsQ0FBRyxDQUFDLENBQUM7QUFPbEM7SUFHSSxzQkFBb0IsT0FBZ0IsRUFDeEIsZ0JBQWtDLEVBQ2xDLFdBQStCO1FBRnZCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFKcEMsa0JBQWEsR0FBVyxFQUFFLENBQUM7SUFLbEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLElBQU0sU0FBUyxHQUFHLFVBQUMsSUFBSTtZQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUFDLENBQUM7UUFFeEMsQ0FBQyxDQUFBO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDMUQsQ0FBQztJQUVMLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQXpCUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztTQUN6QixDQUFDO2lEQUkrQixpQkFBTztZQUNOLHlCQUFnQjtZQUNyQixnQ0FBa0I7T0FMbEMsWUFBWSxDQTBCeEI7SUFBRCxtQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCJ+L3NoYXJlZC9nbG9iYWxzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBGYWIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCI7XG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gRmFiKTsgXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiYXBwLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBuZXR3b3JrU3RhdHVzOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnbG9iYWxzOiBHbG9iYWxzLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgYXBwbGljYXRpb246IEFuZHJvaWRBcHBsaWNhdGlvbikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cblxuICAgIGJhY2tQcmVzc0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGJhY2tFdmVudCA9IChhcmdzKSA9PiB7XG4gICAgICAgICAgICBpZiAoISFmYWxzZSkgeyBhcmdzLmNhbmNlbCA9IHRydWU7IH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYXBwbGljYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ub24oXCJhY3Rpdml0eUJhY2tQcmVzc2VkXCIsIGJhY2tFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgYmFja0V2ZW50KCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxufVxuIl19