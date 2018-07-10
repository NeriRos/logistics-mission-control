import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AndroidApplication } from "tns-core-modules/application/application";

import { AppRoutingModule } from "~/app-routing.module";
import { AppComponent } from "~/app.component";

import { LoggedInLazyLoadGuard } from "~/logged-in-lazy-load.guard";

import { Globals } from "~/shared/globals";
import { UserService } from "~/services/login.service";
import { NetworkingService } from "~/services/network.service";
import { Interceptor } from "~/services/interceptor.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        HttpClientModule,
        HttpModule
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
