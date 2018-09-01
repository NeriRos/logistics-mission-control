import { Component, OnInit } from "@angular/core";
import { UserService } from "./services/login.service";
import { IUser, USER_PERMISSIONS } from "./models/user.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
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
  }

  menuInit() {
    const menus = [
        {name: "משתמשים", link: "/management/users", permission: USER_PERMISSIONS.ADMIN},
        {name: "סטטיסטיקות", link: "/management/statistics", permission: USER_PERMISSIONS.MANAGER},
        {name: "צפיה בצ'אטים", link: "/management/chatSupervise", permission: USER_PERMISSIONS.MANAGER},
        {name: "קריאות", link: "/management/support", permission: USER_PERMISSIONS.REPRESENTATIVE},
    ];

    menus.forEach(menu => {
        if (this.user.permissions <= menu.permission) {
            this.menus.push(menu);
        }
    });
  }
}
