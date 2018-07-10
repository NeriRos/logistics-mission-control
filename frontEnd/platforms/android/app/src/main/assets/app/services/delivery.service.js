"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var network_service_1 = require("./network.service");
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
        if (typeof (response) == 'undefined')
            alert('אירעה תקלה, נא לפנות לתמיכה התכנית');
        else {
            var resp = response.d;
            if (resp == null || resp == 'undefined' || resp == 'ERROR')
                alert('אירעה שגיאה, נא לפנות לתמיכה התכנית');
            else if (resp == '')
                alert('לא נמצאו פרטים');
            else {
                var items = resp.split(';');
                for (var i = 0; i < items.length; i++) {
                    if (items[i].trim().length > 0) {
                        var arr = items[i].split('|');
                        console.log("delivery status array:", arr);
                    }
                }
            }
        }
    };
    DeliveryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], DeliveryService);
    return DeliveryService;
}());
exports.DeliveryService = DeliveryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MscURBQXNEO0FBR3REO0lBR0kseUJBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBRnRDLFdBQU0sR0FBVyxrQ0FBa0MsQ0FBQztJQUk1RCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLGNBQXNCLEVBQUUsWUFBb0I7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVUsSUFBSSxDQUFDLE1BQU0sbUNBQWdDLEVBQUU7WUFDN0UsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsaUNBQWlDLEVBQUU7WUFDOUQsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUMsQ0FBQztTQUNyRixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCx5Q0FBZSxHQUFmLFVBQWdCLFFBQVE7UUFDcEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQztZQUNqQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksV0FBVyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUM7Z0JBQ3ZELEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUNmLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxDQUFDO2dCQUNGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUMvQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzVCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQy9DLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQW5DUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBSW9CLG1DQUFpQjtPQUhyQyxlQUFlLENBb0MzQjtJQUFELHNCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmV0d29ya2luZ1NlcnZpY2UgfSBmcm9tIFwiLi9uZXR3b3JrLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5U2VydmljZSB7XHJcbiAgICBwcml2YXRlIHNlcnZlcjogc3RyaW5nID0gXCJodHRwOi8vMTQxLjIyNi4yMS40NDo4MDUwL2JhbGRhclwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmV0d29yazogTmV0d29ya2luZ1NlcnZpY2UpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0U3RhdHVzKGRlbGl2ZXJ5TnVtYmVyOiBudW1iZXIsIGN1c3RvbWVyQ29kZTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmV0d29yay5mZXRjaChgaHR0cDovLyR7dGhpcy5zZXJ2ZXJ9L0RlbGl2ZXJ5U3RhdHVzLmFzcHgvR2V0U3RhdHVzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtkZWxpdmVyeU51bWJlcjogZGVsaXZlcnlOdW1iZXIsIGN1c3RvbWVyQ29kZTogY3VzdG9tZXJDb2RlfSlcclxuICAgICAgICB9KS50aGVuKChyKSA9PiByLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzcG9uc2VIYW5kbGVyKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAocmVzcG9uc2UpID09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICBhbGVydCgn15DXmdeo16LXlCDXqten15zXlCwg16DXkCDXnNek16DXldeqINec16rXnteZ15vXlCDXlNeq15vXoNeZ16onKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHJlc3AgPSByZXNwb25zZS5kO1xyXG4gICAgICAgICAgICBpZiAocmVzcCA9PSBudWxsIHx8IHJlc3AgPT0gJ3VuZGVmaW5lZCcgfHwgcmVzcCA9PSAnRVJST1InKVxyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ9eQ15nXqNei15Qg16nXkteZ15DXlCwg16DXkCDXnNek16DXldeqINec16rXnteZ15vXlCDXlNeq15vXoNeZ16onKTtcclxuICAgICAgICAgICAgZWxzZSBpZihyZXNwID09ICcnKVxyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ9ec15Ag16DXntem15DXlSDXpNeo15jXmdedJyk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1zID0gcmVzcC5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8aXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpdGVtc1tpXS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gaXRlbXNbaV0uc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsaXZlcnkgc3RhdHVzIGFycmF5OlwiLCBhcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==