import { Response, Request, NextFunction } from "express";

import { SupportModel } from "../models/Support";
import { Output } from "../models/output";
import { Connection, SOCKET_EVENTS, CONNECTION_MESSAGE_TEXTS, CONNECTION_MESSAGE_CODES } from "../models/Connection";

import { SupportDocument } from "../types/Support";

import { findAvailableRepsWithSocket, customResponse } from "./clientSocketApi";
import { ISupportMessageBody } from "../types/interfaces";
import { sendMessage } from "./support";
import { ChatModel } from "../models/Chat";
import { CHAT_STATUS } from "../types/Chat";


/**
 * inits and creates a connection.
 * body: {supportId: string, phpConnectionId: number, user: IUser}
 */
export let supportInit = (req, res, next) => {
    if (!req.body.supportId)
        return res.status(500).json({status: "error", error: true, message: "no supportId"});

    SupportModel.findById(req.body.supportId, (err, support: SupportDocument) => {
        if (err)
            return next(err);

        if (!support)
            return res.status(500).json({status: "error", error: true, message: "no support found for id" + req.body.supportId });

        const repID = support.representative && support.representative.id ? support.representative.id : "";

        req.body.representative = support.representative;
        req.body.nodeConnectionId = Connection.getIdByUserId(support.representative.id);

        findAvailableRepsWithSocket(support);

        Connection.sendClientMessageByUserId(req.body, SOCKET_EVENTS.SUPPORT_INIT, repID, res);
    });
};


/**
 * Sends a support message to node client from php client data.
 */
export let clientMessage = (req, res: Response, next) => {
    if (req.body && req.body.support) {
        prepareAndSendSupportMessage(req.body, res, next);
    } else {
        Output.error("clientMessage Not satisfied", req.body);
    }
};

/**
 * Sends a support message to node client from php client data.
 */
export let messageRead = (req, res: Response, next) => {
    if (req.body && req.body.support && req.body.chat) {
        const connection = Connection.findConnectionByUserId(req.body.support.representative.id);

        ChatModel.findById(req.body.chat._id, (err, chat) => {
            if (err)
                next(err);

            chat.status = CHAT_STATUS.READ;

            chat.save((err, savedChat) => {
                if (err)
                    next(err);

                if (!connection)
                    return res.json({error: true, status: "error", message: "NO CONNECTION FOUND FOR USER ID: " + req.body.support.representative.id});

                req.body.chat = savedChat;

                connection.sendClientMessage(req.body, SOCKET_EVENTS.MESSAGE_READ, undefined, customResponse(
                    (rtdata) => {
                        res.json(rtdata);
                    }
                ));
            });
        });
    } else {
        Output.error("clientMessage Not satisfied", req.body);
    }
};

/**
 * POST /dynamiChatApi/:event
 * Gets event and executes it.
 */
export let dynamiChatApi = (req: Request, res: Response, next: NextFunction) => {
    const event = req.params.event;

    Output.info("Event from php: " + event);

    switch (event) {
        case SOCKET_EVENTS.SUPPORT_INIT:
            supportInit(req, res, next);
            break;
        case SOCKET_EVENTS.CLIENT_MESSAGE:
            clientMessage(req, res, next);
            break;
        case SOCKET_EVENTS.MESSAGE_READ:
            messageRead(req, res, next);
            break;

        default:
            Output.warning("Event: " + event + " doesn't exists");
            res.json({error: true, status: "noEventFound", message: "Event: " + event + " doesn't exists"});
            break;
    }
};

export let prepareAndSendSupportMessage = (data: ISupportMessageBody, cb: Response | {json: Function, status: Function}, errorCb: Function) => {
    const body: any = data.chat;
    body.user = data.user;
    body.support = data.support;
    body.id = data.supportId;
    body.event = data.event;
    body.phpConnectionId = data.phpConnectionId;

    const req = {
        user: body.user,
        body: body,
        params: { id: body.id },
        openSupport: {isOK: true, initial: false}
    }, next = (err) => {
        const message = {
            error: {
                message: CONNECTION_MESSAGE_TEXTS[CONNECTION_MESSAGE_CODES.ERROR] + " err: " + err.toString(),
                code: CONNECTION_MESSAGE_CODES.ERROR
            }
        };

        Output.error("Error in snding support message:", message);

        errorCb(message);
    };

    sendMessage(req, cb, next);
};