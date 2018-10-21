import { IUser } from "../models/user.model";
import { ISupport } from "../models/support.model";
import { IChat } from "../models/chat.model";

export interface SocketEventMessage {
    event?: string;
    error?: any;
    user?: IUser;
    chat?: IChat;
    support?: ISupport;
    phpConnectionId?: number;
    nodeConnectionId?: number;
    messageId?: string;
    conversantId?: string;
}
