import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ContactsRoutingModule } from '~/components/contacts/contacts-routing.module';
import { ContactsComponent } from '~/components/contacts/contacts.component';
import { FabComponent } from '~/components/contacts/components/fab/fab.component';
import { ActionBarModule } from '~/components/shared/action-bar.component';

import { ContactsService } from "~/services/contacts.service";
import { HelpersService } from '~/services/helpers.service';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ContactsRoutingModule,
    ActionBarModule
  ],
  declarations: [
    ContactsComponent,
    FabComponent
  ],
  providers: [
      ContactsService,
      HelpersService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ContactsModule { }
