import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { Color } from "tns-core-modules/color";
import { User } from "~/models/user.model";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { UserService } from "~/components/login/login.service";

@Component({
    selector: "AuthenticationForm",
    moduleId: module.id,
    template: `
        <StackLayout>    
            <form name="authForm" #authForm="ngForm" novalidate>
                <StackLayout>
                    <Label class="t-14" [text]="authenticationStatusName"></Label>
                </StackLayout>
                <StackLayout class="auth-input-layout">
                    <FloatLabel (ngModelOutput)="authenticationDetails.email = $event" class="auth-input" id="email" placeholder="אימייל" keyboardType="email" [changeEvent]="changeEventFn.bind(this)" autocorrect="false" autocapitalizationType="none" name="email"></FloatLabel>
                </StackLayout>
                <StackLayout class="auth-input-layout">
                    <FloatLabel (ngModelOutput)="authenticationDetails.password = $event" class="auth-input" placeholder="סיסמה" secure="true" name="password"></FloatLabel>
                </StackLayout>
                <StackLayout [visibility]="isShowRegistrationInputs ? 'visible' : 'collapse'">
                    <StackLayout class="auth-input-layout">                
                        <FloatLabel (ngModelOutput)="authenticationDetails.name = $event" class="auth-input" placeholder="שם מלא" type="text" name="name"></FloatLabel>
                    </StackLayout>
                    <StackLayout class="auth-input-layout">                
                        <FloatLabel (ngModelOutput)="authenticationDetails.code = $event" class="auth-input" placeholder="קוד אישור" type="text" name="code"></FloatLabel>
                    </StackLayout>
                </StackLayout>
                
                <Button class="btn btn-login btn-rounded-sm font-weight-bold t-18" (tap)="authenticate(authForm.valid)" text="התחבר / הרשם"></Button>
            </form>
        </StackLayout>        
    `
})
export class AuthenticationForm {    
    private authenticationDetails = {email: "", password: "", name: "", code: ""};
    private authenticationStatusName: string = "התחבר";
    private isShowRegistrationInputs: boolean = false;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
    }

    changeEventFn(event) {
        console.log("Change!", this.authenticationDetails.email, event);
    }

    authenticate(isValid) {
        if(isValid) {
            let user: User = this.authenticationDetails;
            let isUser = !!user;
    
            console.log(user);

            if(this.isShowRegistrationInputs) {
                this.userService.register(user).then(userData => {
                    console.log("register", userData);
                }).catch(err => {
                    this.authenticationStatusName = "הרשם";
                    this.isShowRegistrationInputs = true;
                });  
            } else {
                this.userService.login(user).then(userData => {
                    console.log("login", userData);
                }).catch(err => {
                    this.authenticationStatusName = "הרשם";
                    this.isShowRegistrationInputs = true;
                });               
            }
        } else {
            alert('Form is not valid..');
        }
    }
}
