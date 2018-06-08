import { Component, ViewChild, ElementRef, NgZone } from "@angular/core";
import { Button } from "ui/button";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
import { Page, View } from "tns-core-modules/ui/page"
import * as platform from "tns-core-modules/platform";
import * as color from "tns-core-modules/color";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";

import { Globals } from "~/shared/globals";
import { Networking } from "~/shared/network.service";
import { UserService } from "./login.service";

import { User } from "~/models/user.model";

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

    constructor(private _routerExtensions: RouterExtensions,
                private zone: NgZone,
                private page: Page,
                private userService: UserService,
                private networking: Networking,
                private globals: Globals) {
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
        
        this.networking.checkNetwork();
        
        if(!this.networking.isOnline)
            this.authenticationStatusName = this.networking.networkStatus;
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
