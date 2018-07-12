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
    HelpersService.prototype.navigate = function (route, transition) {
        var _this = this;
        this.zone.run(function () {
            var transitionArgs = transition || {
                name: "slideTop",
                duration: 350,
                curve: "ease"
            };
            _this._routerExtensions.navigate(route, {
                clearHistory: true,
                animated: true,
                transition: transitionArgs
            });
        });
    };
    HelpersService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterExtensions, core_1.NgZone])
    ], HelpersService);
    return HelpersService;
}());
exports.HelpersService = HelpersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUErRDtBQUMvRCxzREFBK0Q7QUFLL0Q7SUFDSSx3QkFBb0IsaUJBQW1DLEVBQVUsSUFBWTtRQUF6RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUM3RSxDQUFDO0lBRUQseUNBQWdCLEdBQWhCLFVBQWtCLFVBQXNCLEVBQUUsS0FBYTtRQUNuRCxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDaEQsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFlLEVBQUUsVUFBaUM7UUFBM0QsaUJBYUM7UUFaRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNWLElBQUksY0FBYyxHQUFHLFVBQVUsSUFBSTtnQkFDL0IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxNQUFNO2FBQ2hCLENBQUE7WUFDRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtnQkFDbkMsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLFVBQVUsRUFBRSxjQUFjO2FBQzdCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJCUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7aURBRThCLHlCQUFnQixFQUFnQixhQUFNO09BRHBFLGNBQWMsQ0FzQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25PcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlci9ucy1sb2NhdGlvbi1zdHJhdGVneVwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uVHJhbnNpdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIZWxwZXJzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVZpc2liaWxpdHkgKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHN0YXRlOiBzdHJpbmcpIHtcclxuICAgICAgICBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmlzaWJpbGl0eSA9IHN0YXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuYXZpZ2F0ZShyb3V0ZTogc3RyaW5nW10sIHRyYW5zaXRpb24/OiBOYXZpZ2F0aW9uVHJhbnNpdGlvbikge1xyXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbkFyZ3MgPSB0cmFuc2l0aW9uIHx8IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVUb3BcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzNTAsXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKHJvdXRlLCB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25BcmdzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==