import { Schema, model } from "mongoose";
import { User } from "../types/User";
import { createHash } from "crypto";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String },
  profile: {
    name: { type: String },
    gender: { type: String },
    location: { type: String }
  },
  code: { type: String }
}, { timestamps: true });

userSchema.methods.comparePassword = (password: string) => {
  return getHash(password) == this.password;
};

export const UserModel = model<User>("User", userSchema, "users");

const getHash = (input: string) => {
  return createHash("sha256").update(input).digest("hex");
};