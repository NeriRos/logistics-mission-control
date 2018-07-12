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
    DeliveryService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [network_service_1.NetworkingService])
    ], DeliveryService);
    return DeliveryService;
}());
exports.DeliveryService = DeliveryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLDhEQUErRDtBQUcvRDtJQUdJLHlCQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUZ0QyxXQUFNLEdBQVcsa0NBQWtDLENBQUM7SUFJNUQsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxjQUFzQixFQUFFLFlBQW9CO1FBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFVLElBQUksQ0FBQyxNQUFNLG1DQUFnQyxFQUFFO1lBQzdFLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGlDQUFpQyxFQUFFO1lBQzlELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFDLENBQUM7U0FDckYsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQseUNBQWUsR0FBZixVQUFnQixRQUFRO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUM7WUFDakMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLFdBQVcsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDO2dCQUN2RCxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDZixLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsQ0FBQztnQkFDRixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDL0IsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUMvQyxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFuQ1EsZUFBZTtRQUQzQixpQkFBVSxFQUFFO2lEQUlvQixtQ0FBaUI7T0FIckMsZUFBZSxDQW9DM0I7SUFBRCxzQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5ldHdvcmtpbmdTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbmV0d29yay5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZWxpdmVyeVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXI6IHN0cmluZyA9IFwiaHR0cDovLzE0MS4yMjYuMjEuNDQ6ODA1MC9iYWxkYXJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldHdvcms6IE5ldHdvcmtpbmdTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdFN0YXR1cyhkZWxpdmVyeU51bWJlcjogbnVtYmVyLCBjdXN0b21lckNvZGU6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5ldHdvcmsuZmV0Y2goYGh0dHA6Ly8ke3RoaXMuc2VydmVyfS9EZWxpdmVyeVN0YXR1cy5hc3B4L0dldFN0YXR1c2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIiB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ZGVsaXZlcnlOdW1iZXI6IGRlbGl2ZXJ5TnVtYmVyLCBjdXN0b21lckNvZGU6IGN1c3RvbWVyQ29kZX0pXHJcbiAgICAgICAgfSkudGhlbigocikgPT4gci5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3BvbnNlSGFuZGxlcihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgKHJlc3BvbnNlKSA9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgYWxlcnQoJ9eQ15nXqNei15Qg16rXp9ec15QsINeg15Ag15zXpNeg15XXqiDXnNeq157Xmdeb15Qg15TXqteb16DXmdeqJyk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwID0gcmVzcG9uc2UuZDtcclxuICAgICAgICAgICAgaWYgKHJlc3AgPT0gbnVsbCB8fCByZXNwID09ICd1bmRlZmluZWQnIHx8IHJlc3AgPT0gJ0VSUk9SJylcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfXkNeZ16jXoteUINep15LXmdeQ15QsINeg15Ag15zXpNeg15XXqiDXnNeq157Xmdeb15Qg15TXqteb16DXmdeqJyk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYocmVzcCA9PSAnJylcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfXnNeQINeg157XpteQ15Ug16TXqNeY15nXnScpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IHJlc3Auc3BsaXQoJzsnKTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbXNbaV0udHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IGl0ZW1zW2ldLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGl2ZXJ5IHN0YXR1cyBhcnJheTpcIiwgYXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=