import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { UserService } from "./services/login.service";
import { NetworkingService } from "./services/network.service";
import { Interceptor } from "./services/interceptor.service";

import { Globals } from "./shared/globals";

import { PreloadSelectedModulesList } from "./custom-preloading-strategy";
import { PermissionLazyLoadGuard } from "./permission-lazy-load.guard";
import { LoggedInLazyLoadGuard } from "./logged-in-lazy-load.guard";
import { TestingComponent } from "./testing/testing.component";

@NgModule({
  declarations: [
    AppComponent,
    TestingComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    // PreloadSelectedModulesList,
    LoggedInLazyLoadGuard,
    PermissionLazyLoadGuard,
    UserService,
    NetworkingService,
    Globals,
    Interceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
