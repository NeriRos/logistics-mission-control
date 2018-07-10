import * as request from "supertest";
import * as app from "../src/app";

import "mocha";
import { expect } from "chai";

xdescribe("GET /login", () => {
  xit("should return 200 OK", () => {
    return request(app).get("/login")
      .expect(200);
  });
});

xdescribe("GET /signup", () => {
  xit("should return 200 OK", () => {
    return request(app).get("/signup")
      .expect(200);
  });
});


describe("POST /login", () => {
  it("should return message with status 'ok'", (done) => {
    request(app).post("/login")
      .send({email: "neriyarosner@gmail.com", password: "St4rtXDir!p"})
      .set("Accept", "application/json")
      // .expect(200)
      .end((err, res) => {
        console.log("res", res.body);
        // expect(res.body.status).to.be("ok");
        done();
      });
  });
});

xdescribe("POST /signup", () => {
  it("should return message with status 'ok'", (done) => {
    request(app).post("/signup")
      .send({email: "neriyarosner@gmail.com", password: "testtest123"})
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        expect(res.body.status).to.be("ok");
        done();
      });
  });
});
