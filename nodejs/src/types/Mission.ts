import { Document } from "mongoose";
import { IUserLite } from "../types/User";

export type IMission = {
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
};

export const MISSION_URGENCY = {
    URGENT: 1,
    NORMAL: 2,
    LOW: 3
};

export const MISSION_STATUS = {
    NEW: 1,
    READ: 2,
    DONE: 3
};

export type MissionDocument = Document & IMission;