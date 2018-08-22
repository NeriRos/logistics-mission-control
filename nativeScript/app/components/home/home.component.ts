import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable/observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { Page } from "tns-core-modules/ui/page/page";

import { HelpersService } from "~/services/helpers.service";
import { UserService } from "~/services/login.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["home.component.css"]
})
export class HomeComponent {
    loggedUser: string;

    constructor(private page: Page, private userService: UserService, private helpers: HelpersService) {
        this.page.actionBarHidden = false;
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
