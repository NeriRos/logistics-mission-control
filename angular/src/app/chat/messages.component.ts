import { Component, OnInit, Input, ViewChild, ElementRef, Output } from "@angular/core";
import { IChat } from "../models/chat.model";

@Component({
    selector: "app-messages-test",
    template: `
    <ul id="messages" #messages>
        <li class="message" *ngIf="!isConversantOnline">{{conversantOfflineText}}</li>
        <li *ngFor="let chat of chats" [class]="'message ' + messageSender(chat)" [id]="chat.id">
            <div class="col-6 messageBody">
                <div class="row">
                    <span class="text">{{chat.message}}</span>
                </div>
                <div class="row">
                    <span class="date">{{chat.date | dateToTime}}</span>
                    <span class="status">
                        <i *ngIf="messageSender(chat) === conversantsClasses.me" [class]="'fa ' + (chat.status | statusToMark)">
                    </i></span>
                </div>
            </div>
        </li>
    </ul>
    `
})
export class MessagesComponent implements OnInit {
    @Input() myId: string;
    @Input() chats: Array<IChat>;
    @Input() conversantsClasses: {me: string, conversant: string};
    @Input() conversantOfflineText: string;
    @ViewChild("messages") messages: ElementRef;
    @Output() messagesElement;

    isConversantOnline = false;

    template = `
        <ul id="messages" #messages>
            <li class="message" *ngIf="!chats.isConversantOnline && chats.chats?.length > 0">{{conversantOfflineText}}</li>
            <li *ngFor="let chat of chats" [class]="'message ' + messageSender(chat)" [id]="chat.id">
                <div class="col-6 messageBody">
                    <div class="row">
                        <span class="text">{{chat.message}}</span>
                    </div>
                    <div class="row">
                        <span class="date">{{chat.date | dateToTime}}</span>
                        <span class="status"><i *ngIf="messageSender(chat) === 'representative'"
                            [class]="'fa ' + (chat.status | statusToMark)"></i></span>
                    </div>
                </div>
            </li>
        </ul>
    `;

    constructor() { }

    ngOnInit() { }

    messageSender(chat: IChat): string {
        return chat.from === this.myId ? this.conversantsClasses.me : this.conversantsClasses.conversant;
    }
}

