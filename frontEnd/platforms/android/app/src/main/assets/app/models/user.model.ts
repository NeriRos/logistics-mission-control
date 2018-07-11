export interface User {
    _id?: string;
    email: string;
    password: string;
    name?: string;
    code?: string;
    token?: string;
    friends?: Array<string>;
    picture?: string;
}