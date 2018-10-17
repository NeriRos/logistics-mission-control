import { Component, OnInit } from "@angular/core";

import { IUser } from "../models/user.model";
import { ContactsService } from "../services/contacts.service";
import { HelpersService } from "../services/helpers.service";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  friends: Array<IUser> = [];

  constructor(protected contactService: ContactsService, protected helpers: HelpersService) { }

  ngOnInit() {
    this.contactService.getFriends().then((friends) => {
      this.friends = friends;
    });
  }

  chatWith(friend: IUser) {
    this.helpers.navigate([`chat/${friend._id}`]);
  }
}
