"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page");
var login_service_1 = require("~/services/login.service");
var helpers_service_1 = require("~/services/helpers.service");
var chat_service_1 = require("~/services/chat.service");
var nativescript_ui_listview_1 = require("nativescript-ui-listview");
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
        this.layout = new nativescript_ui_listview_1.ListViewLinearLayout();
        this.layout.scrollDirection = "Horizontal";
        this.initDataItems();
        this._changeDetectionRef.detectChanges();
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
    ChatComponent.prototype.initDataItems = function () {
        this.friends$ = this.userService.getFriends();
        this.chats$ = this.chatService.getChats();
    };
    ChatComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var that = new WeakRef(this);
        setTimeout(function () {
            var listView = args.object;
            var initialNumberOfItems = that.get().numberOfAddedItems;
            for (var i = that.get().numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                // if (i > length - 1) {
                listView.loadOnDemandMode = nativescript_ui_listview_1.ListViewLoadOnDemandMode[nativescript_ui_listview_1.ListViewLoadOnDemandMode.None];
                // break;
                // }
                //const imageUri = AndroidApplication ? posts.images[i].toLowerCase() : posts.images[i];
                //that.get()._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                //that.get()._numberOfAddedItems++;
            }
            listView.notifyLoadOnDemandFinished();
        }, 1000);
        args.returnValue = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRztBQUNwRyxpREFBK0M7QUFJL0MsMERBQXVEO0FBQ3ZELDhEQUE0RDtBQUM1RCx3REFBc0Q7QUFRdEQscUVBQTBIO0FBUzFIO0lBZ0JJLHVCQUFvQixXQUF3QixFQUFVLElBQVUsRUFBVSxXQUF3QixFQUFVLE9BQXVCLEVBQVUsbUJBQXNDO1FBQS9KLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBUDVLLHVCQUFrQixHQUFXLENBQUMsQ0FBQztRQVFsQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVNLGdDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLCtDQUFvQixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVNLHVDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQzNDLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sS0FBYTtR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dkMsQ0FBQztZQUVELFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQ0FBaUM7SUFDakMsdUNBQWUsR0FBZixVQUFnQixJQUFlO1FBQzNCLElBQU0sZ0JBQWdCLEdBQWlCLElBQUksQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO1FBQzNELEtBQUssQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGdDQUFnQztJQUNoQywwQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQS9Ha0I7UUFBbEIsZ0JBQVMsQ0FBQyxNQUFNLENBQUM7a0NBQUssaUJBQVU7NkNBQUM7SUFDVjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBSyxpQkFBVTs2Q0FBQztJQUY5QixhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQWlCbUMsMEJBQVcsRUFBZ0IsV0FBSSxFQUF1QiwyQkFBVyxFQUFtQixnQ0FBYyxFQUErQix3QkFBaUI7T0FoQjFLLGFBQWEsQ0FpSHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpIRCxJQWlIQztBQWpIWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBOZ1pvbmUsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIlxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2hlbHBlcnMuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9jaGF0LnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcbmltcG9ydCB7IENoYXQgfSBmcm9tIFwifi9tb2RlbHMvY2hhdC5tb2RlbFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L21vZGVscy91c2VyLm1vZGVsXCI7XG5cbmltcG9ydCB7IExpc3RWaWV3TGluZWFyTGF5b3V0LCBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcsIExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIjtcbmltcG9ydCB7IEFuZHJvaWRBcHBsaWNhdGlvbiB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDaGF0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NoYXQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcImNoYXQuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAVmlld0NoaWxkKFwibGlzdFwiKSBsdjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwidGV4dGZpZWxkXCIpIHRmOiBFbGVtZW50UmVmO1xuXG4gICAgcHVibGljIGxvZ2dlZFVzZXI6IHN0cmluZztcbiAgICBwdWJsaWMgbWU6IHN0cmluZztcbiAgICBwdWJsaWMgcm9vbTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBsYXlvdXQ6IExpc3RWaWV3TGluZWFyTGF5b3V0O1xuICAgIHB1YmxpYyBudW1iZXJPZkFkZGVkSXRlbXM6IG51bWJlciA9IDA7XG5cbiAgICBsaXN0OiBMaXN0VmlldztcbiAgICB0ZXh0RmllbGQ6IFRleHRGaWVsZDtcbiAgICBwdWJsaWMgY2hhdHMkOiBPYnNlcnZhYmxlPEFycmF5PENoYXQ+PjtcbiAgICBwdWJsaWMgZnJpZW5kcyQ6IE9ic2VydmFibGU8QXJyYXk8VXNlcj4+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGF0U2VydmljZTogQ2hhdFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgaGVscGVyczogSGVscGVyc1NlcnZpY2UsIHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubWUgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldElEKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxheW91dCA9IG5ldyBMaXN0Vmlld0xpbmVhckxheW91dCgpO1xuICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxEaXJlY3Rpb24gPSBcIkhvcml6b250YWxcIjtcbiAgICAgICAgdGhpcy5pbml0RGF0YUl0ZW1zKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7ICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5sdi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnRleHRGaWVsZCA9IHRoaXMudGYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBzY3JvbGwoY291bnQ6IG51bWJlcil7XG4gICAgICAgY29uc29sZS5sb2coXCJzY3JvbGxpbmcgdG8gXCIsIGNvdW50KVxuICAgICAgIHRoaXMubGlzdC5zY3JvbGxUb0luZGV4KGNvdW50LTEpO1xuICAgICAgIHRoaXMubGlzdC5yZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgY2hhdCgpIHtcbiAgICAgICAgaWYodGhpcy5yb29tKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXRTZXJ2aWNlLnNlbmRNZXNzYWdlKHRoaXMudGV4dEZpZWxkLnRleHQsIHRoaXMucm9vbSwgdGhpcy5tZSkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5saXN0Lml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbChjb3VudCk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhXCIsIGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRleHRGaWVsZC50ZXh0ID0gJyc7ICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlcihzZW5kZXIpIHtcbiAgICAgICAgaWYgKHNlbmRlciA9PSB0aGlzLm1lKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJtZVwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ0aGVtXCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGlnbihzZW5kZXIpIHtcbiAgICAgICAgaWYgKHNlbmRlciA9PSB0aGlzLm1lKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJyaWdodFwiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJsZWZ0XCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93SW1hZ2Uoc2VuZGVyKSB7XG4gICAgICAgIGlmIChzZW5kZXIgPT0gdGhpcy5tZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiY29sbGFwc2VkXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInZpc2libGVcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0RGF0YUl0ZW1zKCkge1xuICAgICAgICB0aGlzLmZyaWVuZHMkID0gdGhpcy51c2VyU2VydmljZS5nZXRGcmllbmRzKCk7XG4gICAgICAgIHRoaXMuY2hhdHMkID0gdGhpcy5jaGF0U2VydmljZS5nZXRDaGF0cygpOyBcbiAgICB9XG5cbiAgICBwdWJsaWMgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0VmlldzogUmFkTGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxOdW1iZXJPZkl0ZW1zID0gdGhhdC5nZXQoKS5udW1iZXJPZkFkZGVkSXRlbXM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gdGhhdC5nZXQoKS5udW1iZXJPZkFkZGVkSXRlbXM7IGkgPCBpbml0aWFsTnVtYmVyT2ZJdGVtcyArIDI7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIGlmIChpID4gbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0Vmlldy5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgLy9jb25zdCBpbWFnZVVyaSA9IEFuZHJvaWRBcHBsaWNhdGlvbiA/IHBvc3RzLmltYWdlc1tpXS50b0xvd2VyQ2FzZSgpIDogcG9zdHMuaW1hZ2VzW2ldO1xuICAgICAgICAgICAgICAgIC8vdGhhdC5nZXQoKS5fZGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBpbWFnZVVyaSkpO1xuICAgICAgICAgICAgICAgIC8vdGhhdC5nZXQoKS5fbnVtYmVyT2ZBZGRlZEl0ZW1zKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICBhcmdzLnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0ZSB0byBjb3JyZXNwb25kaW5nIHBhZ2VcbiAgICBvbk1lbnVCdXR0b25UYXAoYXJnczogRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b25QYXJlbnQgPSAoPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0KS5wYXJlbnQ7XG4gICAgICAgIGFsZXJ0KFwiTmF2aWdhdGUgdG8gXCIgKyBtZW51QnV0dG9uUGFyZW50LmdldChcImRhdGEtbmFtZVwiKSk7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGUgdG8gcHJvZmlsZSBwYWdlIGhlcmVcbiAgICBvblByb2ZpbGVCdXR0b25UYXAoKSB7XG4gICAgICAgIHRoaXMuaGVscGVycy5uYXZpZ2F0ZShbXCJob21lXCJdKTtcbiAgICB9XG59XG4iXX0=