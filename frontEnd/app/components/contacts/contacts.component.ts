import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
// tslint:disable-next-line:max-line-length
import { ListViewEventData, ListViewLinearLayout, ListViewLoadOnDemandMode, RadListView } from "nativescript-ui-listview";
import { IUser } from "~/models/user.model";
import { ContactsService } from "~/services/contacts.service";
import { HelpersService } from "~/services/helpers.service";
import { UserService } from "~/services/login.service";

@Component({
  moduleId: module.id,
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.css"]
})
export class ContactsComponent implements OnInit {
  @ViewChild("newPerson") newPerson: ElementRef;

  _friends: Array<IUser>;
  layout: ListViewLinearLayout;
  private numberOfAddedItems: number = 0;

  constructor(private changeDetectionRef: ChangeDetectorRef,
              private ngZone: NgZone,
              private contactsService: ContactsService,
              private helpers: HelpersService) {
    }

  ngOnInit() {
    this.layout = new ListViewLinearLayout();
    this.layout.scrollDirection = "Vertical";
    this.initDataItems();
    this.changeDetectionRef.detectChanges();
  }

  addContact(email: string) {
    this.contactsService.addFriend(email).subscribe((res) => {
      this._friends.push(res);
    });
  }

  chatWith(user: IUser) {
    this.helpers.navigate(["chat"], {friend: JSON.stringify(user)});
  }

  onLoadMoreItemsRequested(args: ListViewEventData) {
      setTimeout(() => {
          const listView: RadListView = args.object;
          const initialNumberOfItems = this.numberOfAddedItems;
          for (let i = this.numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
              // if (i > length - 1) {
                  listView.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
                  // break;
              // }

              // const imageUri = AndroidApplication ? posts.images[i].toLowerCase() : posts.images[i];
              // tslint:disable-next-line:max-line-length
              // this._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
              // this.numberOfAddedItems++;
          }

          listView.notifyLoadOnDemandFinished();
      }, 1000);
      args.returnValue = true;
  }

  // Navigate to profile page here
  onProfileButtonTap() {
    this.helpers.navigate(["home"]);
  }

  private async initDataItems() {
    this.ngZone.run(async () => {
      this.contactsService.getFriends().subscribe((res) => {
          this.numberOfAddedItems = res.length || 0;
          this._friends = res;
      });
    });
  }

  get friends(): Array<IUser> {
    return this._friends;
  }

  get friendsNumber(): number {
    return this.numberOfAddedItems;
  }
}
