import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Color } from "tns-core-modules/color/color";

@Component({
    selector: "FloatLabel",
    moduleId: module.id,
    template: `
        <GridLayout rows="30, auto" marginBottom="5">
            <Label #label [text]="placeholder"
            row="1"
            opacity="0.4" fontSize="14"  class="input floating-input-label"></Label>
            <TextField #textField="ngModel"
            [secure]="secure"
            [(ngModel)]='ngModelInput'
            (ngModelChange)="onChange()"
            (focus)="onFocus()"
            (blur)="onBlur()"
            borderBottomWidth="3" row="1" borderBottomColor="#cec8c8" padding="2"></TextField>
        </GridLayout>
    `
})
export class FloatLabelComponent {
    @Input() placeholder: string;
    @Input() secure: boolean;
    @Input() ngModelInput: string = "";
    @Output() ngModelOutput: EventEmitter<string> = new EventEmitter<string>();
    @ViewChild("label") label: ElementRef;
    @ViewChild("textField", { read: ElementRef }) textField: ElementRef;

    // tslint:disable-next-line:no-empty
    constructor() {
    }

    onChange() {
        this.ngModelOutput.emit(this.ngModelInput);
    }

    onFocus() {
        const label = this.label.nativeElement;
        const textField = this.textField.nativeElement;

        // animate the label sliding up and less transparent.
        label.animate({
            translate: { x: 0, y: - 25 },
            opacity: 1
        });

        // set the border bottom color to green to indicate focus
        textField.borderBottomColor = new Color("#00b47e");
    }

    onBlur() {
        const label = this.label.nativeElement;
        const textField = this.textField.nativeElement;

        // if there is text in our input then don't move the label back to its initial position.
        if (!textField.text) {
            label.animate({
                translate: { x: 0, y: 0 },
                opacity: 0.4
            });
        }
        // reset border bottom color.
        textField.borderBottomColor = new Color("#cec8c8");
    }
}
