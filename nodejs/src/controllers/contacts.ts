"use strict";

import { Response, Request, NextFunction } from "express";
import { UserModel } from "../models/User";
import { USER_PERMISSIONS, isPermitted } from "../types/User";

/**
 * GET /contacts/getConversants
 */
export let getConversants = (req: Request, res: Response, next: NextFunction) => {
    const requestUser = req.user;

    // if (isPermitted(requestUser, USER_PERMISSIONS.LOGISTICS)) {
        UserModel.find({conversants: requestUser._id}, (err, conversants) => {
            if (err)
                return next(err);

            res.json(conversants);
        });
    // } else {
    //     res.json({problem: true, message: "NO PERMISSION TO REQUEST FRIENDS"});
    // }

};