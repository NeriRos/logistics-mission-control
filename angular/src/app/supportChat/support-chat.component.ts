import { Component, NgZone } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ISupport } from "../models/support.model";
import { Chat, IChat } from "../models/chat.model";

import {ChatComponent} from "../chat/chat.component";

import { SupportService } from "../services/support.service";
import { UserService } from "../services/login.service";

import { Globals } from "../shared/globals";
import { ChatService } from "../services/chat.service";
import { ISocketEventMessage } from "../shared/socketEventMesssage";
import { CONNECTION_MESSAGE_TEXTS } from "../models/connection.model";


@Component({
    selector: "app-support",
    templateUrl: "../chat/chat.component.html",
    styleUrls: ["./support-chat.component.css"]
})
export class SupportChatComponent extends ChatComponent {
    constructor(
        protected router: ActivatedRoute,
        protected userService: UserService,
        protected chatService: ChatService,
        protected supportService: SupportService,
        protected globals: Globals,
        protected zone: NgZone
    ) {
        super(router, userService, chatService, supportService, globals, zone);

        this.isSupport = true;
        this.conversantOfflineText = "Waiting for client";
        this.conversantsClasses = {me: "representative", conversant: "client"};

        this.serverService = supportService;
        this.socketEvents.push(
            {trigger: Globals.SOCKET_EVENTS.SUPPORT_INIT, function: this.onSocketSupportInit},
            {trigger: Globals.SOCKET_EVENTS.CLIENT_MESSAGE, function: this.onSocketMessage},
            {trigger: Globals.SOCKET_EVENTS.SUPPORT_MESSAGE, function: this.onSocketMessage},
            {trigger: Globals.SOCKET_EVENTS.GET_CONNECTION_ID, function: this.onSocketGetConnectionId},
            {trigger: Globals.SOCKET_EVENTS.FIND_AVAILABLE_REP, function: () => {}},
        );

    }

    submit() {
        const messageText = this.message.nativeElement.value;
        if (messageText && messageText.length > 0) {
            const newMessage = this.constructNewMessage(messageText);

            this.connection.sendServerMessage(newMessage, Globals.SOCKET_EVENTS.SUPPORT_MESSAGE);
        }

        return false;
    }

    constructNewMessage(message): ISocketEventMessage {
        const newMessage = {
            chat: new Chat(message, this.user._id, this.support.client.id, new Date(), true, false),
            user: this.user,
            support: this.support,
            supportId: this.support._id
        };

        return newMessage;
    }

    initChats(chats: {chats: IChat[], isAvailableRep: boolean}) {
        this.zone.run(() => {
            this.chats = chats.chats;
            this.conversantDetails = this.conversant.client;

            this.isConversantOnline = chats.isAvailableRep && this.chats.length > 0;

            this.scrollToLastMessage();
        });
    }

    onSocketOpen(support) {
        if (this.connection) {
            this.connection.sendServerMessage({support: support, user: this.user}, Globals.SOCKET_EVENTS.SUPPORT_INIT);
        } else {
            console.log("No connection");
        }
    }

    /**
     * set connection's nodeConnectionId for session keeping with node server.
     * @param {ISocketEventMessage} data with nodeConnectionId
     */
    onSocketSupportInit(data: ISocketEventMessage) {
        this.connection.nodeConnectionId = data.nodeConnectionId;
        this.connection.phpConnectionId = data.phpConnectionId;

        console.log("[+] Connection ids - node:", data.nodeConnectionId, "php:", data.phpConnectionId);
    }

    onSocketMessage(data) {
        const message = this.parseServerMessage(data);

        if (typeof message.status !== "undefined" && (typeof message.status === "number" || message.status === "ok")) {
            const serverMessage = {chat: message, user: this.user, support: this.support};

            this.connection.sendServerMessage(serverMessage, Globals.SOCKET_EVENTS.MESSAGE_READ);
            this.addMessages(message);
        } else if (data.status === "error") {
            this.onSocketError(data);
        }
    }

    /**
     * set connection's phpConnectionId for session keeping with php server.
     * @param {ISocketEventMessage} data with nodeConnectionId and phpConnectionId
     */
    onSocketGetConnectionId(data: ISocketEventMessage) {
        this.connection.phpConnectionId = data.phpConnectionId;

        console.log("[+] PHP connection id:", data.phpConnectionId);
    }

    get support(): ISupport {
        return <ISupport>this.conversant;
    }
}
