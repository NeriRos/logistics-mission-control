import * as request from "supertest";
import * as app from "../src/app";

import "mocha";
import { expect } from "chai";

xdescribe("GET /api", () => {
  it("should return 200 OK", () => {
    return request(app).get("/api")
      .expect(200);
  });
});

describe("GET /getFriends", () => {
  it("should return all friends assosiated with id", () => {
    return request(app).get("/getFriends").set("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzI0NDkyNzIsImlhdCI6MTUzMTIzOTY3Miwic3ViIjoiNWI0NGM3YTlkNzVmNjA3Zjc0NjI0ZWM5In0.bfqBe4YIF5YNCHa8bEWJznvIofBTFfO7_-uRGnnWzrE").then((res) => {
      console.log("friends:", res.body);

      return res.accepted;
    });
  });
});

describe("GET /addFriend", () => {
  it("should connect friend", () => {
    return request(app).post("/addFriend").send({email: "test@gmail.com"}).set("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzI0NDkyNzIsImlhdCI6MTUzMTIzOTY3Miwic3ViIjoiNWI0NGM3YTlkNzVmNjA3Zjc0NjI0ZWM5In0.bfqBe4YIF5YNCHa8bEWJznvIofBTFfO7_-uRGnnWzrE").then((res) => {
      console.log("friend added:", res.body);

      return res.accepted;
    });
  });
});
