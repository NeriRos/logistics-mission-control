"use strict";

import { Response, Request, NextFunction, json } from "express";
import { parallel, waterfall } from "async";
import { Mongoose } from "mongoose";

import { UserModel } from "../models/User";
import { SupportModel } from "../models/Support";
import { ChatModel } from "../models/Chat";
import { Connection, SOCKET_EVENTS } from "../models/Connection";

import { SupportDocument, SUPPORT_STATUS, ISupport, TRepresentative } from "../types/Support";
import { UserDocument, USER_PERMISSIONS } from "../types/User";
import { IChat, ChatDocument } from "../types/Chat";

import { notifyPhpForAvailableRep } from "./clientSocketApi";

/**
 * POST /support/openSupport
 * Opens support.
 */
export let openSupport = (req: Request, res: Response, next: NextFunction) => {
    const client = req.user;

    parallel({
        getSupport: (cb) => {
            if (!client)
                return cb({error: "no client"});

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

                        cb(false, savedSupport);
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
 * GET /support/takeSupport/:supportId
 * Takes support.
 */
export let takeSupport = (req, res: Response, next: NextFunction) => {
    let supportID = req.params.supportId;
    const repID = req.user._id;

    supportID = (new Mongoose()).Types.ObjectId(supportID);

    SupportModel.findById(supportID, (err, support: SupportDocument) => {
        if (err)
            return next(err);

        if (support.users && support.users.length > 0) {
            support.users.forEach((userID) => {
                UserModel.findById(userID, (err, user) => {
                    if (err)
                        return next(err);

                    if (repID.equals(userID)) { // Rep found, taking support
                        support.status = 3;
                        support.representative = {
                            id: repID,
                            name: user.name,
                            email: user.email,
                            picture: user.picture
                        };
                        support.users = [repID];
                        user.supports = [supportID];
                    } else { // Remove from arrays
                        if (user.supports.length > 0)
                            user.supports.splice(user.supports.indexOf(support._id), 1);

                        if (support.users.length > 0)
                            support.users.splice(support.users.indexOf(user._id), 1);
                    }

                    support.save();
                    user.save();

                    Connection.sendServerMessage({support}, SOCKET_EVENTS.FIND_AVAILABLE_REP, {json:
                        (rtdata) => {
                            console.log("Sent representative to php:", rtdata);
                        }
                    });
                });
            });
        } else {
            console.log("No supportes - rep id", repID, "support id:", supportID);
        }

        // Sending welcome message to client
        sendWelcomeMessage(req, res, next, support);
    });
};

/**
 * GET /support/viewSupport/:id
 * View support with editing permissions for managers and up.
 */
export let viewSupport = (req: Request, res: Response, next: NextFunction) => {
    const supportID = req.params.id;

    // TODO: add editing permissions

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
 * GET /support/getChats/:supportId
 * return all chats for specific support.
 */
export let getChats = (req: Request, res: Response, next: NextFunction) => {
    const supportId = req.params.supportId;

    SupportModel.findById(supportId, (err, support: ISupport) => {
        if (err)
            return next(err);

        if (!support)
            return res.status(500).json({error: "no support found for id: " + supportId});

        if (support.status < SUPPORT_STATUS.TAKEN)
            return res.json({ isAvailableRep: false, chats: [] });

        else if (support.messages.length <= 0 && support.representative)
            return res.json({ isAvailableRep: true, chats: [], representative: support.representative });

        notifyPhpForAvailableRep(support);

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
export let sendMessage = (req, res, next) => {
    const data = req.body;

    if (!req.openSupport)
        req.openSupport = {
            isOK: false,
            initial: false
        };

    waterfall([
        (cb) => {
            SupportModel.findById(data.id, (err, support: SupportDocument) => {
                if (err)
                    return cb(err);

                if (!support)
                    return cb({status: "error", error: "customError", message: "no support found for id: " + data.id});

                if (typeof support.representative === "undefined")
                    return cb({status: "error", error: "customError", message: "no representative got for id: " + data.id});

                const repID = typeof support.representative !== "undefined" && support.representative.id ? support.representative.id : "";
                const isClient = support.client.id == req.user._id;
                const isRep = repID == req.user._id;

                if ((!req.user || (!isClient && !isRep)) && !req.openSupport.isOK)
                    return cb({status: "error", error: "customError", message: "UNAUTHORIZED REQUESTER", code: 0});

                cb(false, {support, repID, isClient, isRep});
            });
        },
        (supportData, cb) => {
            ChatModel.count({ $or: [{from: supportData.support.client.id, to: supportData.support.representative.id},
                 {from: supportData.support.representative.id, to: supportData.support.client.id}] }, (err, chatCount) => {
                if (err)
                    return cb(err);

                cb(false, {supportData, chatCount});
            });
        }
    ], (error: any, result: any) => {
        if (error && error.error === "customError") {
            console.log("custom error in sending message", error);
            return res.status(500).json(error);
        }
        else if (error)
            return next(error);

        const support = result.supportData.support;
        const repID = result.supportData.repID;
        const isRep = result.supportData.isRep;
        const isClient = result.supportData.isClient;

        const chat: IChat = {
            id: (result.chatCount + 1).toString(),
            message: data.message,
            from: isRep ? support.representative.id : (isClient ? support.client.id : req.user._id),
            to: support.status >= SUPPORT_STATUS.TAKEN && support.representative && isClient ? support.representative.id : data.contact || data.to,
            date: new Date(data.date),
            status: 1,
            isSupport: true,
            initial: req.openSupport.initial
        };

        const newMessage = new ChatModel(chat);

        newMessage.save((err, savedMessage: ChatDocument ) => {
            if (err)
                return next(err);

            support.messages.push(savedMessage._id);

            support.save((err, savedSupport) => {
                if (err)
                    return next(err);

                if (req.openSupport.initial) {
                    return res.json({support: savedSupport});
                } else if (isClient) {
                    // Send message to nodejs client and return response to php http request.
                    Connection.sendClientMessageByUserId({chat: savedMessage}, Connection.SOCKET_EVENTS.CLIENT_MESSAGE, repID, res);
                } else if (isRep) {
                    // Send message to php http server.
                    Connection.sendServerMessage({chat: savedMessage, phpConnectionId: data.phpConnectionId, support: savedSupport}, Connection.SOCKET_EVENTS.SUPPORT_MESSAGE, res);
                } else {
                    console.log("NO CLIENT, NO REP");
                    res.json({error: true, status: "error", message: "NO CLIENT, NO REP"});
                }
            });
        });
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
 * GET /support/getSupportById/:supportId
 * Returns support by id
 */
export let getSupportById = (req: Request, res: Response, next: NextFunction) => {
    SupportModel.findOne({_id: req.params.supportId}, (err, support) => {
        if (err)
            return next(err);

        res.json(support);
    });
};

/**
 * Sends a welcome message to client.
 */
export let sendWelcomeMessage = (req, res, next, support, message?: string) => {
    req.params.id = support._id;
    req.user._id = (support.representative || {}).id ;
    req.body.support = support;
    req.body.date = new Date();
    req.body.message = (message || `${support.client.name} welcome to dynamichat!`);
    req.body.contact = support.client.id;
    req.body.id = support._id;
    req.openSupport = { isOK: true, initial: true };

    sendMessage(req, res, next);
};

/**
 * GET /support/getSupportRepresentative/:supportId
 * returns the support representative.
 */
export let getSupportRepresentative = (req, res, next) => {
    const supportId = req.params.supportId;

    if (!supportId)
        return res.status(500).json({status: "error", error: true, message: "no supportID"});

    SupportModel.findById(supportId, (err, support: SupportDocument) => {
        if (err)
            return next(err);

        if (!support)
            return res.status(500).json({status: "error", error: true, message: "no support found for id" + supportId });

        res.json({status: "ok", error: false, message: {isRepresentative: !!support.representative.id, representative: support.representative } });
    });
};