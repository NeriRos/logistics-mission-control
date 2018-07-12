import { Component, OnInit } from "@angular/core";
import { Globals } from "~/shared/globals";
import { RouterExtensions } from "nativescript-angular/router";
import { AndroidApplication } from "application";
import { Fab } from "nativescript-floatingactionbutton";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("Fab", () => Fab); 

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.css"]
})
export class AppComponent implements OnInit {
    public networkStatus: string = "";

    constructor(private globals: Globals,
        private routerExtensions: RouterExtensions,
        private application: AndroidApplication) {
    }

    ngOnInit(): void {
    }

    backPressInit() {
        const backEvent = (args) => {
            if (!!false) { args.cancel = true; }

        }

        if (this.application) {
            this.application.on("activityBackPressed", backEvent);
        }
        
    }

    backEvent() {
        this.routerExtensions.backToPreviousPage();
    }
}
