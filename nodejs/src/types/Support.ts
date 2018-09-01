import { Document, Schema } from "mongoose";
import { IUser, UserDocument } from "../types/User";
import { IChat, ChatDocument } from "../types/Chat";

export type ISupport = {
    client: {
        id: string;
        name: string;
        phone: string;
        business?: string;
    };
    representative: {
        id: string;
        name: string;
        email: string;
        picture: string;
    };
    status: number;
    messages: Array<Schema.Types.ObjectId>;
    users: Array<Schema.Types.ObjectId>;
};
export type SupportDocument = Document & ISupport;

export const SUPPORT_STATUS = {
    "INIT": 1,
    "REQUEST": 2,
    "TAKEN": 3,
    "HOLD": 4,
    "DONE": 5,
};
