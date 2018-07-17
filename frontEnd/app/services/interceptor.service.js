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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVyY2VwdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXFEO0FBQ3JELDZDQUE2RjtBQUs3Riw4REFBK0Q7QUFDL0QsZ0NBQThCO0FBRzlCO0lBRUkscUJBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO0lBQzlDLENBQUM7SUFHTyw0QkFBTSxHQUFkLFVBQWUsR0FBVztRQUN0QixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7WUFDdkQsT0FBTyxHQUFHLENBQUM7O1lBRVgsT0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLFdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFLLENBQUM7SUFDL0csQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxHQUFxQixFQUFFLElBQWlCO1FBQzlDLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDNUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRixHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUVILElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2FBQzVCLEVBQUUsQ0FBQyxVQUFBLEtBQUs7WUFDTCxJQUFJLEtBQUssWUFBWSxtQkFBWSxFQUFFO2dCQUMvQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDO2FBQ3hDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0lBM0JRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtpREFHb0IsbUNBQWlCO09BRnJDLFdBQVcsQ0E0QnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTmV0d29ya2luZ1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9uZXR3b3JrLnNlcnZpY2VcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JraW5nU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGZpeFVybCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh1cmwuc3RhcnRzV2l0aChcImh0dHA6Ly9cIikgfHwgdXJsLnN0YXJ0c1dpdGgoXCJodHRwczovL1wiKSlcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm5ldHdvcmsuc2VydmVyLnByb3RvY29sfTovLyR7dGhpcy5uZXR3b3JrLnNlcnZlci5pcH06JHt0aGlzLm5ldHdvcmsuc2VydmVyLnBvcnR9JHt1cmx9YDtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgICAgICBjb25zdCBjbG9uZWRSZXF1ZXN0ID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpLFxyXG4gICAgICAgICAgICB1cmw6IHRoaXMuZml4VXJsKHJlcS51cmwpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIHJldHVybiBuZXh0LmhhbmRsZShjbG9uZWRSZXF1ZXN0KVxyXG4gICAgICAgICAgICAuZG8oZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IERhdGUubm93KCkgLSBzdGFydGVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iXX0=