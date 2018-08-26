import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChatComponent } from "./chat.component";
import { ChatRoutingModule } from "./chat-routing.module";

import { ManagementService } from "../services/management.service";

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
  ],
  providers: [ManagementService],
  declarations: [ChatComponent]
})
export class ChatModule { }
