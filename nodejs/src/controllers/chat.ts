"use strict";

import { Response, Request, NextFunction } from "express";
import { ChatModel } from "../models/Chat";
import { IChat } from "../types/Chat";
import { UserModel } from "../models/User";

/**
 * GET /chat/getChats/:conversantId
 * Returns all chats.
 */
export let getChats = (req: Request, res: Response, next: NextFunction) => {
    const userID = req.user._id;
    const conversantID = req.params.conversantId;

    ChatModel.find({ $or: [{from: userID, to: conversantID}, {from: conversantID, to: userID}] }, (err, chats: Array<IChat>) => {
        if (err)
            return next(err);

        res.json(chats);
    });
};

/**
 * POST /chat/sendMessage
 * Sends a message.
 */
export let sendMessage = (req, res, next) => {
    const userID = req.user._id;
    const conversantID = req.body.to;

    if (!req.user)
        return res.json({status: "error", error: true, message: "UNAUTHORIZED", code: 0});

    ChatModel.count({ $or: [{from: userID, to: conversantID}, {from: conversantID, to: userID}] }, (err, count) => {
        if (err)
            return next(err);

        if (userID == req.body.from) {
            const chat: IChat = {
                id: (count + 1).toString(),
                message: req.body.message,
                from: userID,
                to: conversantID,
                date: new Date(req.body.date),
                status: 1,
                isSupport: false
            };
            const newMessage = new ChatModel(chat);

            newMessage.save((err, savedMessage) => {
                if (err)
                    return next(err);

                res.json({status: "ok", msg: "message send successfully", savedMessage: savedMessage});
            });
        } else
            res.status(500).json({error: "Unauthorized sender."});
    });
};

/**
 * GET /chat/getConversant/:conversantId
 * Returns a conversant to chat with.
 */
export let getConversant = (req: Request, res: Response, next: NextFunction) => {
    const conversantID = req.params.conversantId;

    if (!req.user)
        return res.json({status: "error", error: true, message: "UNAUTHORIZED", code: 0});

    UserModel.findById(conversantID, (err, conversant) => {
        if (err) {
            return next(err);
        }

        res.json(conversant);
    });

};