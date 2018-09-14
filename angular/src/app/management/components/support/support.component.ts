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

    deleteSupport(supportID) {
        this.managementService.deleteSupport(supportID).then((res) => {
            this.supports.forEach((support, index) => {
                console.log(this.supports.splice(index, 1));
            });
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    deleteAll() {
        this.managementService.deleteSupport(null, true).then((res) => {
            this.supports = this.supports.filter((support) => {
                return support.messages.length > 0;
            });
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    assignRepresentative(event) {
        console.log("rep assignded:", event);
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
