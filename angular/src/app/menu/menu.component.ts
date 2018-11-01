import { Component, OnInit, NgZone } from "@angular/core";
import { IUser, USER_PERMISSIONS } from "../models/user.model";
import { UserService } from "../services/login.service";
import { ManagementService } from "../services/management.service";
import { AppComponent } from "../app.component";

@Component({
    selector: "app-menu",
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
    protected user: IUser;
    menus: Array<{name: string, link: string, permission: number}> = [];
    greeting: String = "";
    REFRESH_HELLO_MESSAGE_MINUTES = 1;
    isMobileMenuOpen = false;
    mobileNav: HTMLElement;

    constructor(protected userService: UserService, protected zone: NgZone) {
        this.setGreeting();
    }

    ngOnInit() {
        this.mobileNav = document.getElementById("mobileNav");

        if (!window.location.pathname.endsWith("login")) {
            this.userService.getUser().subscribe((user) => {
                this.user = user;

                this.menuInit();
            });
        }
    }

    toggleMobileMenu(isOpen?: boolean) {
        this.mobileNav.style.width = this.isMobileMenuOpen || isOpen ? "0%" : "100%";
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

    signOut() {
        this.userService.logout();
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


        this.zone.run(() => {
            menus.forEach(menu => {
                if (this.user.permissions <= menu.permission) {
                    this.menus.push(menu);
                }
            });

            return menus;
        });
    }
}
