"use strict";

import { Response, Request, NextFunction } from "express";
import { MissionModel } from "../models/Mission";
import { MISSION_STATUS } from "../types/Mission";
import { Mongoose } from "mongoose";

const mongooseInstance = (new Mongoose());

/**
 * GET /missions/getMissionsByCreatorID/:creatorID
 * Return missions by creator id.
 */
export let getMissionsByCreatorID = (req: Request, res: Response, next: NextFunction) => {
    const creatorID = mongooseInstance.Types.ObjectId(req.params.creatorID);

    MissionModel.find({"creator._id": creatorID}, (err, missions) => {
        if (err)
            return next(err);

        if (!missions)
            return res.json({error: true, status: "error", message: "no mission found for creator id: " + creatorID});

        res.json(missions);
    });
};

/**
 * GET /missions/getUnhandledMissions/:receiverID
 * Return unhandledMissions by receiver id.
 */
export let getUnhandledMissions = (req: Request, res: Response, next: NextFunction) => {
    const receiverID = mongooseInstance.Types.ObjectId(req.params.receiverID);

    MissionModel.find({"receivers._id": receiverID}, (err, missions) => {
        if (err)
            return next(err);

        if (!missions)
            return res.json({error: true, status: "error", message: "no mission found for creator id: " + receiverID});

        res.json(missions);
    });
};

/**
 * POST /missions/createMission
 * Create new mission.
 */
export let createMission = (req, res, next) => {
    const newMissionDocument = new MissionModel(req.body);

    newMissionDocument.save((err, savedMission) => {
        if (err)
            return next(err);

        res.json(savedMission);
    });
};

/**
 * GET /missions/deleteMission/:missionId
 * Create new mission.
 */
export let deleteMission = (req, res, next) => {
    MissionModel.findByIdAndRemove(req.params.missionId, (err, removedMission) => {
        if (err)
            return next(err);

        res.json({problem: false, removedMission});
    });
};

/**
 * GET /missions/changeMissionStatus/:missionId/:status
 * change mission status.
 */
export let changeMissionStatus = (req: Request, res: Response, next: NextFunction) => {
    const missionId: string = req.params.missionId;
    const status: string = req.params.status;


    if (Object.keys(MISSION_STATUS).map(key => MISSION_STATUS[key] + "").indexOf(status) !== -1) {
        MissionModel.findByIdAndUpdate(missionId, {status: eval(status)}, {new: true}, (err, mission) => {
            if (err)
                return next(err);

            res.json(mission);
        });
    } else {
        res.json({problem: true, message: "status is incorrect"});
    }
};