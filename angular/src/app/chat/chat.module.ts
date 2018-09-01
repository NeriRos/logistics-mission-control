import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatComponent } from "./chat.component";
import { ChatRoutingModule } from "./chat-routing.module";

import { ChatService } from "../services/chat.service";
import { SupportService } from "../services/support.service";

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  providers: [ChatService, SupportService],
  declarations: [ChatComponent]
})
export class ChatModule { }
