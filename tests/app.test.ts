import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should return Hello World!", done => {
    request(app)
      .get("/")
      .expect(200, done);
  });
});
