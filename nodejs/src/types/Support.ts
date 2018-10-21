import { Document, Schema } from "mongoose";

export type TRepresentative = {
    id: string;
    name: string;
    email: string;
    picture: string;
};

export type ISupport = {
    client: {
        id: string;
        name: string;
        phone: string;
        business?: string;
    };
    representative: TRepresentative
    status: number;
    messages: Array<Schema.Types.ObjectId>;
    users: Array<Schema.Types.ObjectId | string>;
};

export type SupportDocument = Document & ISupport;

export const SUPPORT_STATUS = {
    "INIT": 1,
    "REQUEST": 2,
    "TAKEN": 3,
    "HOLD": 4,
    "DONE": 5,
};
