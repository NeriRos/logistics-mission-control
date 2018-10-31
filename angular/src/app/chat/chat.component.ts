import { Component, OnInit, ViewChild, ElementRef, NgZone, Input } from "@angular/core";
import { ISupport } from "../models/support.model";
import { IChat, Chat, CHAT_STATUS } from "../models/chat.model";
import { ChatService } from "../services/chat.service";
import { ActivatedRoute } from "@angular/router";
import { IUser } from "../models/user.model";
import { UserService } from "../services/login.service";
import { SupportService } from "../services/support.service";
import { Globals } from "../shared/globals";
import { Connection } from "../models/connection.model";
import { ISocketEventMessage } from "../shared/socketEventMesssage";


@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
    @ViewChild("message") message: ElementRef;
    @ViewChild("messages") messages: ElementRef;

    @Input() selfObject: ChatComponent;

    chats: Array<IChat> = [];
    conversant: IUser | ISupport | any;
    conversantDetails: IUser;
    conversants: Array<IUser> = [];
    conversantPromise: Promise<IUser | ISupport>;
    user: IUser;
    userPromise: Promise<IUser>;
    connection: Connection;
    serverService: ChatService | SupportService;

    isSupport = false;
    isConversantOnline = false;
    conversantOfflineText: string;
    conversantsClasses = {me: "me", conversant: "conversant"};

    socketEvents: Array<{trigger: string | Function, function: Function}> = [];

    constructor(
        protected router: ActivatedRoute,
        protected userService: UserService,
        protected chatService: ChatService,
        protected supportService: SupportService,
        protected globals: Globals,
        protected zone: NgZone
    ) {
        if (this.selfObject) {
            Object.keys(this).forEach((key) => {
                this[key] = this.selfObject[key];
            });
        } else {
            this.serverService = chatService;
            this.conversantOfflineText = "Waiting for conversant";
            this.socketEvents = [
                {trigger: ((data) => data.error || (data.response && data.response.error)), function: this.onSocketError},
                {trigger: Globals.SOCKET_EVENTS.CHAT_INIT, function: this.onSocketOpen},
                {trigger: Globals.SOCKET_EVENTS.MESSAGE_CALLBACK, function: this.onSocketMessageCallback},
                {trigger: Globals.SOCKET_EVENTS.MESSAGE_READ, function: this.onSocketMessageRead},
                {trigger: Globals.SOCKET_EVENTS.CHAT_MESSAGE, function: this.onSocketMessage}
            ];
        }
    }

    ngOnInit() {
        this.router.params.subscribe((params) => {
            if (!params.ids) {
                params.ids = [params.id];
            } else {
                params.ids = Array.from(params.ids);
            }

            params.ids.forEach((id) => {
                this.conversantPromise = this.serverService.getConversantById(id).then((conversant) => {
                    this.conversant = conversant;

                    this.serverService.getChats(conversant._id).then((chats) => {
                        this.initChats(chats);
                    });

                    return conversant;
                });
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
            this.conversantDetails = this.conversant;

            // TODO: set is conversant online dynamicly
            this.isConversantOnline = true;

            this.scrollToLastMessage();
        });
    }

    scrollToLastMessage() {
        setTimeout(() => {
            (<HTMLUListElement>this.messages.nativeElement).scrollTop = this.messages.nativeElement.scrollHeight;
        }, 1);
    }

    submit() {
        const messageText = this.message.nativeElement.value;
        if (messageText && messageText.length > 0) {
            const newMessage = this.constructNewMessage(messageText);

            this.connection.sendServerMessage(newMessage, Globals.SOCKET_EVENTS.CHAT_MESSAGE);
        }

        return false;
    }

    constructNewMessage(message): ISocketEventMessage {
        const newMessage = new Chat(
            message,
            this.user._id,
            this.conversant._id,
            new Date(),
            false,
            false
        );

        return {chat: newMessage, user: this.user};
    }

    initSocket() {
        try {
            const socket = new WebSocket(this.globals.socketServer.uri);

            socket.onmessage = (msg) => {
                const data = JSON.parse(msg.data);

                this.socketMessageHandler(socket, data);
            };

            socket.onopen = (e) => {
                this.conversantPromise.then((conversant: IUser) => {
                    this.connection = Connection.newConnection(socket, conversant);
                    this.onSocketOpen(conversant);

                    return conversant;
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

    onSocketOpen(conversant) {
        if (this.connection) {
            this.connection.sendServerMessage({conversantId: conversant._id, user: this.user}, Globals.SOCKET_EVENTS.CHAT_INIT);
        } else {
            console.log("No connection");
        }
    }

    socketMessageHandler(socket, data: ISocketEventMessage) {
        if (typeof data === "string") {
            data = JSON.parse(data);
        }

        console.log("event:", data.event, "data:", data);

        let isEventFound = false;

        this.socketEvents.forEach((event) => {
            if (typeof event.trigger === "function" && event.trigger(data)) {
                isEventFound = true;
                return event.function.bind(this)(data);
            } else if (event.trigger === data.event) {
                isEventFound = true;
                return event.function.bind(this)(data);
            }
        });

        if (!isEventFound) {
            console.log("NO SUCH TRIGGER:", data);
        }
    }

    onSocketInit(data: ISocketEventMessage) {
        this.connection.nodeConnectionId = data.nodeConnectionId;
        this.connection.phpConnectionId = data.phpConnectionId;
    }

    onSocketMessage(data) {
        const message = this.parseServerMessage(data);
        if (typeof message.status !== "undefined" && (typeof message.status === "number" || message.status === "ok")) {
            this.connection.sendServerMessage({messageId: message.id, conversantId: this.user._id}, Globals.SOCKET_EVENTS.MESSAGE_READ);

            this.addMessages(message);
        } else if (data.status === "error") {
            this.onSocketError(data);
        }
    }

    onSocketMessageRead(data) {
        this.chats.map((chat) => {
            if (chat.id === data.chat.id) {
                chat.status = data.chat.status;
                const statusElement = document.getElementById(chat.id).querySelector(".status");

                statusElement.appendChild(statusElement.childNodes[0]);
            }

            return chat;
        });
    }

    onSocketMessageCallback(data: ISocketEventMessage) {
        this.message.nativeElement.value = "";
        this.addMessages(data.chat);
    }

    onSocketError(data) {
        console.log("Received error from socket server:", data.message || data.error.message);
    }

    parseServerMessage(data: ISocketEventMessage) {
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
        return chat.from === this.user._id ? this.conversantsClasses.me : this.conversantsClasses.conversant;
    }
}
