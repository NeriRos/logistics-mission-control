import { Component, ViewChild, ElementRef, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";

import { NetworkingService } from "~/services/network.service";
import { User } from "~/models/user.model";
import { UserService } from "~/services/login.service";
import { HelpersService } from "~/services/helpers.service";

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


    constructor(private helpers: HelpersService,
                private page: Page,
                private userService: UserService,
                private networking: NetworkingService) {
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

        if(isValid && user) {
            if(this.isRegister) {
                this.userService.register(user).then(userData => {
                    console.log("register", userData);
                    this.helpers.navigate(["home"]);
                }).catch(err => {
                    console.log('[!] Error register', err);
                });  
            } else {
                this.userService.login(user).then(userData => {
                    if(userData.user) {
                        this.helpers.navigate(["home"]);
                    } else {
                        this.authenticationStatusName = "הרשם";
                        this.isRegister = true;
                    }
                }).catch(err => {
                    console.log("Login was unsuccessful", err);
                    if(err instanceof SyntaxError) {
                        this.authenticationStatusName = "הרשם";
                        this.isRegister = true;
                    }
                });               
            }
        } else {
            alert('Form or user is not valid..');
        }
    }
}
