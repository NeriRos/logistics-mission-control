import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { ManagementComponent } from "./management.component";
import { UsersComponent } from "./components/users/users.component";
import { USER_PERMISSIONS } from "../models/user.model";
import { PermissionLazyLoadGuard } from "../permission-lazy-load.guard";

const routes: Routes = [
    { path: "", component: ManagementComponent },
    // { path: "users", component: UsersComponent },
    { path: "users", loadChildren: "./components/users/users.module#UsersModule",
        canActivate: [PermissionLazyLoadGuard], data: {role: USER_PERMISSIONS.ADMIN}},
    { path: "chats", loadChildren: "./components/chats/chats.module#ChatsModule",
        canActivate: [PermissionLazyLoadGuard], data: {role: USER_PERMISSIONS.MANAGER}},
    { path: "supports", loadChildren: "./components/supports/supports.module#SupportModule",
        canActivate: [PermissionLazyLoadGuard], data: {role: USER_PERMISSIONS.ADMIN}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementRoutingModule { }
