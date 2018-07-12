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
                yIndex_1 -= index % 2 == 0 ? -46 : 54;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWdGO0FBQ2hGLHNEQUFnRjtBQUNoRixxRUFBeUY7QUFDekYsNEZBQTBGO0FBVTFGO0lBT0ksc0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnZCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFHekIsQ0FBQztJQUVELCtCQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLElBQWU7UUFBdEIsaUJBNENDO1FBM0NHLElBQUksR0FBRyxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxPQUFPLEdBQWUsRUFBRSxDQUFDO1FBRTdCLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLFVBQVUsR0FBMEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU07Z0JBQ3ZELE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBUSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQztZQUNsRyxDQUFDLENBQUMsQ0FBQztZQUNILFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVyRSxJQUFJLENBQUMsR0FBRyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFbEMsQ0FBQyxDQUFDLElBQUksRUFBRTtpQkFDSCxJQUFJLENBQUM7Z0JBQ0YsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDM0IsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLENBQUM7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLFFBQU0sR0FBRyxDQUFDLENBQUM7WUFFZixJQUFJLFVBQVUsR0FBMEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sRUFBRSxLQUFLO2dCQUM5RCxRQUFNLElBQUksS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQU0sQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsRUFBQyxNQUFNLEVBQVEsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLFFBQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFDdkcsQ0FBQyxDQUFDLENBQUM7WUFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFdEUsSUFBSSxDQUFDLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRWxDLENBQUMsQ0FBQyxJQUFJLEVBQUU7aUJBQ0gsSUFBSSxDQUFDO2dCQUNGLHFDQUFxQztnQkFDckMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDMUIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFDLENBQUM7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO0lBQ0wsQ0FBQztJQXhEMEI7UUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7MENBQWUsaUJBQVU7c0RBQUM7SUFDbEM7UUFBakIsWUFBSyxDQUFDLFNBQVMsQ0FBQzswQ0FBVSxrQ0FBZTtpREFBTztJQUN6QjtRQUF2QixZQUFLLENBQUMsZUFBZSxDQUFDOzt1REFBdUI7SUFIckMsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbkMsQ0FBQztpREFRMEIsV0FBSTtPQVByQixZQUFZLENBMER4QjtJQUFELG1CQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBhZ2UsIFZpZXcsIFZpZXdCYXNlLCBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uLCBBbmltYXRpb25EZWZpbml0aW9uIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvYW5pbWF0aW9uL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L21vZGVscy91c2VyLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogXCJhcHAtZmFiXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZhYi5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2ZhYi5jb21wb25lbnQuY3NzXCJdXHJcbiAgfSlcclxuZXhwb3J0IGNsYXNzIEZhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFwiZmFiQ29udGFpbmVyXCIpIGZhYkNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICAgIEBJbnB1dChcImZyaWVuZHNcIikgZnJpZW5kczogT2JzZXJ2YWJsZUFycmF5PFVzZXI+O1xyXG4gICAgQElucHV0KFwiZnJpZW5kc051bWJlclwiKSBmcmllbmRzTnVtYmVyOiBudW1iZXI7XHJcbiAgICBcclxuICAgIHB1YmxpYyBpc0ZhYk9wZW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBmYWJUYXAoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICAgICAgdmFyIGZhYjogVmlldyA9IDxWaWV3PmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHZhciBidXR0b25zOiBWaWV3QmFzZVtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmZyaWVuZHNOdW1iZXI7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHRoaXMucGFnZS5nZXRWaWV3QnlJZChcInBlcnNvblwiK2luZGV4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaXNGYWJPcGVuID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25zOiBBbmltYXRpb25EZWZpbml0aW9uW10gPSBidXR0b25zLm1hcCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3RhcmdldDogPFZpZXc+YnV0dG9uLCB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogNDAwLCBkZWxheTogMH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbmltYXRpb25zLnB1c2goeyB0YXJnZXQ6IGZhYiwgcm90YXRlOiAwLCBkdXJhdGlvbjogNDAwLCBkZWxheTogMCB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhID0gbmV3IEFuaW1hdGlvbihhbmltYXRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGEucGxheSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZhYk9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHlJbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uczogQW5pbWF0aW9uRGVmaW5pdGlvbltdID0gYnV0dG9ucy5tYXAoKGJ1dHRvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHlJbmRleCAtPSBpbmRleCAlIDIgPT0gMCA/IC00NiA6IDU0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZIEluZGV4XCIsIHlJbmRleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge3RhcmdldDogPFZpZXc+YnV0dG9uLCB0cmFuc2xhdGU6IHsgeDogMCwgeTogeUluZGV4IH0sIG9wYWNpdHk6IDEsIGR1cmF0aW9uOiA0NDAsIGRlbGF5OiAwfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogZmFiLCByb3RhdGU6IDQ1LCBkdXJhdGlvbjogNDAwLCBkZWxheTogMCB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhID0gbmV3IEFuaW1hdGlvbihhbmltYXRpb25zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGEucGxheSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkFuaW1hdGlvbnMgZmluaXNoZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZhYk9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==