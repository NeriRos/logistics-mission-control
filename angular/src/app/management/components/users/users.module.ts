import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { UsersComponent } from "./users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { ManagementService } from "../../../services/management.service";
import { SupportClientPipe } from "../../../pipes/support-client.pipe";

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  providers: [
    UsersComponent,
    ManagementService
  ],
  declarations: [UsersComponent, SupportClientPipe]
})
export class UsersModule { }
