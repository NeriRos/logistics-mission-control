import { Schema, model } from "mongoose";
import { IUser, UserDocument } from "../types/User";
import { createHash } from "crypto";
import { createToken } from "../controllers/user";
import { ISupport, SupportDocument } from "../types/Support";
import { SupportModel } from "../models/Support";

export const userLiteSchema = new Schema({
    email: {type: String},
    name: {type: String},
    picture: {type: String},
    permissions: {type: Number}
});

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  name: { type: String },
  code: { type: String },
  conversants: { type: Array<String>(), default: [] },
  token: { type: String },
  picture: { type: String },
  secured: { type: Boolean },
  permissions: { type: Number },
  supports: { type: [{type: Schema.Types.ObjectId, ref: "Support"}], default: [] }
}, { timestamps: true, usePushEach: true });

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

const getHash = (input: string) => {
  return createHash("sha256").update(input).digest("hex");
};

export const UserModel = model<UserDocument>("User", userSchema, "users");
