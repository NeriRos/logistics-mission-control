import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "~/components/home/home-routing.module";
import { HomeComponent } from "~/components/home/home.component";

import { ActionBarModule } from "~/components/shared/action-bar.component";
import { HelpersService } from "~/services/helpers.service";
import { UserService } from "~/services/login.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HomeRoutingModule,
        ActionBarModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        UserService,
        HelpersService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
