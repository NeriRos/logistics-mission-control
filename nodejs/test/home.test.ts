import * as request from "supertest";
import * as app from "../src/app";

import "mocha";
import { expect } from "chai";

xdescribe("GET /", () => {
  it("should return 200 OK", (done) => {
    request(app).get("/")
      .expect(200, done);
  });
});
