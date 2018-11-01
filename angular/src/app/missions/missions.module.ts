import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MissionsRoutingModule } from "./missions-routing.module";
import { PipesModule } from "../shared/pipes.module";

import { MissionsComponent } from "./missions.component";
import { CreateMissionComponent } from "./components/createMission.component";

import { UserService } from "../services/login.service";
import { MissionsService } from "../services/missions.service";
import { ManagementService } from "../services/management.service";
import { SharedModule } from "../shared/shared.module";
import { MissionItemComponent } from "./components/missionItem.component";
import { Globals } from "../shared/globals";
import { ChatService } from "../services/chat.service";
import { MessagesComponent } from "../chat/messages.component";


@NgModule({
  imports: [
    CommonModule,
    MissionsRoutingModule,
    SharedModule,
    PipesModule
  ],
  exports: [ PipesModule ],
  providers: [
    MissionsService,
    ChatService,
    UserService,
    ManagementService,
    Globals
  ],
  declarations: [MissionsComponent, MessagesComponent, CreateMissionComponent, MissionItemComponent],
  entryComponents: [CreateMissionComponent]
})
export class MissionsModule { }
