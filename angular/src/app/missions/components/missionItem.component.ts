import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter } from "@angular/core";
import { IMission, MISSION_STATUS, MISSION_STATUS_NAME, MISSION_URGENCY_NAME } from "../../models/mission.model";
import { MissionsService } from "../../services/missions.service";

@Component({
    selector: "app-mission-item",
    templateUrl: "./missionItem.component.html",
    styleUrls: ["./missionItem.component.css"]
})
export class MissionItemComponent implements OnInit, AfterViewInit {
    @Input() missionKind: string;
    @Input() mission: IMission;
    @Output() showChatsTrigger = new EventEmitter<string>();

    myMissions: boolean;
    collapseId: string;
    LOCAL_MISSION_STATUS;
    LOCAL_MISSION_STATUS_NAME;
    LOCAL_MISSION_URGENCY_NAME;

    constructor(private missionService: MissionsService) {
        this.LOCAL_MISSION_STATUS = MISSION_STATUS;
        this.LOCAL_MISSION_STATUS_NAME = MISSION_STATUS_NAME;
        this.LOCAL_MISSION_URGENCY_NAME = MISSION_URGENCY_NAME;
    }

    static deleteMissionById(missionService, missionId) {
        missionService.deleteMission(missionId).subscribe((res) => {
            if (!res.problem) {
                $(`:regex(id, ${missionId}$)`).parent().css("display", "none");
            }
        }, (err) => {
            console.log("error:", err);
        });
    }

    ngOnInit(): void {
        this.collapseId = `${this.missionKind}-${this.mission._id}`;
        this.myMissions = this.missionKind === "myMissions";
    }

    ngAfterViewInit(): void {
        const body = $("body");

        const collapseBodyElement = `#${this.collapseId}.body`;
        const collapseButtonElement = `#${this.collapseId}.button`;

        body.on("show.bs.collapse", collapseBodyElement, (elem) => {
            const buttonWidth = $(`button[data-target="#${this.collapseId}"]`).outerWidth(true);

            $(elem.target).width(buttonWidth);
        });

        body.on("click", `${collapseButtonElement} .finishMission`, (e) => {
            e.preventDefault();
            e.stopPropagation();

            this.changeMissionStatus(MISSION_STATUS.DONE);
        });

        body.on("click", `${collapseButtonElement} .reopenMission`, (e) => {
            e.preventDefault();
            e.stopPropagation();

            this.changeMissionStatus(MISSION_STATUS.READ);
        });

        body.on("click", `${collapseButtonElement} .deleteMission`, (e) => {
            e.preventDefault();
            e.stopPropagation();

            this.deleteMission();
        });

        body.on("click", `${collapseButtonElement} .showChats`, (e) => {
            e.preventDefault();
            e.stopPropagation();

            this.showChatsTrigger.emit(this.mission._id);
            console.log("EMITTTINNGGG", this.mission._id);
        });
    }

    changeMissionStatus(status) {
        this.missionService.changeMissionStatus(this.mission._id, status).subscribe((res) => {

            if (!res.problem) {
                this.mission = res;
            }
        }, (err) => {
            console.log("error:", err);
        });
    }

    deleteMission() {
        MissionItemComponent.deleteMissionById(this.missionService, this.mission._id);
    }
}
