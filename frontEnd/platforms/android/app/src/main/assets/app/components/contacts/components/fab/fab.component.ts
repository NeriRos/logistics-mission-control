import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page, View, ViewBase, EventData } from "tns-core-modules/ui/page/page";
import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation/animation";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

import { User } from "~/models/user.model";

@Component({
    moduleId: module.id,
    selector: "app-fab",
    templateUrl: "./fab.component.html",
    styleUrls: ["./fab.component.css"]
  })
export class FabComponent implements OnInit {
    @ViewChild("fabContainer") fabContainer: ElementRef;
    @Input("friends") friends: ObservableArray<User>;
    @Input("friendsNumber") friendsNumber: number;
    
    public isFabOpen = false;

    constructor(private page: Page) {
    }

    ngOnInit() {
    }

    fabTap(args: EventData) {
        var fab: View = <View>args.object;
        var buttons: ViewBase[] = [];

        for (let index = 0; index < this.friendsNumber; index++) {
            buttons.push(this.page.getViewById("person"+index));
        }
    
        if (this.isFabOpen === true) {
            var animations: AnimationDefinition[] = buttons.map((button) => {
                return {target: <View>button, translate: { x: 0, y: 0 }, opacity: 0, duration: 400, delay: 0};
            });
            animations.push({ target: fab, rotate: 0, duration: 400, delay: 0 });

            var a = new Animation(animations);

            a.play()
                .then(() => {
                    this.isFabOpen = false;
                })
                .catch((e) => {
                    console.log(e.message);
                });
        } else {
            let yIndex = 0;

            var animations: AnimationDefinition[] = buttons.map((button, index) => {
                yIndex -= index % 2 == 0 ? -46 : 54;
                console.log("Y Index", yIndex);
                return {target: <View>button, translate: { x: 0, y: yIndex }, opacity: 1, duration: 440, delay: 0};
            });
            animations.push({ target: fab, rotate: 45, duration: 400, delay: 0 });

            var a = new Animation(animations);
            
            a.play()
                .then(() => {
                    //console.log("Animations finished");
                    this.isFabOpen = true;
                })
                .catch((e) => {
                    console.log(e.message);
                });
        }
    }
}

