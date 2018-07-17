"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var chat_routing_module_1 = require("~/components/chat/chat-routing.module");
var chat_component_1 = require("~/components/chat/chat.component");
var action_bar_component_1 = require("~/components/shared/action-bar.component");
var chat_service_1 = require("~/services/chat.service");
var helpers_service_1 = require("~/services/helpers.service");
var login_service_1 = require("~/services/login.service");
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                chat_routing_module_1.ChatRoutingModule,
                action_bar_component_1.ActionBarModule
            ],
            declarations: [
                chat_component_1.ChatComponent
            ],
            providers: [
                login_service_1.UserService,
                chat_service_1.ChatService,
                helpers_service_1.HelpersService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ChatModule);
    return ChatModule;
}());
exports.ChatModule = ChatModule;
