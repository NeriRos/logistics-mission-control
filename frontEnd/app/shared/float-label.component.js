"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var color_1 = require("tns-core-modules/color");
var FloatLabel = /** @class */ (function () {
    function FloatLabel() {
    }
    FloatLabel.prototype.ngOnInit = function () {
        console.log("testing ngModule:", this.ngModel);
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
    ], FloatLabel.prototype, "ngModel", void 0);
    __decorate([
        core_1.ViewChild("label"),
        __metadata("design:type", core_1.ElementRef)
    ], FloatLabel.prototype, "label", void 0);
    __decorate([
        core_1.ViewChild("textField"),
        __metadata("design:type", core_1.ElementRef)
    ], FloatLabel.prototype, "textField", void 0);
    FloatLabel = __decorate([
        core_1.Component({
            selector: "FloatLabel",
            moduleId: module.id,
            template: "\n        <GridLayout rows=\"30, auto\" marginBottom=\"5\">\n            <Label #label row=\"1\" [text]=\"placeholder\" opacity=\"0.4\" fontSize=\"14\"  class=\"input floating-input-label\"></Label>\n            <TextField #textField [secure]=\"secure\" row=\"1\" [(ngModel)]=\"ngModel\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" borderBottomWidth=\"3\" borderBottomColor=\"#cec8c8\" padding=\"2\"></TextField>\n        </GridLayout>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], FloatLabel);
    return FloatLabel;
}());
exports.FloatLabel = FloatLabel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxvYXQtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdEQUErQztBQVkvQztJQU9JO0lBQ0EsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsNEJBQU8sR0FBUDtRQUNJLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBRS9DLHFEQUFxRDtRQUNyRCxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQ1YsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBRSxFQUFFLEVBQUU7WUFDNUIsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVEsQ0FBQyxFQUFFLGNBQVEsQ0FBQyxDQUFDLENBQUM7UUFFOUIseURBQXlEO1FBQ3pELFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNJLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBRS9DLHdGQUF3RjtRQUN4RixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1YsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUN6QixPQUFPLEVBQUUsR0FBRzthQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBUSxDQUFDLEVBQUUsY0FBUSxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsNkJBQTZCO1FBQzdCLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBeENRO1FBQVIsWUFBSyxFQUFFOzttREFBcUI7SUFDcEI7UUFBUixZQUFLLEVBQUU7OzhDQUFpQjtJQUNoQjtRQUFSLFlBQUssRUFBRTs7K0NBQWlCO0lBQ0w7UUFBbkIsZ0JBQVMsQ0FBQyxPQUFPLENBQUM7a0NBQVEsaUJBQVU7NkNBQUM7SUFDZDtRQUF2QixnQkFBUyxDQUFDLFdBQVcsQ0FBQztrQ0FBWSxpQkFBVTtpREFBQztJQUxyQyxVQUFVO1FBVnRCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHliQUtUO1NBQ0osQ0FBQzs7T0FDVyxVQUFVLENBMEN0QjtJQUFELGlCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkZsb2F0TGFiZWxcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCIzMCwgYXV0b1wiIG1hcmdpbkJvdHRvbT1cIjVcIj5cclxuICAgICAgICAgICAgPExhYmVsICNsYWJlbCByb3c9XCIxXCIgW3RleHRdPVwicGxhY2Vob2xkZXJcIiBvcGFjaXR5PVwiMC40XCIgZm9udFNpemU9XCIxNFwiICBjbGFzcz1cImlucHV0IGZsb2F0aW5nLWlucHV0LWxhYmVsXCI+PC9MYWJlbD5cclxuICAgICAgICAgICAgPFRleHRGaWVsZCAjdGV4dEZpZWxkIFtzZWN1cmVdPVwic2VjdXJlXCIgcm93PVwiMVwiIFsobmdNb2RlbCldPVwibmdNb2RlbFwiIChmb2N1cyk9XCJvbkZvY3VzKClcIiAoYmx1cik9XCJvbkJsdXIoKVwiIGJvcmRlckJvdHRvbVdpZHRoPVwiM1wiIGJvcmRlckJvdHRvbUNvbG9yPVwiI2NlYzhjOFwiIHBhZGRpbmc9XCIyXCI+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmxvYXRMYWJlbCB7XHJcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2VjdXJlOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgbmdNb2RlbDogc3RyaW5nO1xyXG4gICAgQFZpZXdDaGlsZChcImxhYmVsXCIpIGxhYmVsOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcInRleHRGaWVsZFwiKSB0ZXh0RmllbGQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0aW5nIG5nTW9kdWxlOlwiLCB0aGlzLm5nTW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoKSB7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gdGhpcy50ZXh0RmllbGQubmF0aXZlRWxlbWVudDtcclxuXHJcbiAgICAgICAgLy8gYW5pbWF0ZSB0aGUgbGFiZWwgc2xpZGluZyB1cCBhbmQgbGVzcyB0cmFuc3BhcmVudC5cclxuICAgICAgICBsYWJlbC5hbmltYXRlKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IC0gMjUgfSxcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB9KS50aGVuKCgpID0+IHsgfSwgKCkgPT4geyB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBib3JkZXIgYm90dG9tIGNvbG9yIHRvIGdyZWVuIHRvIGluZGljYXRlIGZvY3VzXHJcbiAgICAgICAgdGV4dEZpZWxkLmJvcmRlckJvdHRvbUNvbG9yID0gbmV3IENvbG9yKCcjMDBiNDdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVyKCkge1xyXG4gICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IHRoaXMudGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIHRleHQgaW4gb3VyIGlucHV0IHRoZW4gZG9uJ3QgbW92ZSB0aGUgbGFiZWwgYmFjayB0byBpdHMgaW5pdGlhbCBwb3NpdGlvbi5cclxuICAgICAgICBpZiAoIXRleHRGaWVsZC50ZXh0KSB7XHJcbiAgICAgICAgICAgIGxhYmVsLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNFxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHsgfSwgKCkgPT4geyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVzZXQgYm9yZGVyIGJvdHRvbSBjb2xvci5cclxuICAgICAgICB0ZXh0RmllbGQuYm9yZGVyQm90dG9tQ29sb3IgPSBuZXcgQ29sb3IoJyNjZWM4YzgnKTtcclxuICAgIH1cclxufVxyXG4iXX0=