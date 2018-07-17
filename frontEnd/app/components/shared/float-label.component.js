"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var color_1 = require("tns-core-modules/color/color");
var FloatLabelComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function FloatLabelComponent() {
        this.ngModelInput = "";
        this.ngModelOutput = new core_1.EventEmitter();
    }
    FloatLabelComponent.prototype.onChange = function () {
        this.ngModelOutput.emit(this.ngModelInput);
    };
    FloatLabelComponent.prototype.onFocus = function () {
        var label = this.label.nativeElement;
        var textField = this.textField.nativeElement;
        // animate the label sliding up and less transparent.
        label.animate({
            translate: { x: 0, y: -25 },
            opacity: 1
        });
        // set the border bottom color to green to indicate focus
        textField.borderBottomColor = new color_1.Color("#00b47e");
    };
    FloatLabelComponent.prototype.onBlur = function () {
        var label = this.label.nativeElement;
        var textField = this.textField.nativeElement;
        // if there is text in our input then don't move the label back to its initial position.
        if (!textField.text) {
            label.animate({
                translate: { x: 0, y: 0 },
                opacity: 0.4
            });
        }
        // reset border bottom color.
        textField.borderBottomColor = new color_1.Color("#cec8c8");
    };
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], FloatLabelComponent.prototype, "placeholder", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], FloatLabelComponent.prototype, "secure", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], FloatLabelComponent.prototype, "ngModelInput", void 0);
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], FloatLabelComponent.prototype, "ngModelOutput", void 0);
    tslib_1.__decorate([
        core_1.ViewChild("label"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], FloatLabelComponent.prototype, "label", void 0);
    tslib_1.__decorate([
        core_1.ViewChild("textField", { read: core_1.ElementRef }),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], FloatLabelComponent.prototype, "textField", void 0);
    FloatLabelComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "FloatLabel",
            moduleId: module.id,
            template: "\n        <GridLayout rows=\"30, auto\" marginBottom=\"5\">\n            <Label #label [text]=\"placeholder\"\n            row=\"1\"\n            opacity=\"0.4\" fontSize=\"14\"  class=\"input floating-input-label\"></Label>\n            <TextField #textField=\"ngModel\"\n            [secure]=\"secure\"\n            [(ngModel)]='ngModelInput'\n            (ngModelChange)=\"onChange()\"\n            (focus)=\"onFocus()\"\n            (blur)=\"onBlur()\"\n            borderBottomWidth=\"3\" row=\"1\" borderBottomColor=\"#cec8c8\" padding=\"2\"></TextField>\n        </GridLayout>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FloatLabelComponent);
    return FloatLabelComponent;
}());
exports.FloatLabelComponent = FloatLabelComponent;
