import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { ManagementComponent } from "./management.component";
import { USER_PERMISSIONS } from "../models/user.model";
import { PermissionLazyLoadGuard } from "../permission-lazy-load.guard";

const routes: Routes = [
    { path: "", component: ManagementComponent },
    { path: "users", loadChildren: "./components/users/users.module#UsersModule",
        canActivate: [PermissionLazyLoadGuard], data: {role: USER_PERMISSIONS.BOOKKEEPING}},
    { path: "support", loadChildren: "./components/support/support.module#SupportModule",
        canActivate: [PermissionLazyLoadGuard], data: {role: USER_PERMISSIONS.REPRESENTATIVE}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementRoutingModule { }
