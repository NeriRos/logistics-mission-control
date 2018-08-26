import { Injectable } from "@angular/core";
import { CanLoad, Router, ActivatedRoute, RoutesRecognized, CanActivate } from "@angular/router";

import { UserService } from "./services/login.service";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

@Injectable()
export class PermissionLazyLoadGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) {
    }

    canActivate(route): Observable<boolean>|boolean {
        const role = route.data["role"] as number;

        if (!this.userService.isAuthenticated()) {
            this.router.navigate(["login"]);
            return true;
        }

        return this.userService.getUser().map((user) => {
            return user.permissions <= role;
        });
    }
}
