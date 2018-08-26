import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";

import { ManagementService } from "../services/management.service";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [ManagementService],
  declarations: [HomeComponent]
})
export class HomeModule { }
