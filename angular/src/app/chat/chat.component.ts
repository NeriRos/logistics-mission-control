import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ISupport } from "../models/support.model";
import { IChat } from "../models/chat.model";
import { ChatService } from "../services/chat.service";
import { ActivatedRoute } from "@angular/router";
import { IUser } from "../models/user.model";
import { UserService } from "../services/login.service";
import { SupportService } from "../services/support.service";

@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
    @ViewChild("message") message: ElementRef;

    chats: Array<IChat> = [];
    support: ISupport;
    user: IUser;
    socket;

    constructor(
        private router: ActivatedRoute,
        private chatService: ChatService,
        private userService: UserService,
        private supportService: SupportService
    ) {
        this.router.params.subscribe((params) => {
            this.supportService.getSupportById(params.id).then((support: ISupport) => {
                console.log(support);
                this.support = support;
            });
        });

        this.userService.getUser().subscribe((user) => {
            this.user = user;
        });
    }

    ngOnInit() {
        this.chatService.getSupports();

        this.socket = io();

        this.socket.on("chat message", (msg) => {
            this.chats.push(msg);
        });
    }

    submit() {
        const newMessage: IChat & {user: IUser} = {
            id: this.support._id,
            message: this.message.nativeElement.value,
            date: new Date(),
            from: this.user._id,
            isSupport: this.support.users.indexOf(this.user._id) !== -1,
            to: this.support.client.id,
            user: this.user
        };

        this.socket.emit("chat support", JSON.stringify(newMessage));

        return false;
    }
}
