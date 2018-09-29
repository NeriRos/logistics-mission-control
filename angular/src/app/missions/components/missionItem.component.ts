import { Component, Input, OnInit, AfterViewInit } from "@angular/core";
import { IMission, MISSION_STATUS, MISSION_STATUS_NAME, MISSION_URGENCY_NAME } from "../../models/mission.model";
import { MissionsService } from "../../services/missions.service";

@Component({
    selector: "app-mission-item",
    template: `
    <div class="mission col">
        <button class="btn btn-primary" type="button" data-toggle="collapse" [attr.data-target]="'#' + collapseId">
            <p class="row">
                <span class="col"> {{mission.date | dateToTime : true}} </span>
                <span class="col"> {{mission.body.title}} </span>
            </p>
            <div class="collapse button" [id]="collapseId">
                <button class="btn btn-success finishMission" *ngIf="mission.status !== LOCAL_MISSION_STATUS.DONE">Mark as done</button>
                <button class="btn btn-warning reopenMission" *ngIf="mission.status === LOCAL_MISSION_STATUS.DONE">Open again</button>
            </div>
        </button>
        <div class="collapse body" [id]="collapseId">
            <div class="card text-center">
                <div class="card-body">
                    <p class="card-text">{{mission.body.description}}</p>
                </div>
                <div class="card-footer">
                    <span class="urgency"><b>Urgency:</b> {{LOCAL_MISSION_URGENCY_NAME[mission.urgency]}}, </span>
                    <span class="status"><b>Status:</b> {{LOCAL_MISSION_STATUS_NAME[mission.status]}}, </span>
                    <span class="type"><b>Type:</b> {{mission.type}}</span>
                </div>
            </div>
        </div>
    </div>`,
    styleUrls: ["./missionItem.css"]
})
export class MissionItemComponent implements OnInit, AfterViewInit {
    @Input() missionKind: string;
    @Input() mission: IMission;
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
}
