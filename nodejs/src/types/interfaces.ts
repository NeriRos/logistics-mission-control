import { ISupport, TRepresentative } from "~/types/Support";
import { IChat } from "~/types/Chat";
import { IUser } from "~/types/User";

export interface ISocketEventMessage {
    event?: string;
    error?: any;
    user?: IUser;
    chat?: IChat;
    support?: ISupport;
    supportId?: string;
    phpConnectionId?: number;
    nodeConnectionId?: number;
    messageId?: string;
    conversantId?: string;
    representative?: TRepresentative;
}

export interface ISupportMessageBody {
    event: string;
    user: IUser;
    chat: IChat;
    support: ISupport;
    supportId: string;
    phpConnectionId: number;
    nodeConnectionId?: number;
}