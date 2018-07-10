import * as express from "express";
import * as compression from "compression";  // compresses requests
import * as session from "express-session";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as lusca from "lusca";
import * as dotenv from "dotenv";
import * as mongo from "connect-mongo";
import * as path from "path";
import * as mongoose from "mongoose";
import * as expressValidator from "express-validator";
import * as bluebird from "bluebird";
import * as passport from "passport";

const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });

// Controllers (route handlers)
import * as apiController from "./controllers/api";
import * as chatController from "./controllers/chat";
import * as homeController from "./controllers/home";
import * as authenticate from "./controllers/authentication";
import * as passportConfig from "./config/passport";

// Create Express server
const app = express();

// Connect to MongoLAB
const mongoUrl = process.env.MONGOLAB_URI;
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, {useMongoClient: true}).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  process.exit();
});

// Express configuration
app.set("port", process.env.HTTP_PORT || 80);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 3600000 * 24 * 7,
    expires: new Date(Date.now() + 3600000 * 24 * 7),
    secure: false,
    domain: "*"
  },
  store: new MongoStore({
    url: mongoUrl,
    autoReconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use((req, res, next) => {
  // After successful login, redirect back to the intended page
  if (!req.user &&
    req.path !== "/login" &&
    req.path !== "/signup" &&
    !req.path.match(/^\/auth/) &&
    !req.path.match(/\./)) {
    // req.session.returnTo = req.path;
    // res.status(502).send("ERROR: no req.user");
  } else if (req.user &&
    req.path == "/account") {
    // req.session.returnTo = req.path;
    // res.status(502).send("ERROR: no req.user");
  }
  next();
});


/**
 * Authentication
 */
app.post("/login", authenticate.postLogin);
app.get("/logout", authenticate.logout);
app.post("/forgot", authenticate.postForgot);
app.post("/reset/:token", authenticate.postReset);
app.post("/signup", authenticate.postSignup);


/**
 * API app routes.
 */
app.get("/api", apiController.getApi);
app.get("/api/test", passportConfig.isAuthenticated, apiController.test);

/**
 * Protected routes
 */
app.get("/account", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, authenticate.getAccount);
app.post("/account/profile", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, authenticate.postUpdateProfile);
app.post("/account/password", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, authenticate.postUpdatePassword);
app.post("/account/delete", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, authenticate.postDeleteAccount);
app.get("/account/unlink/:provider", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, authenticate.getOauthUnlink);


app.get("/getFriends", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, authenticate.getFriends);

/**
 * Chat routes
 */
app.get("/chat/getChats", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, chatController.getChats);
app.post("/chat/sendMessage", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, chatController.sendMessage);


/**
 * Main app route.
 */
app.get("*", homeController.index);

module.exports = app;