import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { SupportComponent } from "./support.component";

const routes: Routes = [
    { path: "", component: SupportComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupportRoutingModule { }
