"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var color_1 = require("tns-core-modules/color/color");
var FloatLabel = /** @class */ (function () {
    function FloatLabel() {
        this.ngModelInput = "";
        this.ngModelOutput = new core_1.EventEmitter();
    }
    FloatLabel.prototype.onChange = function () {
        this.ngModelOutput.emit(this.ngModelInput);
    };
    FloatLabel.prototype.onFocus = function () {
        var label = this.label.nativeElement;
        var textField = this.textField.nativeElement;
        // animate the label sliding up and less transparent.
        label.animate({
            translate: { x: 0, y: -25 },
            opacity: 1,
        }).then(function () { }, function () { });
        // set the border bottom color to green to indicate focus
        textField.borderBottomColor = new color_1.Color('#00b47e');
    };
    FloatLabel.prototype.onBlur = function () {
        var label = this.label.nativeElement;
        var textField = this.textField.nativeElement;
        // if there is text in our input then don't move the label back to its initial position.
        if (!textField.text) {
            label.animate({
                translate: { x: 0, y: 0 },
                opacity: 0.4
            }).then(function () { }, function () { });
        }
        // reset border bottom color.
        textField.borderBottomColor = new color_1.Color('#cec8c8');
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], FloatLabel.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], FloatLabel.prototype, "secure", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], FloatLabel.prototype, "ngModelInput", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FloatLabel.prototype, "ngModelOutput", void 0);
    tslib_1.__decorate([
        core_1.ViewChild("label"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], FloatLabel.prototype, "label", void 0);
    tslib_1.__decorate([
        core_1.ViewChild("textField", { read: core_1.ElementRef }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], FloatLabel.prototype, "textField", void 0);
    FloatLabel = tslib_1.__decorate([
        core_1.Component({
            selector: "FloatLabel",
            moduleId: module.id,
            template: "\n        <GridLayout rows=\"30, auto\" marginBottom=\"5\">\n            <Label #label row=\"1\" [text]=\"placeholder\" opacity=\"0.4\" fontSize=\"14\"  class=\"input floating-input-label\"></Label>\n            <TextField #textField=\"ngModel\" [secure]=\"secure\" row=\"1\" [(ngModel)]='ngModelInput' (ngModelChange)=\"onChange()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" borderBottomWidth=\"3\" borderBottomColor=\"#cec8c8\" padding=\"2\"></TextField>\n        </GridLayout>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FloatLabel);
    return FloatLabel;
}());
exports.FloatLabel = FloatLabel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxvYXQtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE4RjtBQUM5RixzREFBcUQ7QUFZckQ7SUFRSTtRQUxTLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGtCQUFhLEdBQXlCLElBQUksbUJBQVksRUFBVSxDQUFDO0lBSzNFLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0ksSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDdkMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFFL0MscURBQXFEO1FBQ3JELEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDVixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFLEVBQUUsRUFBRTtZQUM1QixPQUFPLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBUSxDQUFDLEVBQUUsY0FBUSxDQUFDLENBQUMsQ0FBQztRQUU5Qix5REFBeUQ7UUFDekQsU0FBUyxDQUFDLGlCQUFpQixHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCwyQkFBTSxHQUFOO1FBQ0ksSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDdkMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFFL0Msd0ZBQXdGO1FBQ3hGLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDVixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sRUFBRSxHQUFHO2FBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFRLENBQUMsRUFBRSxjQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFDRCw2QkFBNkI7UUFDN0IsU0FBUyxDQUFDLGlCQUFpQixHQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUF6Q1E7UUFBUixZQUFLLEVBQUU7O21EQUFxQjtJQUNwQjtRQUFSLFlBQUssRUFBRTs7OENBQWlCO0lBQ2hCO1FBQVIsWUFBSyxFQUFFOztvREFBMkI7SUFDekI7UUFBVCxhQUFNLEVBQUU7MENBQWdCLG1CQUFZO3FEQUFzQztJQUN2RDtRQUFuQixnQkFBUyxDQUFDLE9BQU8sQ0FBQzswQ0FBUSxpQkFBVTs2Q0FBQztJQUNRO1FBQTdDLGdCQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFVLEVBQUUsQ0FBQzswQ0FBWSxpQkFBVTtpREFBQztJQU4zRCxVQUFVO1FBVnRCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVlQUtUO1NBQ0osQ0FBQzs7T0FDVyxVQUFVLENBMkN0QjtJQUFELGlCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvci9jb2xvclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJGbG9hdExhYmVsXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8R3JpZExheW91dCByb3dzPVwiMzAsIGF1dG9cIiBtYXJnaW5Cb3R0b209XCI1XCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCAjbGFiZWwgcm93PVwiMVwiIFt0ZXh0XT1cInBsYWNlaG9sZGVyXCIgb3BhY2l0eT1cIjAuNFwiIGZvbnRTaXplPVwiMTRcIiAgY2xhc3M9XCJpbnB1dCBmbG9hdGluZy1pbnB1dC1sYWJlbFwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGQgI3RleHRGaWVsZD1cIm5nTW9kZWxcIiBbc2VjdXJlXT1cInNlY3VyZVwiIHJvdz1cIjFcIiBbKG5nTW9kZWwpXT0nbmdNb2RlbElucHV0JyAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZSgpXCIgKGZvY3VzKT1cIm9uRm9jdXMoKVwiIChibHVyKT1cIm9uQmx1cigpXCIgYm9yZGVyQm90dG9tV2lkdGg9XCIzXCIgYm9yZGVyQm90dG9tQ29sb3I9XCIjY2VjOGM4XCIgcGFkZGluZz1cIjJcIj48L1RleHRGaWVsZD5cclxuICAgICAgICA8L0dyaWRMYXlvdXQ+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbG9hdExhYmVsIHtcclxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZWN1cmU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBuZ01vZGVsSW5wdXQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBAT3V0cHV0KCkgbmdNb2RlbE91dHB1dDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICAgIEBWaWV3Q2hpbGQoXCJsYWJlbFwiKSBsYWJlbDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJ0ZXh0RmllbGRcIiwgeyByZWFkOiBFbGVtZW50UmVmIH0pIHRleHRGaWVsZDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLm5nTW9kZWxPdXRwdXQuZW1pdCh0aGlzLm5nTW9kZWxJbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1cygpIHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWwubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSB0aGlzLnRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBhbmltYXRlIHRoZSBsYWJlbCBzbGlkaW5nIHVwIGFuZCBsZXNzIHRyYW5zcGFyZW50LlxyXG4gICAgICAgIGxhYmVsLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogLSAyNSB9LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4geyB9LCAoKSA9PiB7IH0pO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIGJvcmRlciBib3R0b20gY29sb3IgdG8gZ3JlZW4gdG8gaW5kaWNhdGUgZm9jdXNcclxuICAgICAgICB0ZXh0RmllbGQuYm9yZGVyQm90dG9tQ29sb3IgPSBuZXcgQ29sb3IoJyMwMGI0N2UnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXIoKSB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gdGhpcy50ZXh0RmllbGQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgdGV4dCBpbiBvdXIgaW5wdXQgdGhlbiBkb24ndCBtb3ZlIHRoZSBsYWJlbCBiYWNrIHRvIGl0cyBpbml0aWFsIHBvc2l0aW9uLlxyXG4gICAgICAgIGlmICghdGV4dEZpZWxkLnRleHQpIHtcclxuICAgICAgICAgICAgbGFiZWwuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC40XHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4geyB9LCAoKSA9PiB7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCBib3JkZXIgYm90dG9tIGNvbG9yLlxyXG4gICAgICAgIHRleHRGaWVsZC5ib3JkZXJCb3R0b21Db2xvciA9IG5ldyBDb2xvcignI2NlYzhjOCcpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==