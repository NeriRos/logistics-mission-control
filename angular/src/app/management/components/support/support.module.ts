import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { SupportRoutingModule } from "./support-routing.module";
import { SupportComponent } from "./support.component";

import { ManagementService } from "../../../services/management.service";
import { UserService } from "../../../services/login.service";

import { PipesModule } from "../../../shared/pipes.module";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SupportRoutingModule,
    HttpClientModule,
    SharedModule,
    PipesModule
  ],
  exports: [PipesModule],
  providers: [ManagementService, UserService],
  declarations: [SupportComponent]
})
export class SupportModule { }
