import { Component, OnInit, ViewChild, ElementRef, NgZone } from "@angular/core";
import { ISupport } from "../models/support.model";
import { IChat } from "../models/chat.model";
import { ChatService } from "../services/chat.service";
import { ActivatedRoute } from "@angular/router";
import { IUser } from "../models/user.model";
import { UserService } from "../services/login.service";
import { SupportService } from "../services/support.service";
import { Globals } from "../shared/globals";


@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
    @ViewChild("message") message: ElementRef;
    @ViewChild("messages") messages: ElementRef;

    chats: Array<IChat> = [];
    support: ISupport;
    supportPromise: Promise<ISupport>;
    user: IUser;
    socket: WebSocket;
    phpConnectionID: number;

    constructor(
        private router: ActivatedRoute,
        private chatService: ChatService,
        private userService: UserService,
        private supportService: SupportService,
        private globals: Globals,
        private zone: NgZone
    ) {
        this.router.params.subscribe((params) => {
            this.supportPromise = this.supportService.getSupportById(params.id).then((support: ISupport) => {
                this.support = support;

                return support;
            });
        });

        this.userService.getUser().subscribe((user) => {
            this.user = user;
        });
    }

    ngOnInit() {
        this.supportPromise.then((support) => {
            this.chatService.getChats(support._id).then((chats) => {
                this.zone.run(() => {
                    this.chats = chats.chats;

                    this.scrollToLastMessage();
                });
            });

            return support;
        });

        this.initSocket();

    }

    scrollToLastMessage() {
        setTimeout(() => {
            (<HTMLUListElement>this.messages.nativeElement).scrollTop = this.messages.nativeElement.scrollHeight;
        }, 1);
    }

    submit() {
        if (!this.phpConnectionID) {
            console.log("NO CONNECTION ID!");
        }

        const newMessage: IChat & {user: IUser, connectionID: number, support: ISupport} = {
            id: this.support._id,
            message: this.message.nativeElement.value,
            date: new Date(),
            from: this.user._id,
            isSupport: this.support.users.indexOf(this.user._id) !== -1,
            to: this.support.client.id,
            user: this.user,
            connectionID: this.phpConnectionID,
            support: this.support
        };

        this.socket.send(JSON.stringify({representativeMessage: newMessage}));

        return false;
    }

    initSocket() {
        try {
            this.socket = new WebSocket(this.globals.socketServer.uri);

            this.socket.onmessage = (msg) => {
                const data = JSON.parse(msg.data);

                this.socketMessageHandler(data);
            };

            this.socket.onopen = (e) => {
                this.supportPromise.then((support: ISupport) => {
                    this.socket.send(JSON.stringify({init: true, support: support, user: this.user}));

                    return support;
                });
                console.log("connection established!");
            };

            this.socket.onclose = (e) => {
                console.log("socket closed");
                alert("client logged off (socketclosed)");
            };

            this.socket.onerror = (e) => {
                console.log("socket error", e);
            };
        } catch (e) {
            console.log(e);
        }
    }

    socketMessageHandler(data) {
        if (typeof data === "string") {
            data = JSON.parse(data);
        }

        console.log("GOT DATA", data);

        if (data.error || (data.response && data.response.error)) {
            console.log("Received error from socket server:", data.message || data.response.message);
            return;
        } else if (data.init)  {
            this.phpConnectionID = data.connectionID;

            console.log("PHP CONNECTION ID:", this.phpConnectionID);
        } else if (data.getConnectionID) {
            this.phpConnectionID = data.response.message.connectionID;

            console.log("php CONNECTION ID:", this.phpConnectionID);
        } else { // Got message from client
            if (typeof data.status !== "undefined" && (typeof data.status === "number" || data.status === "ok")) {
                if (typeof data.message.message === "object") {
                    data = data.message.message;
                }

                this.addMessages(data);
            } else if (data.status === "error") {
                console.log("ERROR:", data);
            }
        }
    }

    addMessages(message) {
        this.zone.run(() => {
            this.chats.push(message);

            this.scrollToLastMessage();
        });
    }

    messageSender(chat: IChat) {
        if (chat.from === this.user._id) {
            return "representative";
        } else {
            return "client";
        }
    }
}
