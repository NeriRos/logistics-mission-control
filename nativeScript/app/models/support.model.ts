export interface ISupport {
    _id?: string;
    client: {
        id: string;
        name: string;
        phone: string;
        business?: string;
    };
    representative?: {
        id: string;
        name: string;
        picture: string;
    };
    status: number;
    messages?: Array<string>;
    users?: Array<string>;
}

export const SUPPORT_STATUS = {
    INIT: 1,
    REQUEST: 2,
    TAKEN: 3,
    HOLD: 4,
    DONE: 5
};
