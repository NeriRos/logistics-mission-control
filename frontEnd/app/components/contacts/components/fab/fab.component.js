"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var animation_1 = require("tns-core-modules/ui/animation/animation");
var page_1 = require("tns-core-modules/ui/page/page");
var FabComponent = /** @class */ (function () {
    function FabComponent(page) {
        this.page = page;
        this.isFabOpen = false;
    }
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
                yIndex_1 -= index % 2 === 0 ? -46 : -54;
                console.log("Y Index", yIndex_1);
                return { target: button, translate: { x: 0, y: yIndex_1 }, opacity: 1, duration: 440, delay: 0 };
            });
            animations.push({ target: fab, rotate: 45, duration: 400, delay: 0 });
            var a = new animation_1.Animation(animations);
            a.play()
                .then(function () {
                // console.log("Animations finished");
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
