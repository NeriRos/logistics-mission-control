"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    ChatModule = __decorate([
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsNkVBQTBFO0FBQzFFLG1FQUFpRTtBQUVqRSwwREFBdUQ7QUFDdkQsd0RBQXNEO0FBQ3RELDhEQUE0RDtBQW1CNUQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQWpCdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsdUNBQWlCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDJCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLGdDQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IENoYXRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIn4vY29tcG9uZW50cy9jaGF0L2NoYXQtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IENoYXRDb21wb25lbnQgfSBmcm9tIFwifi9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDaGF0U2VydmljZSB9IGZyb20gXCJ+L3NlcnZpY2VzL2NoYXQuc2VydmljZVwiO1xuaW1wb3J0IHsgSGVscGVyc1NlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9oZWxwZXJzLnNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgQ2hhdFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDaGF0Q29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVXNlclNlcnZpY2UsXG4gICAgICAgIENoYXRTZXJ2aWNlLFxuICAgICAgICBIZWxwZXJzU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaGF0TW9kdWxlIHsgfVxuIl19