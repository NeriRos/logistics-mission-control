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


/**
 * GET /getFriends
 * returns the ids of all account assosiated with the request account
 */
export let getFriends = (req: Request, res: Response, next: NextFunction) => {
    UserModel.find({friends: req.user._id}, (err, users) => {
        if (err)
            return next(err);

        const friends = users.map(user => {
            return {
                email: user.email,
                name: user.name,
                picture: user.picture
            };
        });

        res.json(friends);
    });
};

/**
 * POST /addFriends
 * returns the ids of all account assosiated with the request account
 */
export let addFriend = (req: Request, res: Response, next: NextFunction) => {
    req.assert("email", "Email is not valid").isEmail();
    req.sanitize("email").normalizeEmail({ gmail_remove_dots: false });

    const email = req.body.email;
    const userID = req.user._id;

    const errors = req.validationErrors();

    if (errors) {
        console.log("errors", errors);
        return res.json({status: "error", error: errors});
    }

    UserModel.findOne({email: email, friends: { "$ne": userID }}, (err, user) => {
        if (err)
            return next(err);
        if (!user)
            return res.json({status: "already added"});

        user.friends.push(userID);

        user.save((err) => {
            res.json({status: "ok", error: err});
        });
    });
};
