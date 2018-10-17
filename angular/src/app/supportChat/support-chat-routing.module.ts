import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { SupportChatComponent } from "./support-chat.component";

const routes: Routes = [
    { path: "", component: SupportChatComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupportRoutingModule { }
