"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var animation_1 = require("tns-core-modules/ui/animation/animation");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var FabComponent = /** @class */ (function () {
    function FabComponent(page) {
        this.page = page;
        this.isFabOpen = false;
    }
    FabComponent.prototype.ngOnInit = function () {
    };
    FabComponent.prototype.fabTap = function (args) {
        var _this = this;
        var fab = args.object;
        var buttons = [];
        for (var index = 0; index < this.friendsNumber; index++) {
            buttons.push(this.page.getViewById("person" + index));
        }
        if (this.isFabOpen === true) {
            var animations = buttons.map(function (button) {
                return { target: button, translate: { x: 0, y: 0 }, opacity: 0, duration: 400, delay: 0 };
            });
            animations.push({ target: fab, rotate: 0, duration: 400, delay: 0 });
            var a = new animation_1.Animation(animations);
            a.play()
                .then(function () {
                _this.isFabOpen = false;
            })
                .catch(function (e) {
                console.log(e.message);
            });
        }
        else {
            var yIndex_1 = 0;
            var animations = buttons.map(function (button, index) {
                yIndex_1 -= index % 2 == 0 ? -46 : -54;
                console.log("Y Index", yIndex_1);
                return { target: button, translate: { x: 0, y: yIndex_1 }, opacity: 1, duration: 440, delay: 0 };
            });
            animations.push({ target: fab, rotate: 45, duration: 400, delay: 0 });
            var a = new animation_1.Animation(animations);
            a.play()
                .then(function () {
                //console.log("Animations finished");
                _this.isFabOpen = true;
            })
                .catch(function (e) {
                console.log(e.message);
            });
        }
    };
    tslib_1.__decorate([
        core_1.ViewChild("fabContainer"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], FabComponent.prototype, "fabContainer", void 0);
    tslib_1.__decorate([
        core_1.Input("friends"),
        tslib_1.__metadata("design:type", observable_array_1.ObservableArray)
    ], FabComponent.prototype, "friends", void 0);
    tslib_1.__decorate([
        core_1.Input("friendsNumber"),
        tslib_1.__metadata("design:type", Number)
    ], FabComponent.prototype, "friendsNumber", void 0);
    FabComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-fab",
            templateUrl: "./fab.component.html",
            styleUrls: ["./fab.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [page_1.Page])
    ], FabComponent);
    return FabComponent;
}());
exports.FabComponent = FabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWdGO0FBQ2hGLHNEQUFnRjtBQUNoRixxRUFBeUY7QUFDekYsNEZBQTBGO0FBVTFGO0lBT0ksc0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnZCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFHekIsQ0FBQztJQUVELCtCQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLElBQWU7UUFBdEIsaUJBNENDO1FBM0NHLElBQUksR0FBRyxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxPQUFPLEdBQWUsRUFBRSxDQUFDO1FBRTdCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdkQ7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3pCLElBQUksVUFBVSxHQUEwQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTTtnQkFDdkQsT0FBTyxFQUFDLE1BQU0sRUFBUSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUNsRyxDQUFDLENBQUMsQ0FBQztZQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVyRSxJQUFJLENBQUMsR0FBRyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFbEMsQ0FBQyxDQUFDLElBQUksRUFBRTtpQkFDSCxJQUFJLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDM0IsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLENBQUM7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7U0FDVjthQUFNO1lBQ0gsSUFBSSxRQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRWYsSUFBSSxVQUFVLEdBQTBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztnQkFDOUQsUUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQU0sQ0FBQyxDQUFDO2dCQUMvQixPQUFPLEVBQUMsTUFBTSxFQUFRLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO1lBQ3ZHLENBQUMsQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXRFLElBQUksQ0FBQyxHQUFHLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVsQyxDQUFDLENBQUMsSUFBSSxFQUFFO2lCQUNILElBQUksQ0FBQztnQkFDRixxQ0FBcUM7Z0JBQ3JDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzFCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxDQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7SUFDTCxDQUFDO0lBeEQwQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQzswQ0FBZSxpQkFBVTtzREFBQztJQUNsQztRQUFqQixZQUFLLENBQUMsU0FBUyxDQUFDOzBDQUFVLGtDQUFlO2lEQUFPO0lBQ3pCO1FBQXZCLFlBQUssQ0FBQyxlQUFlLENBQUM7O3VEQUF1QjtJQUhyQyxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDO2lEQVEwQixXQUFJO09BUHJCLFlBQVksQ0EwRHhCO0lBQUQsbUJBQUM7Q0FBQSxBQTFERCxJQTBEQztBQTFEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGFnZSwgVmlldywgVmlld0Jhc2UsIEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24sIEFuaW1hdGlvbkRlZmluaXRpb24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9hbmltYXRpb24vYW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcImFwcC1mYWJcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmFiLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vZmFiLmNvbXBvbmVudC5jc3NcIl1cclxuICB9KVxyXG5leHBvcnQgY2xhc3MgRmFiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoXCJmYWJDb250YWluZXJcIikgZmFiQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gICAgQElucHV0KFwiZnJpZW5kc1wiKSBmcmllbmRzOiBPYnNlcnZhYmxlQXJyYXk8VXNlcj47XHJcbiAgICBASW5wdXQoXCJmcmllbmRzTnVtYmVyXCIpIGZyaWVuZHNOdW1iZXI6IG51bWJlcjtcclxuICAgIFxyXG4gICAgcHVibGljIGlzRmFiT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIGZhYlRhcChhcmdzOiBFdmVudERhdGEpIHtcclxuICAgICAgICB2YXIgZmFiOiBWaWV3ID0gPFZpZXc+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgdmFyIGJ1dHRvbnM6IFZpZXdCYXNlW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuZnJpZW5kc051bWJlcjsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBidXR0b25zLnB1c2godGhpcy5wYWdlLmdldFZpZXdCeUlkKFwicGVyc29uXCIraW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZiAodGhpcy5pc0ZhYk9wZW4gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbnM6IEFuaW1hdGlvbkRlZmluaXRpb25bXSA9IGJ1dHRvbnMubWFwKChidXR0b24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7dGFyZ2V0OiA8Vmlldz5idXR0b24sIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiA0MDAsIGRlbGF5OiAwfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogZmFiLCByb3RhdGU6IDAsIGR1cmF0aW9uOiA0MDAsIGRlbGF5OiAwIH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIGEgPSBuZXcgQW5pbWF0aW9uKGFuaW1hdGlvbnMpO1xyXG5cclxuICAgICAgICAgICAgYS5wbGF5KClcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmFiT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgeUluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25zOiBBbmltYXRpb25EZWZpbml0aW9uW10gPSBidXR0b25zLm1hcCgoYnV0dG9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgeUluZGV4IC09IGluZGV4ICUgMiA9PSAwID8gLTQ2IDogLTU0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZIEluZGV4XCIsIHlJbmRleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3RhcmdldDogPFZpZXc+YnV0dG9uLCB0cmFuc2xhdGU6IHsgeDogMCwgeTogeUluZGV4IH0sIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiA0NDAsIGRlbGF5OiAwfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogZmFiLCByb3RhdGU6IDQ1LCBkdXJhdGlvbjogNDAwLCBkZWxheTogMCB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhID0gbmV3IEFuaW1hdGlvbihhbmltYXRpb25zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGEucGxheSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkFuaW1hdGlvbnMgZmluaXNoZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZhYk9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==