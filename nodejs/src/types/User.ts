import { Document, Schema } from "mongoose";
import { SupportDocument } from "../types/Support";

export type IUser = {
    _id?: string;
    id?: string;
    email: string;
    password: string;
    confirmPassword?: string;
    phone?: string;
    name?: string;
    code?: string;
    conversants?: Array<string>;
    picture?: string;
    token?: string;
    permissions?: number;
    supports?: Array<Schema.Types.ObjectId>;
};

export type IUserLite = {
    _id?: string;
    email: string;
    name?: string;
    picture?: string;
    permissions?: number;
};

export type UserDocument = Document & IUser;

export const USER_PERMISSIONS = {
    ADMIN: 1,
    MANAGER: 2,
    BOOKKEEPING: 3,
    LOGISTICS: 4,
    REPRESENTATIVE: 5,
    DELIVERY: 6
};

export let isPermitted = (user, permissionLevel): boolean => {
    return user.permissions <= permissionLevel;
};