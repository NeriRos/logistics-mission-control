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
