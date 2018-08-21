export interface IUser {
    _id?: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    name?: string;
    code?: string;
    token?: string;
    friends?: Array<string>;
    picture?: string;
    supports?: Array<string>;
    permissions?: number;
}
