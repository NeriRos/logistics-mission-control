import { Component, OnInit, NgZone } from "@angular/core";
import { UserService } from "./services/login.service";
import { IUser, USER_PERMISSIONS } from "./models/user.model";
import { MenuComponent } from "./menu/menu.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent extends MenuComponent implements OnInit {
    protected user: IUser;

    constructor(protected userService: UserService, protected zone: NgZone) {
        super(userService, zone);
    }

    ngOnInit() {
        this.globalFunctions();
    }

    globalFunctions() {
        $.expr[":"].regex = function(elem, index, match) {
            const matchParams = match[3].split(",");
            const validLabels = /^(data|css):/;
            const attr = {
                method: matchParams[0].match(validLabels) ? matchParams[0].split(":")[0] : "attr",
                property: matchParams.shift().replace(validLabels, "")
            };
            const regexFlags = "ig";
            const regex = new RegExp(matchParams.join("").replace(/^\s+|\s+$/g, ""), regexFlags);

            return regex.test($(elem)[attr.method](attr.property));
        };
    }
}
