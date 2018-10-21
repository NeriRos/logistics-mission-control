import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ChatRoutingModule } from "./chat-routing.module";
import { PipesModule } from "../shared/pipes.module";

import { ChatComponent } from "./chat.component";

import { ChatService } from "../services/chat.service";
import { SupportService } from "../services/support.service";
import { UserService } from "../services/login.service";
import { MessagesComponent } from "./messages.component";

// TODO: fix messagesComponent

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    RouterModule,
    PipesModule
  ],
  exports: [ PipesModule ],
  providers: [
    UserService,
    ChatService,
    SupportService
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
