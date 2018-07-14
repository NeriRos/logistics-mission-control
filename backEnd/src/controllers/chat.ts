"use strict";

import { Response, Request, NextFunction } from "express";
import { ChatModel } from "../models/Chat";
import { Chat } from "../types/Chat";
import { UserModel } from "../models/User";


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
    req.assert("to", "Please enter a valid email address.").isEmail();
    req.sanitize("to").normalizeEmail({ gmail_remove_dots: false });

    const errors = req.validationErrors();

    if (errors) {
        console.log("errors", errors);
        return res.status(400).json({error: errors, status: "error"});
    }

    UserModel.findOne({email: req.body.to}, (err, user) => {
        if (err)
            return next(err);
        if (!user)
            return res.json({status: "error", error: true, message: "no user", code: 1});
        if (!req.user)
            return res.json({status: "error", error: true, message: "UNAUTHORIZED", code: 0});

        ChatModel.count({ $or: [{"to": req.user._id}, {"from": req.user._id}] }, (err, count) => {
            if (err)
                return next(err);

            if (req.user._id == req.body.from) {
                const chat: Chat = {
                    id: (count + 1).toString(),
                    message: req.body.message,
                    from: req.user._id,
                    to: user._id,
                    date: req.body.date
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
    });
};