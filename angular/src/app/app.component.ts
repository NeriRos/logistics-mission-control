import { Component, OnInit, NgZone } from "@angular/core";
import { UserService } from "./services/login.service";
import { IUser, USER_PERMISSIONS } from "./models/user.model";
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
<<<<<<< HEAD
export class AppComponent extends MenuComponent implements OnInit {
    protected user: IUser;

    constructor(protected userService: UserService, protected zone: NgZone) {
        super(userService, zone);
    }

    ngOnInit() {
        this.globalFunctions();
    }

    globalFunctions() {
        $.expr[":"].regex = function(elem, index, match) {
            const matchParams = match[3].split(",");
            const validLabels = /^(data|css):/;
            const attr = {
                method: matchParams[0].match(validLabels) ? matchParams[0].split(":")[0] : "attr",
                property: matchParams.shift().replace(validLabels, "")
            };
            const regexFlags = "ig";
            const regex = new RegExp(matchParams.join("").replace(/^\s+|\s+$/g, ""), regexFlags);

            return regex.test($(elem)[attr.method](attr.property));
        };
    }
=======
export class AppComponent implements OnInit {
  user: IUser;
  menus: Array<{name: string, link: string, permission: number}> = [];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
        this.user = user;

        this.menuInit();
    });

    $.expr[":"].regex = function(elem, index, match) {
      const matchParams = match[3].split(","),
          validLabels = /^(data|css):/,
          attr = {
              method: matchParams[0].match(validLabels) ? matchParams[0].split(":")[0] : "attr",
              property: matchParams.shift().replace(validLabels, "")
          },
          regexFlags = "ig",
          regex = new RegExp(matchParams.join("").replace(/^\s+|\s+$/g, ""), regexFlags);
      return regex.test($(elem)[attr.method](attr.property));
    };
  }

  menuInit() {
    const menus = [
        {name: "ניהול", link: "/management", permission: USER_PERMISSIONS.DELIVERY},
        {name: "משתמשים", link: "/management/users", permission: USER_PERMISSIONS.ADMIN},
        {name: "קריאות", link: "/management/support", permission: USER_PERMISSIONS.REPRESENTATIVE},
        {name: "משימות", link: "/missions", permission: USER_PERMISSIONS.DELIVERY},
        {name: "אנשי קשר", link: "/contacts", permission: USER_PERMISSIONS.LOGISTICS}
        // {name: "סטטיסטיקות", link: "/management/statistics", permission: USER_PERMISSIONS.MANAGER},
        // {name: "צפיה בצ'אטים", link: "/management/chatSupervise", permission: USER_PERMISSIONS.MANAGER},
    ];

    menus.forEach(menu => {
        if (this.user.permissions <= menu.permission) {
            this.menus.push(menu);
        }
    });
  }
>>>>>>> parent of 1a7cf91... add user details
}
