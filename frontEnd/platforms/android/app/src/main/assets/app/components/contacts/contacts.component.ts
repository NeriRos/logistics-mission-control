import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ListViewLinearLayout, ListViewEventData, RadListView, ListViewLoadOnDemandMode } from 'nativescript-ui-listview';
import { UserService } from '~/services/login.service';
import { User } from '~/models/user.model';
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

@Component({
  moduleId: module.id,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private _friends: ObservableArray<User>;
  public layout: ListViewLinearLayout;
  public numberOfAddedItems: number = 0;

  constructor(private changeDetectionRef: ChangeDetectorRef,
    private userService: UserService) {      
    }

  ngOnInit() {
    this.layout = new ListViewLinearLayout();
    this.layout.scrollDirection = "Vertical";
    this.initDataItems();
    this.changeDetectionRef.detectChanges();     
  }
  
  addContact() {
    
  }

  private async initDataItems() {
    this.userService.getFriends().subscribe(res => {
        this.numberOfAddedItems = res.length || 0;
    });
    this._friends = new ObservableArray(await this.userService.getFriends().toPromise());
    console.log("THIS FRIENDS", this._friends);
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

  get friends(): ObservableArray<User> {
    return this._friends;
  }

  get friendsNumber(): number {
    return this.numberOfAddedItems;
  }

}
