import { Component, OnInit, NgZone } from "@angular/core";
import { MissionsService } from "../services/missions.service";
import { Mission } from "../models/mission.model";
import { IUser } from "../models/user.model";
import { UserService } from "../services/login.service";
import { FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { CreateMissionComponent } from "./components/createMission.component";
import { ManagementService } from "../services/management.service";
import { Globals } from "../shared/globals";
import { Connection } from "../models/connection.model";
import { ISocketEventMessage } from "../shared/socketEventMesssage";
import { MissionItemComponent } from "./components/missionItem.component";
import { ChatComponent } from "../chat/chat.component";
import { ActivatedRoute } from "@angular/router";
import { ChatService } from "../services/chat.service";
import { SupportService } from "../services/support.service";

@Component({
    selector: "app-missions",
    templateUrl: "./missions.component.html",
    styleUrls: ["./missions.component.css"]
})
export class MissionsComponent implements OnInit {
    user: IUser;
    protected users: Array<IUser>;
    chatComponent: ChatComponent;

    createMissionForm: FormGroup;

    myMissions: Array<Mission>;
    unhandledMissions: Array<Mission>;
    connection: Connection;

    constructor(private missionsService: MissionsService,
                private managementService: ManagementService,
                protected dialog: MatDialog,
                protected router: ActivatedRoute,
                protected userService: UserService,
                protected chatService: ChatService,
                protected supportService: SupportService,
                protected globals: Globals,
                protected zone: NgZone) {
    }

    ngOnInit() {
        this.userService.getUser().subscribe(user => {
            this.user = user;

            this.createSocketConnection();

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

    createSocketConnection() {
        try {
            const socket = new WebSocket(this.globals.socketServer.uri);

            socket.onmessage = (msg) => {
                const data = JSON.parse(msg.data);

                this.socketMessageHandler(socket, data);
            };

            socket.onopen = (e) => {
                this.connection = Connection.newConnection(socket, this.user);
                this.onSocketOpen(this.user);

                console.log("connection established!");
            };

            socket.onclose = (e) => {
                console.log("socket closed");
            };

            socket.onerror = (e) => {
                console.log("socket error", e);
            };
        } catch (e) {
            console.log(e);
        }
    }

    onSocketOpen(user: IUser): any {
        if (this.connection) {
            this.connection.sendServerMessage({user: user}, Globals.SOCKET_EVENTS.MISSIONS_INIT);
        } else {
            console.log("No connection");
        }
    }

    socketMessageHandler(socket: WebSocket, data: ISocketEventMessage): any {
        const event = data.event;

        console.log("Event:", event);

        switch (event) {
            case Globals.SOCKET_EVENTS.MISSIONS_INIT:
                this.onMissionInit(data);
                break;

            case Globals.SOCKET_EVENTS.MISSION_CREATION:
                this.onMissionCreation(data);
                break;

            case Globals.SOCKET_EVENTS.MISSION_MESSAGE:
                this.onMissionMessage(data);
                break;

            case Globals.SOCKET_EVENTS.MISSION_DELETE:
                this.onMissionDelete(data);
                break;

            case Globals.SOCKET_EVENTS.ERROR:
                this.onMissionError(data);
                break;

            default:
                break;
        }
    }

    onMissionInit(data: ISocketEventMessage) {
        this.connection.nodeConnectionId = data.nodeConnectionId;

        console.log("init with nodeConnectionId:", data.nodeConnectionId);
    }

    onMissionCreation(data: ISocketEventMessage) {
        const mission = Mission.createMessageFromObject(data.mission);
        console.log("data", data, "mission", mission);
        this.myMissions.push(mission);
    }

    onMissionMessage(data: ISocketEventMessage) {
        const mission = Mission.createMessageFromObject(data.mission);
        console.log("data", data, "mission", mission);
        this.unhandledMissions.push(mission);
    }

    onMissionDelete(data: ISocketEventMessage) {
        MissionItemComponent.deleteMissionById(this.missionsService, data.mission._id);
    }

    onMissionError(data: ISocketEventMessage) {
        console.log("Got error:", data);
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

        if (this.connection.isConnected()) {
            this.connection.sendServerMessage({mission: newMission}, Globals.SOCKET_EVENTS.MISSION_CREATION);
        } else {
            this.missionsService.createMission(newMission).subscribe((res) => {
                console.log("res", res);
                this.onMissionCreation({mission: res});
            });
        }
    }

    showChats(event) {
        console.log("Showing chats for ", event);

        // tslint:disable-next-line:max-line-length
        this.chatComponent = new ChatComponent(this.router, this.userService, this.chatService, this.supportService, this.globals, this.zone);

        $("#chatsModal").modal("show");
    }
}
