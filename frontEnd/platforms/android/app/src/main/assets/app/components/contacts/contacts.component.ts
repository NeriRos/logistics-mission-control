import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ListViewLinearLayout, ListViewEventData, RadListView, ListViewLoadOnDemandMode } from 'nativescript-ui-listview';
import { registerElement } from "nativescript-angular/element-registry";
import { Fab } from "nativescript-floatingactionbutton";
import { UserService } from '~/services/login.service';

import { User } from '~/models/user.model';

@Component({
  moduleId: module.id,
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public friends$: Observable<Array<User>>;
  public layout: ListViewLinearLayout;
  public numberOfAddedItems: number = 0;

  constructor(private changeDetectionRef: ChangeDetectorRef,
    private userService: UserService) {      
      registerElement("fab", () => Fab);
    }

  ngOnInit() {
    this.layout = new ListViewLinearLayout();
    this.layout.scrollDirection = "Horizontal";
    this.initDataItems();
    this.changeDetectionRef.detectChanges();     
  }
  
  addContact() {
    
  }

  private initDataItems() {
    this.userService.getFriends().subscribe(res => {
        console.log("Friends", res);
        this.numberOfAddedItems = res.length || 0;
    });
    this.friends$ = this.userService.getFriends();
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

}
