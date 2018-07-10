import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ContactsComponent } from "~/components/contacts/contacts.component";

const routes: Routes = [
    { path: "", component: ContactsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ContactsRoutingModule { }
