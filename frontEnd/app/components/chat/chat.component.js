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
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.me = this.userService.getID();
                        _a = this;
                        _b = observable_array_1.ObservableArray.bind;
                        return [4 /*yield*/, this.chatService.getChats().toPromise()];
                    case 1:
                        _a.chats$ = new (_b.apply(observable_array_1.ObservableArray, [void 0, _c.sent()]))();
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
                from: this.me,
                date: new Date(),
                to: this.friend.email
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
        if (sender == this.me) {
            return "me";
        }
        else {
            return "them";
        }
    };
    ChatComponent.prototype.align = function (sender) {
        if (sender == this.me) {
            return "right";
        }
        else {
            return "left";
        }
    };
    ChatComponent.prototype.showImage = function (sender) {
        if (sender == this.me) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBb0c7QUFDcEcsc0RBQW9EO0FBS3BELDRGQUEwRjtBQUMxRiwwQ0FBaUQ7QUFFakQsMERBQXVEO0FBQ3ZELDhEQUE0RDtBQUM1RCx3REFBc0Q7QUFLdEQsNENBQTJDO0FBUTNDO0lBY0ksdUJBQW9CLFdBQXdCLEVBQVUsS0FBcUIsRUFBVSxJQUFVLEVBQVUsV0FBd0IsRUFBVSxPQUF1QixFQUFVLG1CQUFzQyxFQUFVLE9BQWdCO1FBQTVPLGlCQVVDO1FBVm1CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBUHJPLHVCQUFrQixHQUFXLENBQUMsQ0FBQztRQVFsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFFbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxFQUFFLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUUvQyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFBQSxDQUFDO1lBQzVDLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMs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RUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUE7UUFDdEIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsTUFBTSxDQUFDLFNBQVMsQ0FBQTtRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFpQztJQUNqQyx1Q0FBZSxHQUFmLFVBQWdCLElBQWU7UUFDM0IsSUFBTSxnQkFBZ0IsR0FBaUIsSUFBSSxDQUFDLE1BQU8sQ0FBQyxNQUFNLENBQUM7UUFDM0QsNkRBQTZEO0lBQ2pFLENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsMENBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFqR2tCO1FBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDOzBDQUFLLGlCQUFVOzZDQUFDO0lBQ1Y7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7MENBQUssaUJBQVU7NkNBQUM7SUFGOUIsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQztpREFlbUMsMEJBQVcsRUFBaUIsdUJBQWMsRUFBZ0IsV0FBSSxFQUF1QiwyQkFBVyxFQUFtQixnQ0FBYyxFQUErQix3QkFBaUIsRUFBbUIsaUJBQU87T0Fkbk8sYUFBYSxDQW1HekI7SUFBRCxvQkFBQztDQUFBLEFBbkdELElBbUdDO0FBbkdZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIE5nWm9uZSwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dFwiO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldy9saXN0LXZpZXcnO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2hlbHBlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9jaGF0LnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQ2hhdCB9IGZyb20gXCJ+L21vZGVscy9jaGF0Lm1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIubW9kZWxcIjtcblxuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gJ34vc2hhcmVkL2dsb2JhbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDaGF0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NoYXQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImNoYXQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwibGlzdFwiKSBsdjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGV4dGZpZWxkXCIpIHRmOiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIG1lOiBzdHJpbmc7XG4gICAgcHVibGljIGZyaWVuZDogVXNlcjtcblxuICAgIHB1YmxpYyBudW1iZXJPZkFkZGVkSXRlbXM6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgbGlzdDogTGlzdFZpZXc7XG4gICAgcHVibGljIHRleHRGaWVsZDogVGV4dEZpZWxkO1xuICAgIHB1YmxpYyBjaGF0cyQ6IE9ic2VydmFibGVBcnJheTxDaGF0PjtcbiAgICBwdWJsaWMgZnJpZW5kcyQ6IE9ic2VydmFibGVBcnJheTxVc2VyPjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhdFNlcnZpY2U6IENoYXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBoZWxwZXJzOiBIZWxwZXJzU2VydmljZSwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBnbG9iYWxzOiBHbG9iYWxzKSB7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgaWYoIXBhcmFtc1tcImZyaWVuZFwiXSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oZWxwZXJzLm5hdmlnYXRlKFtcImNvbnRhY3RzXCJdKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5mcmllbmQgPSBKU09OLnBhcnNlKHBhcmFtc1tcImZyaWVuZFwiXSk7O1xuICAgICAgICAgICAgdGhpcy5mcmllbmQucGljdHVyZSA9IHRoaXMuZnJpZW5kLnBpY3R1cmUgfHwgdGhpcy5nbG9iYWxzLkRFRkFVTFRfVVNFUl9QSUNUVVJFO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm1lID0gdGhpcy51c2VyU2VydmljZS5nZXRJRCgpOyBcbiAgICAgICAgdGhpcy5jaGF0cyQgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGF3YWl0IHRoaXMuY2hhdFNlcnZpY2UuZ2V0Q2hhdHMoKS50b1Byb21pc2UoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnRleHRGaWVsZCA9IHRoaXMudGYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBzY3JvbGwoY291bnQ6IG51bWJlcil7XG4gICAgICAgY29uc29sZS5sb2coXCJzY3JvbGxpbmcgdG8gXCIsIGNvdW50KVxuICAgICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KGNvdW50LTEpO1xuICAgICAgIHRoaXMubGlzdC5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgY2hhdCgpIHtcbiAgICAgICAgaWYodGhpcy5mcmllbmQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2U6IENoYXQgPSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy50ZXh0RmllbGQudGV4dCxcbiAgICAgICAgICAgICAgICBmcm9tOiB0aGlzLm1lLFxuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgdG86IHRoaXMuZnJpZW5kLmVtYWlsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLnNlbmRNZXNzYWdlKG5ld01lc3NhZ2UpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydChcIlRoZXJlIHdhcyBhbiBlcnJvciBzZW5kaW5nIHlvdXIgbWVzc2FnZSwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbCh0aGlzLmxpc3QuaXRlbXMgPyB0aGlzLmxpc3QuaXRlbXMubGVuZ3RoIDogMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGF0cyQucHVzaChuZXdNZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQudGV4dCA9ICcnOyAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXIoc2VuZGVyKSB7XG4gICAgICAgIGlmIChzZW5kZXIgPT0gdGhpcy5tZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwibWVcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwidGhlbVwiXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxpZ24oc2VuZGVyKSB7XG4gICAgICAgIGlmIChzZW5kZXIgPT0gdGhpcy5tZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwibGVmdFwiXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd0ltYWdlKHNlbmRlcikge1xuICAgICAgICBpZiAoc2VuZGVyID09IHRoaXMubWUpIHtcbiAgICAgICAgICAgIHJldHVybiBcImNvbGxhcHNlZFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ2aXNpYmxlXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5hdmlnYXRlIHRvIGNvcnJlc3BvbmRpbmcgcGFnZVxuICAgIG9uTWVudUJ1dHRvblRhcChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgbWVudUJ1dHRvblBhcmVudCA9ICg8U3RhY2tMYXlvdXQ+YXJncy5vYmplY3QpLnBhcmVudDtcbiAgICAgICAgLy8gYWxlcnQoXCJOYXZpZ2F0ZSB0byBcIiArIG1lbnVCdXR0b25QYXJlbnQuZ2V0KFwiZGF0YS1uYW1lXCIpKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0ZSB0byBwcm9maWxlIHBhZ2UgaGVyZVxuICAgIG9uUHJvZmlsZUJ1dHRvblRhcCgpIHtcbiAgICAgICAgdGhpcy5oZWxwZXJzLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xuICAgIH1cbn1cbiJdfQ==