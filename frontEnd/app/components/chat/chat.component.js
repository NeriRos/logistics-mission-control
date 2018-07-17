"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var router_1 = require("@angular/router");
var login_service_1 = require("~/services/login.service");
var helpers_service_1 = require("~/services/helpers.service");
var chat_service_1 = require("~/services/chat.service");
var globals_1 = require("~/shared/globals");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, route, page, userService, helpers, _changeDetectionRef, globals) {
        var _this = this;
        this.chatService = chatService;
        this.route = route;
        this.page = page;
        this.userService = userService;
        this.helpers = helpers;
        this._changeDetectionRef = _changeDetectionRef;
        this.globals = globals;
        this.numberOfAddedItems = 0;
        this.page.actionBarHidden = false;
        this.route.queryParams.subscribe(function (params) {
            if (!params["friend"])
                return _this.helpers.navigate(["contacts"]);
            _this.friend = JSON.parse(params["friend"]);
            ;
            _this.friend.picture = _this.friend.picture || _this.globals.DEFAULT_USER_PICTURE;
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.userService.getUser().toPromise()];
                    case 1:
                        _a.me = _d.sent();
                        _b = this;
                        _c = observable_array_1.ObservableArray.bind;
                        return [4 /*yield*/, this.chatService.getChats(this.friend._id).toPromise()];
                    case 2:
                        _b.chats$ = new (_c.apply(observable_array_1.ObservableArray, [void 0, _d.sent()]))();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        this.list = this.lv.nativeElement;
        this.textField = this.tf.nativeElement;
    };
    ChatComponent.prototype.scroll = function (count) {
        console.log("scrolling to ", count);
        this.list.scrollToIndex(count - 1);
        this.list.refresh();
    };
    ChatComponent.prototype.chat = function () {
        var _this = this;
        if (this.friend) {
            var newMessage_1 = {
                message: this.textField.text,
                from: this.me._id,
                date: new Date(),
                to: this.friend._id,
            };
            this.chatService.sendMessage(newMessage_1).then(function (data) {
                if (data.error) {
                    console.log(data);
                    return alert("There was an error sending your message, please try again later.");
                }
                _this.scroll(_this.list.items ? _this.list.items.length : 1);
                _this.chats$.push(newMessage_1);
            });
            this.textField.text = '';
        }
    };
    ChatComponent.prototype.filter = function (sender) {
        if (sender == this.me._id) {
            return "me";
        }
        else {
            return "them";
        }
    };
    ChatComponent.prototype.align = function (sender) {
        if (sender == this.me._id) {
            return "right";
        }
        else {
            return "left";
        }
    };
    ChatComponent.prototype.showImage = function (sender) {
        if (sender == this.me._id) {
            return "collapsed";
        }
        else {
            return "visible";
        }
    };
    // Navigate to corresponding page
    ChatComponent.prototype.onMenuButtonTap = function (args) {
        var menuButtonParent = args.object.parent;
        // alert("Navigate to " + menuButtonParent.get("data-name"));
    };
    // Navigate to profile page here
    ChatComponent.prototype.onProfileButtonTap = function () {
        this.helpers.navigate(["home"]);
    };
    tslib_1.__decorate([
        core_1.ViewChild("list"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], ChatComponent.prototype, "lv", void 0);
    tslib_1.__decorate([
        core_1.ViewChild("textfield"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], ChatComponent.prototype, "tf", void 0);
    ChatComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Chat",
            moduleId: module.id,
            templateUrl: "./chat.component.html",
            styleUrls: ["chat.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [chat_service_1.ChatService, router_1.ActivatedRoute, page_1.Page, login_service_1.UserService, helpers_service_1.HelpersService, core_1.ChangeDetectorRef, globals_1.Globals])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBb0c7QUFDcEcsc0RBQW9EO0FBS3BELDRGQUEwRjtBQUMxRiwwQ0FBaUQ7QUFFakQsMERBQXVEO0FBQ3ZELDhEQUE0RDtBQUM1RCx3REFBc0Q7QUFLdEQsNENBQTJDO0FBUTNDO0lBY0ksdUJBQW9CLFdBQXdCLEVBQVUsS0FBcUIsRUFBVSxJQUFVLEVBQVUsV0FBd0IsRUFBVSxPQUF1QixFQUFVLG1CQUFzQyxFQUFVLE9BQWdCO1FBQTVPLGlCQVVDO1FBVm1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBUHJPLHVCQUFrQixHQUFXLENBQUMsQ0FBQztRQVFsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFFbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxJQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDaEIsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFFL0MsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQUEsQ0FBQztZQUM1QyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFJLENBQUMs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Q3JCO2FBQ0k7WUFDRCxPQUFPLFNBQVMsQ0FBQTtTQUNuQjtJQUNMLENBQUM7SUFFRCxpQ0FBaUM7SUFDakMsdUNBQWUsR0FBZixVQUFnQixJQUFlO1FBQzNCLElBQU0sZ0JBQWdCLEdBQWlCLElBQUksQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQzNELDZEQUE2RDtJQUNqRSxDQUFDO0lBRUQsZ0NBQWdDO0lBQ2hDLDBDQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBbEdrQjtRQUFsQixnQkFBUyxDQUFDLE1BQU0sQ0FBQzswQ0FBSyxpQkFBVTs2Q0FBQztJQUNWO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzBDQUFLLGlCQUFVOzZDQUFDO0lBRjlCLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7aURBZW1DLDBCQUFXLEVBQWlCLHVCQUFjLEVBQWdCLFdBQUksRUFBdUIsMkJBQVcsRUFBbUIsZ0NBQWMsRUFBK0Isd0JBQWlCLEVBQW1CLGlCQUFPO09BZG5PLGFBQWEsQ0FvR3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXBHRCxJQW9HQztBQXBHWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBOZ1pvbmUsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXcvbGlzdC12aWV3JztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZC90ZXh0LWZpZWxkJztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgSGVscGVyc1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9oZWxwZXJzLnNlcnZpY2VcIjtcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvY2hhdC5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IENoYXQgfSBmcm9tIFwifi9tb2RlbHMvY2hhdC5tb2RlbFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L21vZGVscy91c2VyLm1vZGVsXCI7XG5cbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tICd+L3NoYXJlZC9nbG9iYWxzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ2hhdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jaGF0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJjaGF0LmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChcImxpc3RcIikgbHY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInRleHRmaWVsZFwiKSB0ZjogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBtZTogVXNlcjtcbiAgICBwdWJsaWMgZnJpZW5kOiBVc2VyO1xuXG4gICAgcHVibGljIG51bWJlck9mQWRkZWRJdGVtczogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBsaXN0OiBMaXN0VmlldztcbiAgICBwdWJsaWMgdGV4dEZpZWxkOiBUZXh0RmllbGQ7XG4gICAgcHVibGljIGNoYXRzJDogT2JzZXJ2YWJsZUFycmF5PENoYXQ+O1xuICAgIHB1YmxpYyBmcmllbmRzJDogT2JzZXJ2YWJsZUFycmF5PFVzZXI+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGF0U2VydmljZTogQ2hhdFNlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIGhlbHBlcnM6IEhlbHBlcnNTZXJ2aWNlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGdsb2JhbHM6IEdsb2JhbHMpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICBpZighcGFyYW1zW1wiZnJpZW5kXCJdKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlbHBlcnMubmF2aWdhdGUoW1wiY29udGFjdHNcIl0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmZyaWVuZCA9IEpTT04ucGFyc2UocGFyYW1zW1wiZnJpZW5kXCJdKTs7XG4gICAgICAgICAgICB0aGlzLmZyaWVuZC5waWN0dXJlID0gdGhpcy5mcmllbmQucGljdHVyZSB8fCB0aGlzLmdsb2JhbHMuREVGQVVMVF9VU0VSX1BJQ1RVUkU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubWUgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXIoKS50b1Byb21pc2UoKTsgXG4gICAgICAgIHRoaXMuY2hhdHMkID0gbmV3IE9ic2VydmFibGVBcnJheShhd2FpdCB0aGlzLmNoYXRTZXJ2aWNlLmdldENoYXRzKHRoaXMuZnJpZW5kLl9pZCkudG9Qcm9taXNlKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMubHYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQgPSB0aGlzLnRmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgc2Nyb2xsKGNvdW50OiBudW1iZXIpe1xuICAgICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsaW5nIHRvIFwiLCBjb3VudClcbiAgICAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleChjb3VudC0xKTtcbiAgICAgICB0aGlzLmxpc3QucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIGNoYXQoKSB7XG4gICAgICAgIGlmKHRoaXMuZnJpZW5kKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlOiBDaGF0ID0ge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMudGV4dEZpZWxkLnRleHQsXG4gICAgICAgICAgICAgICAgZnJvbTogdGhpcy5tZS5faWQsXG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICB0bzogdGhpcy5mcmllbmQuX2lkLFxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLnNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRoZXJlIHdhcyBhbiBlcnJvciBzZW5kaW5nIHlvdXIgbWVzc2FnZSwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbCh0aGlzLmxpc3QuaXRlbXMgPyB0aGlzLmxpc3QuaXRlbXMubGVuZ3RoIDogMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGF0cyQucHVzaChuZXdNZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQudGV4dCA9ICcnOyAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXIoc2VuZGVyKSB7XG4gICAgICAgIGlmIChzZW5kZXIgPT0gdGhpcy5tZS5faWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIm1lXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInRoZW1cIlxuICAgICAgICB9XG4gICAgfVxuICAgIGFsaWduKHNlbmRlcikge1xuICAgICAgICBpZiAoc2VuZGVyID09IHRoaXMubWUuX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyaWdodFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93SW1hZ2Uoc2VuZGVyKSB7XG4gICAgICAgIGlmIChzZW5kZXIgPT0gdGhpcy5tZS5faWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcImNvbGxhcHNlZFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ2aXNpYmxlXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5hdmlnYXRlIHRvIGNvcnJlc3BvbmRpbmcgcGFnZVxuICAgIG9uTWVudUJ1dHRvblRhcChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgbWVudUJ1dHRvblBhcmVudCA9ICg8U3RhY2tMYXlvdXQ+YXJncy5vYmplY3QpLnBhcmVudDtcbiAgICAgICAgLy8gYWxlcnQoXCJOYXZpZ2F0ZSB0byBcIiArIG1lbnVCdXR0b25QYXJlbnQuZ2V0KFwiZGF0YS1uYW1lXCIpKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0ZSB0byBwcm9maWxlIHBhZ2UgaGVyZVxuICAgIG9uUHJvZmlsZUJ1dHRvblRhcCgpIHtcbiAgICAgICAgdGhpcy5oZWxwZXJzLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xuICAgIH1cbn1cbiJdfQ==