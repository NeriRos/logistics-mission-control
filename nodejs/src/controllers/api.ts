"use strict";

import { Response, Request, NextFunction } from "express";


/**
 * GET /api
 * List of API examples.
 */
export let getApi = (req: Request, res: Response) => {
  res.render("api/index", {
    title: "API Examples"
  });
};

/**
 * GET /test
 * List of API examples.
 */
export let test = (req: Request, res: Response) => {
  res.json({secret: "tesfdffeeacdc"});
};