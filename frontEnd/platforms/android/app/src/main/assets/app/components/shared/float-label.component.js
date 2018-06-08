"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("tns-core-modules/color");
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FloatLabel.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FloatLabel.prototype, "secure", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], FloatLabel.prototype, "ngModelInput", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FloatLabel.prototype, "ngModelOutput", void 0);
    __decorate([
        core_1.ViewChild("label"),
        __metadata("design:type", core_1.ElementRef)
    ], FloatLabel.prototype, "label", void 0);
    __decorate([
        core_1.ViewChild("textField", { read: core_1.ElementRef }),
        __metadata("design:type", core_1.ElementRef)
    ], FloatLabel.prototype, "textField", void 0);
    FloatLabel = __decorate([
        core_1.Component({
            selector: "FloatLabel",
            moduleId: module.id,
            template: "\n        <GridLayout rows=\"30, auto\" marginBottom=\"5\">\n            <Label #label row=\"1\" [text]=\"placeholder\" opacity=\"0.4\" fontSize=\"14\"  class=\"input floating-input-label\"></Label>\n            <TextField #textField=\"ngModel\" [secure]=\"secure\" row=\"1\" [(ngModel)]='ngModelInput' (ngModelChange)=\"onChange()\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" borderBottomWidth=\"3\" borderBottomColor=\"#cec8c8\" padding=\"2\"></TextField>\n        </GridLayout>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], FloatLabel);
    return FloatLabel;
}());
exports.FloatLabel = FloatLabel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxvYXQtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThGO0FBQzlGLGdEQUErQztBQVkvQztJQVFJO1FBTFMsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBeUIsSUFBSSxtQkFBWSxFQUFVLENBQUM7SUFLM0UsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDRCQUFPLEdBQVA7UUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUUvQyxxREFBcUQ7UUFDckQsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNWLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUUsRUFBRSxFQUFFO1lBQzVCLE9BQU8sRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFRLENBQUMsRUFBRSxjQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTlCLHlEQUF5RDtRQUN6RCxTQUFTLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDJCQUFNLEdBQU47UUFDSSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN2QyxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUUvQyx3RkFBd0Y7UUFDeEYsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNWLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDekIsT0FBTyxFQUFFLEdBQUc7YUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVEsQ0FBQyxFQUFFLGNBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELDZCQUE2QjtRQUM3QixTQUFTLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQXpDUTtRQUFSLFlBQUssRUFBRTs7bURBQXFCO0lBQ3BCO1FBQVIsWUFBSyxFQUFFOzs4Q0FBaUI7SUFDaEI7UUFBUixZQUFLLEVBQUU7O29EQUEyQjtJQUN6QjtRQUFULGFBQU0sRUFBRTtrQ0FBZ0IsbUJBQVk7cURBQXNDO0lBQ3ZEO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVOzZDQUFDO0lBQ1E7UUFBN0MsZ0JBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsaUJBQVUsRUFBRSxDQUFDO2tDQUFZLGlCQUFVO2lEQUFDO0lBTjNELFVBQVU7UUFWdEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsdWVBS1Q7U0FDSixDQUFDOztPQUNXLFVBQVUsQ0EyQ3RCO0lBQUQsaUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkZsb2F0TGFiZWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIzMCwgYXV0b1wiIG1hcmdpbkJvdHRvbT1cIjVcIj5cclxuICAgICAgICAgICAgPExhYmVsICNsYWJlbCByb3c9XCIxXCIgW3RleHRdPVwicGxhY2Vob2xkZXJcIiBvcGFjaXR5PVwiMC40XCIgZm9udFNpemU9XCIxNFwiICBjbGFzcz1cImlucHV0IGZsb2F0aW5nLWlucHV0LWxhYmVsXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCAjdGV4dEZpZWxkPVwibmdNb2RlbFwiIFtzZWN1cmVdPVwic2VjdXJlXCIgcm93PVwiMVwiIFsobmdNb2RlbCldPSduZ01vZGVsSW5wdXQnIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlKClcIiAoZm9jdXMpPVwib25Gb2N1cygpXCIgKGJsdXIpPVwib25CbHVyKClcIiBib3JkZXJCb3R0b21XaWR0aD1cIjNcIiBib3JkZXJCb3R0b21Db2xvcj1cIiNjZWM4YzhcIiBwYWRkaW5nPVwiMlwiPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgIDwvR3JpZExheW91dD5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb2F0TGFiZWwge1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHNlY3VyZTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIG5nTW9kZWxJbnB1dDogc3RyaW5nID0gXCJcIjtcclxuICAgIEBPdXRwdXQoKSBuZ01vZGVsT3V0cHV0OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gICAgQFZpZXdDaGlsZChcImxhYmVsXCIpIGxhYmVsOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcInRleHRGaWVsZFwiLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgdGV4dEZpZWxkOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMubmdNb2RlbE91dHB1dC5lbWl0KHRoaXMubmdNb2RlbElucHV0KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IHRoaXMudGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIGFuaW1hdGUgdGhlIGxhYmVsIHNsaWRpbmcgdXAgYW5kIGxlc3MgdHJhbnNwYXJlbnQuXHJcbiAgICAgICAgbGFiZWwuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtIDI1IH0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7IH0sICgpID0+IHsgfSk7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgYm9yZGVyIGJvdHRvbSBjb2xvciB0byBncmVlbiB0byBpbmRpY2F0ZSBmb2N1c1xyXG4gICAgICAgIHRleHRGaWVsZC5ib3JkZXJCb3R0b21Db2xvciA9IG5ldyBDb2xvcignIzAwYjQ3ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cigpIHtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWwubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSB0aGlzLnRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBpZiB0aGVyZSBpcyB0ZXh0IGluIG91ciBpbnB1dCB0aGVuIGRvbid0IG1vdmUgdGhlIGxhYmVsIGJhY2sgdG8gaXRzIGluaXRpYWwgcG9zaXRpb24uXHJcbiAgICAgICAgaWYgKCF0ZXh0RmllbGQudGV4dCkge1xyXG4gICAgICAgICAgICBsYWJlbC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjRcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7IH0sICgpID0+IHsgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IGJvcmRlciBib3R0b20gY29sb3IuXHJcbiAgICAgICAgdGV4dEZpZWxkLmJvcmRlckJvdHRvbUNvbG9yID0gbmV3IENvbG9yKCcjY2VjOGM4Jyk7XHJcbiAgICB9XHJcbn1cclxuIl19