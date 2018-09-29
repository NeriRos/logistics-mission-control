import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { UsersComponent } from "./users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { ManagementService } from "../../../services/management.service";
import { PipesModule } from "../../../shared/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    PipesModule
  ],
  exports: [PipesModule],
  providers: [
    UsersComponent,
    ManagementService
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
