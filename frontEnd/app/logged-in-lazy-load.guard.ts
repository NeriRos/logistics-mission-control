import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";

import { RouterExtensions } from "nativescript-angular/router";
import { UserService } from "~/services/login.service";

@Injectable()
export class LoggedInLazyLoadGuard implements CanLoad {
    constructor(private _routerExtensions: RouterExtensions, private userService: UserService) { }

    canLoad(): boolean {
        if (!this.userService.isAuthenticated()) {
            this._routerExtensions.navigate(["login"], { clearHistory: true });
        }

        return true;
    }
}
