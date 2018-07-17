"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var application_1 = require("application");
var nativescript_floatingactionbutton_1 = require("nativescript-floatingactionbutton");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Fab", function () { return nativescript_floatingactionbutton_1.Fab; });
var AppComponent = /** @class */ (function () {
    function AppComponent(application) {
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
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            styleUrls: ["app.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [application_1.AndroidApplication])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtEO0FBR2xELDJDQUFpRDtBQUNqRCx1RkFBd0Q7QUFDeEQsMEVBQXdFO0FBSXhFLGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSx1Q0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0FBT2xDO0lBR0ksc0JBQW9CLFdBQStCO1FBQS9CLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUY1QyxrQkFBYSxHQUFXLEVBQUUsQ0FBQztJQUdsQyxDQUFDO0lBRUQsK0JBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBTSxTQUFTLEdBQUcsVUFBQyxJQUFJO1lBQ25CLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUFFO1FBRXhDLENBQUMsQ0FBQTtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN6RDtJQUVMLENBQUM7SUFuQlEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUM7U0FDekIsQ0FBQztpREFJbUMsZ0NBQWtCO09BSDFDLFlBQVksQ0FvQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwifi9zaGFyZWQvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgRmFiIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBBY3Rpb25CYXIgfSBmcm9tICcuLi9ub2RlX21vZHVsZXMvdG5zLWNvcmUtbW9kdWxlcy91aS9hY3Rpb24tYmFyL2FjdGlvbi1iYXInO1xuXG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gRmFiKTsgXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiYXBwLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBuZXR3b3JrU3RhdHVzOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBsaWNhdGlvbjogQW5kcm9pZEFwcGxpY2F0aW9uKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgYmFja1ByZXNzSW5pdCgpIHtcbiAgICAgICAgY29uc3QgYmFja0V2ZW50ID0gKGFyZ3MpID0+IHtcbiAgICAgICAgICAgIGlmICghIWZhbHNlKSB7IGFyZ3MuY2FuY2VsID0gdHJ1ZTsgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hcHBsaWNhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5vbihcImFjdGl2aXR5QmFja1ByZXNzZWRcIiwgYmFja0V2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG4iXX0=