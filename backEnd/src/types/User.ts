import { Document } from "mongoose";

export type User = Document & {
    email: string;
    password: string;
    name?: String;
    code?: string;
    friends?: Array<string>;
    picture?: string;
    token?: string;
};