"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var application_1 = require("application");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_floatingactionbutton_1 = require("nativescript-floatingactionbutton");
element_registry_1.registerElement("Fab", function () { return nativescript_floatingactionbutton_1.Fab; });
var AppComponent = /** @class */ (function () {
    function AppComponent(application) {
        this.application = application;
        this.networkStatus = "";
    }
    AppComponent.prototype.backPressInit = function () {
        var backEvent = function (args) {
            if (!!false) {
                args.cancel = true;
            }
        };
        if (this.application) {
            this.application.on("activityBackPressed", backEvent);
        }
    };
    AppComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
            styleUrls: ["app.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [application_1.AndroidApplication])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
