import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ChatRoutingModule } from "~/components/chat/chat-routing.module";
import { ChatComponent } from "~/components/chat/chat.component";

import { UserService } from "~/services/login.service";
import { ChatService } from "~/services/chat.service";
import { HelpersService } from "~/services/helpers.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ChatRoutingModule
    ],
    declarations: [
        ChatComponent
    ],
    providers: [
        UserService,
        ChatService,
        HelpersService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ChatModule { }
