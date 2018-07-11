"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ui_listview_1 = require("nativescript-ui-listview");
var login_service_1 = require("~/services/login.service");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(changeDetectionRef, userService) {
        this.changeDetectionRef = changeDetectionRef;
        this.userService = userService;
        this.numberOfAddedItems = 0;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.layout = new nativescript_ui_listview_1.ListViewLinearLayout();
        this.layout.scrollDirection = "Vertical";
        this.initDataItems();
        this.changeDetectionRef.detectChanges();
    };
    ContactsComponent.prototype.addContact = function () {
    };
    ContactsComponent.prototype.initDataItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.userService.getFriends().subscribe(function (res) {
                            _this.numberOfAddedItems = res.length || 0;
                        });
                        _a = this;
                        _b = observable_array_1.ObservableArray.bind;
                        return [4 /*yield*/, this.userService.getFriends().toPromise()];
                    case 1:
                        _a._friends = new (_b.apply(observable_array_1.ObservableArray, [void 0, _c.sent()]))();
                        console.log("THIS FRIENDS", this._friends);
                        return [2 /*return*/];
                }
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
    ContactsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            login_service_1.UserService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFFO0FBRXJFLHFFQUEwSDtBQUMxSCwwREFBdUQ7QUFFdkQsNEZBQTBGO0FBUTFGO0lBTUUsMkJBQW9CLGtCQUFxQyxFQUMvQyxXQUF3QjtRQURkLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDL0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFIM0IsdUJBQWtCLEdBQVcsQ0FBQyxDQUFDO0lBSXBDLENBQUM7SUFFSCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLCtDQUFvQixFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFVLEdBQVY7SUFFQSxDQUFDO0lBRWEseUNBQWEsR0FBM0I7Ozs7Ozs7d0JBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHOzRCQUN2QyxLQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7d0JBQzlDLENBQUMsQ0FBQyxDQUFDO3dCQUNILEtBQUEsSUFBSSxDQUFBOzZCQUFnQixrQ0FBZTt3QkFBQyxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBbkYsR0FBSyxRQUFRLEdBQUcsY0FBSSxrQ0FBZSxXQUFDLFNBQStDLEtBQUMsQ0FBQzt3QkFDckYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OztLQUM1QztJQUVNLG9EQUF3QixHQUEvQixVQUFnQyxJQUF1QjtRQUNuRCxJQUFNLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixVQUFVLENBQUM7WUFDUCxJQUFNLFFBQVEsR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUMxQyxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztZQUMzRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1RSx3QkFBd0I7Z0JBQ3BCLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxtREFBd0IsQ0FBQyxtREFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEYsU0FBUztnQkFDYixJQUFJO2dCQUVKLHdGQUF3RjtnQkFDeEYsK0lBQStJO2dCQUMvSSxtQ0FBbUM7WUFDdkMsQ0FBQztZQUVELFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQzFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQkFBSSxzQ0FBTzthQUFYO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBYTthQUFqQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUF4RFUsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO3lDQU93Qyx3QkFBaUI7WUFDbEMsMkJBQVc7T0FQdkIsaUJBQWlCLENBMEQ3QjtJQUFELHdCQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMaXN0Vmlld0xpbmVhckxheW91dCwgTGlzdFZpZXdFdmVudERhdGEsIFJhZExpc3RWaWV3LCBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICd+L3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ34vbW9kZWxzL3VzZXIubW9kZWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWNvbnRhY3RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3RzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGFjdHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIF9mcmllbmRzOiBPYnNlcnZhYmxlQXJyYXk8VXNlcj47XG4gIHB1YmxpYyBsYXlvdXQ6IExpc3RWaWV3TGluZWFyTGF5b3V0O1xuICBwdWJsaWMgbnVtYmVyT2ZBZGRlZEl0ZW1zOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkgeyAgICAgIFxuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxheW91dCA9IG5ldyBMaXN0Vmlld0xpbmVhckxheW91dCgpO1xuICAgIHRoaXMubGF5b3V0LnNjcm9sbERpcmVjdGlvbiA9IFwiVmVydGljYWxcIjtcbiAgICB0aGlzLmluaXREYXRhSXRlbXMoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7ICAgICBcbiAgfVxuICBcbiAgYWRkQ29udGFjdCgpIHtcbiAgICBcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5pdERhdGFJdGVtcygpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldEZyaWVuZHMoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5udW1iZXJPZkFkZGVkSXRlbXMgPSByZXMubGVuZ3RoIHx8IDA7XG4gICAgfSk7XG4gICAgdGhpcy5fZnJpZW5kcyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoYXdhaXQgdGhpcy51c2VyU2VydmljZS5nZXRGcmllbmRzKCkudG9Qcm9taXNlKCkpO1xuICAgIGNvbnNvbGUubG9nKFwiVEhJUyBGUklFTkRTXCIsIHRoaXMuX2ZyaWVuZHMpO1xuICB9XG5cbiAgcHVibGljIG9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgY29uc3QgdGhhdCA9IG5ldyBXZWFrUmVmKHRoaXMpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc3QgbGlzdFZpZXc6IFJhZExpc3RWaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgICAgICAgY29uc3QgaW5pdGlhbE51bWJlck9mSXRlbXMgPSB0aGF0LmdldCgpLm51bWJlck9mQWRkZWRJdGVtcztcbiAgICAgICAgICBmb3IgKGxldCBpID0gdGhhdC5nZXQoKS5udW1iZXJPZkFkZGVkSXRlbXM7IGkgPCBpbml0aWFsTnVtYmVyT2ZJdGVtcyArIDI7IGkrKykge1xuICAgICAgICAgICAgICAvLyBpZiAoaSA+IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgIGxpc3RWaWV3LmxvYWRPbkRlbWFuZE1vZGUgPSBMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGVbTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlLk5vbmVdO1xuICAgICAgICAgICAgICAgICAgLy8gYnJlYWs7XG4gICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAvL2NvbnN0IGltYWdlVXJpID0gQW5kcm9pZEFwcGxpY2F0aW9uID8gcG9zdHMuaW1hZ2VzW2ldLnRvTG93ZXJDYXNlKCkgOiBwb3N0cy5pbWFnZXNbaV07XG4gICAgICAgICAgICAgIC8vdGhhdC5nZXQoKS5fZGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBpbWFnZVVyaSkpO1xuICAgICAgICAgICAgICAvL3RoYXQuZ2V0KCkuX251bWJlck9mQWRkZWRJdGVtcysrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpc3RWaWV3Lm5vdGlmeUxvYWRPbkRlbWFuZEZpbmlzaGVkKCk7XG4gICAgICB9LCAxMDAwKTtcbiAgICAgIGFyZ3MucmV0dXJuVmFsdWUgPSB0cnVlO1xuICB9XG5cbiAgZ2V0IGZyaWVuZHMoKTogT2JzZXJ2YWJsZUFycmF5PFVzZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fZnJpZW5kcztcbiAgfVxuXG4gIGdldCBmcmllbmRzTnVtYmVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZBZGRlZEl0ZW1zO1xuICB9XG5cbn1cbiJdfQ==