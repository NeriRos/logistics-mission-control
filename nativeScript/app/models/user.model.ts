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

export const USER_PERMISSIONS = {
    ADMIN: 1,
    MANAGER: 2,
    REPRESENTATIVE: 3,
    DELIVERY: 4
};