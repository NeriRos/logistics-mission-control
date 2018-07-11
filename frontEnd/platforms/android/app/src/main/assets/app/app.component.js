"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var globals_1 = require("~/shared/globals");
var router_1 = require("nativescript-angular/router");
var application_1 = require("application");
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
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            styleUrls: ["app.css"]
        }),
        __metadata("design:paramtypes", [globals_1.Globals,
            router_1.RouterExtensions,
            application_1.AndroidApplication])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsNENBQTJDO0FBQzNDLHNEQUErRDtBQUMvRCwyQ0FBaUQ7QUFPakQ7SUFHSSxzQkFBb0IsT0FBZ0IsRUFDeEIsZ0JBQWtDLEVBQ2xDLFdBQStCO1FBRnZCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFKcEMsa0JBQWEsR0FBVyxFQUFFLENBQUM7SUFNbEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQWEsR0FBYjtRQUNJLElBQU0sU0FBUyxHQUFHLFVBQUMsSUFBSTtZQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUFDLENBQUM7UUFFeEMsQ0FBQyxDQUFBO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDMUQsQ0FBQztJQUVMLENBQUM7SUFFRCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQTFCUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztTQUN6QixDQUFDO3lDQUkrQixpQkFBTztZQUNOLHlCQUFnQjtZQUNyQixnQ0FBa0I7T0FMbEMsWUFBWSxDQTJCeEI7SUFBRCxtQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCJ+L3NoYXJlZC9nbG9iYWxzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQW5kcm9pZEFwcGxpY2F0aW9uIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiYXBwLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBuZXR3b3JrU3RhdHVzOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBnbG9iYWxzOiBHbG9iYWxzLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgYXBwbGljYXRpb246IEFuZHJvaWRBcHBsaWNhdGlvbikge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBiYWNrUHJlc3NJbml0KCkge1xuICAgICAgICBjb25zdCBiYWNrRXZlbnQgPSAoYXJncykgPT4ge1xuICAgICAgICAgICAgaWYgKCEhZmFsc2UpIHsgYXJncy5jYW5jZWwgPSB0cnVlOyB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLm9uKFwiYWN0aXZpdHlCYWNrUHJlc3NlZFwiLCBiYWNrRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGJhY2tFdmVudCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cbn1cbiJdfQ==