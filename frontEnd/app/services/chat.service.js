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
        // return this.network.fetch("/chat/getChats", {
        //     method: "GET",
        //     headers: { "Accept": "application/json" },
        //     credentials: "include" 
        // }).then((r) => r.json());
        return this.network.http("GET", "/chat/getChats");
    };
    ChatService.prototype.sendMessage = function (message, to, userID) {
        var newMessage = {
            message: message,
            from: userID,
            date: new Date(),
            to: to
        };
        return this.network.http("POST", "/chat/sendMessage", {}, newMessage).toPromise();
    };
    ChatService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUUzQyw4REFBK0Q7QUFJL0Q7SUFDSSxxQkFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFFOUMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxnREFBZ0Q7UUFDaEQscUJBQXFCO1FBQ3JCLGlEQUFpRDtRQUNqRCw4QkFBOEI7UUFDOUIsNEJBQTRCO1FBRTVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLE9BQWUsRUFBRSxFQUFVLEVBQUUsTUFBYztRQUNuRCxJQUFNLFVBQVUsR0FBUztZQUNyQixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUNoQixFQUFFLEVBQUUsRUFBRTtTQUNULENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFtQixFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0RixDQUFDO0lBeEJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtpREFFb0IsbUNBQWlCO09BRHJDLFdBQVcsQ0F5QnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDaGF0IH0gZnJvbSBcIn4vbW9kZWxzL2NoYXQubW9kZWxcIjtcclxuaW1wb3J0IHsgTmV0d29ya2luZ1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9uZXR3b3JrLnNlcnZpY2VcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaGF0U2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldHdvcms6IE5ldHdvcmtpbmdTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldENoYXRzKCkge1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLm5ldHdvcmsuZmV0Y2goXCIvY2hhdC9nZXRDaGF0c1wiLCB7XHJcbiAgICAgICAgLy8gICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAvLyAgICAgaGVhZGVyczogeyBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIC8vICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgXHJcbiAgICAgICAgLy8gfSkudGhlbigocikgPT4gci5qc29uKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLmh0dHAoXCJHRVRcIiwgXCIvY2hhdC9nZXRDaGF0c1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzZW5kTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIHRvOiBzdHJpbmcsIHVzZXJJRDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbmV3TWVzc2FnZTogQ2hhdCA9IHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgZnJvbTogdXNlcklELFxyXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICB0bzogdG9cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLmh0dHAoXCJQT1NUXCIsIFwiL2NoYXQvc2VuZE1lc3NhZ2VcIiwge30sIG5ld01lc3NhZ2UpLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG59Il19