import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { LoggedInLazyLoadGuard } from "./logged-in-lazy-load.guard";
import { UserService } from "./services/login.service";
import { NetworkingService } from "./services/network.service";
import { Globals } from "./shared/globals";
import { Interceptor } from "./services/interceptor.service";
import { PermissionLazyLoadGuard } from "./permission-lazy-load.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoggedInLazyLoadGuard,
    PermissionLazyLoadGuard,
    UserService,
    NetworkingService,
    Interceptor,
    Globals,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
