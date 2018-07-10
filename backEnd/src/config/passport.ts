
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import { Request, Response, NextFunction } from "express";
import * as passport from "passport";
import * as _ from "lodash";

import { UserModel } from "../models/User";
import { User } from "../types/User";

passport.serializeUser<any, any>((user: User, done) => {
  console.log("Serializing user id:", user._id);
  done(undefined, user._id);
});

passport.deserializeUser((id, done) => {
  UserModel.findById(id, (err, user) => {
    console.log(user);
    done(err, user);
  });
});

/**
 * Sign in using Email and Password.
 */
passport.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
  UserModel.findOne({ email: email.toLowerCase() }, (err, user: any) => {

    if (err) { return done(err); }
    if (!user) {
      return done(undefined, false, { message: `Email ${email} not found.` });
    }

    if (user.comparePassword(password)) {
        return done(undefined, user);
    }
  });
}));

/**
 * Bearer authentication.
 */
passport.use(new BearerStrategy((token: string, done: Function) => {
    UserModel.findOne({_id: getID(token)}).exec().then((user) => {
        if (!user) { return done(undefined, false); }
        return done(undefined, user, { scope: "read" });
    }).catch(err => {
        if (err) { return done(err); }
    });
}));

/**
 * Login Required middleware.
 */
export let isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.url, "isAuthenticated:", req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(501).json({msg: "unauthenticated"});
};

/**
 * Authorization Required middleware.
 */
export let isAuthorized = (req: Request, res: Response, next: NextFunction) => {
  const provider = req.path.split("/").slice(-1)[0];

  if (_.find(req.user.tokens, { kind: provider })) {
    next();
  } else {
    res.redirect(`/auth/${provider}`);
  }
};

const getID = (payload: string) => {
  payload = payload.split(".")[1];
  payload = Buffer.from(payload, "base64").toString("utf8");
  payload = JSON.parse(payload);
  return payload.sub;
};