"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var network_service_1 = require("~/services/network.service");
var ChatService = /** @class */ (function () {
    function ChatService(network) {
        this.network = network;
    }
    ChatService.prototype.getChats = function () {
        return this.network.http("GET", "/chat/getChats");
    };
    ChatService.prototype.sendMessage = function (message) {
        return this.network.http("POST", "/chat/sendMessage", {}, message).toPromise();
    };
    ChatService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUUzQyw4REFBK0Q7QUFJL0Q7SUFDSSxxQkFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFFOUMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxPQUFhO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25GLENBQUM7SUFYUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7aURBRW9CLG1DQUFpQjtPQURyQyxXQUFXLENBWXZCO0lBQUQsa0JBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDaGF0IH0gZnJvbSBcIn4vbW9kZWxzL2NoYXQubW9kZWxcIjtcclxuaW1wb3J0IHsgTmV0d29ya2luZ1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9uZXR3b3JrLnNlcnZpY2VcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaGF0U2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldHdvcms6IE5ldHdvcmtpbmdTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENoYXRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuaHR0cChcIkdFVFwiLCBcIi9jaGF0L2dldENoYXRzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IENoYXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLmh0dHAoXCJQT1NUXCIsIFwiL2NoYXQvc2VuZE1lc3NhZ2VcIiwge30sIG1lc3NhZ2UpLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG59Il19