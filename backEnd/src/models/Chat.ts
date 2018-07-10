import { Schema, model } from "mongoose";
import { ChatDocument } from "../types/Chat";

const chatSchema = new Schema({
  id: { type: String, unique: true, required: true },
  message: { type: String },
  from: { type: String },
  to: { type: String },
  date: { type: Date }
}, { timestamps: true });

export const ChatModel = model<ChatDocument>("Chat", chatSchema, "chats");