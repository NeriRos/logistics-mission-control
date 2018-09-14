"use strict";

import { Response, Request, NextFunction } from "express";
import { ChatModel } from "../models/Chat";
import { IChat } from "../types/Chat";

/**
 * GET /chat/getChats
 * Returns all chats.
 */
export let getChats = (req: Request, res: Response, next: NextFunction) => {
    const userID = req.user._id;
    const friendID = req.params.id;

    ChatModel.find({ $or: [{from: userID, to: friendID}, {from: friendID, to: userID}] }, (err, chats: Array<IChat>) => {
        if (err)
            return next(err);

        res.json(chats);
    });
};

/**
 * POST /chat/sendMessage
 * Sends a message.
 */
export let sendMessage = (req: Request, res: Response, next: NextFunction) => {
    const userID = req.user._id;
    const friendID = req.body.to;

    if (!req.user)
        return res.json({status: "error", error: true, message: "UNAUTHORIZED", code: 0});

    ChatModel.count({ $or: [{from: userID, to: friendID}, {from: friendID, to: userID}] }, (err, count) => {
        if (err)
            return next(err);

        if (userID == req.body.from) {
            const chat: IChat = {
                id: (count + 1).toString(),
                message: req.body.message,
                from: userID,
                to: friendID,
                date: new Date(req.body.date),
                status: 1,
                isSupport: false
            };
            const newMessage = new ChatModel(chat);

            newMessage.save((err) => {
                if (err)
                    return next(err);

                res.json({status: "ok", msg: "message send successfully"});
            });
        } else
            res.status(500).json({error: "Unauthorized sender."});
    });
};