import * as request from "supertest";
import * as app from "../src/app";

import "mocha";
import { expect } from "chai";

xdescribe("GET /random-url", () => {
  it("should return 404", (done) => {
    request(app).get("/reset")
      .expect(404, done);
  });
});
