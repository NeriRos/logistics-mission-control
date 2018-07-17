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
