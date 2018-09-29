import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DateToTimePipe } from "../pipes/date-to-time.pipe";
import { GetUserById } from "../pipes/get-user-by-id.pipe";
import { SupportClientPipe } from "../pipes/support-client.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [ DateToTimePipe, GetUserById, SupportClientPipe ],
  exports: [ DateToTimePipe, GetUserById, SupportClientPipe ]
})
export class PipesModule { }
