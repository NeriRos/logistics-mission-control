"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var login_service_1 = require("~/services/login.service");
var helpers_service_1 = require("~/services/helpers.service");
var chat_service_1 = require("~/services/chat.service");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, page, userService, helpers, _changeDetectionRef) {
        this.chatService = chatService;
        this.page = page;
        this.userService = userService;
        this.helpers = helpers;
        this._changeDetectionRef = _changeDetectionRef;
        this.numberOfAddedItems = 0;
        this.page.actionBarHidden = false;
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.me = this.userService.getID();
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
            this.chatService.sendMessage(this.textField.text, this.room, this.me).then(function (data) {
                var count = _this.list.items.length;
                _this.scroll(count);
                console.log("Data", data);
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
        tslib_1.__metadata("design:paramtypes", [chat_service_1.ChatService, page_1.Page, login_service_1.UserService, helpers_service_1.HelpersService, core_1.ChangeDetectorRef])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBb0c7QUFDcEcsc0RBQW9EO0FBSXBELDBEQUF1RDtBQUN2RCw4REFBNEQ7QUFDNUQsd0RBQXNEO0FBaUJ0RDtJQWdCSSx1QkFBb0IsV0FBd0IsRUFBVSxJQUFVLEVBQVUsV0FBd0IsRUFBVSxPQUF1QixFQUFVLG1CQUFzQztRQUEvSixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQVA1Syx1QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFRbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxnQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEtBQWE7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFBQSxpQkFVQztRQVRHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBUztnQkFDakYsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxNQUFNO1FBQ1QsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDZixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsTUFBTSxDQUFBO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0QsNkJBQUssR0FBTCxVQUFNLE1BQU07UUFDUixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQTtRQUNsQixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsTUFBTSxDQUFBO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBQ0QsaUNBQVMsR0FBVCxVQUFVLE1BQU07UUFDWixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQTtRQUN0QixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixNQUFNLENBQUMsU0FBUyxDQUFBO1FBQ3BCLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQWlDO0lBQ2pDLHVDQUFlLEdBQWYsVUFBZ0IsSUFBZTtRQUMzQixJQUFNLGdCQUFnQixHQUFpQixJQUFJLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMzRCxLQUFLLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsMENBQWtCLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFoRmtCO1FBQWxCLGdCQUFTLENBQUMsTUFBTSxDQUFDOzBDQUFLLGlCQUFVOzZDQUFDO0lBQ1Y7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7MENBQUssaUJBQVU7NkNBQUM7SUFGOUIsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQztpREFpQm1DLDBCQUFXLEVBQWdCLFdBQUksRUFBdUIsMkJBQVcsRUFBbUIsZ0NBQWMsRUFBK0Isd0JBQWlCO09BaEIxSyxhQUFhLENBa0Z6QjtJQUFELG9CQUFDO0NBQUEsQUFsRkQsSUFrRkM7QUFsRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgTmdab25lLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIlxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXQvc3RhY2stbGF5b3V0XCI7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgSGVscGVyc1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9oZWxwZXJzLnNlcnZpY2VcIjtcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvY2hhdC5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldy9saXN0LXZpZXcnO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgQ2hhdCB9IGZyb20gXCJ+L21vZGVscy9jaGF0Lm1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIubW9kZWxcIjtcblxuaW1wb3J0IHsgTGlzdFZpZXdMaW5lYXJMYXlvdXQsIExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ2hhdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jaGF0LmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJjaGF0LmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZChcImxpc3RcIikgbHY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcInRleHRmaWVsZFwiKSB0ZjogRWxlbWVudFJlZjtcblxuICAgIHB1YmxpYyBsb2dnZWRVc2VyOiBzdHJpbmc7XG4gICAgcHVibGljIG1lOiBzdHJpbmc7XG4gICAgcHVibGljIHJvb206IHN0cmluZztcblxuICAgIHByaXZhdGUgbGF5b3V0OiBMaXN0Vmlld0xpbmVhckxheW91dDtcbiAgICBwdWJsaWMgbnVtYmVyT2ZBZGRlZEl0ZW1zOiBudW1iZXIgPSAwO1xuXG4gICAgbGlzdDogTGlzdFZpZXc7XG4gICAgdGV4dEZpZWxkOiBUZXh0RmllbGQ7XG4gICAgcHVibGljIGNoYXRzJDogT2JzZXJ2YWJsZUFycmF5PENoYXQ+O1xuICAgIHB1YmxpYyBmcmllbmRzJDogT2JzZXJ2YWJsZUFycmF5PFVzZXI+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGF0U2VydmljZTogQ2hhdFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgaGVscGVyczogSGVscGVyc1NlcnZpY2UsIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubWUgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldElEKCk7IFxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMubHYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy50ZXh0RmllbGQgPSB0aGlzLnRmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgc2Nyb2xsKGNvdW50OiBudW1iZXIpe1xuICAgICAgIGNvbnNvbGUubG9nKFwic2Nyb2xsaW5nIHRvIFwiLCBjb3VudClcbiAgICAgICB0aGlzLmxpc3Quc2Nyb2xsVG9JbmRleChjb3VudC0xKTtcbiAgICAgICB0aGlzLmxpc3QucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIGNoYXQoKSB7XG4gICAgICAgIGlmKHRoaXMucm9vbSkge1xuICAgICAgICAgICAgdGhpcy5jaGF0U2VydmljZS5zZW5kTWVzc2FnZSh0aGlzLnRleHRGaWVsZC50ZXh0LCB0aGlzLnJvb20sIHRoaXMubWUpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMubGlzdC5pdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGwoY291bnQpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YVwiLCBkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQudGV4dCA9ICcnOyAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXIoc2VuZGVyKSB7XG4gICAgICAgIGlmIChzZW5kZXIgPT0gdGhpcy5tZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwibWVcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwidGhlbVwiXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxpZ24oc2VuZGVyKSB7XG4gICAgICAgIGlmIChzZW5kZXIgPT0gdGhpcy5tZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwicmlnaHRcIlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwibGVmdFwiXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd0ltYWdlKHNlbmRlcikge1xuICAgICAgICBpZiAoc2VuZGVyID09IHRoaXMubWUpIHtcbiAgICAgICAgICAgIHJldHVybiBcImNvbGxhcHNlZFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ2aXNpYmxlXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5hdmlnYXRlIHRvIGNvcnJlc3BvbmRpbmcgcGFnZVxuICAgIG9uTWVudUJ1dHRvblRhcChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgbWVudUJ1dHRvblBhcmVudCA9ICg8U3RhY2tMYXlvdXQ+YXJncy5vYmplY3QpLnBhcmVudDtcbiAgICAgICAgYWxlcnQoXCJOYXZpZ2F0ZSB0byBcIiArIG1lbnVCdXR0b25QYXJlbnQuZ2V0KFwiZGF0YS1uYW1lXCIpKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0ZSB0byBwcm9maWxlIHBhZ2UgaGVyZVxuICAgIG9uUHJvZmlsZUJ1dHRvblRhcCgpIHtcbiAgICAgICAgdGhpcy5oZWxwZXJzLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xuICAgIH1cbn1cbiJdfQ==