import { ISupport, TRepresentative } from "~/types/Support";
import { IChat } from "~/types/Chat";
import { IUser } from "~/types/User";
import { IMission } from "./Mission";

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
    mission?: IMission;
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