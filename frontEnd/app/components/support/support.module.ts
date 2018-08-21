import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { SupportsListComponent } from "~/components/support/components/supports-list.component";
import { SupportChatComponent } from "~/components/support/support-chat/support-chat.component";
import { SupportRoutingModule } from "~/components/support/support-routing.module";
import { SupportComponent } from "~/components/support/support.component";

import { ChatService } from "~/services/chat.service";
import { HelpersService } from "~/services/helpers.service";
import { UserService } from "~/services/login.service";
import { SupportService } from "~/services/support.service";

import { Globals } from "~/shared/globals";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    SupportRoutingModule
  ],
  providers: [
    SupportService,
    HelpersService,
    // chat
    ChatService,
    UserService,
    Globals
  ],
  declarations: [
    SupportComponent,
    SupportChatComponent,
    SupportsListComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class SupportModule { }
