import * as errorHandler from "errorhandler";
import * as WebSocket from "ws";
import { websocketChatServerHandler } from "./controllers/clientSocketApi";
import { Connection } from "mongoose";

declare let global: {connections: {chats: Array<Connection>, missions: Array<Connection>}};
global.connections = {chats: [], missions: []};

const app = require("./app");

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

let server;

if (process.env.PASSENGER_ISHTTP == "yes" || !process.env.PASSENGER_ISHTTP) {
  /**
   * Start Express server.
   */
  server = app.listen(app.get("port"), app.get("host"), () => {
    console.log(("  App is running at http://%s:%d in %s mode"), app.get("host"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
  });
}

if (process.env.PASSENGER_ISWEBSOCK == "yes" || !process.env.PASSENGER_ISWEBSOCK) {
  const websocketChatServer = new WebSocket.Server({ port: process.env.WS_CHAT_PORT });
  websocketChatServerHandler(websocketChatServer);
}


export = server;
