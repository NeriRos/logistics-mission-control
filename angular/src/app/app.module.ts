import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
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
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
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
