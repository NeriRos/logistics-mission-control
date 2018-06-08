"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var connectivity = require("connectivity");
var Networking = /** @class */ (function () {
    function Networking() {
        this._networkStatus = "";
        this._isOnline = false;
    }
    Networking.prototype.checkNetwork = function () {
        var connectionType = connectivity.getConnectionType();
        switch (connectionType) {
            case connectivity.connectionType.none:
                this._networkStatus = "No network connection available!";
                this._isOnline = false;
                break;
            case connectivity.connectionType.wifi:
                this._networkStatus = "You are on wifi!";
                this._isOnline = true;
                break;
            case connectivity.connectionType.mobile:
                this._networkStatus = "You are on a mobile data network!";
                this._isOnline = true;
                break;
        }
        return this._isOnline;
    };
    Networking.prototype.monitorNetworkStart = function () {
        var _this = this;
        this._networkStatus = "Monitoring network connection changes.";
        var onConnectionTypeChanged = function (newConnectionType) {
            switch (newConnectionType) {
                case connectivity.connectionType.none:
                    _this._networkStatus = "No network connection available!";
                    _this._isOnline = false;
                    break;
                case connectivity.connectionType.wifi:
                    _this._networkStatus = "You are now on wifi!";
                    _this._isOnline = true;
                    break;
                case connectivity.connectionType.mobile:
                    _this._networkStatus = "You are now on a mobile data network!";
                    _this._isOnline = true;
                    break;
            }
        };
        connectivity.startMonitoring(onConnectionTypeChanged);
    };
    Networking.prototype.monitorNetworkStop = function () {
        connectivity.stopMonitoring();
        this._networkStatus = "No longer monitoring network connection changes.";
    };
    Object.defineProperty(Networking.prototype, "networkStatus", {
        get: function () {
            return this._networkStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Networking.prototype, "isOnline", {
        get: function () {
            return this._isOnline;
        },
        enumerable: true,
        configurable: true
    });
    Networking = __decorate([
        core_1.Injectable()
    ], Networking);
    return Networking;
}());
exports.Networking = Networking;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV0d29yay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDJDQUE2QztBQUc3QztJQURBO1FBRVksbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztJQTBEdkMsQ0FBQztJQXhERyxpQ0FBWSxHQUFaO1FBQ0ksSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDeEQsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFLLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSTtnQkFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxrQ0FBa0MsQ0FBQztnQkFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQztZQUNWLEtBQUssWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJO2dCQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLGtCQUFrQixDQUFDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxZQUFZLENBQUMsY0FBYyxDQUFDLE1BQU07Z0JBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsbUNBQW1DLENBQUM7Z0JBQzFELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixLQUFLLENBQUM7UUFDZCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELHdDQUFtQixHQUFuQjtRQUFBLGlCQW9CQztRQW5CRyxJQUFJLENBQUMsY0FBYyxHQUFHLHdDQUF3QyxDQUFDO1FBQy9ELElBQU0sdUJBQXVCLEdBQUcsVUFBQyxpQkFBaUI7WUFDOUMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSTtvQkFDakMsS0FBSSxDQUFDLGNBQWMsR0FBRyxrQ0FBa0MsQ0FBQztvQkFDekQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQztnQkFDVixLQUFLLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSTtvQkFDakMsS0FBSSxDQUFDLGNBQWMsR0FBRyxzQkFBc0IsQ0FBQztvQkFDN0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLEtBQUssQ0FBQztnQkFDVixLQUFLLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTTtvQkFDbkMsS0FBSSxDQUFDLGNBQWMsR0FBRyx1Q0FBdUMsQ0FBQztvQkFDOUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3RCLEtBQUssQ0FBQztZQUNkLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixZQUFZLENBQUMsZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFFMUQsQ0FBQztJQUVELHVDQUFrQixHQUFsQjtRQUNJLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLGtEQUFrRCxDQUFDO0lBQzdFLENBQUM7SUFHRCxzQkFBVyxxQ0FBYTthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsZ0NBQVE7YUFBbkI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQTFEUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7T0FDQSxVQUFVLENBNER0QjtJQUFELGlCQUFDO0NBQUEsQUE1REQsSUE0REM7QUE1RFksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgY29ubmVjdGl2aXR5IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5ldHdvcmtpbmcge1xyXG4gICAgcHJpdmF0ZSBfbmV0d29ya1N0YXR1czogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgX2lzT25saW5lOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY2hlY2tOZXR3b3JrKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb25UeXBlID0gY29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKCk7XHJcbiAgICAgICAgc3dpdGNoIChjb25uZWN0aW9uVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IFwiTm8gbmV0d29yayBjb25uZWN0aW9uIGF2YWlsYWJsZSFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzT25saW5lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUud2lmaTpcclxuICAgICAgICAgICAgICAgIHRoaXMuX25ldHdvcmtTdGF0dXMgPSBcIllvdSBhcmUgb24gd2lmaSFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzT25saW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9uZXR3b3JrU3RhdHVzID0gXCJZb3UgYXJlIG9uIGEgbW9iaWxlIGRhdGEgbmV0d29yayFcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzT25saW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT25saW5lO1xyXG4gICAgfVxyXG5cclxuICAgIG1vbml0b3JOZXR3b3JrU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IFwiTW9uaXRvcmluZyBuZXR3b3JrIGNvbm5lY3Rpb24gY2hhbmdlcy5cIjtcclxuICAgICAgICBjb25zdCBvbkNvbm5lY3Rpb25UeXBlQ2hhbmdlZCA9IChuZXdDb25uZWN0aW9uVHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG5ld0Nvbm5lY3Rpb25UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25ldHdvcmtTdGF0dXMgPSBcIk5vIG5ldHdvcmsgY29ubmVjdGlvbiBhdmFpbGFibGUhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faXNPbmxpbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLndpZmk6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IFwiWW91IGFyZSBub3cgb24gd2lmaSFcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc09ubGluZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5tb2JpbGU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IFwiWW91IGFyZSBub3cgb24gYSBtb2JpbGUgZGF0YSBuZXR3b3JrIVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2lzT25saW5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29ubmVjdGl2aXR5LnN0YXJ0TW9uaXRvcmluZyhvbkNvbm5lY3Rpb25UeXBlQ2hhbmdlZCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbW9uaXRvck5ldHdvcmtTdG9wKCkge1xyXG4gICAgICAgIGNvbm5lY3Rpdml0eS5zdG9wTW9uaXRvcmluZygpO1xyXG4gICAgICAgIHRoaXMuX25ldHdvcmtTdGF0dXMgPSBcIk5vIGxvbmdlciBtb25pdG9yaW5nIG5ldHdvcmsgY29ubmVjdGlvbiBjaGFuZ2VzLlwiO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBuZXR3b3JrU3RhdHVzKCkgOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uZXR3b3JrU3RhdHVzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGlzT25saW5lKCkgOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPbmxpbmU7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ==