import { IUserLite } from "./user.model";
import { error } from "util";

export interface IMission {
    _id?: string;
    body: {
        title: string;
        description: string;
        package?: string;
    };
    date: Date;
    status: number;
    creator: IUserLite;
    receivers: Array<IUserLite>;
    urgency: number;
    relatedChatIds?: Array<string>;
    type: string;
}

export const MISSION_URGENCY = {
    LOW: 1,
    NORMAL: 2,
    URGENT: 3
};

export const MISSION_STATUS = {
    NEW: 1,
    READ: 2,
    DONE: 3
};

export const MISSION_URGENCY_NAME = {
    [MISSION_URGENCY.LOW]: "Low",
    [MISSION_URGENCY.NORMAL]: "Normal",
    [MISSION_URGENCY.URGENT]: "Urgent"
};

export const MISSION_STATUS_NAME = {
    [MISSION_STATUS.NEW]: "New",
    [MISSION_STATUS.READ]: "Read",
    [MISSION_STATUS.DONE]: "Done"
};

export class Mission implements IMission {
    _id: string;
    body: {
        title: string;
        description: string;
        package?: string;
    };
    date: Date;
    status: number;
    creator: IUserLite;
    receivers: IUserLite[];
    urgency: number;
    relatedChatIds: string[];
    type: string;

    constructor(creator: IUserLite, title: string, description: string,
            receivers: IUserLite[], urgency: number, type: string, extra?: any) {
        this.body = {title, description};

        this.receivers = receivers;
        this.urgency = urgency;
        this.type = type;
        this.date = new Date();
        this.status = MISSION_STATUS.NEW;

        this.creator = creator;

        if (type === "package") {
            this.body.package = extra.package;
        }
    }

    static createSimpleMessage(creator: IUserLite, title: string, description: string, receivers: IUserLite[]) {
        const newMission = new Mission(creator, title, description, receivers, MISSION_URGENCY.LOW, "regular");

        return newMission;
    }

    static createMessageFromObject(data) {
        if (data && data.body) {
            data.title = data.body.title;
            data.description = data.body.description;
            data.package = data.body.package;
        }
        if (!data || ((typeof data.title === "undefined" || typeof data.description === "undefined") ||
            typeof data.receivers === "undefined" || typeof data.urgency === "undefined" || typeof data.type === "undefined")) {
            console.log("missing data", data, !data);

            throw error("missing data");
        }

        const newMission = new Mission(data.creator, data.title, data.description, data.receivers, data.urgency, data.type);

        if (data._id) {
            newMission._id = data._id;
        }

        return newMission;
    }
}
