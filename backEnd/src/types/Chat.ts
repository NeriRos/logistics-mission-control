import { Document } from "mongoose";

export type ChatDocument = Document & {
    id: string;
    message: string;
    from: string;
    to: string;
    date: Date;
};
export type Chat = {
    id: string;
    message: string;
    from: string;
    to: string;
    date: Date;
};