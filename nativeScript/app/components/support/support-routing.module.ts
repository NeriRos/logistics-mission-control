import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SupportChatComponent } from "~/components/support/support-chat/support-chat.component";
import { SupportComponent } from "~/components/support/support.component";

const routes: Routes = [
    { path: "", component: SupportComponent },
    { path: "/chat", component: SupportChatComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SupportRoutingModule { }
