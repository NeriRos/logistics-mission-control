import { Injectable } from "@angular/core";
import { NetworkingService } from "./network.service";
import { IChat } from "../models/chat.model";

@Injectable({
    providedIn: "root"
})
export class MissionsService {
    private prefix: string;

    constructor(private network: NetworkingService) {
        this.prefix = "missions";
    }

    getChats(missionId: string) {
        if (!missionId) {
            console.log("NO MISSION ID! Cant get My Missions");
        }
        return this.network.http("GET", `${this.prefix}/getChats/${missionId}`);
    }

    sendMessage(missionId: string, chat: IChat) {
        if (!missionId) {
            console.log("NO MISSION ID! Cant get My Missions");
        }
        return this.network.http("POST", `${this.prefix}/sendMessage/${missionId}`, {}, chat);
    }

    getMyMissions(creatorID: string) {
        if (!creatorID) {
            console.log("NO MISSION ID! Cant get My Missions");
        }
        return this.network.http("GET", `${this.prefix}/getMissionsByCreatorID/${creatorID}`);
    }

    getUnhandledMissions(creatorID: string) {
        if (!creatorID) {
            console.log("NO MISSION ID! Cant get My Missions");
        }
        return this.network.http("GET", `${this.prefix}/getUnhandledMissions/${creatorID}`);
    }

    createMission(data) {
        if (!data) {
            console.log("NO DATA");
        }
        return this.network.http("POST", `${this.prefix}/createMission`, {}, data);
    }

    deleteMission(missionId) {
        if (!missionId) {
            console.log("NO missionId");
        }
        return this.network.http("GET", `${this.prefix}/deleteMission/${missionId}`);
    }

    changeMissionStatus(missionId, status) {
        if (!missionId) {
            console.log("NO Mission ID");
        }
        return this.network.http("GET", `${this.prefix}/changeMissionStatus/${missionId}/${status}`);

    }
}
