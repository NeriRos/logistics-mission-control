"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_routerExtensions, page) {
        this._routerExtensions = _routerExtensions;
        this.page = page;
        this.page.actionBarHidden = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
    };
    HomeComponent.prototype.onMenuButtonTap = function (args) {
        // Navigate to corresponding page
        var menuButtonParent = args.object.parent;
        alert("Navigate to " + menuButtonParent.get("data-name"));
    };
    HomeComponent.prototype.onProfileButtonTap = function () {
        // Navigate to profile page here
        alert("Navigate to profile page");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE4RDtBQUM5RCxzREFBK0Q7QUFDL0QsaURBQStDO0FBUy9DO0lBR0ksdUJBQW9CLGlCQUFtQyxFQUFVLElBQVU7UUFBdkQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDhCQUFNLEdBQU47SUFDQSxDQUFDO0lBRUQsdUNBQWUsR0FBZixVQUFnQixJQUFlO1FBQzNCLGlDQUFpQztRQUNqQyxJQUFNLGdCQUFnQixHQUFpQixJQUFJLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztRQUMzRCxLQUFLLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCwwQ0FBa0IsR0FBbEI7UUFDSSxnQ0FBZ0M7UUFDaEMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXRCUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUl5Qyx5QkFBZ0IsRUFBZ0IsV0FBSTtPQUhsRSxhQUFhLENBdUJ6QjtJQUFELG9CQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIlxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIGxvZ2dlZFVzZXI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgIH1cblxuICAgIG9uTWVudUJ1dHRvblRhcChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAgICAgLy8gTmF2aWdhdGUgdG8gY29ycmVzcG9uZGluZyBwYWdlXG4gICAgICAgIGNvbnN0IG1lbnVCdXR0b25QYXJlbnQgPSAoPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0KS5wYXJlbnQ7XG4gICAgICAgIGFsZXJ0KFwiTmF2aWdhdGUgdG8gXCIgKyBtZW51QnV0dG9uUGFyZW50LmdldChcImRhdGEtbmFtZVwiKSk7XG4gICAgfVxuXG4gICAgb25Qcm9maWxlQnV0dG9uVGFwKCkge1xuICAgICAgICAvLyBOYXZpZ2F0ZSB0byBwcm9maWxlIHBhZ2UgaGVyZVxuICAgICAgICBhbGVydChcIk5hdmlnYXRlIHRvIHByb2ZpbGUgcGFnZVwiKTtcbiAgICB9XG59XG4iXX0=