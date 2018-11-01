import { Component, OnInit, NgZone, ElementRef, ViewChild } from "@angular/core";
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
import { ISocketEventMessage } from "../shared/socketEventMessage";
import { MissionItemComponent } from "./components/missionItem.component";
import { ChatService } from "../services/chat.service";
import { IChat, Chat } from "../models/chat.model";

@Component({
    selector: "app-missions",
    templateUrl: "./missions.component.html",
    styleUrls: ["./missions.component.css"]
})
export class MissionsComponent implements OnInit {
    @ViewChild("message") message: ElementRef;

    user: IUser;
    protected users: Array<IUser>;
    selectedMission: Mission & {chats: IChat[]};

    createMissionForm: FormGroup;

    myMissions: Array<Mission>;
    unhandledMissions: Array<Mission>;
    connection: Connection;

    conversantsClasses = {me: "me", conversant: "conversant"};
    messages: ElementRef;

    constructor(private missionsService: MissionsService,
                private managementService: ManagementService,
                protected dialog: MatDialog,
                protected userService: UserService,
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

    showChats(missionId) {
        this.myMissions.concat(this.unhandledMissions).forEach((mission) => {
            if (mission._id === missionId) {
                return this.zone.run(() => {
                    this.selectedMission = <any>mission;

                    this.missionsService.getChats(missionId).subscribe((chats) => {
                        this.selectedMission.chats = chats;
                    });


                    setTimeout(() => {
                        $("#chatsModal").modal("show");
                    }, 1);
                });
            }
        });
    }

    sendMessage() {
        const messageElement = (<HTMLTextAreaElement>this.message.nativeElement);
        const messageText = messageElement.value;
        const chat = Chat.newMessage(messageText, this.user._id, this.selectedMission._id, false);

        chat.setId(this.selectedMission.chats.length + "");

        if (messageText && messageText.length > 0) {
            this.missionsService.sendMessage(this.selectedMission._id, chat).subscribe((res) => {
                console.log("Sent message:", res);
                this.selectedMission.chats.push(res);
            });
        } else {
            console.log("no text", messageText);
        }
    }
}
