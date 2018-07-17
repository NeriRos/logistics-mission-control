"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    ActionBarComponent.prototype.backEvent = function () {
        this.routerExtensions.backToPreviousPage();
    };
    ActionBarComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-action-bar",
            template: "\n        <ActionBar class=\"action-bar\" title=\"Cargo Express\">\n            <!-- <NavigationButton visibility=\"collapsed\"></NavigationButton> -->\n            <ActionItem android.position=\"actionBar\" ios.position=\"right\" (tap)=\"backEvent()\">\n                <Label text=\"&#xf2bd;\" class=\"fa action-button\"></Label>\n            </ActionItem>\n        </ActionBar>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ActionBarComponent);
    return ActionBarComponent;
}());
exports.ActionBarComponent = ActionBarComponent;
// tslint:disable-next-line:max-classes-per-file
var ActionBarModule = /** @class */ (function () {
    function ActionBarModule() {
    }
    ActionBarModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule
            ],
            exports: [ActionBarComponent],
            providers: [],
            declarations: [
                ActionBarComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ActionBarModule);
    return ActionBarModule;
}());
exports.ActionBarModule = ActionBarModule;
