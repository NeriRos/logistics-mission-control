export interface IUser {
    _id?: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    name?: string;
    code?: string;
    token?: string;
    conversants?: Array<string>;
    picture?: string;
    supports?: Array<string>;
    permissions?: number;
}

export const USER_PERMISSIONS = {
    ADMIN: 1,
    MANAGER: 2,
    BOOKKEEPING: 3,
    LOGISTICS: 4,
    REPRESENTATIVE: 5,
    DELIVERY: 6
};
