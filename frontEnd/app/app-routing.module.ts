import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoggedInLazyLoadGuard } from "~/logged-in-lazy-load.guard";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", loadChildren: "./components/login/login.module#LoginModule" },
    { path: "home", loadChildren: "./components/home/home.module#HomeModule", canLoad: [LoggedInLazyLoadGuard] },
    { path: "chat", loadChildren: "./components/chat/chat.module#ChatModule", canLoad: [LoggedInLazyLoadGuard] },
    { path: "contacts", loadChildren: "./components/contacts/contacts.module#ContactsModule", canLoad: [LoggedInLazyLoadGuard] }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }