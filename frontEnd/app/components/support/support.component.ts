import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { ISupport, SUPPORT_STATUS } from "~/models/support.model";
import { IUser } from "~/models/user.model";
import { HelpersService } from "~/services/helpers.service";
import { SupportService } from "~/services/support.service";

@Component({
  moduleId: module.id,
  selector: "app-support",
  templateUrl: "./support.component.html",
  styleUrls: ["./support.component.scss"]
})
export class SupportComponent implements OnInit {
  private _supports: {open: ObservableArray<ISupport>, taken: ObservableArray<ISupport>};
  private isChatVisible: boolean = false;
  private client: IUser;
  private selectedSupport: IUser;

  constructor(private supportService: SupportService,
              private helpers: HelpersService) {

    this.supports = {
      open: new ObservableArray(),
      taken: new ObservableArray()
    };

    const test: ISupport = {
      _id: "",
      client: {
        id: "1",
        business: "test business",
        name: "name",
        phone: "11313313113"
      },
      status: 2,
      messages: [],
      users: [],
      representative: {
        id: "1",
        name: "name",
        picture: "default_user.png"
      }
    };
  }

  ngOnInit() {
    this.getSupports();
  }

  getSupports() {
    this.supportService.getSupports().then((supports: Array<ISupport>) => {
      supports.forEach((support) => {
        if (support.status <= SUPPORT_STATUS.REQUEST) {
          this.supports.open.push(support);
        } else if (support.status === SUPPORT_STATUS.TAKEN) {
          this.supports.taken.push(support);
        }
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  launchChat(support) {
    const client: IUser = {
      email: support.client.phone,
      name: support.client.name,
      _id: support.client.id
    };

    this.selectedSupport = support;
    this.client = client;
  }

  set supports(value) {
    this._supports = value;
  }
  get supports() {
    return this._supports;
  }
}
