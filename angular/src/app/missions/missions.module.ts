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
import { ChatComponent } from "../chat/chat.component";
import { ChatService } from "../services/chat.service";
import { RouterModule } from "@angular/router";
import { SupportService } from "../services/support.service";


@NgModule({
  imports: [
    CommonModule,
    MissionsRoutingModule,
    SharedModule,
    RouterModule,
    PipesModule
  ],
  exports: [ PipesModule ],
  providers: [
    MissionsService,
    ChatService,
    UserService,
    SupportService,
    ManagementService,
    Globals
  ],
  declarations: [MissionsComponent, ChatComponent, CreateMissionComponent, MissionItemComponent],
  entryComponents: [CreateMissionComponent]
})
export class MissionsModule { }
