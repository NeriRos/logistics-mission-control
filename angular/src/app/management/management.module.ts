import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ManagementComponent } from "./management.component";
import { ManagementRoutingModule } from "./management-routing.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ManagementRoutingModule
  ],
  declarations: [ManagementComponent]
})
export class ManagementModule { }
