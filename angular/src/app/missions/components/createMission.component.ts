import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { IUser, USER_PERMISSIONS } from "../../models/user.model";
import { MISSION_URGENCY } from "../../models/mission.model";

@Component({
    selector: "app-create-mission",
    template: `
    <h2 mat-dialog-title>Create Mission</h2>
    <mat-dialog-content>
        <div class="col">
            <form [formGroup]="createMissionForm">
                <div class="row">
                    <div class="col">
                        <mat-form-field>
                            <input matInput placeholder="title" formControlName="title">
                        </mat-form-field>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <mat-form-field>
                            <textarea matInput placeholder="description" formControlName="description"></textarea>
                        </mat-form-field>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <mat-form-field>
                            <input matInput type="number" [value]="LOCAL_MISSION_URGENCY.LOW" [min]="LOCAL_MISSION_URGENCY.LOW"
                             [max]="LOCAL_MISSION_URGENCY.URGENT" placeholder="urgency" formControlName="urgency">
                        </mat-form-field>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <mat-form-field>
                            <mat-select formControlName="type" placeholder="Mission type">
                                <mat-option value="regular" selected>regular</mat-option>
                                <mat-option value="package">package</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <mat-form-field>
                            <mat-select formControlName="receivers" placeholder="User" multiple>
                                <ng-template ngFor let-user [ngForOf]="data.users" let-i="index">
                                    <ng-container *ngIf="user.permissions <= LOCAL_USER_PERMISSIONS.DELIVERY">
                                        <mat-option [value]="user">{{user.name}} - {{user.permissions}}</mat-option>
                                    </ng-container>
                                </ng-template>
                            </mat-select>
                        </mat-form-field>
                    </div>
                </div>
            </form>
        </div>
    </mat-dialog-content>
    <mat-dialog-actions>
        <button mat-button (click)="closeDialog(undefined)">Close</button>
        <button mat-button (click)="closeDialog(this.createMissionForm)">Create</button>
    </mat-dialog-actions>
    `
})
export class CreateMissionComponent {
    createMissionForm: FormGroup;
    users: Array<IUser>;
    LOCAL_USER_PERMISSIONS;
    LOCAL_MISSION_URGENCY;

    constructor(private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<CreateMissionComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {

        this.LOCAL_USER_PERMISSIONS = USER_PERMISSIONS;
        this.LOCAL_MISSION_URGENCY = MISSION_URGENCY;

        this.createMissionForm = this.formBuilder.group({
            title: "",
            description: "",
            type: "",
            receivers: [],
            urgency: 0
        });
    }

    closeDialog(data) {
        this.dialogRef.close(data);
    }
}
