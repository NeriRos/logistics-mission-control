import { Component, OnInit } from "@angular/core";
import { Globals } from "~/shared/globals";
import { RouterExtensions } from "nativescript-angular/router";
import { AndroidApplication } from "application";
import { Fab } from "nativescript-floatingactionbutton";
import { registerElement } from "nativescript-angular/element-registry";
import { Page } from 'tns-core-modules/ui/page/page';
import { ActionBar } from '../node_modules/tns-core-modules/ui/action-bar/action-bar';

registerElement("Fab", () => Fab); 

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ["app.css"]
})
export class AppComponent implements OnInit {
    public networkStatus: string = "";

    constructor(private application: AndroidApplication) {
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
}
