import { Component, OnInit, NgZone } from "@angular/core";
import { IUser, USER_PERMISSIONS } from "../models/user.model";
import { UserService } from "../services/login.service";
import { ManagementService } from "../services/management.service";
import { AppComponent } from "../app.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent extends MenuComponent implements OnInit {
    user: IUser;

    constructor(protected userService: UserService, protected zone: NgZone) {
        super(userService, zone);
    }

    ngOnInit() {
        this.userService.getUser().subscribe((user) => {
            this.zone.run(() => {
                this.user = user;
            });
        });
    }
}
