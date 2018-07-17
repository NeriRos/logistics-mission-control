import {  AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { EventData } from "tns-core-modules/data/observable/observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { ListView } from "tns-core-modules/ui/list-view/list-view";
import { Page } from "tns-core-modules/ui/page/page";
import { TextField } from "tns-core-modules/ui/text-field/text-field";

import { ChatService } from "~/services/chat.service";
import { HelpersService } from "~/services/helpers.service";
import { UserService } from "~/services/login.service";

import { IChat } from "~/models/chat.model";
import { IUser } from "~/models/user.model";

import { Globals } from "~/shared/globals";

@Component({
    selector: "Chat",
    moduleId: module.id,
    templateUrl: "./chat.component.html",
    styleUrls: ["chat.component.css"]
})
export class ChatComponent implements OnInit, AfterViewInit {
    @ViewChild("list") lv: ElementRef;
    @ViewChild("textfield") tf: ElementRef;

    me: IUser;
    friend: IUser;

    numberOfAddedItems: number = 0;

    list: ListView;
    textField: TextField;
    chats$: ObservableArray<IChat>;
    friends$: ObservableArray<IUser>;

    constructor(private chatService: ChatService,
                private route: ActivatedRoute,
                private page: Page,
                private userService: UserService,
                private helpers: HelpersService,
                private globals: Globals) {
        this.page.actionBarHidden = false;

        this.route.queryParams.subscribe((params) => {
            if (!params.friend) {
                return this.helpers.navigate(["contacts"]);
            }

            this.friend = JSON.parse(params.friend);
            this.friend.picture = this.friend.picture || this.globals.DEFAULT_USER_PICTURE;
        });
    }

    async ngOnInit() {
        this.me = await this.userService.getUser().toPromise();
        this.chats$ = new ObservableArray(await this.chatService.getChats(this.friend._id).toPromise());
    }

    ngAfterViewInit() {
        this.list = this.lv.nativeElement;
        this.textField = this.tf.nativeElement;
    }

    scroll(count: number) {
       console.log("scrolling to ", count);
       this.list.scrollToIndex(count - 1);
       this.list.refresh();
    }

    chat() {
        if (this.friend) {
            const newMessage: IChat = {
                message: this.textField.text,
                from: this.me._id,
                date: new Date(),
                to: this.friend._id

            };

            this.chatService.sendMessage(newMessage).then((data: any) => {
                if (data.error) {
                    console.log(data);

                    return alert("There was an error sending your message, please try again later.");
                }

                this.scroll(this.list.items ? this.list.items.length : 1);
                this.chats$.push(newMessage);
            });
            this.textField.text = "";
        }
    }

    filter(sender) {
        if (sender === this.me._id) {
            return "me";
        } else {
            return "them";
        }
    }
    align(sender) {
        if (sender === this.me._id) {
            return "right";
        } else {
            return "left";
        }
    }
    showImage(sender) {
        if (sender === this.me._id) {
            return "collapsed";
        } else {
            return "visible";
        }
    }

    // Navigate to corresponding page
    onMenuButtonTap(args: EventData) {
        const menuButtonParent = (<StackLayout>args.object).parent;
        // alert("Navigate to " + menuButtonParent.get("data-name"));
    }

    // Navigate to profile page here
    onProfileButtonTap() {
        this.helpers.navigate(["home"]);
    }
}
