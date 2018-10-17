"use strict";

import { Response, Request, NextFunction } from "express";
import { UserModel } from "../models/User";
import { USER_PERMISSIONS, isPermitted } from "../types/User";

/**
 * GET /contacts/getFriends
 */
export let getFriends = (req: Request, res: Response, next: NextFunction) => {
    const requestUser = req.user;

    // if (isPermitted(requestUser, USER_PERMISSIONS.LOGISTICS)) {
        UserModel.find({friends: requestUser._id}, (err, friends) => {
            if (err)
                return next(err);

            res.json(friends);
        });
    // } else {
    //     res.json({problem: true, message: "NO PERMISSION TO REQUEST FRIENDS"});
    // }

};