"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var chat_routing_module_1 = require("./chat-routing.module");
var chat_component_1 = require("./chat.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsNkRBQTBEO0FBQzFELG1EQUFpRDtBQUVqRCwwREFBdUQ7QUFDdkQsd0RBQXNEO0FBQ3RELDhEQUE0RDtBQW1CNUQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQWpCdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsdUNBQWlCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDJCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLGdDQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IENoYXRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY2hhdC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gXCIuL2NoYXQuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHsgQ2hhdFNlcnZpY2UgfSBmcm9tIFwifi9zZXJ2aWNlcy9jaGF0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEhlbHBlcnNTZXJ2aWNlIH0gZnJvbSBcIn4vc2VydmljZXMvaGVscGVycy5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIENoYXRSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2hhdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICBDaGF0U2VydmljZSxcbiAgICAgICAgSGVscGVyc1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdE1vZHVsZSB7IH1cbiJdfQ==