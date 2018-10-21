import { Component, OnInit, NgZone } from "@angular/core";
import { ISupport, SUPPORT_STATUS } from "../../../models/support.model";
import { IUser, USER_PERMISSIONS } from "../../../models/user.model";
import { ManagementService } from "../../../services/management.service";

@Component({
    selector: "app-support",
    templateUrl: "./support.component.html",
    styleUrls: ["./support.component.css"]
})
export class SupportComponent implements OnInit {

    supports: Array<ISupport> = [];
    users: Array<IUser> = [];

    LOCAL_USER_PERMISSIONS = USER_PERMISSIONS;
    LOCAL_SUPPORT_STATUS = SUPPORT_STATUS;

    constructor(
        private managementService: ManagementService,
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

                this.supports.forEach((updatedSupport, index) => {
                    if (updatedSupport._id === res.support._id) {
                        this.supports[index] = res.support;
                    }
                });
            }
        });
    }

    deleteSupport(supportID) {
        this.managementService.deleteSupport(supportID).then((res) => {
            this.supports.forEach((support, index) => {
                if (supportID === support._id) {
                    console.log(this.supports.splice(index, 1));
                }
            });
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    deleteAll() {
        this.managementService.deleteSupport(null, true).then((res) => {
            if (!res.error) {
                this.supports = this.supports.filter((support) => {
                    console.log("support.messages", support.messages);
                    return support.messages.length > 0;
                });
            }
        }).catch((err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    assignRepresentative(event) {
        console.log("rep assignded:", event);
    }

    toggleEdit(support, mode: boolean) {
        this.zone.run(() => {
            support.isEdit = mode;
        });

        $(document).ready(function() {
            $(".userSelect").select2();
            $(".representativeSelect").select2();
        });
    }
}
