import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AndroidApplication } from "tns-core-modules/application/application";

import { LoggedInLazyLoadGuard } from "~/logged-in-lazy-load.guard";

import { AppRoutingModule } from "~/app-routing.module";
import { AppComponent } from "~/app.component";

import { Globals } from "~/shared/globals";

import { Interceptor } from "~/services/interceptor.service";
import { UserService } from "~/services/login.service";
import { NetworkingService } from "~/services/network.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        LoggedInLazyLoadGuard,
        AndroidApplication,
        UserService,
        NetworkingService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
          },
        Globals
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
