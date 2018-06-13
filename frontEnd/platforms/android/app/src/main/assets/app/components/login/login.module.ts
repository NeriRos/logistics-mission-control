import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms"

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { UserService } from "./login.service";

import { FloatLabel } from "~/components/shared/float-label.component";
import { Globals } from "~/shared/globals";

import { Networking } from "~/services/network.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LoginRoutingModule,
        NativeScriptFormsModule
    ],
    providers: [UserService, Globals, Networking],
    declarations: [
        LoginComponent,
        FloatLabel
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
