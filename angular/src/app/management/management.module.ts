import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManagementComponent } from "./management.component";
import { ManagementRoutingModule } from "./management-routing.module";
import { UsersModule } from "./components/users/users.module";

@NgModule({
  imports: [
    CommonModule,
    ManagementRoutingModule,
    UsersModule
  ],
  declarations: [ManagementComponent]
})
export class ManagementModule { }
