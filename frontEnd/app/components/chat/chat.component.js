"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var page_1 = require("tns-core-modules/ui/page/page");
var chat_service_1 = require("~/services/chat.service");
var helpers_service_1 = require("~/services/helpers.service");
var login_service_1 = require("~/services/login.service");
var globals_1 = require("~/shared/globals");
var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService, route, page, userService, helpers, globals) {
        var _this = this;
        this.chatService = chatService;
        this.route = route;
        this.page = page;
        this.userService = userService;
        this.helpers = helpers;
        this.globals = globals;
        this.numberOfAddedItems = 0;
        this.page.actionBarHidden = false;
        this.route.queryParams.subscribe(function (params) {
            if (!params.friend) {
                return _this.helpers.navigate(["contacts"]);
            }
            _this.friend = JSON.parse(params.friend);
            _this.friend.picture = _this.friend.picture || _this.globals.DEFAULT_USER_PICTURE;
        });
    }
    ChatComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.userService.getUser().toPromise()];
                    case 1:
                        _a.me = _d.sent();
                        _b = this;
                        _c = observable_array_1.ObservableArray.bind;
                        return [4 /*yield*/, this.chatService.getChats(this.friend._id).toPromise()];
                    case 2:
                        _b.chats$ = new (_c.apply(observable_array_1.ObservableArray, [void 0, _d.sent()]))();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        this.list = this.lv.nativeElement;
        this.textField = this.tf.nativeElement;
    };
    ChatComponent.prototype.scroll = function (count) {
        console.log("scrolling to ", count);
        this.list.scrollToIndex(count - 1);
        this.list.refresh();
    };
    ChatComponent.prototype.chat = function () {
        var _this = this;
        if (this.friend) {
            var newMessage_1 = {
                message: this.textField.text,
                from: this.me._id,
                date: new Date(),
                to: this.friend._id
            };
            this.chatService.sendMessage(newMessage_1).then(function (data) {
                if (data.error) {
                    console.log(data);
                    return alert("There was an error sending your message, please try again later.");
                }
                _this.scroll(_this.list.items ? _this.list.items.length : 1);
                _this.chats$.push(newMessage_1);
            });
            this.textField.text = "";
        }
    };
    ChatComponent.prototype.filter = function (sender) {
        if (sender === this.me._id) {
            return "me";
        }
        else {
            return "them";
        }
    };
    ChatComponent.prototype.align = function (sender) {
        if (sender === this.me._id) {
            return "right";
        }
        else {
            return "left";
        }
    };
    ChatComponent.prototype.showImage = function (sender) {
        if (sender === this.me._id) {
            return "collapsed";
        }
        else {
            return "visible";
        }
    };
    // Navigate to corresponding page
    ChatComponent.prototype.onMenuButtonTap = function (args) {
        var menuButtonParent = args.object.parent;
        // alert("Navigate to " + menuButtonParent.get("data-name"));
    };
    // Navigate to profile page here
    ChatComponent.prototype.onProfileButtonTap = function () {
        this.helpers.navigate(["home"]);
    };
    tslib_1.__decorate([
        core_1.ViewChild("list"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], ChatComponent.prototype, "lv", void 0);
    tslib_1.__decorate([
        core_1.ViewChild("textfield"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], ChatComponent.prototype, "tf", void 0);
    ChatComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Chat",
            moduleId: module.id,
            templateUrl: "./chat.component.html",
            styleUrls: ["chat.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [chat_service_1.ChatService,
            router_1.ActivatedRoute,
            page_1.Page,
            login_service_1.UserService,
            helpers_service_1.HelpersService,
            globals_1.Globals])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
