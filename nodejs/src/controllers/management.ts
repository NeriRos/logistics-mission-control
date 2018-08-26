"use strict";

import { Response, Request, NextFunction } from "express";
import { UserModel } from "../models/User";
import { SupportModel } from "../models/Support";
import { ChatModel } from "../models/Chat";


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
