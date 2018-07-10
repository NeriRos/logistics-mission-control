import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms"

import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { FloatLabel } from "~/components/shared/float-label.component";

import { UserService } from "~/services/login.service";
import { NetworkingService } from "~/services/network.service";
import { HelpersService } from "~/services/helpers.service";

import { Globals } from "~/shared/globals";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        LoginRoutingModule,
        NativeScriptFormsModule
    ],
    providers: [UserService, Globals, NetworkingService, HelpersService],
    declarations: [
        LoginComponent,
        FloatLabel
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
