"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ui_listview_1 = require("nativescript-ui-listview");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_floatingactionbutton_1 = require("nativescript-floatingactionbutton");
var login_service_1 = require("~/services/login.service");
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(changeDetectionRef, userService) {
        this.changeDetectionRef = changeDetectionRef;
        this.userService = userService;
        this.numberOfAddedItems = 0;
        element_registry_1.registerElement("fab", function () { return nativescript_floatingactionbutton_1.Fab; });
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.layout = new nativescript_ui_listview_1.ListViewLinearLayout();
        this.layout.scrollDirection = "Horizontal";
        this.initDataItems();
        this.changeDetectionRef.detectChanges();
    };
    ContactsComponent.prototype.addContact = function () {
    };
    ContactsComponent.prototype.initDataItems = function () {
        var _this = this;
        this.userService.getFriends().subscribe(function (res) {
            console.log("Friends", res);
            _this.numberOfAddedItems = res.length || 0;
        });
        this.friends$ = this.userService.getFriends();
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
    ContactsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            login_service_1.UserService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFFO0FBRXJFLHFFQUEwSDtBQUMxSCwwRUFBd0U7QUFDeEUsdUZBQXdEO0FBQ3hELDBEQUF1RDtBQVV2RDtJQU1FLDJCQUFvQixrQkFBcUMsRUFDL0MsV0FBd0I7UUFEZCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQy9DLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSDNCLHVCQUFrQixHQUFXLENBQUMsQ0FBQztRQUlsQyxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsdUNBQUcsRUFBSCxDQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUgsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwrQ0FBb0IsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQ0FBVSxHQUFWO0lBRUEsQ0FBQztJQUVPLHlDQUFhLEdBQXJCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFTSxvREFBd0IsR0FBL0IsVUFBZ0MsSUFBdUI7UUFDbkQsSUFBTSxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsVUFBVSxDQUFDO1lBQ1AsSUFBTSxRQUFRLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDM0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsR0FBRyxvQkFBb0IsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUUsd0JBQXdCO2dCQUNwQixRQUFRLENBQUMsZ0JBQWdCLEdBQUcsbURBQXdCLENBQUMsbURBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BGLFNBQVM7Z0JBQ2IsSUFBSTtnQkFFSix3RkFBd0Y7Z0JBQ3hGLCtJQUErSTtnQkFDL0ksbUNBQW1DO1lBQ3ZDLENBQUM7WUFFRCxRQUFRLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUMxQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBakRVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FPd0Msd0JBQWlCO1lBQ2xDLDJCQUFXO09BUHZCLGlCQUFpQixDQW1EN0I7SUFBRCx3QkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGlzdFZpZXdMaW5lYXJMYXlvdXQsIExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBGYWIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJ34vc2VydmljZXMvbG9naW4uc2VydmljZSc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICd+L21vZGVscy91c2VyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWNvbnRhY3RzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3RzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udGFjdHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHVibGljIGZyaWVuZHMkOiBPYnNlcnZhYmxlPEFycmF5PFVzZXI+PjtcbiAgcHVibGljIGxheW91dDogTGlzdFZpZXdMaW5lYXJMYXlvdXQ7XG4gIHB1YmxpYyBudW1iZXJPZkFkZGVkSXRlbXM6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7ICAgICAgXG4gICAgICByZWdpc3RlckVsZW1lbnQoXCJmYWJcIiwgKCkgPT4gRmFiKTtcbiAgICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgTGlzdFZpZXdMaW5lYXJMYXlvdXQoKTtcbiAgICB0aGlzLmxheW91dC5zY3JvbGxEaXJlY3Rpb24gPSBcIkhvcml6b250YWxcIjtcbiAgICB0aGlzLmluaXREYXRhSXRlbXMoKTtcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7ICAgICBcbiAgfVxuICBcbiAgYWRkQ29udGFjdCgpIHtcbiAgICBcbiAgfVxuXG4gIHByaXZhdGUgaW5pdERhdGFJdGVtcygpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdldEZyaWVuZHMoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGcmllbmRzXCIsIHJlcyk7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZBZGRlZEl0ZW1zID0gcmVzLmxlbmd0aCB8fCAwO1xuICAgIH0pO1xuICAgIHRoaXMuZnJpZW5kcyQgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldEZyaWVuZHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbnN0IGxpc3RWaWV3OiBSYWRMaXN0VmlldyA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICAgIGNvbnN0IGluaXRpYWxOdW1iZXJPZkl0ZW1zID0gdGhhdC5nZXQoKS5udW1iZXJPZkFkZGVkSXRlbXM7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHRoYXQuZ2V0KCkubnVtYmVyT2ZBZGRlZEl0ZW1zOyBpIDwgaW5pdGlhbE51bWJlck9mSXRlbXMgKyAyOyBpKyspIHtcbiAgICAgICAgICAgICAgLy8gaWYgKGkgPiBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICBsaXN0Vmlldy5sb2FkT25EZW1hbmRNb2RlID0gTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlW0xpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZS5Ob25lXTtcbiAgICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xuICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgLy9jb25zdCBpbWFnZVVyaSA9IEFuZHJvaWRBcHBsaWNhdGlvbiA/IHBvc3RzLmltYWdlc1tpXS50b0xvd2VyQ2FzZSgpIDogcG9zdHMuaW1hZ2VzW2ldO1xuICAgICAgICAgICAgICAvL3RoYXQuZ2V0KCkuX2RhdGFJdGVtcy5wdXNoKG5ldyBEYXRhSXRlbShpLCBwb3N0cy5uYW1lc1tpXSwgXCJUaGlzIGlzIGl0ZW0gZGVzY3JpcHRpb25cIiwgcG9zdHMudGl0bGVzW2ldLCBwb3N0cy50ZXh0W2ldLCBcInJlczovL1wiICsgaW1hZ2VVcmkpKTtcbiAgICAgICAgICAgICAgLy90aGF0LmdldCgpLl9udW1iZXJPZkFkZGVkSXRlbXMrKztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xuICAgICAgfSwgMTAwMCk7XG4gICAgICBhcmdzLnJldHVyblZhbHVlID0gdHJ1ZTtcbiAgfVxuXG59XG4iXX0=