"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var network_service_1 = require("~/services/network.service");
var DeliveryService = /** @class */ (function () {
    function DeliveryService(network) {
        this.network = network;
        this.server = "http://141.226.21.44:8050/baldar";
    }
    DeliveryService.prototype.requestStatus = function (deliveryNumber, customerCode) {
        return this.network.fetch("http://" + this.server + "/DeliveryStatus.aspx/GetStatus", {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify({ deliveryNumber: deliveryNumber, customerCode: customerCode })
        }).then(function (r) { return r.json(); });
    };
    DeliveryService.prototype.responseHandler = function (response) {
        if (typeof (response) === "undefined") {
            alert("אירעה תקלה, נא לפנות לתמיכה התכנית");
        }
        else {
            var resp = response.d;
            if (resp == null || resp === "undefined" || resp === "ERROR") {
                alert("אירעה שגיאה, נא לפנות לתמיכה התכנית");
            }
            else if (resp === "") {
                alert("לא נמצאו פרטים");
            }
            else {
                var items = resp.split(";");
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    if (item.trim().length > 0) {
                        var arr = items.split("|");
                        console.log("delivery status array:", arr);
                    }
                }
            }
        }
    };
    DeliveryService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], DeliveryService);
    return DeliveryService;
}());
exports.DeliveryService = DeliveryService;
