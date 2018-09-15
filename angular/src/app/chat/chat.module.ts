import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatComponent } from "./chat.component";
import { ChatRoutingModule } from "./chat-routing.module";

import { ChatService } from "../services/chat.service";
import { SupportService } from "../services/support.service";
// import { DateToTimePipe } from "../pipes/date-to-time.pipe";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule
  ],
  providers: [ChatService, SupportService],
  declarations: [ChatComponent]
})
export class ChatModule { }
