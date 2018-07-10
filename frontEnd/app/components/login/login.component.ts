import { Component, ViewChild, ElementRef, NgZone, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { AndroidApplication } from "tns-core-modules/application/application";

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
export class LoginComponent implements OnInit {
    @ViewChild('loginLayout') loginLayout: ElementRef<StackLayout>;
    @ViewChild('showLoginLayout') showLoginLayout: ElementRef<StackLayout>;

    public readonly LOGIN_STATUS_NAME: string = "התחבר";
    public readonly REGISTER_STATUS_NAME: string = "הרשם";
    public authenticationStatusName: string;
    private isLoginLayoutVisible: boolean = false;
    private authenticationDetails = {email: "", password: "", name: "", code: ""};
    private isRegister: boolean = false;

    
    constructor(private helpers: HelpersService,
                private page: Page,
                private userService: UserService,
                private networking: NetworkingService,
                private application: AndroidApplication) {
        this.authenticationStatusName = this.LOGIN_STATUS_NAME;
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
        
        this.networking.checkNetwork();
        
        if(!this.networking.isOnline)
            this.authenticationStatusName = this.networking.networkStatus;
    }

    ngOnInit(): void {
        this.backPressInit();
    }

    authenticate(isValid): void {
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
                        this.authenticationStatusName = this.REGISTER_STATUS_NAME;
                        this.isRegister = true;
                    }
                }).catch(err => {
                    console.log("Login was unsuccessful", err);
                    if(err instanceof SyntaxError) {
                        this.authenticationStatusName = this.REGISTER_STATUS_NAME;
                        this.isRegister = true;
                    }
                });               
            }
        } else {
            alert('Form or user is not valid..');
        }
    }

    backPressInit() {
        const backEvent = (args) => {
            if (!!false) { args.cancel = true; }

            this.authenticationStatusName = this.LOGIN_STATUS_NAME;
            this.isRegister = false;
        }

        if (this.application) {
            this.application.on("activityBackPressed", backEvent);
        }
        
    }
}
