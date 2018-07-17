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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbGl2ZXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLDhEQUErRDtBQUcvRDtJQUdJLHlCQUFvQixPQUEwQjtRQUExQixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUZ0QyxXQUFNLEdBQVcsa0NBQWtDLENBQUM7SUFJNUQsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxjQUFzQixFQUFFLFlBQW9CO1FBQ3RELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBVSxJQUFJLENBQUMsTUFBTSxtQ0FBZ0MsRUFBRTtZQUM3RSxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxpQ0FBaUMsRUFBRTtZQUM5RCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBQyxDQUFDO1NBQ3JGLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQVIsQ0FBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHlDQUFlLEdBQWYsVUFBZ0IsUUFBUTtRQUNwQixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXO1lBQ2hDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLFdBQVcsSUFBSSxJQUFJLElBQUksT0FBTztnQkFDdEQsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7aUJBQzVDLElBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ2QsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQ3ZCO2dCQUNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUM5QixJQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUMzQixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUM5QztpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBbkNRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTtpREFJb0IsbUNBQWlCO09BSHJDLGVBQWUsQ0FvQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOZXR3b3JraW5nU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL25ldHdvcmsuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGVsaXZlcnlTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc2VydmVyOiBzdHJpbmcgPSBcImh0dHA6Ly8xNDEuMjI2LjIxLjQ0OjgwNTAvYmFsZGFyXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JraW5nU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RTdGF0dXMoZGVsaXZlcnlOdW1iZXI6IG51bWJlciwgY3VzdG9tZXJDb2RlOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZXR3b3JrLmZldGNoKGBodHRwOi8vJHt0aGlzLnNlcnZlcn0vRGVsaXZlcnlTdGF0dXMuYXNweC9HZXRTdGF0dXNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe2RlbGl2ZXJ5TnVtYmVyOiBkZWxpdmVyeU51bWJlciwgY3VzdG9tZXJDb2RlOiBjdXN0b21lckNvZGV9KVxyXG4gICAgICAgIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNwb25zZUhhbmRsZXIocmVzcG9uc2UpIHtcclxuICAgICAgICBpZiAodHlwZW9mIChyZXNwb25zZSkgPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgIGFsZXJ0KCfXkNeZ16jXoteUINeq16fXnNeULCDXoNeQINec16TXoNeV16og15zXqtee15nXm9eUINeU16rXm9eg15nXqicpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcmVzcCA9IHJlc3BvbnNlLmQ7XHJcbiAgICAgICAgICAgIGlmIChyZXNwID09IG51bGwgfHwgcmVzcCA9PSAndW5kZWZpbmVkJyB8fCByZXNwID09ICdFUlJPUicpXHJcbiAgICAgICAgICAgICAgICBhbGVydCgn15DXmdeo16LXlCDXqdeS15nXkNeULCDXoNeQINec16TXoNeV16og15zXqtee15nXm9eUINeU16rXm9eg15nXqicpO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHJlc3AgPT0gJycpXHJcbiAgICAgICAgICAgICAgICBhbGVydCgn15zXkCDXoNee16bXkNeVINek16jXmNeZ150nKTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSByZXNwLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW1zW2ldLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBpdGVtc1tpXS5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxpdmVyeSBzdGF0dXMgYXJyYXk6XCIsIGFycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19