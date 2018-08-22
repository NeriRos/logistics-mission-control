import { Schema, model } from "mongoose";
import { SupportDocument } from "../types/Support";
import { IChat, ChatDocument } from "../types/Chat";

const supportSchema = new Schema({
  client: {
    id: { type: String, required: true },
    name: { type: String },
    phone: { type: String },
    business: { type: String }
  },
  representative: {
    id: { type: String },
    name: { type: String },
    picture: { type: String }
  },
  status: { type: Number },
  messages: { type: [{type: Schema.Types.ObjectId, ref: "Chat"}], default: [] },
  users: { type: [{type: Schema.Types.ObjectId, ref: "User"}], default: [] }
}, { timestamps: true, usePushEach: true });

export const SupportModel = model<SupportDocument>("Support", supportSchema, "support");
