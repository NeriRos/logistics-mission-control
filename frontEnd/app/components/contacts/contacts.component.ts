import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ListViewLinearLayout, ListViewEventData, RadListView, ListViewLoadOnDemandMode } from 'nativescript-ui-listview';
import { UserService } from '~/services/login.service';
import { User } from '~/models/user.model';
import { HelpersService } from '~/services/helpers.service';

@Component({
  moduleId: module.id,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @ViewChild("newPerson") newPerson: ElementRef;

  public _friends: Array<User>;
  public layout: ListViewLinearLayout;
  private numberOfAddedItems: number = 0;

  constructor(private changeDetectionRef: ChangeDetectorRef,
      private ngZone: NgZone,
      private userService: UserService,
      private helpers: HelpersService) {  
    }

  ngOnInit() {
    this.layout = new ListViewLinearLayout();
    this.layout.scrollDirection = "Vertical";
    this.initDataItems();
    this.changeDetectionRef.detectChanges();     
  }
  
  addContact(email: string) {
    this.userService.addFriend(email).subscribe(res => {
      this._friends.push(res);
    });
  }

  chatWith(user: User) {
    this.helpers.navigate(["chat"], {email: user.email, picture: user.picture});
  }

  private async initDataItems() {
    this.ngZone.run(async () => {
      this.userService.getFriends().subscribe(res => {
          this.numberOfAddedItems = res.length || 0;
          this._friends = res;
      });
    });
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

  get friends(): Array<User> {
    return this._friends;
  }

  get friendsNumber(): number {
    return this.numberOfAddedItems;
  }

  // Navigate to profile page here
  onProfileButtonTap() {
    this.helpers.navigate(["home"]);
  }

}
