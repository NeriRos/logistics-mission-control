import { ElementRef, Injectable, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationTransition } from "tns-core-modules/ui/frame/frame";

@Injectable()
export class HelpersService {
    constructor(private _routerExtensions: RouterExtensions, private zone: NgZone) {
    }

    changeVisibility (elementRef: ElementRef, state: string) {
        elementRef.nativeElement.visibility = state;
    }
    
    navigate(route: string[], data?: any, transition?: NavigationTransition) {
        this.zone.run(() => {
            var transitionArgs = transition || {
                name: "slideTop",
                duration: 350,
                curve: "ease"
            }
            this._routerExtensions.navigate(route, {
                clearHistory: true,
                animated: true,
                transition: transitionArgs,
                queryParams: data
            });
        });
    }
}
