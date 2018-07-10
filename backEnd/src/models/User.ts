import { Schema, model } from "mongoose";
import { User } from "../types/User";
import { createHash } from "crypto";
import { createToken } from "../controllers/authentication";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  name: { type: String },
  code: { type: String },
  friends: { type: Array<String>() },
  token: { type: String }
}, { timestamps: true });

userSchema.pre("save", function(next) {
  if (this.password) {
      this.password = getHash(this.password);
      this.token = createToken(this);
  }

  next();
});

userSchema.methods.comparePassword = function(password: string): boolean {
  return getHash(password) == this.password;
};

export const UserModel = model<User>("User", userSchema, "users");

const getHash = (input: string) => {
  return createHash("sha256").update(input).digest("hex");
};