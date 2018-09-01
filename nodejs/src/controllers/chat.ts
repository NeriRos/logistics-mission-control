"use strict";

import { Response, Request, NextFunction } from "express";
import { ChatModel } from "../models/Chat";
import { IChat } from "../types/Chat";
import { SupportModel } from "../models/Support";
import { SupportDocument, SUPPORT_STATUS } from "../types/Support";

/**
 * GET /chat/getChats
 * Returns all chats.
 */
export let getChats = (req: Request, res: Response, next: NextFunction) => {
    const userID = req.user._id;
    const friendID = req.query.id;

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

export let socketIOHandler = (io) => {
    io.on("connection", (socket) => {
        socket.on("disconnect", () => {
            console.log("user disconnected");
        });

        socket.on("chat message", (msg) => {
            console.log("message: " + msg);
        });

        socket.on("chat support", (msg) => {
            const data = JSON.parse(msg);

            if (!data.openSupport)
                data.openSupport = {
                    isOK: false,
                    initial: false
                };

            SupportModel.findById(data.id, (err, support: SupportDocument) => {
                if (err)
                    return socket.emit("error support", err);

                if (!support)
                    socket.emit("error support", {error: "no support found."});

                const isClient = support.client.id == data.user._id;
                const isRep = (support.representative || {id: ""}).id == data.user._id;

                if ((!isClient && !isRep) && !data.openSupport.isOK)
                    socket.emit("error support", {status: "error", error: true, message: "UNAUTHORIZED", code: 0});

                ChatModel.count({ $or: [{from: support.client.id, to: support.representative.id}, {from: support.representative.id, to: support.client.id}] }, (err, count) => {
                    if (err)
                        return socket.emit("error support", err);

                    const chat: IChat = {
                        id: (count + 1).toString(),
                        message: data.message,
                        from: isRep ? support.representative.id : (isClient ? support.client.id : data.user._id),
                        to: support.status >= SUPPORT_STATUS.TAKEN && support.representative && isClient ? support.representative.id : data.contact || data.to,
                        date: new Date(data.date),
                        status: 1,
                        isSupport: true,
                        initial: data.openSupport.initial
                    };

                    const newMessage = new ChatModel(chat);

                    newMessage.save((err, savedMessage) => {
                        if (err)
                            return socket.emit("error support", err);

                        support.messages.push(savedMessage._id);

                        support.save();

                        socket.emit("status support", {status: "ok", msg: "message send successfully", message: newMessage, support: support});
                    });
                });
            });
        });
    });
};
