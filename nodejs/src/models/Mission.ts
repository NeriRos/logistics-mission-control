import { Schema, model } from "mongoose";
import { MissionDocument, MISSION_STATUS, MISSION_URGENCY } from "../types/Mission";
import { userLiteSchema } from "../models/User";

const missionSchema = new Schema({
  body: {
    title: {type: String, required: true},
    description: {type: String, default: ""},
    package: {type: String}
  },
  status: {type: Number, default: MISSION_STATUS.NEW},
  date: {type: Date},
  creator: {type: userLiteSchema, required: true},
  receivers: {type: [userLiteSchema], default: [], required: true},
  urgency: {type: Number, default: MISSION_URGENCY.LOW},
  relatedChatIds: [{type: Schema.Types.ObjectId, ref: "Chat"}],
  type: String
}, { timestamps: true, usePushEach: true });

export const MissionModel = model<MissionDocument>("Mission", missionSchema, "missions");