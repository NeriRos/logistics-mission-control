"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var localStorage = require("nativescript-localstorage");
var UserService = /** @class */ (function () {
    function UserService() {
        this.server = "cargo-express.co.il";
    }
    UserService.prototype.register = function (user) {
        return fetch("http://" + this.server + "/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(function (r) { return r.json(); });
    };
    UserService.prototype.login = function (user) {
        return fetch("http://" + this.server + "/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(function (r) { return r.json(); });
    };
    UserService.prototype.isAuthenticated = function () {
        var token = this.getToken();
        var payload;
        if (token && token.length > 0) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            payload = JSON.parse(payload);
            return payload.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    UserService.prototype.saveToken = function (token) {
        if (token) {
            localStorage.setItem('token', token);
        }
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('token');
        console.log("Token:", localStorage.getItem('token'));
    };
    UserService.prototype.handleErrors = function (error) {
        console.error(error.message);
        return error.message;
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0Msd0RBQTBEO0FBRzFEO0lBREE7UUFFVSxXQUFNLEdBQVcscUJBQXFCLENBQUM7SUFtRGpELENBQUM7SUFqREMsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFVLElBQUksQ0FBQyxNQUFNLFlBQVMsRUFBRTtZQUMzQyxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtZQUMvQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFDZCxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVUsSUFBSSxDQUFDLE1BQU0sV0FBUSxFQUFFO1lBQzFDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFO1lBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztTQUMzQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksT0FBTyxDQUFDO1FBRVosRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU5QixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQzNDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNILENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBSztRQUNiLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUNELDhCQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNFLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBWTtRQUN2QixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztJQUN2QixDQUFDO0lBbkRVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0FvRHZCO0lBQUQsa0JBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0ICogYXMgbG9jYWxTdG9yYWdlIGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBzZXJ2ZXI6IHN0cmluZyA9IFwiY2FyZ28tZXhwcmVzcy5jby5pbFwiO1xyXG5cclxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly8ke3RoaXMuc2VydmVyfS9zaWdudXBgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlcilcclxuICAgIH0pLnRoZW4oKHIpID0+IHIuanNvbigpKTtcclxuICB9XHJcblxyXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgIHJldHVybiBmZXRjaChgaHR0cDovLyR7dGhpcy5zZXJ2ZXJ9L2xvZ2luYCwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9KS50aGVuKChyKSA9PiByLmpzb24oKSk7XHJcbiAgfVxyXG5cclxuICBpc0F1dGhlbnRpY2F0ZWQoKSA6IGJvb2xlYW4ge1xyXG4gICAgdmFyIHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgbGV0IHBheWxvYWQ7XHJcblxyXG4gICAgaWYgKHRva2VuICYmIHRva2VuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBwYXlsb2FkID0gdG9rZW4uc3BsaXQoJy4nKVsxXTtcclxuICAgICAgICBwYXlsb2FkID0gd2luZG93LmF0b2IocGF5bG9hZCk7XHJcbiAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UocGF5bG9hZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBwYXlsb2FkLmV4cCA+IERhdGUubm93KCkgLyAxMDAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlVG9rZW4odG9rZW4pOiB2b2lkIHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldFRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKTogdm9pZCB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuICAgIGNvbnNvbGUubG9nKFwiVG9rZW46XCIsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKTsgIFxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBFcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xyXG4gIH1cclxufSJdfQ==