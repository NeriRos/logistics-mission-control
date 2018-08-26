import { Component, OnInit } from "@angular/core";
import { IUser, IUserManagementExtension } from "../../../models/user.model";
import { ManagementService } from "../../../services/management.service";
import { ISupport } from "../../../models/support.model";
import { UserService } from "../../../services/login.service";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {

    private _users: Array<IUserManagementExtension> = [];
    private _supports: Array<ISupport> = [];

    constructor(private managementService: ManagementService, private userService: UserService) { }

    ngOnInit() {
        this.managementService.getSupports().then((supports: Array<ISupport>) => {
            this.supports = supports;

            this.managementService.getUsers().then((users: Array<IUserManagementExtension>) => {
                this.users = users;
            });
        });
    }

    getSupportName(supportID) {
        for (const support of this.supports) {
            console.log(support._id, supportID);
            if (support._id === supportID) {
                return support.client.name;
            }
        }
    }

    edit(user) {
        console.log(user);
        this.userService.updateUser(user).subscribe((res) => {
            if (res) {
                user.isEdit = false;
            }
        });
    }

    delete(user) {
        confirm("Do you really want to delete user: " + user.name);
    }

    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
    }
    get supports() {
        return this._supports;
    }
    set supports(value) {
        this._supports = value;
    }
}
