import { Document, Schema } from "mongoose";
import { SupportDocument } from "../types/Support";

export type IUser = {
    email: string;
    password: string;
    confirmPassword?: string;
    phone?: string;
    name?: string;
    code?: string;
    friends?: Array<string>;
    picture?: string;
    token?: string;
    permissions?: number;
    supports?: Array<Schema.Types.ObjectId>;
};

export type UserDocument = Document & IUser;

export const USER_PERMISSIONS = {
    ADMIN: 1,
    MANAGER: 2,
    REPRESENTATIVE: 3,
    DELIVERY: 4
};