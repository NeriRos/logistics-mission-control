"use strict";

import * as OAuth2Server from "oauth2-server";
import { User } from "../models/User";

/**
 * GET /api
 * List of API examples.
 */
export let authenticate = (req: Request, res: Response) => {
    const oauth = new OAuth2Server({
        model: this.User
      });

    const request = new OAuth2Server.Request({
        method: "GET",
        query: {},
        headers: {Authorization: "Bearer foobar"}
    });

    const response = new OAuth2Server.Response({
        headers: {}
    });

    oauth.authenticate(request, response)
    .then((token) => {
        // The request was successfully authenticated.
    })
    .catch((err) => {
        // The request failed authentication.
    });
};

