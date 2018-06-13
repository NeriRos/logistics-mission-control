import { Document } from "mongoose";

export type User = Document & {
    email: string,
    password: string,
    profile: {
        name: String,
        gender: String,
        location: String
    },
    code: string
};