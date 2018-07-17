import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { LoginRoutingModule } from "~/components/login/login-routing.module";
import { LoginComponent } from "~/components/login/login.component";
import { FloatLabelComponent } from "~/components/shared/float-label.component";

import { HelpersService } from "~/services/helpers.service";
import { UserService } from "~/services/login.service";
import { NetworkingService } from "~/services/network.service";

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
        FloatLabelComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
