import { Schema, model } from "mongoose";
import { User } from "../types/User";
import { createHash } from "crypto";
import { createToken } from "../controllers/user";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  code: { type: String },
  friends: { type: Array<String>(), default: [] },
  token: { type: String },
  picture: { type: String },
  secured: { type: Boolean }
}, { timestamps: true });

userSchema.pre("save", function(next) {
  if (this.password && this.isNew) {
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