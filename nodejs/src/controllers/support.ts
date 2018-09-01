"use strict";

import { Response, Request, NextFunction, json } from "express";
import { parallel } from "async";
import { UserModel } from "../models/User";
import { SupportModel } from "../models/Support";
import { SupportDocument, SUPPORT_STATUS, ISupport } from "../types/Support";
import { UserDocument, USER_PERMISSIONS } from "../types/User";
import { ChatModel } from "../models/Chat";
import { IChat } from "../types/Chat";
import { Mongoose } from "mongoose";

const FIND_REP_INTERVAL_SECONDS = 5;

/**
 * POST /support/openSupport
 * Opens support.
 */
export let openSupport = (req: Request, res: Response, next: NextFunction) => {
    const client = req.user;

    if (!req.user)
        return res.status(500).json({status: "error", error: true, message: "UNAUTHORIZED", code: 0});


    parallel({
        getSupport: (cb) => {
            SupportModel.findOne({client: {id: client.id}}, (err, support: SupportDocument) => {
                if (err)
                    return cb(err);

                if (!support) {
                    client.id = req.user._id;

                    support = new SupportModel({
                        client: client,
                        status: 2,
                    });

                    support.save((err, savedSupport: SupportDocument) => {
                        if (err)
                            return cb(err);

                        cb(false, support);
                    });
                } else
                    cb(false, support);
            });
        },
        findReps: (cb) => {
            // TODO: run a service worker to find reps
            UserModel.find({ supports: {$ne: req.user._id} }, (err, users: Array<UserDocument>) => {
                if (err)
                    return cb(err);

                cb(false, users || []);
            });
        }
    }, (errors, results) => {
        if (errors)
            return console.log("ERRORS:", errors);

        const reps = <Array<UserDocument>>results.findReps;
        const support: any = results.getSupport;
        let isAvailableRep = false;

        if (reps.length > 0) {
            console.log("no reps found!");
        }
        // Filter fit reps
        reps.forEach((user: UserDocument) => {
            if (user.permissions <= USER_PERMISSIONS.REPRESENTATIVE && support.representative.id != user._id && user.supports.indexOf(support._id) == -1 && support.users.indexOf(user._id) == -1) {
                isAvailableRep = true;

                user.supports.push(support._id);
                support.users.push(user._id);

                user.save((err) => {
                    if (err)
                        return next(err);
                });

                support.save((err) => {
                    if (err)
                        return next(err);
                });
            }
        });

        res.json({support, isAvailableRep});
    });
};

/**
 * GET /support/getSupports
 * Returns all open/taken supports.
 * for reps
 */
export let getSupports = (req: Request, res: Response, next: NextFunction) => {
    SupportModel.find({ $or: [ {status: SUPPORT_STATUS.TAKEN, "representative.id": req.user._id, users: req.user._id }, {status: SUPPORT_STATUS.REQUEST, users: req.user._id} ] }, (err, supports: Array<ISupport>) => {
        if (err)
            return next(err);

        res.json(supports);
    });
};

/**
 * GET /support/getSupportById/:id
 * Returns all supports
 */
export let getSupportById = (req: Request, res: Response, next: NextFunction) => {
    SupportModel.findOne({_id: req.params.id}, (err, support) => {
        if (err)
            return next(err);

        res.json(support);
    });
};

/**
 * GET /support/takeSupport/:id
 * Takes support.
 */
export let takeSupport = (req, res: Response, next: NextFunction) => {
    let supportID = req.params.id;
    const repID = req.user._id;

    supportID = (new Mongoose()).Types.ObjectId(req.params.id);

    if (!req.user)
        return res.status(500).json({status: "error", error: true, message: "UNAUTHORIZED", code: 0});

    SupportModel.findById(supportID, (err, support: SupportDocument) => {
        if (err)
            return next(err);

        if (support.users.length > 0) {
            support.users.forEach((userID) => {
                UserModel.findById(userID, (err, user) => {
                    if (err)
                        return next(err);

                    if (repID.equals(userID)) {
                        support.status = 3;
                        support.representative = {
                            id: repID,
                            name: user.name,
                            email: user.email,
                            picture: user.picture
                        };
                    } else {
                        if (user.supports.length > 0)
                            user.supports.splice(user.supports.indexOf(support._id), 1);

                        if (support.users.length > 0)
                            support.users.splice(support.users.indexOf(user._id), 1);
                    }

                    support.save();
                    user.save();
                });
            });
        } else {
            console.log("No supportes - rep id", repID, "support id:", supportID);
        }

        req.params.id = supportID;
        req.user._id = repID;
        req.body.support = support;
        req.body.date = new Date();
        req.body.message = support.client.name + " welcome to dynamichat!";
        req.body.contact = support.client.id;
        req.body.id = support._id;
        req.openSupport = { isOK: true, initial: true };

        sendMessage(req, res, next);
    });
};

/**
 * GET /support/viewSupport/:id
 * View support for managers and up.
 */
export let viewSupport = (req: Request, res: Response, next: NextFunction) => {
    const supportID = req.params.id;

    if (!req.user)
        return res.status(500).json({status: "error", error: true, message: "UNAUTHORIZED", code: 0});

    SupportModel.findById(supportID, (err, support: SupportDocument) => {
        if (err)
            return next(err);

        if (req.user.permissions <= USER_PERMISSIONS.MANAGER)
            res.json(support);
        else
            return res.status(500).json({status: "error", error: true, message: "UNAUTHORIZED", code: 0});
    });
};

/**
 * GET /support/getChats/:id
 * return all chats for specific support.
 */
export let getChats = (req: Request, res: Response, next: NextFunction) => {
    SupportModel.findById(req.params.id, (err, support: ISupport) => {
        if (err)
            return next(err);

        if (!support)
            return res.status(500).json({error: "no support found for id:" + req.params.id});

        if (support.status < SUPPORT_STATUS.TAKEN)
            return res.json({ isAvailableRep: false, chats: [] });
        else if (support.messages.length <= 0)
            return res.json({ isAvailableRep: true, chats: [] });

        ChatModel.find({_id: {$in: support.messages}}, (err, chats) => {
            if (err)
                return next(err);

            res.json({chats: chats || [], isAvailableRep: true, representative: support.representative});
        });
    });
};

/**
 * POST /support/sendMessage
 * Sends a support message.
 */
export let sendMessage = (req, res: Response, next: NextFunction) => {
    const data = req.body;

    if (!req.openSupport)
        req.openSupport = {
            isOK: false,
            initial: false
        };

    SupportModel.findById(data.id, (err, support: SupportDocument) => {
        if (err)
            return next(err);

        if (!support)
            return res.status(500).json({error: "no support found."});

        const isClient = support.client.id == req.user._id;
        const isRep = (support.representative || {id: ""}).id == req.user._id;

        if ((!req.user || (!isClient && !isRep)) && !req.openSupport.isOK)
            return res.status(500).json({status: "error", error: true, message: "UNAUTHORIZED", code: 0});

        ChatModel.count({ $or: [{from: support.client.id, to: support.representative.id}, {from: support.representative.id, to: support.client.id}] }, (err, count) => {
            if (err)
                return next(err);

            const chat: IChat = {
                id: (count + 1).toString(),
                message: data.message,
                from: isRep ? support.representative.id : (isClient ? support.client.id : req.user._id),
                to: support.status >= SUPPORT_STATUS.TAKEN && support.representative && isClient ? support.representative.id : data.contact || data.to,
                date: new Date(data.date),
                status: 1,
                isSupport: true,
                initial: req.openSupport.initial
            };

            const newMessage = new ChatModel(chat);

            newMessage.save((err, savedMessage) => {
                if (err)
                    return next(err);

                support.messages.push(savedMessage._id);

                support.save();

                res.json({status: "ok", msg: "message send successfully", message: newMessage, support: req.body.support});
            });
        });
    });
};
