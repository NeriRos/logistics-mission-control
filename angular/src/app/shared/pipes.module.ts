import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DateToTimePipe } from "../pipes/date-to-time.pipe";
import { GetUserById } from "../pipes/get-user-by-id.pipe";
import { SupportClientPipe } from "../pipes/support-client.pipe";
import { StatusToMarkPipe } from "../pipes/status-to-mark.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [ DateToTimePipe, GetUserById, SupportClientPipe, StatusToMarkPipe ],
  exports: [ DateToTimePipe, GetUserById, SupportClientPipe, StatusToMarkPipe]
})
export class PipesModule { }
