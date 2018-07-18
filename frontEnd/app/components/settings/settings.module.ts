import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SettingsRoutingModule } from "~/components/settings/settings-routing.module";
import { SettingsComponent } from "~/components/settings/settings.component";
import { ActionBarModule } from "~/components/shared/action-bar.component";

import { HelpersService } from "~/services/helpers.service";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    SettingsRoutingModule,
    ActionBarModule
  ],
  declarations: [
    SettingsComponent
  ],
  providers: [
      HelpersService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SettingsModule { }
