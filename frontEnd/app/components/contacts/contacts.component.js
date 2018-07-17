"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var nativescript_ui_listview_1 = require("nativescript-ui-listview");
var helpers_service_1 = require("~/services/helpers.service");
var contacts_service_1 = require("~/services/contacts.service");
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(changeDetectionRef, ngZone, contactsService, helpers) {
        this.changeDetectionRef = changeDetectionRef;
        this.ngZone = ngZone;
        this.contactsService = contactsService;
        this.helpers = helpers;
        this.numberOfAddedItems = 0;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.layout = new nativescript_ui_listview_1.ListViewLinearLayout();
        this.layout.scrollDirection = "Vertical";
        this.initDataItems();
        this.changeDetectionRef.detectChanges();
    };
    ContactsComponent.prototype.addContact = function (email) {
        var _this = this;
        this.contactsService.addFriend(email).subscribe(function (res) {
            _this._friends.push(res);
        });
    };
    ContactsComponent.prototype.chatWith = function (user) {
        this.helpers.navigate(["chat"], { friend: JSON.stringify(user) });
    };
    ContactsComponent.prototype.initDataItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.ngZone.run(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib_1.__generator(this, function (_a) {
                        this.contactsService.getFriends().subscribe(function (res) {
                            _this.numberOfAddedItems = res.length || 0;
                            _this._friends = res;
                        });
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ContactsComponent.prototype.onLoadMoreItemsRequested = function (args) {
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
    Object.defineProperty(ContactsComponent.prototype, "friends", {
        get: function () {
            return this._friends;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactsComponent.prototype, "friendsNumber", {
        get: function () {
            return this.numberOfAddedItems;
        },
        enumerable: true,
        configurable: true
    });
    // Navigate to profile page here
    ContactsComponent.prototype.onProfileButtonTap = function () {
        this.helpers.navigate(["home"]);
    };
    tslib_1.__decorate([
        core_1.ViewChild("newPerson"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], ContactsComponent.prototype, "newPerson", void 0);
    ContactsComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            core_1.NgZone,
            contacts_service_1.ContactsService,
            helpers_service_1.HelpersService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFvRztBQUNwRyxxRUFBMEg7QUFHMUgsOERBQTREO0FBQzVELGdFQUE4RDtBQVE5RDtJQU9FLDJCQUFvQixrQkFBcUMsRUFDN0MsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLE9BQXVCO1FBSGYsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUM3QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBTDNCLHVCQUFrQixHQUFXLENBQUMsQ0FBQztJQU1yQyxDQUFDO0lBRUgsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwrQ0FBb0IsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsS0FBYTtRQUF4QixpQkFJQztRQUhDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDakQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRWEseUNBQWEsR0FBM0I7Ozs7Z0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Ozt3QkFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7NEJBQzNDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQzs0QkFDMUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7d0JBQ3hCLENBQUMsQ0FBQyxDQUFDOzs7cUJBQ0osQ0FBQyxDQUFDOzs7O0tBQ0o7SUFFTSxvREFBd0IsR0FBL0IsVUFBZ0MsSUFBdUI7UUFDbkQsSUFBTSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsVUFBVSxDQUFDO1lBQ1AsSUFBTSxRQUFRLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDM0QsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0Usd0JBQXdCO2dCQUNwQixRQUFRLENBQUMsZ0JBQWdCLEdBQUcsbURBQXdCLENBQUMsbURBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BGLFNBQVM7Z0JBQ2IsSUFBSTtnQkFFSix3RkFBd0Y7Z0JBQ3hGLCtJQUErSTtnQkFDL0ksbUNBQW1DO2FBQ3RDO1lBRUQsUUFBUSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDMUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFJLHNDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBYTthQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBRUQsZ0NBQWdDO0lBQ2hDLDhDQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBdEV1QjtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQzswQ0FBWSxpQkFBVTt3REFBQztJQURuQyxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3hDLENBQUM7aURBUXdDLHdCQUFpQjtZQUNyQyxhQUFNO1lBQ0csa0NBQWU7WUFDdkIsZ0NBQWM7T0FWeEIsaUJBQWlCLENBeUU3QjtJQUFELHdCQUFDO0NBQUEsQUF6RUQsSUF5RUM7QUF6RVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdMaW5lYXJMYXlvdXQsIExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICd+L21vZGVscy91c2VyLm1vZGVsJztcbmltcG9ydCB7IEhlbHBlcnNTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlcy9oZWxwZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGFjdHNTZXJ2aWNlIH0gZnJvbSAnfi9zZXJ2aWNlcy9jb250YWN0cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWNvbnRhY3RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3RzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGFjdHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcIm5ld1BlcnNvblwiKSBuZXdQZXJzb246IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIF9mcmllbmRzOiBBcnJheTxVc2VyPjtcbiAgcHVibGljIGxheW91dDogTGlzdFZpZXdMaW5lYXJMYXlvdXQ7XG4gIHByaXZhdGUgbnVtYmVyT2ZBZGRlZEl0ZW1zOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICBwcml2YXRlIGNvbnRhY3RzU2VydmljZTogQ29udGFjdHNTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBoZWxwZXJzOiBIZWxwZXJzU2VydmljZSkgeyAgXG4gICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubGF5b3V0ID0gbmV3IExpc3RWaWV3TGluZWFyTGF5b3V0KCk7XG4gICAgdGhpcy5sYXlvdXQuc2Nyb2xsRGlyZWN0aW9uID0gXCJWZXJ0aWNhbFwiO1xuICAgIHRoaXMuaW5pdERhdGFJdGVtcygpO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTsgICAgIFxuICB9XG4gIFxuICBhZGRDb250YWN0KGVtYWlsOiBzdHJpbmcpIHtcbiAgICB0aGlzLmNvbnRhY3RzU2VydmljZS5hZGRGcmllbmQoZW1haWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5fZnJpZW5kcy5wdXNoKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBjaGF0V2l0aCh1c2VyOiBVc2VyKSB7XG4gICAgdGhpcy5oZWxwZXJzLm5hdmlnYXRlKFtcImNoYXRcIl0sIHtmcmllbmQ6IEpTT04uc3RyaW5naWZ5KHVzZXIpfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXREYXRhSXRlbXMoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKGFzeW5jICgpID0+IHtcbiAgICAgIHRoaXMuY29udGFjdHNTZXJ2aWNlLmdldEZyaWVuZHMoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICB0aGlzLm51bWJlck9mQWRkZWRJdGVtcyA9IHJlcy5sZW5ndGggfHwgMDtcbiAgICAgICAgICB0aGlzLl9mcmllbmRzID0gcmVzO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25Mb2FkTW9yZUl0ZW1zUmVxdWVzdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICBjb25zdCB0aGF0ID0gbmV3IFdlYWtSZWYodGhpcyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zdCBsaXN0VmlldzogUmFkTGlzdFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICAgICAgICBjb25zdCBpbml0aWFsTnVtYmVyT2ZJdGVtcyA9IHRoYXQuZ2V0KCkubnVtYmVyT2ZBZGRlZEl0ZW1zO1xuICAgICAgICAgIGZvciAobGV0IGkgPSB0aGF0LmdldCgpLm51bWJlck9mQWRkZWRJdGVtczsgaSA8IGluaXRpYWxOdW1iZXJPZkl0ZW1zICsgMjsgaSsrKSB7XG4gICAgICAgICAgICAgIC8vIGlmIChpID4gbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgbGlzdFZpZXcubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZVtMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTm9uZV07XG4gICAgICAgICAgICAgICAgICAvLyBicmVhaztcbiAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgIC8vY29uc3QgaW1hZ2VVcmkgPSBBbmRyb2lkQXBwbGljYXRpb24gPyBwb3N0cy5pbWFnZXNbaV0udG9Mb3dlckNhc2UoKSA6IHBvc3RzLmltYWdlc1tpXTtcbiAgICAgICAgICAgICAgLy90aGF0LmdldCgpLl9kYXRhSXRlbXMucHVzaChuZXcgRGF0YUl0ZW0oaSwgcG9zdHMubmFtZXNbaV0sIFwiVGhpcyBpcyBpdGVtIGRlc2NyaXB0aW9uXCIsIHBvc3RzLnRpdGxlc1tpXSwgcG9zdHMudGV4dFtpXSwgXCJyZXM6Ly9cIiArIGltYWdlVXJpKSk7XG4gICAgICAgICAgICAgIC8vdGhhdC5nZXQoKS5fbnVtYmVyT2ZBZGRlZEl0ZW1zKys7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdFZpZXcubm90aWZ5TG9hZE9uRGVtYW5kRmluaXNoZWQoKTtcbiAgICAgIH0sIDEwMDApO1xuICAgICAgYXJncy5yZXR1cm5WYWx1ZSA9IHRydWU7XG4gIH1cblxuICBnZXQgZnJpZW5kcygpOiBBcnJheTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZyaWVuZHM7XG4gIH1cblxuICBnZXQgZnJpZW5kc051bWJlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm51bWJlck9mQWRkZWRJdGVtcztcbiAgfVxuXG4gIC8vIE5hdmlnYXRlIHRvIHByb2ZpbGUgcGFnZSBoZXJlXG4gIG9uUHJvZmlsZUJ1dHRvblRhcCgpIHtcbiAgICB0aGlzLmhlbHBlcnMubmF2aWdhdGUoW1wiaG9tZVwiXSk7XG4gIH1cblxufVxuIl19