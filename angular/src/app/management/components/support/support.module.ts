import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from "@angular/material";

import { SupportRoutingModule } from "./support-routing.module";
import { SupportComponent } from "./support.component";

import { ManagementService } from "../../../services/management.service";
import { UserService } from "../../../services/login.service";

import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SupportRoutingModule,
    MatSelectModule,
    SharedModule
  ],
  providers: [ManagementService, UserService],
  declarations: [SupportComponent]
})
export class SupportModule { }
