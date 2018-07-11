"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var animation_1 = require("tns-core-modules/ui/animation/animation");
var nativescript_floatingactionbutton_1 = require("nativescript-floatingactionbutton");
var element_registry_1 = require("nativescript-angular/element-registry");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var FabComponent = /** @class */ (function () {
    function FabComponent(page) {
        this.page = page;
        this.isFabOpen = false;
        element_registry_1.registerElement("Fab", function () { return nativescript_floatingactionbutton_1.Fab; });
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
    __decorate([
        core_1.ViewChild("fabContainer"),
        __metadata("design:type", core_1.ElementRef)
    ], FabComponent.prototype, "fabContainer", void 0);
    __decorate([
        core_1.Input("friends"),
        __metadata("design:type", observable_array_1.ObservableArray)
    ], FabComponent.prototype, "friends", void 0);
    __decorate([
        core_1.Input("friendsNumber"),
        __metadata("design:type", Number)
    ], FabComponent.prototype, "friendsNumber", void 0);
    FabComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-fab",
            templateUrl: "./fab.component.html",
            styleUrls: ["./fab.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], FabComponent);
    return FabComponent;
}());
exports.FabComponent = FabComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Y7QUFDaEYsc0RBQWdGO0FBQ2hGLHFFQUF5RjtBQUV6Rix1RkFBd0Q7QUFDeEQsMEVBQXdFO0FBQ3hFLDRGQUEwRjtBQVUxRjtJQU9JLHNCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ2QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBR3JCLGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSx1Q0FBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCwrQkFBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBTyxJQUFlO1FBQXRCLGlCQTRDQztRQTNDRyxJQUFJLEdBQUcsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFlLEVBQUUsQ0FBQztRQUU3QixHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUN0RCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxVQUFVLEdBQTBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNO2dCQUN2RCxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQVEsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7WUFDbEcsQ0FBQyxDQUFDLENBQUM7WUFDSCxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFckUsSUFBSSxDQUFDLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBRWxDLENBQUMsQ0FBQyxJQUFJLEVBQUU7aUJBQ0gsSUFBSSxDQUFDO2dCQUNGLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzNCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxDQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxRQUFNLEdBQUcsQ0FBQyxDQUFDO1lBRWYsSUFBSSxVQUFVLEdBQTBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztnQkFDOUQsUUFBTSxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFNLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFRLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDO1lBQ3ZHLENBQUMsQ0FBQyxDQUFDO1lBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXRFLElBQUksQ0FBQyxHQUFHLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVsQyxDQUFDLENBQUMsSUFBSSxFQUFFO2lCQUNILElBQUksQ0FBQztnQkFDRixxQ0FBcUM7Z0JBQ3JDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQzFCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxDQUFDO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztJQUNMLENBQUM7SUF6RDBCO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUFlLGlCQUFVO3NEQUFDO0lBQ2xDO1FBQWpCLFlBQUssQ0FBQyxTQUFTLENBQUM7a0NBQVUsa0NBQWU7aURBQU87SUFDekI7UUFBdkIsWUFBSyxDQUFDLGVBQWUsQ0FBQzs7dURBQXVCO0lBSHJDLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DLENBQUM7eUNBUTBCLFdBQUk7T0FQckIsWUFBWSxDQTJEeEI7SUFBRCxtQkFBQztDQUFBLEFBM0RELElBMkRDO0FBM0RZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQYWdlLCBWaWV3LCBWaWV3QmFzZSwgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiwgQW5pbWF0aW9uRGVmaW5pdGlvbiB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FuaW1hdGlvbi9hbmltYXRpb25cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZhYiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWZhYlwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9mYWIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiLi9mYWIuY29tcG9uZW50LmNzc1wiXVxyXG4gIH0pXHJcbmV4cG9ydCBjbGFzcyBGYWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZChcImZhYkNvbnRhaW5lclwiKSBmYWJDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBASW5wdXQoXCJmcmllbmRzXCIpIGZyaWVuZHM6IE9ic2VydmFibGVBcnJheTxVc2VyPjtcclxuICAgIEBJbnB1dChcImZyaWVuZHNOdW1iZXJcIikgZnJpZW5kc051bWJlcjogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgaXNGYWJPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICAgICAgcmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IEZhYik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZmFiVGFwKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBmYWI6IFZpZXcgPSA8Vmlldz5hcmdzLm9iamVjdDtcclxuICAgICAgICB2YXIgYnV0dG9uczogVmlld0Jhc2VbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5mcmllbmRzTnVtYmVyOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaCh0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQoXCJwZXJzb25cIitpbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmlzRmFiT3BlbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uczogQW5pbWF0aW9uRGVmaW5pdGlvbltdID0gYnV0dG9ucy5tYXAoKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt0YXJnZXQ6IDxWaWV3PmJ1dHRvbiwgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSwgb3BhY2l0eTogMCwgZHVyYXRpb246IDQwMCwgZGVsYXk6IDB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYW5pbWF0aW9ucy5wdXNoKHsgdGFyZ2V0OiBmYWIsIHJvdGF0ZTogMCwgZHVyYXRpb246IDQwMCwgZGVsYXk6IDAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYSA9IG5ldyBBbmltYXRpb24oYW5pbWF0aW9ucyk7XHJcblxyXG4gICAgICAgICAgICBhLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGYWJPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB5SW5kZXggPSAwO1xyXG5cclxuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbnM6IEFuaW1hdGlvbkRlZmluaXRpb25bXSA9IGJ1dHRvbnMubWFwKChidXR0b24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB5SW5kZXggLT0gaW5kZXggJSAyID09IDAgPyAtNDYgOiA1NDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWSBJbmRleFwiLCB5SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt0YXJnZXQ6IDxWaWV3PmJ1dHRvbiwgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IHlJbmRleCB9LCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogNDQwLCBkZWxheTogMH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhbmltYXRpb25zLnB1c2goeyB0YXJnZXQ6IGZhYiwgcm90YXRlOiA0NSwgZHVyYXRpb246IDQwMCwgZGVsYXk6IDAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgYSA9IG5ldyBBbmltYXRpb24oYW5pbWF0aW9ucyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJBbmltYXRpb25zIGZpbmlzaGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGYWJPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=