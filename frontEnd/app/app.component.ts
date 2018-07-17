import { Component, OnInit } from "@angular/core";
import { AndroidApplication } from "application";
import { registerElement } from "nativescript-angular/element-registry";
import { Fab } from "nativescript-floatingactionbutton";

registerElement("Fab", () => Fab);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.css"]
})
export class AppComponent {
    networkStatus: string = "";

    constructor(private application: AndroidApplication) {
    }

    backPressInit() {
        const backEvent = (args) => {
            if (!!false) { args.cancel = true; }
        };

        if (this.application) {
            this.application.on("activityBackPressed", backEvent);
        }

    }
}
