import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { LoggedInLazyLoadGuard } from "./logged-in-lazy-load.guard";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "login", loadChildren: "./login/login.module#LoginModule" },
    { path: "home", loadChildren: "./home/home.module#HomeModule", canLoad: [LoggedInLazyLoadGuard] },
    { path: "chat/:id", loadChildren: "./chat/chat.module#ChatModule", canLoad: [LoggedInLazyLoadGuard]},
    { path: "support/:id", loadChildren: "./supportChat/support-chat.module#SupportChatModule", canLoad: [LoggedInLazyLoadGuard]},
    { path: "missions", loadChildren: "./missions/missions.module#MissionsModule", canLoad: [LoggedInLazyLoadGuard] },
    { path: "management", loadChildren: "./management/management.module#ManagementModule", canLoad: [LoggedInLazyLoadGuard] },
    { path: "contacts", loadChildren: "./contacts/contacts.module#ContactsModule", canLoad: [LoggedInLazyLoadGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
