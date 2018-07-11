import { Component, ElementRef, OnInit, NgZone, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page"
import { EventData } from "tns-core-modules/data/observable/observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";

import { UserService } from "~/services/login.service";
import { HelpersService } from "~/services/helpers.service";
import { ChatService } from "~/services/chat.service";

import { Observable } from 'rxjs/Observable';
import { ListView } from 'tns-core-modules/ui/list-view/list-view';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';
import { Chat } from "~/models/chat.model";
import { User } from "~/models/user.model";

import { ListViewLinearLayout, ListViewEventData, RadListView, ListViewLoadOnDemandMode } from "nativescript-ui-listview";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

@Component({
    selector: "Chat",
    moduleId: module.id,
    templateUrl: "./chat.component.html",
    styleUrls: ["chat.component.css"]
})
export class ChatComponent implements OnInit {
    @ViewChild("list") lv: ElementRef;
    @ViewChild("textfield") tf: ElementRef;

    public loggedUser: string;
    public me: string;
    public room: string;

    private layout: ListViewLinearLayout;
    public numberOfAddedItems: number = 0;

    list: ListView;
    textField: TextField;
    public chats$: ObservableArray<Chat>;
    public friends$: ObservableArray<User>;

    constructor(private chatService: ChatService, private page: Page, private userService: UserService, private helpers: HelpersService, private _changeDetectionRef: ChangeDetectorRef) {
        this.page.actionBarHidden = false;
    }
    
    public ngOnInit() {
        this.me = this.userService.getID(); 
    }

    public ngAfterViewInit() {
        this.list = this.lv.nativeElement;
        this.textField = this.tf.nativeElement;
    }

    scroll(count: number){
       console.log("scrolling to ", count)
       this.list.scrollToIndex(count-1);
       this.list.refresh();
    }

    chat() {
        if(this.room) {
            this.chatService.sendMessage(this.textField.text, this.room, this.me).then((data: any) => {
                let count = this.list.items.length;
                this.scroll(count);
    
                console.log("Data", data);
            });
            this.textField.text = '';        
        }
    }

    filter(sender) {
        if (sender == this.me) {
            return "me"
        }
        else {
            return "them"
        }
    }
    align(sender) {
        if (sender == this.me) {
            return "right"
        }
        else {
            return "left"
        }
    }
    showImage(sender) {
        if (sender == this.me) {
            return "collapsed"
        }
        else {
            return "visible"
        }
    }

    // Navigate to corresponding page
    onMenuButtonTap(args: EventData) {
        const menuButtonParent = (<StackLayout>args.object).parent;
        alert("Navigate to " + menuButtonParent.get("data-name"));
    }

    // Navigate to profile page here
    onProfileButtonTap() {
        this.helpers.navigate(["home"]);
    }
}
