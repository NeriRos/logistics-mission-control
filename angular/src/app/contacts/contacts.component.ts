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
  conversants: Array<IUser> = [];

  constructor(protected contactService: ContactsService, protected helpers: HelpersService) { }

  ngOnInit() {
    this.contactService.getConversants().then((conversants) => {
      this.conversants = conversants;
    });
  }

  chatWith(conversant: IUser) {
    this.helpers.navigate([`chat/${conversant._id}`]);
  }
}
