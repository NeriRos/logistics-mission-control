import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";

import { HelpersService } from "../services/helpers.service";
import { UserService } from "../services/login.service";

import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  providers: [
    HelpersService,
    UserService
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
