import { ElementRef, Injectable, NgZone } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Injectable()
export class HelpersService {
    constructor(private router: Router, private zone: NgZone) {
    }

    changeVisibility(elementRef: ElementRef, state: string) {
        elementRef.nativeElement.visibility = state;
    }

    navigate(route: Array<string>, data?: any) {
        this.zone.run(() => {
            const options: NavigationExtras = {
                queryParams: data
            };

            this.router.navigate(route, options);
        });
    }
}
