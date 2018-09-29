import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";

import { ManagementService } from "../services/management.service";
import { PipesModule } from "../shared/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule
  ],
  exports: [ PipesModule ],
  providers: [ManagementService],
  declarations: [HomeComponent]
})
export class HomeModule { }
