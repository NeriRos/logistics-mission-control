"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
// tslint:disable-next-line:max-line-length
var nativescript_ui_listview_1 = require("nativescript-ui-listview");
var contacts_service_1 = require("~/services/contacts.service");
var helpers_service_1 = require("~/services/helpers.service");
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(changeDetectionRef, ngZone, contactsService, helpers) {
        this.changeDetectionRef = changeDetectionRef;
        this.ngZone = ngZone;
        this.contactsService = contactsService;
        this.helpers = helpers;
        this.numberOfAddedItems = 0;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.layout = new nativescript_ui_listview_1.ListViewLinearLayout();
        this.layout.scrollDirection = "Vertical";
        this.initDataItems();
        this.changeDetectionRef.detectChanges();
    };
    ContactsComponent.prototype.addContact = function (email) {
        var _this = this;
        this.contactsService.addFriend(email).subscribe(function (res) {
            _this._friends.push(res);
        });
    };
    ContactsComponent.prototype.chatWith = function (user) {
        this.helpers.navigate(["chat"], { friend: JSON.stringify(user) });
    };
    ContactsComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var _this = this;
        setTimeout(function () {
            var listView = args.object;
            var initialNumberOfItems = _this.numberOfAddedItems;
            for (var i = _this.numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                // if (i > length - 1) {
                listView.loadOnDemandMode = nativescript_ui_listview_1.ListViewLoadOnDemandMode[nativescript_ui_listview_1.ListViewLoadOnDemandMode.None];
                // break;
                // }
                // const imageUri = AndroidApplication ? posts.images[i].toLowerCase() : posts.images[i];
                // tslint:disable-next-line:max-line-length
                // this._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                // this.numberOfAddedItems++;
            }
            listView.notifyLoadOnDemandFinished();
        }, 1000);
        args.returnValue = true;
    };
    // Navigate to profile page here
    ContactsComponent.prototype.onProfileButtonTap = function () {
        this.helpers.navigate(["home"]);
    };
    ContactsComponent.prototype.initDataItems = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.ngZone.run(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib_1.__generator(this, function (_a) {
                        this.contactsService.getFriends().subscribe(function (res) {
                            _this.numberOfAddedItems = res.length || 0;
                            _this._friends = res;
                        });
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(ContactsComponent.prototype, "friends", {
        get: function () {
            return this._friends;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactsComponent.prototype, "friendsNumber", {
        get: function () {
            return this.numberOfAddedItems;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        core_1.ViewChild("newPerson"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], ContactsComponent.prototype, "newPerson", void 0);
    ContactsComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "app-contacts",
            templateUrl: "./contacts.component.html",
            styleUrls: ["./contacts.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            core_1.NgZone,
            contacts_service_1.ContactsService,
            helpers_service_1.HelpersService])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
