import { Component, OnInit, NgZone } from "@angular/core";
import { ISupport } from "../../../models/support.model";
import { IUser, USER_PERMISSIONS } from "../../../models/user.model";
import { ManagementService } from "../../../services/management.service";
import { UserService } from "../../../services/login.service";

@Component({
    selector: "app-support",
    templateUrl: "./support.component.html",
    styleUrls: ["./support.component.css"]
})
export class SupportComponent implements OnInit {

    supports: Array<ISupport> = [];
    users: Array<IUser> = [];

    LOCAL_USER_PERMISSIONS = USER_PERMISSIONS;

    constructor(
        private managementService: ManagementService,
        private userService: UserService,
        private zone: NgZone
    ) { }

    ngOnInit() {
        this.getUsers();
        this.getSupports();
    }

    getSupports() {
        this.managementService.getSupports().then((supports: Array<ISupport>) => {
            this.supports = supports;
        });
    }

    getUsers() {
        this.managementService.getUsers().then((users: Array<IUser>) => {
            this.users = users;
        });
    }

    edit(support) {
        this.managementService.updateSupport(support).then((res) => {
            if (res) {
                support.isEdit = false;
            }
        });
    }

    assignRepresentative(event) {
        console.log(event);
    }

    toggleEdit(support, mode) {
        this.zone.run(() => {
            support.isEdit = mode;
        });

        $(document).ready(function() {
            $(".userSelect").select2();
            $(".representativeSelect").select2();
        });
    }
}
