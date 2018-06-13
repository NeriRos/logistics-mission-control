import { Component, ViewChild, ElementRef, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";

import { Networking } from "~/services/network.service";
import { User } from "~/models/user.model";
import { UserService } from "~/components/login/login.service";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["login.component.css"]
})
export class LoginComponent {

    @ViewChild('loginLayout') loginLayout: ElementRef<StackLayout>;
    @ViewChild('showLoginLayout') showLoginLayout: ElementRef<StackLayout>;

    public authenticationStatusName: string = "התחבר";
    private isLoginLayoutVisible: boolean = false;
    private authenticationDetails = {email: "", password: "", name: "", code: ""};
    private isRegister: boolean = false;


    constructor(private _routerExtensions: RouterExtensions,
                private zone: NgZone,
                private page: Page,
                private userService: UserService,
                private networking: Networking) {
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
        
        this.networking.checkNetwork();
        
        if(!this.networking.isOnline)
            this.authenticationStatusName = this.networking.networkStatus;
    }

    authenticate(isValid) {
        let user: User = this.authenticationDetails;
        let isUser = !!user;

        if(isValid && isUser) {
            if(this.isRegister) {
                this.userService.register(user).then(userData => {
                    console.log("register", userData);
                    this.navigateHome();
                }).catch(err => {
                    console.log('[!] Error register', err);
                });  
            } else {
                this.userService.login(user).then(userData => {
                    console.log("login", userData);
                    this.navigateHome();
                }).catch(err => {
                    this.authenticationStatusName = "הרשם";
                    this.isRegister = true;
                });               
            }
        } else {
            alert('Form or user is not valid..');
        }
    }

    private navigateHome() {
        this.zone.run(() => {
            this._routerExtensions.navigate(["home"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    }
}
