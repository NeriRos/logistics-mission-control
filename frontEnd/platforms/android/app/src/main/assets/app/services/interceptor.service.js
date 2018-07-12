"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var network_service_1 = require("~/services/network.service");
require("rxjs/add/operator/do");
var Interceptor = /** @class */ (function () {
    function Interceptor(network) {
        this.network = network;
    }
    Interceptor.prototype.fixUrl = function (url) {
        if (url.startsWith("http://") || url.startsWith("https://"))
            return url;
        else
            return this.network.server.protocol + "://" + this.network.server.ip + ":" + this.network.server.port + url;
    };
    Interceptor.prototype.intercept = function (req, next) {
        var clonedRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token')),
            url: this.fixUrl(req.url)
        });
        var started = Date.now();
        return next.handle(clonedRequest)
            .do(function (event) {
            if (event instanceof http_1.HttpResponse) {
                var elapsed = Date.now() - started;
            }
        });
    };
    Interceptor = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], Interceptor);
    return Interceptor;
}());
exports.Interceptor = Interceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXFEO0FBQ3JELDZDQUE2RjtBQUs3Riw4REFBK0Q7QUFDL0QsZ0NBQThCO0FBRzlCO0lBRUkscUJBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQzlDLENBQUM7SUFHTyw0QkFBTSxHQUFkLFVBQWUsR0FBVztRQUN0QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEQsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLElBQUk7WUFDQSxNQUFNLENBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxXQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBSyxDQUFDO0lBQy9HLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsR0FBcUIsRUFBRSxJQUFpQjtRQUM5QyxJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEYsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztTQUM1QixDQUFDLENBQUM7UUFFSCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2FBQzVCLEVBQUUsQ0FBQyxVQUFBLEtBQUs7WUFDTCxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksbUJBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxPQUFPLENBQUM7WUFDekMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQTNCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7aURBR29CLG1DQUFpQjtPQUZyQyxXQUFXLENBNEJ2QjtJQUFELGtCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbmV0d29yay5zZXJ2aWNlXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV0d29yazogTmV0d29ya2luZ1NlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBmaXhVcmwodXJsOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJodHRwOi8vXCIpIHx8IHVybC5zdGFydHNXaXRoKFwiaHR0cHM6Ly9cIikpXHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5uZXR3b3JrLnNlcnZlci5wcm90b2NvbH06Ly8ke3RoaXMubmV0d29yay5zZXJ2ZXIuaXB9OiR7dGhpcy5uZXR3b3JrLnNlcnZlci5wb3J0fSR7dXJsfWA7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcbiAgICAgICAgY29uc3QgY2xvbmVkUmVxdWVzdCA9IHJlcS5jbG9uZSh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSxcclxuICAgICAgICAgICAgdXJsOiB0aGlzLmZpeFVybChyZXEudXJsKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBzdGFydGVkID0gRGF0ZS5ub3coKTtcclxuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUoY2xvbmVkUmVxdWVzdClcclxuICAgICAgICAgICAgLmRvKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gc3RhcnRlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59Il19