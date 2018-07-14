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
            _this._routerExtensions.navigate(route, {
                clearHistory: true,
                animated: true,
                transition: transitionArgs,
                queryParams: data
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUErRDtBQUMvRCxzREFBK0Q7QUFJL0Q7SUFDSSx3QkFBb0IsaUJBQW1DLEVBQVUsSUFBWTtRQUF6RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUM3RSxDQUFDO0lBRUQseUNBQWdCLEdBQWhCLFVBQWtCLFVBQXNCLEVBQUUsS0FBYTtRQUNuRCxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDaEQsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxLQUFlLEVBQUUsSUFBVSxFQUFFLFVBQWlDO1FBQXZFLGlCQWNDO1FBYkcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDVixJQUFJLGNBQWMsR0FBRyxVQUFVLElBQUk7Z0JBQy9CLElBQUksRUFBRSxVQUFVO2dCQUNoQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsTUFBTTthQUNoQixDQUFBO1lBQ0QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ25DLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxVQUFVLEVBQUUsY0FBYztnQkFDMUIsV0FBVyxFQUFFLElBQUk7YUFDcEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdEJRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtpREFFOEIseUJBQWdCLEVBQWdCLGFBQU07T0FEcEUsY0FBYyxDQXVCMUI7SUFBRCxxQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvblRyYW5zaXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGVscGVyc1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VWaXNpYmlsaXR5IChlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzdGF0ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZpc2liaWxpdHkgPSBzdGF0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmF2aWdhdGUocm91dGU6IHN0cmluZ1tdLCBkYXRhPzogYW55LCB0cmFuc2l0aW9uPzogTmF2aWdhdGlvblRyYW5zaXRpb24pIHtcclxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25BcmdzID0gdHJhbnNpdGlvbiB8fCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzUwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShyb3V0ZSwge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uQXJncyxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==