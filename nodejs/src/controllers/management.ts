"use strict";

import { Response, Request, NextFunction } from "express";
import { UserModel } from "../models/User";
import { SupportModel } from "../models/Support";
import { ChatModel } from "../models/Chat";
import { SUPPORT_STATUS } from "../types/Support";
import { Schema, Mongoose, Types } from "mongoose";
import { sendWelcomeMessage } from "../controllers/support";


/**
 * GET /management/getUsers
 * Returns all users
 */
export let getUsers = (req: Request, res: Response, next: NextFunction) => {
    UserModel.find({}, (err, users) => {
        if (err)
            return next(err);

        res.json(users);
    });
  };

/**
 * GET /management/getSupports
 * Returns all supports
 */
export let getSupports = (req: Request, res: Response, next: NextFunction) => {
    SupportModel.find({}, (err, supports) => {
        if (err)
            return next(err);

        res.json(supports);
    });
};

/**
 * GET /management/updateSupport
 * Returns all supports
 */
export let updateSupport = (req: Request, res: Response, next: NextFunction) => {
    SupportModel.findById(req.body._id, (err, support) => {
        if (err)
            return next(err);

        support.users = req.body.users;
        support.status = req.body.status;
        support.messages = req.body.messages;
        support.client = req.body.client;

        if (typeof req.body.representative !== "undefined" && (support.representative != req.body.representative || !support.representative)) {
            // Update status
            if (support.status <= SUPPORT_STATUS.REQUEST)
                support.status = SUPPORT_STATUS.TAKEN;

            // Set representative
            support.representative = req.body.representative;
            support.representative.id = support.representative.id || req.body.representative._id;
            support.users = [support.representative.id];

            // Send welcome message
            support.save((err) => {
                if (err)
                    return next(err);

                sendWelcomeMessage(req, res, next, support, `A representative has joined the conversation, rep name: ${support.representative.name}`);
            });
        } else {
            res.json({error: true, status: "noRepresentativeInBody", message: "there is no representative in body"});
        }
    });
};

/**
 * GET /management/deleteSupport/:supportId
 * delete support by id
 */
export let deleteSupport = (req: Request, res: Response, next: NextFunction) => {
    const supportId = req.params.supportId;

    SupportModel.remove(supportId === "all" ? {"messages.1": { "$exists": false }} : {_id: supportId}, (err) => {
        if (err)
            next(err);

        res.json({error: false, status: "ok", message: "support id: " + supportId + " deleted successfully"});
    });
};

/**
 * GET /management/getChats
 * Returns all chats
 */
export let getChats = (req: Request, res: Response, next: NextFunction) => {
    ChatModel.find({}, (err, chats) => {
        if (err)
            return next(err);

        res.json(chats);
    });
};

// /**
//  * POST /management/updateUser
//  * Update user
//  */
// export let updateUser = (req: Request, res: Response, next: NextFunction) => {
//     const newUser = new UserModel(req.body.user);
//     UserModel.findByIdAndUpdate(req.body.user.id, newUser, {new: true}, (err, chats) => {
//         if (err)
//             return next(err);

//         res.json(chats);
//     });
// };
