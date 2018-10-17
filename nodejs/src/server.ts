import * as errorHandler from "errorhandler";
import * as WebSocket from "ws";
import { websocketChatServerHandler } from "./controllers/clientSocketApi";
import { Connection } from "mongoose";

declare let global: {connections: {chat: Array<Connection>, missions: Array<Connection>}};
global.connections = {chat: [], missions: []};

const app = require("./app");

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), app.get("host"), () => {
  console.log(("  App is running at http://%s:%d in %s mode"), app.get("host"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});

const websocketChatServer = new WebSocket.Server({ port: 8890 });
// const websocketMissionsServer = new WebSocket.Server({ port: 8891 });

websocketChatServerHandler(websocketChatServer);
// websocketMissionsServerHandler(websocketMissionsServer);

export = server;