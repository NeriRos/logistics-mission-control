import { Document } from "mongoose";

export type IChat = {
    id: string;
    message: string;
    from: string;
    to: string;
    date: Date;
    status?: number;
    isSupport?: boolean;
    initial?: boolean;
};

export type ChatDocument = Document & IChat;