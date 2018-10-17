import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SupportRoutingModule } from "./support-chat-routing.module";
import { PipesModule } from "../shared/pipes.module";

import { SupportChatComponent } from "./support-chat.component";

import { SupportService } from "../services/support.service";
import { ChatService } from "../services/chat.service";

import { UserService } from "../services/login.service";


@NgModule({
  imports: [
    CommonModule,
    SupportRoutingModule,
    RouterModule,
    PipesModule
  ],
  exports: [ PipesModule ],
  providers: [
    UserService,
    ChatService,
    SupportService
  ],
  declarations: [SupportChatComponent]
})
export class SupportChatModule { }
