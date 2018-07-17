"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var network_service_1 = require("~/services/network.service");
var ChatService = /** @class */ (function () {
    function ChatService(network) {
        this.network = network;
    }
    ChatService.prototype.getChats = function (friendID) {
        return this.network.http("GET", "/chat/getChats?id=" + friendID);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUUzQyw4REFBK0Q7QUFJL0Q7SUFDSSxxQkFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFFOUMsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsdUJBQXFCLFFBQVUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksT0FBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkYsQ0FBQztJQVhRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtpREFFb0IsbUNBQWlCO09BRHJDLFdBQVcsQ0FZdkI7SUFBRCxrQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENoYXQgfSBmcm9tIFwifi9tb2RlbHMvY2hhdC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBOZXR3b3JraW5nU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENoYXRTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV0d29yazogTmV0d29ya2luZ1NlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hhdHMoZnJpZW5kSUQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLmh0dHAoXCJHRVRcIiwgYC9jaGF0L2dldENoYXRzP2lkPSR7ZnJpZW5kSUR9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZE1lc3NhZ2UobWVzc2FnZTogQ2hhdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuaHR0cChcIlBPU1RcIiwgXCIvY2hhdC9zZW5kTWVzc2FnZVwiLCB7fSwgbWVzc2FnZSkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcbn0iXX0=