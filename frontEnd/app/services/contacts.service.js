"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var network_service_1 = require("~/services/network.service");
var ContactsService = /** @class */ (function () {
    function ContactsService(network) {
        this.network = network;
    }
    ContactsService.prototype.getFriends = function () {
        return this.network.http("GET", "/getFriends");
    };
    ContactsService.prototype.addFriend = function (email) {
        return this.network.http("POST", "/addFriend", {}, { email: email });
    };
    ContactsService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], ContactsService);
    return ContactsService;
}());
exports.ContactsService = ContactsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLDhEQUErRDtBQUkvRDtJQUNJLHlCQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUU5QyxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELG1DQUFTLEdBQVQsVUFBVSxLQUFhO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFYUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7aURBRW9CLG1DQUFpQjtPQURyQyxlQUFlLENBYzNCO0lBQUQsc0JBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOZXR3b3JraW5nU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0c1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JraW5nU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldEZyaWVuZHMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLmh0dHAoXCJHRVRcIiwgYC9nZXRGcmllbmRzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRnJpZW5kKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuaHR0cChcIlBPU1RcIiwgYC9hZGRGcmllbmRgLCB7fSwge2VtYWlsOiBlbWFpbH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG59Il19