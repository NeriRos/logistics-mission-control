"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    __decorate([
        core_1.ViewChild("list"),
        __metadata("design:type", core_1.ElementRef)
    ], ChatComponent.prototype, "lv", void 0);
    __decorate([
        core_1.ViewChild("textfield"),
        __metadata("design:type", core_1.ElementRef)
    ], ChatComponent.prototype, "tf", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            selector: "Chat",
            moduleId: module.id,
            templateUrl: "./chat.component.html",
            styleUrls: ["chat.component.css"]
        }),
        __metadata("design:paramtypes", [chat_service_1.ChatService, page_1.Page, login_service_1.UserService, helpers_service_1.HelpersService, core_1.ChangeDetectorRef])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRztBQUNwRyxzREFBb0Q7QUFJcEQsMERBQXVEO0FBQ3ZELDhEQUE0RDtBQUM1RCx3REFBc0Q7QUFpQnREO0lBZ0JJLHVCQUFvQixXQUF3QixFQUFVLElBQVUsRUFBVSxXQUF3QixFQUFVLE9BQXVCLEVBQVUsbUJBQXNDO1FBQS9KLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBUDVLLHVCQUFrQixHQUFXLENBQUMsQ0FBQztRQVFsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLHVDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sS0FBYTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUFBLGlCQVVDO1FBVEcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFTO2dCQUNqRixJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRW5CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzdCLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLE1BQU07UUFDVCxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUNmLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUE7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFDRCw2QkFBSyxHQUFMLFVBQU0sTUFBTTtRQUNSLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsT0FBTyxDQUFBO1FBQ2xCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUE7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFDRCxpQ0FBUyxHQUFULFVBQVUsTUFBTTtRQUNaLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsV0FBVyxDQUFBO1FBQ3RCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUE7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBaUM7SUFDakMsdUNBQWUsR0FBZixVQUFnQixJQUFlO1FBQzNCLElBQU0sZ0JBQWdCLEdBQWlCLElBQUksQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQzNELEtBQUssQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGdDQUFnQztJQUNoQywwQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQWhGa0I7UUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7a0NBQUssaUJBQVU7NkNBQUM7SUFDVjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBSyxpQkFBVTs2Q0FBQztJQUY5QixhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQWlCbUMsMEJBQVcsRUFBZ0IsV0FBSSxFQUF1QiwyQkFBVyxFQUFtQixnQ0FBYyxFQUErQix3QkFBaUI7T0FoQjFLLGFBQWEsQ0FrRnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWxGRCxJQWtGQztBQWxGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBOZ1pvbmUsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXRcIjtcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2hlbHBlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9jaGF0LnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3L2xpc3Qtdmlldyc7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGQvdGV4dC1maWVsZCc7XG5pbXBvcnQgeyBDaGF0IH0gZnJvbSBcIn4vbW9kZWxzL2NoYXQubW9kZWxcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5tb2RlbFwiO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0xpbmVhckxheW91dCwgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3LCBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDaGF0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NoYXQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImNoYXQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwibGlzdFwiKSBsdjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGV4dGZpZWxkXCIpIHRmOiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGxvZ2dlZFVzZXI6IHN0cmluZztcbiAgICBwdWJsaWMgbWU6IHN0cmluZztcbiAgICBwdWJsaWMgcm9vbTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBsYXlvdXQ6IExpc3RWaWV3TGluZWFyTGF5b3V0O1xuICAgIHB1YmxpYyBudW1iZXJPZkFkZGVkSXRlbXM6IG51bWJlciA9IDA7XG5cbiAgICBsaXN0OiBMaXN0VmlldztcbiAgICB0ZXh0RmllbGQ6IFRleHRGaWVsZDtcbiAgICBwdWJsaWMgY2hhdHMkOiBPYnNlcnZhYmxlQXJyYXk8Q2hhdD47XG4gICAgcHVibGljIGZyaWVuZHMkOiBPYnNlcnZhYmxlQXJyYXk8VXNlcj47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXRTZXJ2aWNlOiBDaGF0U2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBoZWxwZXJzOiBIZWxwZXJzU2VydmljZSwgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5tZSA9IHRoaXMudXNlclNlcnZpY2UuZ2V0SUQoKTsgXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnRleHRGaWVsZCA9IHRoaXMudGYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBzY3JvbGwoY291bnQ6IG51bWJlcil7XG4gICAgICAgY29uc29sZS5sb2coXCJzY3JvbGxpbmcgdG8gXCIsIGNvdW50KVxuICAgICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KGNvdW50LTEpO1xuICAgICAgIHRoaXMubGlzdC5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgY2hhdCgpIHtcbiAgICAgICAgaWYodGhpcy5yb29tKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLnNlbmRNZXNzYWdlKHRoaXMudGV4dEZpZWxkLnRleHQsIHRoaXMucm9vbSwgdGhpcy5tZSkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5saXN0Lml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbChjb3VudCk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhXCIsIGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRleHRGaWVsZC50ZXh0ID0gJyc7ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcihzZW5kZXIpIHtcbiAgICAgICAgaWYgKHNlbmRlciA9PSB0aGlzLm1lKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJtZVwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0aGVtXCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGlnbihzZW5kZXIpIHtcbiAgICAgICAgaWYgKHNlbmRlciA9PSB0aGlzLm1lKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyaWdodFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93SW1hZ2Uoc2VuZGVyKSB7XG4gICAgICAgIGlmIChzZW5kZXIgPT0gdGhpcy5tZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiY29sbGFwc2VkXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInZpc2libGVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGUgdG8gY29ycmVzcG9uZGluZyBwYWdlXG4gICAgb25NZW51QnV0dG9uVGFwKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBtZW51QnV0dG9uUGFyZW50ID0gKDxTdGFja0xheW91dD5hcmdzLm9iamVjdCkucGFyZW50O1xuICAgICAgICBhbGVydChcIk5hdmlnYXRlIHRvIFwiICsgbWVudUJ1dHRvblBhcmVudC5nZXQoXCJkYXRhLW5hbWVcIikpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRlIHRvIHByb2ZpbGUgcGFnZSBoZXJlXG4gICAgb25Qcm9maWxlQnV0dG9uVGFwKCkge1xuICAgICAgICB0aGlzLmhlbHBlcnMubmF2aWdhdGUoW1wiaG9tZVwiXSk7XG4gICAgfVxufVxuIl19