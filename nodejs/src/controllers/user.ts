"use strict";
import { UserModel } from "../models/User";
import { IUser, UserDocument, USER_PERMISSIONS } from "../types/User";
import { Response, Request, NextFunction } from "express";
import { WriteError } from "mongodb";
import { randomBytes } from "crypto";
import * as async from "async";
import * as passport from "passport";
import * as nodemailer from "nodemailer";
import * as jwt from "jwt-simple";
import * as moment from "moment";

/**
 * POST /login
 * Sign in using email and password.
 */
export let postLogin = (req: Request, res: Response, next: NextFunction) => {
  req.assert("email", "Email is not valid").isEmail();
  req.assert("password", "Password cannot be blank").notEmpty();
  req.sanitize("email").normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    console.log("errors", errors);
    return res.json({status: "error", error: errors});
  }

  passport.authenticate("local", (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user   : user,
        error  : (err.error || {}).message,
        code : err.code,
        info   : info
      });
    }

    req.login(user, (err) => {
      if (err)
        next(err);

      user.token = createToken(user);
      return res.json({user: user});
    });
  })(req, res, next);
};

/**
 * GET /logout
 * Log out.
 */
export let logout = (req: Request, res: Response) => {
  req.logout();
  res.json({status: "ok", error: false});
};

/**
 * POST /signup
 * Create a new local account.
 */
export let postSignup = (req: Request, res: Response, next: NextFunction) => {
  const DEFAULT_USER_PICTURE_NAME = "default_user";

  req.assert("email", "Email is not valid").isEmail();
  req.assert("password", "Password must be at least 4 characters long").len({ min: 4 });
  req.assert("confirmPassword", "Passwords must match").equals(req.body.password);
  req.sanitize("email").normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    console.log("errors", errors);
    return res.json({status: "error", error: errors});
  }

  const permission = req.body.code === "LightXAdmins20!8GROUP" ? USER_PERMISSIONS.ADMIN : USER_PERMISSIONS.DELIVERY;

  const user = new UserModel({
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    name: req.body.name,
    code: req.body.code,
    picture: req.body.picture || DEFAULT_USER_PICTURE_NAME,
    permission: permission,
    supports: [],
  });

  UserModel.findOne({ email: req.body.email }, (err, existingUser) => {
    if (err) { return next(err); }
    if (existingUser)
      return res.json({status: "error", error: true, msg: "Account with that email address already exists."});

    user.token = createToken(user);
    user.save((err) => {
      if (err) { return next(err); }

    req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }

        res.json({status: "OK", error: false, user: user});
      });
    });
  });
};

/**
 * GET /account
 * returns the current loggedin account
 */
export let getAccount = (req: Request, res: Response) => {
  res.json(req.user);
};

/**
 * POST /account/profile
 * Update profile information.
 */
export let postUpdateProfile = (req: Request, res: Response, next: NextFunction) => {
  const newUser = new UserModel(req.body);
  UserModel.findByIdAndUpdate(req.body._id, newUser, {new: true}, (err, updatedUser) => {
      if (err)
          return next(err);

      res.json(updatedUser);
  });
};

/**
 * POST /account/password
 * Update current password.
 */
export let postUpdatePassword = (req: Request, res: Response, next: NextFunction) => {
  req.assert("password", "Password must be at least 4 characters long").len({ min: 4 });
  req.assert("confirmPassword", "Passwords do not match").equals(req.body.password);

  const errors = req.validationErrors();

  if (errors) {
    console.log("errors", errors);
    return res.redirect("/account");
  }

  UserModel.findById(req.user.id, (err, user: UserDocument) => {
    if (err) { return next(err); }
    user.password = req.body.password;
    user.save((err: WriteError) => {
      if (err) { return next(err); }
      console.log("success", { msg: "Password has been changed." });
      res.redirect("/account");
    });
  });
};

/**
 * POST /account/delete
 * Delete user account.
 */
export let postDeleteAccount = (req: Request, res: Response, next: NextFunction) => {
  UserModel.remove({ _id: req.user.id }, (err) => {
    if (err) { return next(err); }
    req.logout();
    console.log("info", { msg: "Your account has been deleted." });
    res.redirect("/");
  });
};

/**
 * GET /account/unlink/:provider
 * Unlink OAuth provider.
 */
export let getOauthUnlink = (req: Request, res: Response, next: NextFunction) => {
  const provider = req.params.provider;
  UserModel.findById(req.user.id, (err, user: any) => {
    if (err) { return next(err); }
    user[provider] = undefined;
    user.tokens = user.tokens.filter((token: any) => token.kind !== provider);
    user.save((err: WriteError) => {
      if (err) { return next(err); }
      console.log("info", { msg: `${provider} account has been unlinked.` });
      res.redirect("/account");
    });
  });
};

/**
 * POST /reset/:token
 * Process the reset password request.
 */
export let postReset = (req: Request, res: Response, next: NextFunction) => {
  req.assert("password", "Password must be at least 4 characters long.").len({ min: 4 });
  req.assert("confirm", "Passwords must match.").equals(req.body.password);

  const errors = req.validationErrors();

  if (errors) {
    console.log("errors", errors);
    return res.redirect("back");
  }

  async.waterfall([
    function resetPassword(done: Function) {
      UserModel
        .findOne({ passwordResetToken: req.params.token })
        .where("passwordResetExpires").gt(Date.now())
        .exec((err, user: any) => {
          if (err) { return next(err); }
          if (!user) {
            console.log("errors", { msg: "Password reset token is invalid or has expired." });
            return res.redirect("back");
          }
          user.password = req.body.password;
          user.passwordResetToken = undefined;
          user.passwordResetExpires = undefined;
          user.save((err: WriteError) => {
            if (err) { return next(err); }
            req.logIn(user, (err) => {
              done(err, user);
            });
          });
        });
    },
    function sendResetPasswordEmail(user: IUser, done: Function) {
      const transporter = nodemailer.createTransport({
        service: "SendGrid",
        auth: {
          user: process.env.SENDGRID_USER,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
      const mailOptions = {
        to: user.email,
        from: "tech@cargo-express.co.il",
        subject: "Your password has been changed",
        text: `Hello,\n\nThis is a confirmation that the password for your account ${user.email} has just been changed.\n`
      };
      transporter.sendMail(mailOptions, (err) => {
        console.log("success", { msg: "Success! Your password has been changed." });
        done(err);
      });
    }
  ], (err) => {
    if (err) { return next(err); }
    res.redirect("/");
  });
};

/**
 * POST /forgot
 * Create a random token, then the send user an email with a reset link.
 */
export let postForgot = (req: Request, res: Response, next: NextFunction) => {
  req.assert("email", "Please enter a valid email address.").isEmail();
  req.sanitize("email").normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    console.log("errors", errors);
    return res.redirect("/forgot");
  }

  async.waterfall([
    function createRandomToken(done: Function) {
      randomBytes(16, (err, buf) => {
        const token = buf.toString("hex");
        done(err, token);
      });
    },
    function setRandomToken(token: any, done: Function) {
      nodemailer.findOne({ email: req.body.email }, (err, user: any) => {
        if (err) { return done(err); }
        if (!user) {
          console.log("errors", { msg: "Account with that email address does not exist." });
          return res.redirect("/forgot");
        }
        user.passwordResetToken = token;
        user.passwordResetExpires = Date.now() + 3600000; // 1 hour
        user.save((err: WriteError) => {
          done(err, token, user);
        });
      });
    },
    function sendForgotPasswordEmail(token: any, user: IUser, done: Function) {
      const transporter = nodemailer.createTransport({
        service: "SendGrid",
        auth: {
          user: process.env.SENDGRID_USER,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
      const mailOptions = {
        to: user.email,
        from: "tech@cargo-express.co.il",
        subject: "Reset your password",
        text: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
          Please click on the following link, or paste this into your browser to complete the process:\n\n
          http://${req.headers.host}/reset/${token}\n\n
          If you did not request this, please ignore this email and your password will remain unchanged.\n`
      };
      transporter.sendMail(mailOptions, (err) => {
        console.log("info", { msg: `An e-mail has been sent to ${user.email} with further instructions.` });
        done(err);
      });
    }
  ], (err) => {
    if (err) { return next(err); }
    res.redirect("/forgot");
  });
};

/**
 * GET /getConversants
 * returns the ids of all account assosiated with the request account
 */
export let getConversants = (req: Request, res: Response, next: NextFunction) => {
  UserModel.find({conversants: req.user._id}, (err, users) => {
      if (err)
          return next(err);

      const conversants = users.map(user => {
          return {
              _id: user._id,
              email: user.email,
              name: user.name,
              picture: user.picture
          };
      });

      res.json(conversants);
  });
};

/**
 * POST /addConversants
 * returns the ids of all account assosiated with the request account
 */
export let addConversant = (req: Request, res: Response, next: NextFunction) => {
  req.assert("email", "Email is not valid").isEmail();
  req.sanitize("email").normalizeEmail({ gmail_remove_dots: false });

  const email = req.body.email;
  const userID = req.user._id;

  const errors = req.validationErrors();

  if (errors) {
      console.log("errors", errors);
      return res.json({status: "error", error: errors});
  }

  UserModel.findOne({email: email}, (err, conversant) => {
      if (err)
          return next(err);
      if (!conversant)
        return res.json({status: "no conversant", code: 1});
      if (conversant.conversants.indexOf(userID) != -1)
          return res.json({status: "already added", code: 2});

      const conversantDetails = {
        email: conversant.email,
        name: conversant.name,
        picture: conversant.picture
      };

      conversant.conversants.push(userID);
      conversant.save((err) => {
          if (err)
              return next(err);

          if (req.user.conversants.indexOf(userID) == -1) {
              req.user.conversants.push(conversant._id);
              req.user.save(() => {
                  if (err)
                      return next(err);

                  res.json({status: "ok", user: conversantDetails});
              });
          } else {
            res.json({status: "ok", msg: "waiting accept", user: conversantDetails, code: 3});
          }
      });
  });
};

export let createToken = (user?: UserDocument) => {
  if (user) {
    const playload = {
      exp: moment().add(14, "days").unix(),
      iat: moment().unix(),
      sub: user._id
    };
    return jwt.encode(playload, process.env.TOKEN_SECRET);
  }

  return undefined;
};