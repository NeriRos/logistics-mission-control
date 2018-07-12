"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var nativescript_ui_listview_1 = require("nativescript-ui-listview");
var login_service_1 = require("~/services/login.service");
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(changeDetectionRef, ngZone, userService) {
        this.changeDetectionRef = changeDetectionRef;
        this.ngZone = ngZone;
        this.userService = userService;
        this.numberOfAddedItems = 0;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.layout = new nativescript_ui_listview_1.ListViewLinearLayout();
        this.layout.scrollDirection = "Vertical";
        this.initDataItems();
        this.changeDetectionRef.detectChanges();
    };
    ContactsComponent.prototype.addContact = function (email) {
        this.userService.addFriend(email).subscribe(function (res) {
            console.log("AddContact res:", res.body, "for email:", { email: email });
        });
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
            login_service_1.UserService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFvRztBQUNwRyxxRUFBMEg7QUFDMUgsMERBQXVEO0FBU3ZEO0lBT0UsMkJBQW9CLGtCQUFxQyxFQUM3QyxNQUFjLEVBQ2QsV0FBd0I7UUFGaEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUM3QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKNUIsdUJBQWtCLEdBQVcsQ0FBQyxDQUFDO0lBS3JDLENBQUM7SUFFSCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLCtDQUFvQixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVhLHlDQUFhLEdBQTNCOzs7O2dCQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDOzs7d0JBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHOzRCQUN2QyxLQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7NEJBQzFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO3dCQUN4QixDQUFDLENBQUMsQ0FBQzs7O3FCQUNKLENBQUMsQ0FBQzs7OztLQUNKO0lBRU0sb0RBQXdCLEdBQS9CLFVBQWdDLElBQXVCO1FBQ25ELElBQU0sSUFBSSxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLFVBQVUsQ0FBQztZQUNQLElBQU0sUUFBUSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzFDLElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1lBQzNELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEdBQUcsb0JBQW9CLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzVFLHdCQUF3QjtnQkFDcEIsUUFBUSxDQUFDLGdCQUFnQixHQUFHLG1EQUF3QixDQUFDLG1EQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwRixTQUFTO2dCQUNiLElBQUk7Z0JBRUosd0ZBQXdGO2dCQUN4RiwrSUFBK0k7Z0JBQy9JLG1DQUFtQztZQUN2QyxDQUFDO1lBRUQsUUFBUSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDMUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELHNCQUFJLHNDQUFPO2FBQVg7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFhO2FBQWpCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQTVEdUI7UUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7MENBQVksaUJBQVU7d0RBQUM7SUFEbkMsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO2lEQVF3Qyx3QkFBaUI7WUFDckMsYUFBTTtZQUNELDJCQUFXO09BVHpCLGlCQUFpQixDQStEN0I7SUFBRCx3QkFBQztDQUFBLEFBL0RELElBK0RDO0FBL0RZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpc3RWaWV3TGluZWFyTGF5b3V0LCBMaXN0Vmlld0V2ZW50RGF0YSwgUmFkTGlzdFZpZXcsIExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldyc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ34vc2VydmljZXMvbG9naW4uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9tb2RlbHMvdXNlci5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1jb250YWN0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWN0cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJuZXdQZXJzb25cIikgbmV3UGVyc29uOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBfZnJpZW5kczogQXJyYXk8VXNlcj47XG4gIHB1YmxpYyBsYXlvdXQ6IExpc3RWaWV3TGluZWFyTGF5b3V0O1xuICBwcml2YXRlIG51bWJlck9mQWRkZWRJdGVtczogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHsgIFxuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxheW91dCA9IG5ldyBMaXN0Vmlld0xpbmVhckxheW91dCgpO1xuICAgIHRoaXMubGF5b3V0LnNjcm9sbERpcmVjdGlvbiA9IFwiVmVydGljYWxcIjtcbiAgICB0aGlzLmluaXREYXRhSXRlbXMoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7ICAgICBcbiAgfVxuICBcbiAgYWRkQ29udGFjdChlbWFpbDogc3RyaW5nKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5hZGRGcmllbmQoZW1haWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJBZGRDb250YWN0IHJlczpcIiwgcmVzLmJvZHksIFwiZm9yIGVtYWlsOlwiLCB7ZW1haWw6IGVtYWlsfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXREYXRhSXRlbXMoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKGFzeW5jICgpID0+IHtcbiAgICAgIHRoaXMudXNlclNlcnZpY2UuZ2V0RnJpZW5kcygpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIHRoaXMubnVtYmVyT2ZBZGRlZEl0ZW1zID0gcmVzLmxlbmd0aCB8fCAwO1xuICAgICAgICAgIHRoaXMuX2ZyaWVuZHMgPSByZXM7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICAgIGNvbnN0IGluaXRpYWxOdW1iZXJPZkl0ZW1zID0gdGhhdC5nZXQoKS5udW1iZXJPZkFkZGVkSXRlbXM7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHRoYXQuZ2V0KCkubnVtYmVyT2ZBZGRlZEl0ZW1zOyBpIDwgaW5pdGlhbE51bWJlck9mSXRlbXMgKyAyOyBpKyspIHtcbiAgICAgICAgICAgICAgLy8gaWYgKGkgPiBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICBsaXN0Vmlldy5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcbiAgICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgLy9jb25zdCBpbWFnZVVyaSA9IEFuZHJvaWRBcHBsaWNhdGlvbiA/IHBvc3RzLmltYWdlc1tpXS50b0xvd2VyQ2FzZSgpIDogcG9zdHMuaW1hZ2VzW2ldO1xuICAgICAgICAgICAgICAvL3RoYXQuZ2V0KCkuX2RhdGFJdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShpLCBwb3N0cy5uYW1lc1tpXSwgXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb25cIiwgcG9zdHMudGl0bGVzW2ldLCBwb3N0cy50ZXh0W2ldLCBcInJlczovL1wiICsgaW1hZ2VVcmkpKTtcbiAgICAgICAgICAgICAgLy90aGF0LmdldCgpLl9udW1iZXJPZkFkZGVkSXRlbXMrKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICBhcmdzLnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgfVxuXG4gIGdldCBmcmllbmRzKCk6IEFycmF5PFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fZnJpZW5kcztcbiAgfVxuXG4gIGdldCBmcmllbmRzTnVtYmVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZBZGRlZEl0ZW1zO1xuICB9XG5cbn1cbiJdfQ==