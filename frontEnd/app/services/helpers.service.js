"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    HelpersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions, core_1.NgZone])
    ], HelpersService);
    return HelpersService;
}());
exports.HelpersService = HelpersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVscGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStEO0FBQy9ELHNEQUErRDtBQUsvRDtJQUNJLHdCQUFvQixpQkFBbUMsRUFBVSxJQUFZO1FBQXpELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQzdFLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEIsVUFBa0IsVUFBc0IsRUFBRSxLQUFhO1FBQ25ELFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUNoRCxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLEtBQWUsRUFBRSxVQUFpQztRQUEzRCxpQkFhQztRQVpHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ1YsSUFBSSxjQUFjLEdBQUcsVUFBVSxJQUFJO2dCQUMvQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLE1BQU07YUFDaEIsQ0FBQTtZQUNELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO2dCQUNuQyxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsVUFBVSxFQUFFLGNBQWM7YUFDN0IsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBckJRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FFOEIseUJBQWdCLEVBQWdCLGFBQU07T0FEcEUsY0FBYyxDQXNCMUI7SUFBRCxxQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbk9wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyL25zLWxvY2F0aW9uLXN0cmF0ZWd5XCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25UcmFuc2l0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhlbHBlcnNTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgem9uZTogTmdab25lKSB7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlVmlzaWJpbGl0eSAoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgc3RhdGU6IHN0cmluZykge1xyXG4gICAgICAgIGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52aXNpYmlsaXR5ID0gc3RhdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5hdmlnYXRlKHJvdXRlOiBzdHJpbmdbXSwgdHJhbnNpdGlvbj86IE5hdmlnYXRpb25UcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uQXJncyA9IHRyYW5zaXRpb24gfHwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDM1MCxcclxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUocm91dGUsIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbkFyZ3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19