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
import * as userController from "./controllers/user";
import * as supportController from "./controllers/support";
import * as managementController from "./controllers/management";
import * as missionsController from "./controllers/missions";
import * as contactsController from "./controllers/contacts";
import * as passportConfig from "./config/passport";
import * as dynamiChatApiController from "./controllers/dynamiChatApi";

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
app.set("host", process.env.HOST || "localhost");
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/json", strict: false }));
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

// Cors - allowed origins
app.use(function(req, res, next) {

  const allowedOrigins = [

    "http://localhost" + ":" + process.env.ACTUAL_HTTP_PORT,
    "http://127.0.0.1" + ":" + process.env.ACTUAL_HTTP_PORT,
    "http://localhost" + ":" + process.env.HTTP_PORT,
    "https://localhost" + ":" + process.env.HTTPS_PORT,
    "http://127.0.0.1" + ":" + process.env.HTTP_PORT,
    "https://127.0.0.1" + ":" + process.env.HTTPS_PORT,

    "http://" + process.env.SERVER_IP + ":" + process.env.HTTP_PORT,
    "http://" + process.env.SERVER_DNS + ":" + process.env.HTTP_PORT,

    "http://" + process.env.SERVER_IP + ":" + process.env.ACTUAL_HTTP_PORT,
    "http://" + process.env.SERVER_DNS + ":" + process.env.ACTUAL_HTTP_PORT,

    "https://" + process.env.SERVER_IP + ":" + process.env.HTTPS_PORT,
    "https://" + process.env.SERVER_DNS + ":" + process.env.HTTPS_PORT
  ];

  const origin = <string>req.headers.origin;

  if (allowedOrigins.indexOf(origin) > -1) {
      res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Accepts");
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});

/**
 * Authentication
 */
app.post("/login", userController.postLogin);
app.get("/logout", userController.logout);
app.post("/forgot", userController.postForgot);
app.post("/reset/:token", userController.postReset);
app.post("/signup", userController.postSignup);


/**
 * API app routes.
 */
app.get("/api", apiController.getApi);
app.get("/api/test", passportConfig.isAuthenticated, apiController.test);
app.get("/api/test2", apiController.test);

/**
 * Protected routes
 */
app.get("/account", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, userController.getAccount);
app.post("/account/profile", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, userController.postUpdateProfile);
app.post("/account/password", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, userController.postUpdatePassword);
app.post("/account/delete", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, userController.postDeleteAccount);
app.get("/account/unlink/:provider", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, userController.getOauthUnlink);
app.get("/getConversants", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, userController.getConversants);
app.post("/addConversant", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, userController.addConversant);


/**
 * Chat routes
 */
app.get("/chat/getChats/:conversantId", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, chatController.getChats);
app.post("/chat/sendMessage", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, chatController.sendMessage);
app.get("/chat/getConversant/:conversantId", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, chatController.getConversant);

/**
 * Support routes
 */
app.post("/support/openSupport", passportConfig.newSupportAuthorization, passportConfig.isAuthenticated, supportController.openSupport);
app.post("/support/sendMessage", passportConfig.supportAuthorization, passportConfig.isAuthenticated, supportController.sendMessage);
app.get("/support/getSupports", passportConfig.supportAuthorization, passportConfig.isAuthenticated, supportController.getSupports);
app.get("/support/getSupportById/:supportId", passportConfig.supportAuthorization, passportConfig.isAuthenticated, supportController.getSupportById);
app.get("/support/getConversant/:supportId", passportConfig.supportAuthorization, passportConfig.isAuthenticated, supportController.getSupportById);
app.get("/support/getSupportRepresentative/:supportId", passportConfig.supportAuthorization, passportConfig.isAuthenticated, supportController.getSupportRepresentative);
app.get("/support/getChats/:supportId", passportConfig.supportAuthorization, passportConfig.isAuthenticated, supportController.getChats);
app.get("/support/takeSupport/:supportID", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, supportController.takeSupport);

/**
 * Management routes
 */
app.get("/management/getUsers", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, managementController.getUsers);
app.get("/management/getChats", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, managementController.getChats);
app.get("/management/getSupports", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, managementController.getSupports);
app.post("/management/updateSupport", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, managementController.updateSupport);
app.get("/management/deleteSupport/:supportId", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, managementController.deleteSupport);

/**
 * Missions routes
 */
app.get("/missions/getMissionsByCreatorID/:creatorID", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, missionsController.getMissionsByCreatorID);
app.get("/missions/getUnhandledMissions/:receiverID", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, missionsController.getUnhandledMissions);
app.get("/missions/changeMissionStatus/:missionId/:status", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, missionsController.changeMissionStatus);
app.post("/missions/createMission", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, missionsController.createMission);

/**
 * dynamiChatApi routes
 */
app.post("/dynamiChatApi/:event", passportConfig.supportAuthorization, passportConfig.isAuthenticated, dynamiChatApiController.dynamiChatApi);

/**
 * Contacts routes
 */
app.get("/contacts/getConversants", passport.authenticate("bearer", { session: false }), passportConfig.isAuthenticated, contactsController.getConversants);


app.get("*", function (req, res, next) {
  res.sendFile(path.resolve("dist/public/index.html"));
});


/**
 * Main app route.
 */
app.get("*", homeController.index);

module.exports = app;
