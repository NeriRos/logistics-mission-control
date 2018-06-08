import { ElementRef } from "@angular/core";

export const changeVisibility = (elementRef: ElementRef, state: string) => {
    elementRef.nativeElement.visibility = state;
}