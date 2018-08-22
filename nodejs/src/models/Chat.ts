import { Schema, model } from "mongoose";
import { ChatDocument } from "../types/Chat";

const chatSchema = new Schema({
  id: { type: String, required: true },
  message: { type: String, default: "" },
  from: { type: String },
  to: { type: String },
  date: { type: Date },
  status: { type: Number, default: 0 },
  isSupport: { type: Boolean },
  initial: { type: Boolean, default: false },
}, { timestamps: true, usePushEach: true });

export const ChatModel = model<ChatDocument>("Chat", chatSchema, "chats");