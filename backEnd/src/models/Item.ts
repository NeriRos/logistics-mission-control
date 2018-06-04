import * as mongoose from "mongoose";

export type ItemModel = mongoose.Document & {
  id: string
};

const itemSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true });

export const Glasses = mongoose.model<ItemModel>("Item", itemSchema, 'items');