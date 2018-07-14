"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var nativescript_ui_listview_1 = require("nativescript-ui-listview");
var login_service_1 = require("~/services/login.service");
var helpers_service_1 = require("~/services/helpers.service");
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(changeDetectionRef, ngZone, userService, helpers) {
        this.changeDetectionRef = changeDetectionRef;
        this.ngZone = ngZone;
        this.userService = userService;
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
        this.userService.addFriend(email).subscribe(function (res) {
            _this._friends.push(res);
        });
    };
    ContactsComponent.prototype.chatWith = function (user) {
        this.helpers.navigate(["chat"], { email: user.email, picture: user.picture });
    };
    ContactsComponent.prototype.initDataItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.ngZone.run(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib_1.__generator(this, function (_a) {
                        this.userService.getFriends().subscribe(function (res) {
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
            login_service_1.UserService,
            helpers_service_1.HelpersService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFvRztBQUNwRyxxRUFBMEg7QUFDMUgsMERBQXVEO0FBRXZELDhEQUE0RDtBQVE1RDtJQU9FLDJCQUFvQixrQkFBcUMsRUFDN0MsTUFBYyxFQUNkLFdBQXdCLEVBQ3hCLE9BQXVCO1FBSGYsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUM3QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFMM0IsdUJBQWtCLEdBQVcsQ0FBQyxDQUFDO0lBTXJDLENBQUM7SUFFSCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLCtDQUFvQixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxLQUFhO1FBQXhCLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUM3QyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFYSx5Q0FBYSxHQUEzQjs7OztnQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzs7O3dCQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRzs0QkFDdkMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDOzRCQUMxQyxLQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQzt3QkFDeEIsQ0FBQyxDQUFDLENBQUM7OztxQkFDSixDQUFDLENBQUM7Ozs7S0FDSjtJQUVNLG9EQUF3QixHQUEvQixVQUFnQyxJQUF1QjtRQUNuRCxJQUFNLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixVQUFVLENBQUM7WUFDUCxJQUFNLFFBQVEsR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQUMzRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1RSx3QkFBd0I7Z0JBQ3BCLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxtREFBd0IsQ0FBQyxtREFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEYsU0FBUztnQkFDYixJQUFJO2dCQUVKLHdGQUF3RjtnQkFDeEYsK0lBQStJO2dCQUMvSSxtQ0FBbUM7WUFDdkMsQ0FBQztZQUVELFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBYTthQUFqQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBZ0M7SUFDaEMsOENBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUF0RXVCO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzBDQUFZLGlCQUFVO3dEQUFDO0lBRG5DLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQztpREFRd0Msd0JBQWlCO1lBQ3JDLGFBQU07WUFDRCwyQkFBVztZQUNmLGdDQUFjO09BVnhCLGlCQUFpQixDQXlFN0I7SUFBRCx3QkFBQztDQUFBLEFBekVELElBeUVDO0FBekVZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RWaWV3TGluZWFyTGF5b3V0LCBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcsIExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldyc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ34vc2VydmljZXMvbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gJ34vc2VydmljZXMvaGVscGVycy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWNvbnRhY3RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3RzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGFjdHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcIm5ld1BlcnNvblwiKSBuZXdQZXJzb246IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIF9mcmllbmRzOiBBcnJheTxVc2VyPjtcbiAgcHVibGljIGxheW91dDogTGlzdFZpZXdMaW5lYXJMYXlvdXQ7XG4gIHByaXZhdGUgbnVtYmVyT2ZBZGRlZEl0ZW1zOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICAgIHByaXZhdGUgaGVscGVyczogSGVscGVyc1NlcnZpY2UpIHsgIFxuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxheW91dCA9IG5ldyBMaXN0Vmlld0xpbmVhckxheW91dCgpO1xuICAgIHRoaXMubGF5b3V0LnNjcm9sbERpcmVjdGlvbiA9IFwiVmVydGljYWxcIjtcbiAgICB0aGlzLmluaXREYXRhSXRlbXMoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7ICAgICBcbiAgfVxuICBcbiAgYWRkQ29udGFjdChlbWFpbDogc3RyaW5nKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5hZGRGcmllbmQoZW1haWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5fZnJpZW5kcy5wdXNoKHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBjaGF0V2l0aCh1c2VyOiBVc2VyKSB7XG4gICAgdGhpcy5oZWxwZXJzLm5hdmlnYXRlKFtcImNoYXRcIl0sIHtlbWFpbDogdXNlci5lbWFpbCwgcGljdHVyZTogdXNlci5waWN0dXJlfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXREYXRhSXRlbXMoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKGFzeW5jICgpID0+IHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0RnJpZW5kcygpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHRoaXMubnVtYmVyT2ZBZGRlZEl0ZW1zID0gcmVzLmxlbmd0aCB8fCAwO1xuICAgICAgICAgIHRoaXMuX2ZyaWVuZHMgPSByZXM7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICAgIGNvbnN0IGluaXRpYWxOdW1iZXJPZkl0ZW1zID0gdGhhdC5nZXQoKS5udW1iZXJPZkFkZGVkSXRlbXM7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHRoYXQuZ2V0KCkubnVtYmVyT2ZBZGRlZEl0ZW1zOyBpIDwgaW5pdGlhbE51bWJlck9mSXRlbXMgKyAyOyBpKyspIHtcbiAgICAgICAgICAgICAgLy8gaWYgKGkgPiBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICBsaXN0Vmlldy5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcbiAgICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgLy9jb25zdCBpbWFnZVVyaSA9IEFuZHJvaWRBcHBsaWNhdGlvbiA/IHBvc3RzLmltYWdlc1tpXS50b0xvd2VyQ2FzZSgpIDogcG9zdHMuaW1hZ2VzW2ldO1xuICAgICAgICAgICAgICAvL3RoYXQuZ2V0KCkuX2RhdGFJdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShpLCBwb3N0cy5uYW1lc1tpXSwgXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb25cIiwgcG9zdHMudGl0bGVzW2ldLCBwb3N0cy50ZXh0W2ldLCBcInJlczovL1wiICsgaW1hZ2VVcmkpKTtcbiAgICAgICAgICAgICAgLy90aGF0LmdldCgpLl9udW1iZXJPZkFkZGVkSXRlbXMrKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICBhcmdzLnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCBmcmllbmRzKCk6IEFycmF5PFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fZnJpZW5kcztcbiAgfVxuXG4gIGdldCBmcmllbmRzTnVtYmVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZBZGRlZEl0ZW1zO1xuICB9XG5cbiAgLy8gTmF2aWdhdGUgdG8gcHJvZmlsZSBwYWdlIGhlcmVcbiAgb25Qcm9maWxlQnV0dG9uVGFwKCkge1xuICAgIHRoaXMuaGVscGVycy5uYXZpZ2F0ZShbXCJob21lXCJdKTtcbiAgfVxuXG59XG4iXX0=