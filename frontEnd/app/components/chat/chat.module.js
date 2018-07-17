"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var chat_routing_module_1 = require("~/components/chat/chat-routing.module");
var chat_component_1 = require("~/components/chat/chat.component");
var action_bar_component_1 = require("~/components/shared/action-bar.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLDZFQUEwRTtBQUMxRSxtRUFBaUU7QUFDakUsaUZBQTJFO0FBRTNFLDBEQUF1RDtBQUN2RCx3REFBc0Q7QUFDdEQsOERBQTREO0FBb0I1RDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBbEJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix1Q0FBaUI7Z0JBQ2pCLHNDQUFlO2FBQ2xCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDJCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLGdDQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IENoYXRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vY29tcG9uZW50cy9jaGF0L2NoYXQtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IENoYXRDb21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFjdGlvbkJhck1vZHVsZSB9IGZyb20gJ34vY29tcG9uZW50cy9zaGFyZWQvYWN0aW9uLWJhci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IENoYXRTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvY2hhdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIZWxwZXJzU2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2hlbHBlcnMuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBDaGF0Um91dGluZ01vZHVsZSxcbiAgICAgICAgQWN0aW9uQmFyTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2hhdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICBDaGF0U2VydmljZSxcbiAgICAgICAgSGVscGVyc1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdE1vZHVsZSB7IH1cbiJdfQ==