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
    greeting: String = "";
    REFRESH_HELLO_MESSAGE_MINUTES = 1;

    constructor(private userService: UserService) {
        this.setGreeting();
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

    setGreeting() {
        const greet = () => {
            const hour = (new Date()).getHours();

            if (hour >= 6 && hour <= 12) {
                this.greeting = "בוקר טוב,";
            } else if (hour >= 12 && hour <= 18) {
                this.greeting = "צהריים טובים,";
            } else if (hour >= 18 && hour <= 24) {
                this.greeting = "ערב טוב,";
            } else if (hour >= 24 && hour <= 6) {
                this.greeting = "לילה טוב,";
            }

            return this.greeting;
        };

        greet();

        setInterval(greet, 1000 * 60 * this.REFRESH_HELLO_MESSAGE_MINUTES);
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
}
