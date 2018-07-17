import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    moduleId: module.id,
    selector: "app-action-bar",
    template: `
        <ActionBar class="action-bar" title="Cargo Express">
            <!-- <NavigationButton visibility="collapsed"></NavigationButton> -->
            <ActionItem android.position="actionBar" ios.position="right" (tap)="backEvent()">
                <Label text="&#xf2bd;" class="fa action-button"></Label>
            </ActionItem>
        </ActionBar>
    `
})
export class ActionBarComponent {
    constructor(private routerExtensions: RouterExtensions) {

    }

    backEvent() {
        this.routerExtensions.backToPreviousPage();
    }
}

// tslint:disable-next-line:max-classes-per-file
@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule
    ],
    exports: [ActionBarComponent],
    providers: [],
    declarations: [
        ActionBarComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ActionBarModule {}
