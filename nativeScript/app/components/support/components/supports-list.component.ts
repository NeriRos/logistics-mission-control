import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { ISupport, SUPPORT_STATUS } from "~/models/support.model";
import { IUser } from "~/models/user.model";
import { HelpersService } from "~/services/helpers.service";
import { SupportService } from "~/services/support.service";

@Component({
    moduleId: module.id,
    selector: "SupportsList",
    template: `
    <StackLayout>
        <ListView [items]="supports">
            <ng-template let-item="item">
                <GridLayout columns="auto, *" rows="auto, auto" class="call" (tap)="chatWith(item)">
                    <Label row="0" col="0" class="nameLabel" [text]="item.client.name"></Label>
                    <Label row="0" col="1" class="phoneLabel" [text]="item.client.phone"></Label>
                    <Label row="1" col="0" class="businessLabel" [text]="item.client.business"
                        [visibility]="!!item.client.business ? 'visible' : 'collapse'"></Label>
                    <Label row="1" col="1" class="dateLabel" [text]="item.createdAt"></Label>
                </GridLayout>
            </ng-template>
        </ListView>
    </StackLayout>
    `
})
export class SupportsListComponent {
    @Input()
    set supports(value) {
        this._supports = value;
    }
    get supports() {
        return this._supports;
    }

    @Output() isChatVisible: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() support: EventEmitter<ISupport> = new EventEmitter<ISupport>();

    private _supports = new ObservableArray<ISupport>();

    constructor(protected supportService: SupportService,
                protected helpers: HelpersService) {
    }

    chatWith(support: ISupport) {
        if (support.status <= SUPPORT_STATUS.REQUEST) {
            this.supportService.takeSupport(support._id);
        }

        this.isChatVisible.emit(true);
        this.support.emit(support);
    }
}
