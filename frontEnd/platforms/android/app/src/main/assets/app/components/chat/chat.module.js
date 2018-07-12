"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var chat_routing_module_1 = require("~/components/chat/chat-routing.module");
var chat_component_1 = require("~/components/chat/chat.component");
var login_service_1 = require("~/services/login.service");
var chat_service_1 = require("~/services/chat.service");
var helpers_service_1 = require("~/services/helpers.service");
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                chat_routing_module_1.ChatRoutingModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLDZFQUEwRTtBQUMxRSxtRUFBaUU7QUFFakUsMERBQXVEO0FBQ3ZELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFtQjVEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFqQnRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHVDQUFpQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDViw4QkFBYTthQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwyQkFBVztnQkFDWCwwQkFBVztnQkFDWCxnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBDaGF0Um91dGluZ01vZHVsZSB9IGZyb20gXCJ+L2NvbXBvbmVudHMvY2hhdC9jaGF0LXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBDaGF0Q29tcG9uZW50IH0gZnJvbSBcIn4vY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9jaGF0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEhlbHBlcnNTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvaGVscGVycy5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIENoYXRSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2hhdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICBDaGF0U2VydmljZSxcbiAgICAgICAgSGVscGVyc1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdE1vZHVsZSB7IH1cbiJdfQ==