"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0U7QUFDdEUsc0RBQStEO0FBQy9ELHNEQUF1RTtBQUN2RSxvREFBcUU7QUFlckU7SUFDSSw0QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFdEQsQ0FBQztJQUVELHNDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBUFEsa0JBQWtCO1FBWjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsb1lBT1Q7U0FDSixDQUFDO2lEQUV3Qyx5QkFBZ0I7T0FEN0Msa0JBQWtCLENBUTlCO0lBQUQseUJBQUM7Q0FBQSxBQVJELElBUUM7QUFSWSxnREFBa0I7QUF3Qi9CO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixlQUFlO1FBZDNCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLCtCQUF1QjthQUMxQjtZQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO1lBQzdCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsWUFBWSxFQUFFO2dCQUNWLGtCQUFrQjthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZUFBZSxDQUFHO0lBQUQsc0JBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWFjdGlvbi1iYXJcIixcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiB0aXRsZT1cIkNhcmdvIEV4cHJlc3NcIj5cclxuICAgICAgICAgICAgPCEtLSA8TmF2aWdhdGlvbkJ1dHRvbiB2aXNpYmlsaXR5PVwiY29sbGFwc2VkXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPiAtLT5cclxuICAgICAgICAgICAgPEFjdGlvbkl0ZW0gYW5kcm9pZC5wb3NpdGlvbj1cImFjdGlvbkJhclwiIGlvcy5wb3NpdGlvbj1cInJpZ2h0XCIgKHRhcCk9XCJiYWNrRXZlbnQoKVwiPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XCImI3hmMmJkO1wiIGNsYXNzPVwiZmEgYWN0aW9uLWJ1dHRvblwiPjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvQWN0aW9uSXRlbT5cclxuICAgICAgICA8L0FjdGlvbkJhcj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGlvbkJhckNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYmFja0V2ZW50KCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbQWN0aW9uQmFyQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW10sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBY3Rpb25CYXJDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uQmFyTW9kdWxlIHt9Il19