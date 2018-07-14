"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var HelpersService = /** @class */ (function () {
    function HelpersService(_routerExtensions, zone) {
        this._routerExtensions = _routerExtensions;
        this.zone = zone;
    }
    HelpersService.prototype.changeVisibility = function (elementRef, state) {
        elementRef.nativeElement.visibility = state;
    };
    HelpersService.prototype.navigate = function (route, data, transition) {
        var _this = this;
        this.zone.run(function () {
            var transitionArgs = transition || {
                name: "slideTop",
                duration: 350,
                curve: "ease"
            };
            var options = {
                clearHistory: true,
                animated: true,
                transition: transitionArgs,
                queryParams: data,
            };
            _this._routerExtensions.navigate(route, options);
        });
    };
    HelpersService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterExtensions, core_1.NgZone])
    ], HelpersService);
    return HelpersService;
}());
exports.HelpersService = HelpersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUErRDtBQUMvRCxzREFBK0Q7QUFLL0Q7SUFDSSx3QkFBb0IsaUJBQW1DLEVBQVUsSUFBWTtRQUF6RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUM3RSxDQUFDO0lBRUQseUNBQWdCLEdBQWhCLFVBQWtCLFVBQXNCLEVBQUUsS0FBYTtRQUNuRCxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDaEQsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFlLEVBQUUsSUFBVSxFQUFFLFVBQWlDO1FBQXZFLGlCQWdCQztRQWZHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1YsSUFBTSxjQUFjLEdBQUcsVUFBVSxJQUFJO2dCQUNqQyxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLE1BQU07YUFDaEIsQ0FBQTtZQUNELElBQU0sT0FBTyxHQUE2QjtnQkFDdEMsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFVBQVUsRUFBRSxjQUFjO2dCQUMxQixXQUFXLEVBQUUsSUFBSTthQUNwQixDQUFDO1lBRUYsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBeEJRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtpREFFOEIseUJBQWdCLEVBQWdCLGFBQU07T0FEcEUsY0FBYyxDQXlCMUI7SUFBRCxxQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvblRyYW5zaXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xyXG5pbXBvcnQgeyBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGVscGVyc1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWaXNpYmlsaXR5IChlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzdGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmF2aWdhdGUocm91dGU6IHN0cmluZ1tdLCBkYXRhPzogYW55LCB0cmFuc2l0aW9uPzogTmF2aWdhdGlvblRyYW5zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNpdGlvbkFyZ3MgPSB0cmFuc2l0aW9uIHx8IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzNTAsXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25zOiBFeHRlbmRlZE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25BcmdzLFxyXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGRhdGEsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKHJvdXRlLCBvcHRpb25zKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=