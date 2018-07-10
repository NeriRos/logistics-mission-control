"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var network_service_1 = require("../services/network.service");
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
    Interceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], Interceptor);
    return Interceptor;
}());
exports.Interceptor = Interceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBcUQ7QUFDckQsNkNBQTZGO0FBSzdGLCtEQUFnRTtBQUNoRSxnQ0FBOEI7QUFHOUI7SUFFSSxxQkFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFDOUMsQ0FBQztJQUdPLDRCQUFNLEdBQWQsVUFBZSxHQUFXO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsSUFBSTtZQUNBLE1BQU0sQ0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLFdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFLLENBQUM7SUFDL0csQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxHQUFxQixFQUFFLElBQWlCO1FBQzlDLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDNUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRixHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUVILElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDNUIsRUFBRSxDQUFDLFVBQUEsS0FBSztZQUNMLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxtQkFBWSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBM0JRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHb0IsbUNBQWlCO09BRnJDLFdBQVcsQ0E0QnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldHdvcms6IE5ldHdvcmtpbmdTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZml4VXJsKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHVybC5zdGFydHNXaXRoKFwiaHR0cDovL1wiKSB8fCB1cmwuc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpKVxyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMubmV0d29yay5zZXJ2ZXIucHJvdG9jb2x9Oi8vJHt0aGlzLm5ldHdvcmsuc2VydmVyLmlwfToke3RoaXMubmV0d29yay5zZXJ2ZXIucG9ydH0ke3VybH1gO1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyY2VwdChyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgICAgIGNvbnN0IGNsb25lZFJlcXVlc3QgPSByZXEuY2xvbmUoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmVhcmVyICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSksXHJcbiAgICAgICAgICAgIHVybDogdGhpcy5maXhVcmwocmVxLnVybClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhcnRlZCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGNsb25lZFJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5kbyhldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSJdfQ==