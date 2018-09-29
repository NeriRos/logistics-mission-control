import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LoginRoutingModule } from "./login-routing.module";

import { LoginComponent } from "./login.component";

import { HelpersService } from "../services/helpers.service";
import { UserService } from "../services/login.service";

import { PipesModule } from "../shared/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    RouterModule,
    PipesModule
  ],
  exports: [PipesModule],
  providers: [
    HelpersService,
    UserService
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
