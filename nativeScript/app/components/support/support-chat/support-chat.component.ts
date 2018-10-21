import { AfterContentInit, Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { ChatComponent } from "~/components/chat/chat.component";
import { ISupport } from "~/models/support.model";
import { IUser } from "~/models/user.model";
import { ChatService } from "~/services/chat.service";
import { HelpersService } from "~/services/helpers.service";
import { UserService } from "~/services/login.service";
import { SupportService } from "~/services/support.service";
import { Globals } from "~/shared/globals";

@Component({
  moduleId: module.id,
  selector: "SupportChat",
  templateUrl: "../../chat/chat.component.html",
  styleUrls: ["../../chat/chat.component.css"]
})
export class SupportChatComponent extends ChatComponent implements AfterContentInit, OnInit {
    @Input() client: IUser;
    @Input() selectedSupport: ISupport;

    support: ISupport;
    isAvailableRep: boolean = false;

    constructor(protected chatService: ChatService,
                protected route: ActivatedRoute,
                protected page: Page,
                protected userService: UserService,
                protected supportService: SupportService,
                protected helpers: HelpersService,
                protected globals: Globals) {

    super(chatService, route, page, userService, helpers, globals);
    }

    ngAfterContentInit() {
        this.conversant = this.client;
        this.support = this.selectedSupport;
    }

    async ngOnInit() {
        this.me = await this.userService.getUser().toPromise();
        if (this.support._id) {
            this.getChats(this.supportService, this.support._id);
        }
    }

    composeAndSendMessage() {
        let newMessage;

        if (this.conversant && this.textField.text && this.textField.text.length > 0) {
            const date = new Date();

            newMessage = {
                message: this.textField.text,
                from: this.me._id,
                to: this.conversant._id,
                time: date.toTimeString().split(" ")[0],
                id: this.support._id,
                date
            };
        }

        this.sendMessage(this.supportService, newMessage);
    }
}
