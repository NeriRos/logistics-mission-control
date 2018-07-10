"use strict";

import { Response, Request, NextFunction } from "express";
import { ChatModel } from "../models/Chat";
import { Chat } from "../types/Chat";


/**
 * GET /chat/getChats
 * Returns all chats.
 */
export let getChats = (req: Request, res: Response, next: NextFunction) => {
    ChatModel.find({ $or: [{"to": req.user._id}, {"from": req.user._id}] }, (err, chats: Array<Chat>) => {
        if (err)
            return next(err);

        console.log(chats);

        res.json(chats);
    });
};

/**
 * POST /chat/sendMessage
 * Sends a message.
 */
export let sendMessage = (req: Request, res: Response, next: NextFunction) => {
    console.log("USER ID", req.user._id);
    ChatModel.count({ $or: [{"to": req.user._id}, {"from": req.user._id}] }, (err, count) => {
        if (err)
            return next(err);

        if (req.user._id == req.body.from) {
            const chat: Chat = {
                id: (count + 1).toString(),
                message: req.body.message,
                from: req.user._id,
                to: req.body.to,
                date: req.body.date
            };

            console.log("Sending message:", chat);

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