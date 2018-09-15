import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManagementComponent } from "./management.component";
import { ManagementRoutingModule } from "./management-routing.module";
import { UsersModule } from "./components/users/users.module";
import { SupportModule } from "./components/support/support.module";
import { DateToTimePipe } from "../pipes/date-to-time.pipe";

import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ManagementRoutingModule,
    UsersModule,
    SupportModule,
    SharedModule
  ],
  declarations: [ManagementComponent]
})
export class ManagementModule { }
