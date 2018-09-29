import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/login.service";
import { HelpersService } from "../services/helpers.service";
import { IUser } from "../models/user.model";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    readonly REGISTER_STATUS_NAME = "הרשמה";
    readonly LOGIN_STATUS_NAME = "התחבר";

    authenticationDetails: IUser = {email: "", password: "", confirmPassword: "", name: "", code: ""};
    isRegister = false;

    authenticationStatusName = this.LOGIN_STATUS_NAME;

    constructor(private userService: UserService, private helpers: HelpersService) { }

    ngOnInit() {
    }

    authenticate(): void {
        const user = this.authenticationDetails;

        if (user) {
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
            } else if (!this.isRegister) {
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
            } else if (user.confirmPassword !== user.password) {
                alert("Passwords don't match");
                console.log("Password dont match:", user.confirmPassword, user.password);
            } else {
                console.log("error login!");
            }
        } else {
            alert("Form or user is not valid..");
        }
    }
}
