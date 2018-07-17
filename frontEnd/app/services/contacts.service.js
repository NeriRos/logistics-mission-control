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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRhY3RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLDhEQUErRDtBQUkvRDtJQUNJLHlCQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtJQUU5QyxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQVhRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTtpREFFb0IsbUNBQWlCO09BRHJDLGVBQWUsQ0FjM0I7SUFBRCxzQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbmV0d29yay5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbnRhY3RzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldHdvcms6IE5ldHdvcmtpbmdTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJpZW5kcygpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuaHR0cChcIkdFVFwiLCBgL2dldEZyaWVuZHNgKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGcmllbmQoZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5odHRwKFwiUE9TVFwiLCBgL2FkZEZyaWVuZGAsIHt9LCB7ZW1haWw6IGVtYWlsfSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iXX0=