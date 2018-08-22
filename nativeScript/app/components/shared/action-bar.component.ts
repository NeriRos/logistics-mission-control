import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { UserService } from "~/services/login.service";
import { Globals } from "~/shared/globals";

@Component({
    moduleId: module.id,
    selector: "app-action-bar",
    template: `
        <ActionBar class="action-bar" title="Cargo Express">
            <!-- <NavigationButton visibility="collapsed"></NavigationButton> -->
            <ActionItem android.position="actionBar" ios.position="right" (tap)="backEvent()">
                <Label text="&#xf2bd;" class="fa action-button"></Label>
                <Image height="25" width="25" [src]="'res://' + userPicture"></Image>
            </ActionItem>
        </ActionBar>
    `
})
export class ActionBarComponent {
    private userPicture: string;

    constructor(private userService: UserService, private globals: Globals) {
        this.userPicture = this.globals.DEFAULT_USER_PICTURE;

        userService.getUser().subscribe((user) => {
            this.userPicture = user.picture;
        });
    }

    backEvent() {
        // this.routerExtensions.backToPreviousPage();
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
