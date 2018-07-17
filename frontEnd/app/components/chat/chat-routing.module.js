"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var chat_component_1 = require("~/components/chat/chat.component");
var routes = [
    { path: "", component: chat_component_1.ChatComponent }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ChatRoutingModule);
    return ChatRoutingModule;
}());
exports.ChatRoutingModule = ChatRoutingModule;
