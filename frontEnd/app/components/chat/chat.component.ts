import {  AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { EventData } from "tns-core-modules/data/observable/observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { ItemsSource, ListView } from "tns-core-modules/ui/list-view/list-view";
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
export class ChatComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild("list") lv: ElementRef;
    @ViewChild("textfield") tf: ElementRef;

    me: IUser;
    friend: IUser = {email: ""};

    numberOfAddedItems: number = 0;

    list: ListView;
    textField: TextField;
    chats$: ObservableArray<IChat>;
    friends$: ObservableArray<IUser>;

    requestChatsInterval: any;

    CHAT_REQUEST_SECONDS = 3;

    isTyping = false;

    constructor(protected chatService: ChatService,
                protected route: ActivatedRoute,
                protected page: Page,
                protected userService: UserService,
                protected helpers: HelpersService,
                protected globals: Globals) {
        this.page.actionBarHidden = false;

        // Get friend details from referring component.
        this.route.queryParams.subscribe((params) => {
            if (!params.friend && !this.friend) {
                return this.helpers.navigate(["contacts"]);
            }

            this.friend = this.friend || JSON.parse(params.friend);
            this.friend.picture = this.friend.picture || this.globals.DEFAULT_USER_PICTURE;
        });
    }

    async ngOnInit() {
        this.me = await this.userService.getUser().toPromise();
        if (this.friend._id) {
            this.getChats(this.chatService, this.friend._id);
        }
    }

    ngOnDestroy(): void {
        // Stop requesting new chats.
        clearInterval(this.requestChatsInterval);
    }

    ngAfterViewInit() {
        this.list = this.lv.nativeElement;
        this.textField = this.tf.nativeElement;
    }

    sendMessage(service, newMessage) {
        if (newMessage) {
            // Send new message to server.
            service.sendMessage(newMessage).then((data: any) => {
                if (data.error) {
                    console.log(data);

                    return alert("There was an error sending your message, please try again later.");
                }
            });

            // Scroll to last item in listview
            this.scroll(this.list.items ? this.list.items.length : 1);
            this.chats$.push(newMessage);
            this.textField.text = "";
        }
    }

    composeAndSendMessage() {
        let newMessage;

        if (this.friend && this.textField.text && this.textField.text.length > 0) {
            const date = new Date();

            newMessage = {
                message: this.textField.text,
                from: this.me._id,
                to: this.friend._id,
                time: date.toTimeString().split(" ")[0],
                date
            };
        }

        this.sendMessage(this.chatService, newMessage);
    }

    typing() {
        this.isTyping = this.textField.text && this.textField.text.length > 0;
    }

    getChats(service, context: string) {
        const requestChats = (isInit) => {
            // Request new chats
            service.getChats(context).then((data) => {
                if (isInit && data.chats && data.chats.length > 0) {
                    // Initiate the chats array variable with observable.
                    this.chats$ = new ObservableArray(data.chats.map((chat: IChat) => {
                        chat.date = new Date(chat.date);
                        chat.time = chat.date.toTimeString().split(" ")[0];

                        return chat;
                    }));

                    console.log("INITALMESSAGEA", data.chats, typeof this.chats$, this.chats$);
                } else if (data.chats && this.chats$ && data.chats.length > this.chats$.length) {
                    this.addChats(data.chats);
                }
            });
        };

        if (this.requestChatsInterval) {
            clearInterval(this.requestChatsInterval);
        }

        // Interval for requesting new chats every CHAT_REQUEST_SECONDS seconds.
        this.requestChatsInterval = setInterval(() => {
            requestChats(false);
        }, this.CHAT_REQUEST_SECONDS * 1000);

        requestChats(true);
    }

    addChats(chats) {
        chats.forEach((chat: IChat) => {
            if (chat) {
                if (!chat.initial) {
                    chat.date = new Date(chat.date);
                    chat.time = chat.date.toTimeString().split(" ")[0];

                    let isInChats = false;

                    this.chats$.forEach((chat$, index) => {
                        if (chat$ && chat$.id === chat.id) {
                            isInChats = true;

                            if (chat$.status !== chat.status) {
                                // tslint:disable-next-line:max-line-length
                                chat$.statusIcon = chat.status === 1 ? "&#xf00c" : (chat.status === 2 ? "&#xf560" : "");
                                chat$.status = chat.status;

                                this.chats$.setItem(index, chat$);
                            }
                        }
                    });

                    if (!isInChats) {
                        this.chats$.push(chat);
                    }
                }
            }
        });
    }

    scroll(count: number) {
        this.list.scrollToIndex(count - 1);
        this.list.refresh();
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
    undentText(sender) {
        if (sender === this.me._id) {
            return "0";
        } else {
            return "1";
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
