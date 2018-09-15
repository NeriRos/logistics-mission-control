import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DateToTimePipe } from "../pipes/date-to-time.pipe";
import { GetUserById } from "../pipes/get-user-by-id.pipe";

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ DateToTimePipe, GetUserById ],
  exports:      [ DateToTimePipe, GetUserById ]
})
export class SharedModule { }
