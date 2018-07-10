import { Component, ElementRef, OnInit, NgZone, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page"
import { EventData } from "data/observable";
import { StackLayout } from "ui/layouts/stack-layout";

import { UserService } from "~/services/login.service";
import { HelpersService } from "~/services/helpers.service";
import { ChatService } from "~/services/chat.service";

import { Observable } from 'rxjs/Observable';
import { ListView } from 'ui/list-view';
import { TextField } from 'ui/text-field';
import { Chat } from "~/models/chat.model";
import { User } from "~/models/user.model";

import { ListViewLinearLayout, ListViewEventData, RadListView, ListViewLoadOnDemandMode } from "nativescript-ui-listview";
import { AndroidApplication } from "application";

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
    public chats$: Observable<Array<Chat>>;
    public friends$: Observable<Array<User>>;

    constructor(private chatService: ChatService, private page: Page, private userService: UserService, private helpers: HelpersService, private _changeDetectionRef: ChangeDetectorRef) {
        this.page.actionBarHidden = false;
    }
    
    public ngOnInit() {
        this.me = this.userService.getID();
        
        this.layout = new ListViewLinearLayout();
        this.layout.scrollDirection = "Horizontal";
        this.initDataItems();
        this._changeDetectionRef.detectChanges();      
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

    private initDataItems() {
        this.friends$ = this.userService.getFriends();
        this.chats$ = this.chatService.getChats(); 
    }

    public onLoadMoreItemsRequested(args: ListViewEventData) {
        const that = new WeakRef(this);
        setTimeout(function () {
            const listView: RadListView = args.object;
            const initialNumberOfItems = that.get().numberOfAddedItems;
            for (let i = that.get().numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                // if (i > length - 1) {
                    listView.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
                    // break;
                // }

                //const imageUri = AndroidApplication ? posts.images[i].toLowerCase() : posts.images[i];
                //that.get()._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                //that.get()._numberOfAddedItems++;
            }

            listView.notifyLoadOnDemandFinished();
        }, 1000);
        args.returnValue = true;
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
