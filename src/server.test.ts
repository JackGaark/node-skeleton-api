import request, { Response } from "supertest";
import { app } from "./app";
import { configurations } from "./shared/configurations/";

describe("GET /v1/version", () => {
  let agent;
  let headers = { "api-key": configurations.apiKey };
  beforeAll(() => {
    agent = request(app);
  });
  it("should return a status 200 and content-type json if the api-key header is set", async () => {
    let res: Response = await agent.get("/v1/version").set(headers);
    expect(res.status).toEqual(200);
    expect(res.type).toEqual("application/json");
  });
  it("should return a status 401 if the api-key header isn't set", async () => {
    let res: Response = await agent.get("/v1/version");
    expect(res.status).toEqual(401);
  });
});
