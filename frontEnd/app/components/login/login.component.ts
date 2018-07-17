import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
import { AndroidApplication } from "application";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout/stack-layout";
import { Page } from "tns-core-modules/ui/page/page";

import { IUser } from "~/models/user.model";
import { HelpersService } from "~/services/helpers.service";
import { UserService } from "~/services/login.service";
import { NetworkingService } from "~/services/network.service";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["login.component.css"]
})
export class LoginComponent implements OnInit {
    @ViewChild("loginLayout") loginLayout: ElementRef<StackLayout>;
    @ViewChild("showLoginLayout") showLoginLayout: ElementRef<StackLayout>;

    readonly LOGIN_STATUS_NAME: string = "התחבר";
    readonly REGISTER_STATUS_NAME: string = "הרשם";
    authenticationStatusName: string;
    private isLoginLayoutVisible: boolean = false;
    private authenticationDetails = {email: "", password: "", name: "", code: "", confirmPassword: ""};
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

        if (!this.networking.isOnline) {
            this.authenticationStatusName = this.networking.networkStatus;
        }
    }

    ngOnInit(): void {
        this.backPressInit();
    }

    authenticate(isValid): void {
        const user = this.authenticationDetails;

        if (isValid && user) {
            if (this.isRegister && user.confirmPassword === user.password) {
                this.userService.register(user).then((userData) => {
                    if (!userData.error) {
                        this.helpers.navigate(["home"]);
                    } else {
                        alert("Email already exist");
                    }
                }).catch((err) => {
                    console.log("[!] Error register", err);
                });
            } else {
                this.userService.login(user).then((userData) => {
                    if (!userData.error) {
                        this.helpers.navigate(["home"]);
                    } else {
                        switch (userData.code) {
                            case 1: // NO USER
                                this.authenticationStatusName = this.REGISTER_STATUS_NAME;
                                this.isRegister = true;
                                break;
                            case 2: // Password not match
                                alert("Password or email is incorrect");
                                break;
                        }
                    }
                }).catch((err) => {
                    console.log("Login was unsuccessful", err);
                });
            }
        } else {
            alert("Form or user is not valid..");
        }
    }

    backPressInit() {
        const backEvent = (args) => {
            if (!!false) { args.cancel = true; }

            this.authenticationStatusName = this.LOGIN_STATUS_NAME;
            this.isRegister = false;
        };

        if (this.application) {
            this.application.on("activityBackPressed", backEvent);
        }

    }
}
