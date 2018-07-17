"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
var network_service_1 = require("~/services/network.service");
var Interceptor = /** @class */ (function () {
    function Interceptor(network) {
        this.network = network;
    }
    Interceptor.prototype.intercept = function (req, next) {
        var clonedRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem("token")),
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
    Interceptor.prototype.fixUrl = function (url) {
        if (url.startsWith("http://") || url.startsWith("https://")) {
            return url;
        }
        else {
            return this.network.server.protocol + "://" + this.network.server.ip + ":" + this.network.server.port + url;
        }
    };
    Interceptor = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], Interceptor);
    return Interceptor;
}());
exports.Interceptor = Interceptor;
