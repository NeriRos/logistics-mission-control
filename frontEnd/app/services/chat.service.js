"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    ChatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDhEQUErRDtBQUkvRDtJQUNJLHFCQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUU5QyxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLGdEQUFnRDtRQUNoRCxxQkFBcUI7UUFDckIsaURBQWlEO1FBQ2pELDhCQUE4QjtRQUM5Qiw0QkFBNEI7UUFFNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksT0FBZSxFQUFFLEVBQVUsRUFBRSxNQUFjO1FBQ25ELElBQU0sVUFBVSxHQUFTO1lBQ3JCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ2hCLEVBQUUsRUFBRSxFQUFFO1NBQ1QsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RGLENBQUM7SUF4QlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUVvQixtQ0FBaUI7T0FEckMsV0FBVyxDQXlCdkI7SUFBRCxrQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENoYXQgfSBmcm9tIFwifi9tb2RlbHMvY2hhdC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBOZXR3b3JraW5nU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENoYXRTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV0d29yazogTmV0d29ya2luZ1NlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hhdHMoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMubmV0d29yay5mZXRjaChcIi9jaGF0L2dldENoYXRzXCIsIHtcclxuICAgICAgICAvLyAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIC8vICAgICBoZWFkZXJzOiB7IFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgLy8gICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiBcclxuICAgICAgICAvLyB9KS50aGVuKChyKSA9PiByLmpzb24oKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuaHR0cChcIkdFVFwiLCBcIi9jaGF0L2dldENoYXRzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZywgdG86IHN0cmluZywgdXNlcklEOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBuZXdNZXNzYWdlOiBDaGF0ID0ge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgICAgICAgICBmcm9tOiB1c2VySUQsXHJcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIHRvOiB0b1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuaHR0cChcIlBPU1RcIiwgXCIvY2hhdC9zZW5kTWVzc2FnZVwiLCB7fSwgbmV3TWVzc2FnZSkudG9Qcm9taXNlKCk7XHJcbiAgICB9XHJcbn0iXX0=