import { Injectable } from "@angular/core";
import { CanLoad, Router } from "@angular/router";

import { UserService } from "./services/login.service";

@Injectable()
export class LoggedInLazyLoadGuard implements CanLoad {
    constructor(private router: Router, private userService: UserService) { }

    canLoad(): boolean {
        console.log("CANLOAD");
        if (!this.userService.isAuthenticated()) {
            this.router.navigate(["login"]);
        }

        return true;
    }
}
