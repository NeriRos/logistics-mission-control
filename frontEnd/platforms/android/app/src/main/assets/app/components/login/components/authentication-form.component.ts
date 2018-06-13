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
                    <FloatLabel (ngModelOutput)="authenticationDetails.email = $event" class="auth-input" id="email" placeholder="אימייל" keyboardType="email" autocorrect="false" autocapitalizationType="none" name="email"></FloatLabel>
                </StackLayout>
                <StackLayout class="auth-input-layout">
                    <FloatLabel (ngModelOutput)="authenticationDetails.password = $event" class="auth-input" placeholder="סיסמה" secure="true" name="password"></FloatLabel>
                </StackLayout>
                <StackLayout [visibility]="isRegister ? 'visible' : 'collapse'">
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
    private isRegister: boolean = false;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
    }
}
