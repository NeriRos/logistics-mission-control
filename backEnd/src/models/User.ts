import * as mongoose from "mongoose";

export type User = mongoose.Document & {
  id: string,
  email: string,
  password: string,
  name: string,
  code: string
};

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  email: {type: String, required: true},
  password: {type: String},
  name: {type: String},
  code: {type: String}
}, { timestamps: true });

export const Glasses = mongoose.model<User>("Item", userSchema, "users");