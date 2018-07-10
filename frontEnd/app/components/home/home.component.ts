import { Component, ElementRef, OnInit, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page"
import { EventData } from "data/observable";
import { StackLayout } from "ui/layouts/stack-layout";

import { HelpersService } from "~/services/helpers.service";
import { UserService } from "~/services/login.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public loggedUser: string;

    constructor(private _routerExtensions: RouterExtensions, private page: Page, private userService: UserService, private helpers: HelpersService) {
        this.page.actionBarHidden = false;
    }

    ngOnInit(): void {

    }

    logout() {
        this.userService.logout();
        this.helpers.navigate(["login"]);
    }

    // Navigate to corresponding page
    onMenuButtonTap(args: EventData) {
        const routeName = (<StackLayout>args.object).parent.get("data-name");
        this.helpers.navigate([routeName]);
    }

    // Navigate to profile page here
    onProfileButtonTap() {
        alert("Navigate to profile page");
    }
}
