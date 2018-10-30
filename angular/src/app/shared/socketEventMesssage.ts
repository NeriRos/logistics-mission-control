import { IUser } from "../models/user.model";
import { ISupport } from "../models/support.model";
import { IChat } from "../models/chat.model";
import { IMission } from "../models/mission.model";

export interface ISocketEventMessage {
    event?: string;
    error?: any;
    user?: IUser;
    chat?: IChat;
    support?: ISupport;
    phpConnectionId?: number;
    nodeConnectionId?: number;
    messageId?: string;
    conversantId?: string;
    mission?: IMission;
}
