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
import * as flash from "connect-flash";

const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env" });

// Controllers (route handlers)
import * as apiController from "./controllers/api";
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: mongoUrl,
    autoReconnect: true
  })
}));
app.use((req, res, next) => {
  // After successful login, redirect back to the intended page
  if (!req.user &&
    req.path !== "/login" &&
    req.path !== "/signup" &&
    !req.path.match(/^\/auth/) &&
    !req.path.match(/\./)) {
    req.session.returnTo = req.path;
  } else if (req.user &&
    req.path == "/account") {
    req.session.returnTo = req.path;
  }
  next();
});

/**
 * API app routes.
 */
app.get("/api", apiController.getApi);
app.get("/api/test", passportConfig.isAuthenticated, apiController.test);

/**
 * Authentication
 */
app.get("/login", authenticate.getLogin);
app.post("/login", authenticate.postLogin);
app.get("/logout", authenticate.logout);
app.get("/forgot", authenticate.getForgot);
app.post("/forgot", authenticate.postForgot);
app.get("/reset/:token", authenticate.getReset);
app.post("/reset/:token", authenticate.postReset);
app.get("/signup", authenticate.getSignup);
app.post("/signup", authenticate.postSignup);
app.get("/account", passportConfig.isAuthenticated, authenticate.getAccount);
app.post("/account/profile", passportConfig.isAuthenticated, authenticate.postUpdateProfile);
app.post("/account/password", passportConfig.isAuthenticated, authenticate.postUpdatePassword);
app.post("/account/delete", passportConfig.isAuthenticated, authenticate.postDeleteAccount);
app.get("/account/unlink/:provider", passportConfig.isAuthenticated, authenticate.getOauthUnlink);

/**
 * Main app route.
 */
app.get("*", homeController.index);


module.exports = app;