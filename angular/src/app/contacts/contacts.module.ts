import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactsComponent } from "./contacts.component";
import { ContactsRoutingModule } from "./contacts-routing.module";
import { PipesModule } from "../shared/pipes.module";
import { ContactsService } from "../services/contacts.service";
import { HelpersService } from "../services/helpers.service";

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    PipesModule
  ],
  providers: [ContactsService, HelpersService],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
