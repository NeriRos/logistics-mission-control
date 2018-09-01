import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material";

import { SupportRoutingModule } from "./support-routing.module";
import { SupportComponent } from "./support.component";

import { ManagementService } from "../../../services/management.service";
import { UserService } from "../../../services/login.service";
import { GetUserById } from "../../../pipes/get-user-by-id.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SupportRoutingModule,
    MatSelectModule
  ],
  providers: [ManagementService, UserService],
  declarations: [SupportComponent, GetUserById]
})
export class SupportModule { }
