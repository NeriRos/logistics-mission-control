import { ElementRef, Injectable, NgZone } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationTransition } from "tns-core-modules/ui/frame/frame";
import { ExtendedNavigationExtras } from 'nativescript-angular/router/router-extensions';

@Injectable()
export class HelpersService {
    constructor(private _routerExtensions: RouterExtensions, private zone: NgZone) {
    }

    changeVisibility (elementRef: ElementRef, state: string) {
        elementRef.nativeElement.visibility = state;
    }
    
    navigate(route: string[], data?: any, transition?: NavigationTransition) {
        this.zone.run(() => {
            const transitionArgs = transition || {
                name: "slideTop",
                duration: 350,
                curve: "ease"
            }
            const options: ExtendedNavigationExtras = {
                clearHistory: true,
                animated: true,
                transition: transitionArgs,
                queryParams: data,
            };

            this._routerExtensions.navigate(route, options);
        });
    }
}
