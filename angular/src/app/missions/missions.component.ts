import { Component, OnInit } from "@angular/core";
import { MissionsService } from "../services/missions.service";
import { Mission } from "../models/mission.model";
import { IUser } from "../models/user.model";
import { UserService } from "../services/login.service";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { CreateMissionComponent } from "./components/createMission.component";
import { ManagementService } from "../services/management.service";

@Component({
    selector: "app-missions",
    templateUrl: "./missions.component.html",
    styleUrls: ["./missions.component.css"]
})
export class MissionsComponent implements OnInit {
    protected user: IUser;
    protected users: Array<IUser>;

    createMissionForm: FormGroup;

    myMissions: Array<Mission>;
    unhandledMissions: Array<Mission>;

    constructor(private missionsService: MissionsService,
                private userService: UserService,
                private managementService: ManagementService,
                public dialog: MatDialog) {

    }

    ngOnInit() {
        this.userService.getUser().subscribe(user => {
            this.user = user;

            this.missionsService.getMyMissions(user._id).subscribe(myMissions => {
                this.myMissions = myMissions;
            });

            this.missionsService.getUnhandledMissions(user._id).subscribe(unhandledMissions => {
                this.unhandledMissions = unhandledMissions;
            });
        });

        this.managementService.getUsers().then((users) => {
            this.users = users;
        });
    }

    openCreateMission() {
        const dialogRef = this.dialog.open(CreateMissionComponent, {
            height: "400px",
            width: "600px",
            data: {users: this.users}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result && result.valid) {
                result.value.creator = this.user;
                this.createMission(result.value);
            } else if (result) {
                console.log("Result is not valid");
            }
        });
    }

    createMission(data) {
        const newMission = Mission.createMessageFromObject(data);

        this.missionsService.createMission(newMission).subscribe((res) => {
            console.log(res);
        });
    }
}
