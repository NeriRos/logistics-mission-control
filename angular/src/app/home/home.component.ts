import { Component, OnInit } from "@angular/core";
import { IUser, USER_PERMISSIONS } from "../models/user.model";
import { UserService } from "../services/login.service";
import { ManagementService } from "../services/management.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}
