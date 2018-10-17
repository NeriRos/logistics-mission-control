import { Component, NgZone } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ISupport } from "../models/support.model";
import { Chat } from "../models/chat.model";

import {ChatComponent} from "../chat/chat.component";

import { SupportService } from "../services/support.service";
import { UserService } from "../services/login.service";

import { Globals } from "../shared/globals";
import { ChatService } from "../services/chat.service";
import { SocketEventMessage } from "../shared/socketEventMesssage";


@Component({
    selector: "app-support",
    templateUrl: "../chat/chat.component.html",
    styleUrls: ["../chat/chat.component.css"]
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

        this.serverService = supportService;

        // tslint:disable-next-line:max-line-length
        this.socketEvents.push(
            {trigger: Globals.SOCKET_EVENTS.SUPPORT_INIT, function: this.onSocketSupportInit},
            {trigger: Globals.SOCKET_EVENTS.CLIENT_MESSAGE, function: this.onSocketMessage},
            {trigger: Globals.SOCKET_EVENTS.SUPPORT_MESSAGE, function: this.onSocketMessage},
            {trigger: Globals.SOCKET_EVENTS.MESSAGE_READ, function: this.onSocketMessageRead},
            {trigger: Globals.SOCKET_EVENTS.GET_CONNECTION_ID, function: this.onSocketGetConnectionId},
            {trigger: Globals.SOCKET_EVENTS.FIND_AVAILABLE_REP, function: () => {}},
        );

    }

    submit() {
        const newMessage = this.constructNewMessage();

        this.connection.sendServerMessage(newMessage, Globals.SOCKET_EVENTS.SUPPORT_MESSAGE);

        return false;
    }

    constructNewMessage() {
        const newMessage = {
            chat: new Chat(this.message.nativeElement.value, this.user._id, this.support.client.id, new Date(), true, false),
            user: this.user,
            support: this.support,
            supportId: this.support._id,
            phpConnectionId: this.connection.phpConnectionId
        };

        return newMessage;
    }

    initChats(chats) {
        this.zone.run(() => {
            this.chats = chats.chats;

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
     * @param {SocketEventMessage} data with nodeConnectionId
     */
    onSocketSupportInit(data: SocketEventMessage) {
        this.connection.nodeConnectionId = data.nodeConnectionId;
        this.connection.phpConnectionId = data.phpConnectionId;

        console.log("[+] Connection ids - node:", data.nodeConnectionId, "php:", data.phpConnectionId);
    }

    onSocketMessage(data) {
        const message = this.parseServerMessage(data);

        if (typeof message.status !== "undefined" && (typeof message.status === "number" || message.status === "ok")) {
            const serverMessage = {messageId: message.id, user: this.user, support: this.support};

            this.connection.sendServerMessage(serverMessage, Globals.SOCKET_EVENTS.MESSAGE_READ);
            this.addMessages(message);
        } else if (data.status === "error") {
            this.onSocketError(data);
        }
    }

    /**
     * set connection's phpConnectionId for session keeping with php server.
     * @param {SocketEventMessage} data with nodeConnectionId and phpConnectionId
     */
    onSocketGetConnectionId(data: SocketEventMessage) {
        this.connection.phpConnectionId = data.phpConnectionId;

        console.log("[+] PHP connection id:", data.phpConnectionId);
    }

    get support(): ISupport {
        return <ISupport>this.friend;
    }
}
