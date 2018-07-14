"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var login_service_1 = require("~/services/login.service");
var helpers_service_1 = require("~/services/helpers.service");
var chat_service_1 = require("~/services/chat.service");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var router_1 = require("@angular/router");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, route, page, userService, helpers, _changeDetectionRef) {
        var _this = this;
        this.chatService = chatService;
        this.route = route;
        this.page = page;
        this.userService = userService;
        this.helpers = helpers;
        this._changeDetectionRef = _changeDetectionRef;
        this.numberOfAddedItems = 0;
        this.page.actionBarHidden = false;
        this.route.queryParams.subscribe(function (params) {
            _this.room = params["email"];
            _this.senderPicture = params["picture"];
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
        if (this.room) {
            var newMessage_1 = {
                message: this.textField.text,
                from: this.me,
                date: new Date(),
                to: this.room
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
        alert("Navigate to " + menuButtonParent.get("data-name"));
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
        tslib_1.__metadata("design:paramtypes", [chat_service_1.ChatService, router_1.ActivatedRoute, page_1.Page, login_service_1.UserService, helpers_service_1.HelpersService, core_1.ChangeDetectorRef])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBb0c7QUFDcEcsc0RBQW9EO0FBSXBELDBEQUF1RDtBQUN2RCw4REFBNEQ7QUFDNUQsd0RBQXNEO0FBU3RELDRGQUEwRjtBQUMxRiwwQ0FBaUQ7QUFRakQ7SUFnQkksdUJBQW9CLFdBQXdCLEVBQVUsS0FBcUIsRUFBVSxJQUFVLEVBQVUsV0FBd0IsRUFBVSxPQUF1QixFQUFVLG1CQUFzQztRQUFsTixpQkFNQztRQU5tQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBUDNNLHVCQUFrQixHQUFXLENBQUMsQ0FBQztRQVFsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNuQyxLQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFWSxnQ0FBUSxHQUFyQjs7Ozs7O3dCQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDbkMsS0FBQSxJQUFJLENBQUE7NkJBQWMsa0NBQWU7d0JBQUMscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7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Q0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGdDQUFnQztJQUNoQywwQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQS9Ga0I7UUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7MENBQUssaUJBQVU7NkNBQUM7SUFDVjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzswQ0FBSyxpQkFBVTs2Q0FBQztJQUY5QixhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO2lEQWlCbUMsMEJBQVcsRUFBaUIsdUJBQWMsRUFBZ0IsV0FBSSxFQUF1QiwyQkFBVyxFQUFtQixnQ0FBYyxFQUErQix3QkFBaUI7T0FoQnpNLGFBQWEsQ0FpR3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWpHRCxJQWlHQztBQWpHWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBOZ1pvbmUsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXRcIjtcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2hlbHBlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9jaGF0LnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3L2xpc3Qtdmlldyc7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQvdGV4dC1maWVsZCc7XG5pbXBvcnQgeyBDaGF0IH0gZnJvbSBcIn4vbW9kZWxzL2NoYXQubW9kZWxcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0xpbmVhckxheW91dCwgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3LCBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDaGF0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NoYXQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImNoYXQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwibGlzdFwiKSBsdjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGV4dGZpZWxkXCIpIHRmOiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGxvZ2dlZFVzZXI6IHN0cmluZztcbiAgICBwdWJsaWMgbWU6IHN0cmluZztcbiAgICBwdWJsaWMgcm9vbTogc3RyaW5nO1xuICAgIHB1YmxpYyBzZW5kZXJQaWN0dXJlOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgbnVtYmVyT2ZBZGRlZEl0ZW1zOiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIGxpc3Q6IExpc3RWaWV3O1xuICAgIHB1YmxpYyB0ZXh0RmllbGQ6IFRleHRGaWVsZDtcbiAgICBwdWJsaWMgY2hhdHMkOiBPYnNlcnZhYmxlQXJyYXk8Q2hhdD47XG4gICAgcHVibGljIGZyaWVuZHMkOiBPYnNlcnZhYmxlQXJyYXk8VXNlcj47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXRTZXJ2aWNlOiBDaGF0U2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgaGVscGVyczogSGVscGVyc1NlcnZpY2UsIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5yb29tID0gcGFyYW1zW1wiZW1haWxcIl07XG4gICAgICAgICAgICB0aGlzLnNlbmRlclBpY3R1cmUgPSBwYXJhbXNbXCJwaWN0dXJlXCJdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm1lID0gdGhpcy51c2VyU2VydmljZS5nZXRJRCgpOyBcbiAgICAgICAgdGhpcy5jaGF0cyQgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGF3YWl0IHRoaXMuY2hhdFNlcnZpY2UuZ2V0Q2hhdHMoKS50b1Byb21pc2UoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnRleHRGaWVsZCA9IHRoaXMudGYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBzY3JvbGwoY291bnQ6IG51bWJlcil7XG4gICAgICAgY29uc29sZS5sb2coXCJzY3JvbGxpbmcgdG8gXCIsIGNvdW50KVxuICAgICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KGNvdW50LTEpO1xuICAgICAgIHRoaXMubGlzdC5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgY2hhdCgpIHtcbiAgICAgICAgaWYodGhpcy5yb29tKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlOiBDaGF0ID0ge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMudGV4dEZpZWxkLnRleHQsXG4gICAgICAgICAgICAgICAgZnJvbTogdGhpcy5tZSxcbiAgICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIHRvOiB0aGlzLnJvb21cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuY2hhdFNlcnZpY2Uuc2VuZE1lc3NhZ2UobmV3TWVzc2FnZSkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KFwiVGhlcmUgd2FzIGFuIGVycm9yIHNlbmRpbmcgeW91ciBtZXNzYWdlLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsKHRoaXMubGlzdC5pdGVtcyA/IHRoaXMubGlzdC5pdGVtcy5sZW5ndGggOiAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXRzJC5wdXNoKG5ld01lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRleHRGaWVsZC50ZXh0ID0gJyc7ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcihzZW5kZXIpIHtcbiAgICAgICAgaWYgKHNlbmRlciA9PSB0aGlzLm1lKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJtZVwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0aGVtXCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGlnbihzZW5kZXIpIHtcbiAgICAgICAgaWYgKHNlbmRlciA9PSB0aGlzLm1lKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyaWdodFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93SW1hZ2Uoc2VuZGVyKSB7XG4gICAgICAgIGlmIChzZW5kZXIgPT0gdGhpcy5tZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiY29sbGFwc2VkXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInZpc2libGVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGUgdG8gY29ycmVzcG9uZGluZyBwYWdlXG4gICAgb25NZW51QnV0dG9uVGFwKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBtZW51QnV0dG9uUGFyZW50ID0gKDxTdGFja0xheW91dD5hcmdzLm9iamVjdCkucGFyZW50O1xuICAgICAgICBhbGVydChcIk5hdmlnYXRlIHRvIFwiICsgbWVudUJ1dHRvblBhcmVudC5nZXQoXCJkYXRhLW5hbWVcIikpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRlIHRvIHByb2ZpbGUgcGFnZSBoZXJlXG4gICAgb25Qcm9maWxlQnV0dG9uVGFwKCkge1xuICAgICAgICB0aGlzLmhlbHBlcnMubmF2aWdhdGUoW1wiaG9tZVwiXSk7XG4gICAgfVxufVxuIl19