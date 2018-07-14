import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ContactsRoutingModule } from '~/components/contacts/contacts-routing.module';
import { ContactsComponent } from '~/components/contacts/contacts.component';

import { UserService } from "~/services/login.service";
import { FabComponent } from '~/components/contacts/components/fab/fab.component';
import { HelpersService } from '~/services/helpers.service';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsComponent,
    FabComponent,
    
  ],
  providers: [
      UserService,
      HelpersService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ContactsModule { }
