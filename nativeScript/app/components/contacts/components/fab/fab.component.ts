import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { Animation, AnimationDefinition } from "tns-core-modules/ui/animation/animation";
import { EventData, Page, View, ViewBase } from "tns-core-modules/ui/page/page";

import { IUser } from "~/models/user.model";

@Component({
    moduleId: module.id,
    selector: "app-fab",
    templateUrl: "./fab.component.html",
    styleUrls: ["./fab.component.css"]
  })
export class FabComponent {
    @ViewChild("fabContainer") fabContainer: ElementRef;
    // tslint:disable-next-line:no-input-rename
    @Input("conversants") conversants: ObservableArray<IUser>;
    // tslint:disable-next-line:no-input-rename
    @Input("conversantsNumber") conversantsNumber: number;

    isFabOpen = false;

    constructor(private page: Page) {
    }

    fabTap(args: EventData) {
        const fab: View = <View>args.object;
        const buttons: Array<ViewBase> = [];

        for (let index = 0; index < this.conversantsNumber; index++) {
            buttons.push(this.page.getViewById("person" + index));
        }

        if (this.isFabOpen === true) {
            const animations: Array<AnimationDefinition> = buttons.map((button) => {
                return {target: <View>button, translate: { x: 0, y: 0 }, opacity: 0, duration: 400, delay: 0};
            });
            animations.push({ target: fab, rotate: 0, duration: 400, delay: 0 });

            const a = new Animation(animations);

            a.play()
                .then(() => {
                    this.isFabOpen = false;
                })
                .catch((e) => {
                    console.log(e.message);
                });
        } else {
            let yIndex = 0;

            const animations: Array<AnimationDefinition> = buttons.map((button, index) => {
                yIndex -= index % 2 === 0 ? 46 : 54;
                console.log("Y Index", yIndex);

                return {target: <View>button, translate: { x: 0, y: yIndex }, opacity: 1, duration: 440, delay: 0};
            });
            animations.push({ target: fab, rotate: 45, duration: 400, delay: 0 });

            const a = new Animation(animations);

            a.play()
                .then(() => {
                    // console.log("Animations finished");
                    this.isFabOpen = true;
                })
                .catch((e) => {
                    console.log(e.message);
                });
        }
    }
}
