import { Component, OnInit, ViewChild, ElementRef, NgZone } from "@angular/core";
import { ISupport } from "../models/support.model";
import { IChat, Chat, CHAT_STATUS } from "../models/chat.model";
import { ChatService } from "../services/chat.service";
import { ActivatedRoute } from "@angular/router";
import { IUser } from "../models/user.model";
import { UserService } from "../services/login.service";
import { SupportService } from "../services/support.service";
import { Globals } from "../shared/globals";
import { Connection } from "../models/connection.model";
import { SocketEventMessage } from "../shared/socketEventMesssage";


@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
    @ViewChild("message") message: ElementRef;
    @ViewChild("messages") messages: ElementRef;

    chats: Array<IChat> = [];
    friend: IUser | ISupport | any;
    friends: Array<IUser> = [];
    friendPromise: Promise<IUser | ISupport>;
    user: IUser;
    userPromise: Promise<IUser>;
    connection: Connection;
    serverService: ChatService | SupportService;

    socketEvents: Array<{trigger: string | Function, function: Function}> = [];

    constructor(
        protected router: ActivatedRoute,
        protected userService: UserService,
        protected chatService: ChatService,
        protected supportService: SupportService,
        protected globals: Globals,
        protected zone: NgZone
    ) {
        this.serverService = chatService;
        this.socketEvents = [
            {trigger: ((data) => data.error || (data.response && data.response.error)), function: this.onSocketError},
            {trigger: Globals.SOCKET_EVENTS.CHAT_INIT, function: this.onSocketOpen},
            {trigger: Globals.SOCKET_EVENTS.MESSAGE_CALLBACK, function: this.onSocketMessageCallback},
            {trigger: Globals.SOCKET_EVENTS.MESSAGE_READ, function: this.onSocketMessageRead},
            {trigger: Globals.SOCKET_EVENTS.CHAT_MESSAGE, function: this.onSocketMessage}
        ];
    }

    ngOnInit() {
        this.router.params.subscribe((params) => {
            this.friendPromise = this.serverService.getFriendById(params.id).then((friend) => {
                this.friend = friend;

                this.serverService.getChats(friend._id).then((chats) => {
                    this.initChats(chats);
                });

                return friend;
            });
        });

        this.userPromise = this.userService.getUser().toPromise();
        this.userPromise.then((user) => {
            this.user = user;

            this.initSocket();

            return user;
        });
    }

    initChats(chats) {
        this.zone.run(() => {
            this.chats = chats;

            this.scrollToLastMessage();
        });
    }

    scrollToLastMessage() {
        setTimeout(() => {
            (<HTMLUListElement>this.messages.nativeElement).scrollTop = this.messages.nativeElement.scrollHeight;
        }, 1);
    }

    submit() {
        const newMessage = this.constructNewMessage();

        this.connection.sendServerMessage(newMessage, Globals.SOCKET_EVENTS.CHAT_MESSAGE);

        return false;
    }

    constructNewMessage(): any {
        const newMessage = new Chat(
            this.message.nativeElement.value,
            this.user._id,
            this.friend._id,
            new Date(),
            false,
            false
        );

        return {message: newMessage, user: this.user};
    }

    initSocket() {
        try {
            const socket = new WebSocket(this.globals.socketServer.chat.uri);

            socket.onmessage = (msg) => {
                const data = JSON.parse(msg.data);

                this.socketMessageHandler(socket, data);
            };

            socket.onopen = (e) => {
                this.friendPromise.then((friend: IUser) => {
                    this.connection = Connection.newConnection(socket, friend);
                    this.onSocketOpen(friend);

                    return friend;
                });

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

    onSocketOpen(friend) {
        if (this.connection) {
            this.connection.sendServerMessage({friendId: friend._id, user: this.user}, Globals.SOCKET_EVENTS.CHAT_INIT);
        } else {
            console.log("No connection");
        }
    }

    socketMessageHandler(socket, data: SocketEventMessage) {
        if (typeof data === "string") {
            data = JSON.parse(data);
        }

        console.log("GOT DATA", data);

        let isEventFound = false;

        this.socketEvents.forEach((event) => {
            if (typeof event.trigger === "function" && event.trigger(data)) {
                isEventFound = true;
                return event.function(data);
            } else if (event.trigger === data.event) {
                isEventFound = true;
                return event.function.bind(this)(data);
            }
        });

        if (!isEventFound) {
            console.log("NO SUCH TRIGGER:", data);
        }
    }

    onSocketInit(data: SocketEventMessage) {
        this.connection.nodeConnectionId = data.nodeConnectionId;
    }

    onSocketMessage(data) {
        const message = this.parseServerMessage(data);
        if (typeof message.status !== "undefined" && (typeof message.status === "number" || message.status === "ok")) {
            this.connection.sendServerMessage({messageId: message.id, friendId: this.user._id}, Globals.SOCKET_EVENTS.MESSAGE_READ);

            this.addMessages(message);
        } else if (data.status === "error") {
            this.onSocketError(data);
        }
    }

    onSocketMessageRead(data) {
        console.log("MESSAGE READDDDD", data);

        this.chats.map((chat) => {
            if (chat.id === data.chat.id) {
                console.log("found chat", chat);
                chat.status = data.chat.status;

                document.getElementById(chat.id).querySelector(".status i").className = "fa " + this.getStatusMark(chat.status);
            }

            return chat;
        });
    }

    onSocketMessageCallback(data: SocketEventMessage) {
        this.message.nativeElement.value = "";
        this.addMessages(data.chat);
    }

    onSocketError(data) {
        console.log("Received error from socket server:", data.message || data.error.message);
    }

    parseServerMessage(data: SocketEventMessage) {
        let parsedMessage: any = data;

        if (typeof data.chat === "object") {
            parsedMessage = data.chat;
        }

        return parsedMessage;
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

    getStatusMark(status: number) {
        switch (status) {
            case CHAT_STATUS.NEW:
                return "";
            case CHAT_STATUS.SENT:
                return "fa-check";
            case CHAT_STATUS.READ:
                return "fa-check-double";
        }
    }
}
