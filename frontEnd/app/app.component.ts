import { Component, OnInit } from "@angular/core";
import { Globals } from "~/shared/globals";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    // styleUrls: ["app.css"]
})
export class AppComponent implements OnInit {
    public networkStatus: string = "";

    constructor(private globals: Globals) {
        
    }

    ngOnInit(): void {
    }
}
