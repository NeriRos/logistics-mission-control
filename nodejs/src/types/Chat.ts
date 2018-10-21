import { Document } from "mongoose";

export type IChat = {
    _id?: string;
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

export const CHAT_STATUS = {
    "NEW": 0,
    "RECEIVED": 1,
    "READ": 2
};