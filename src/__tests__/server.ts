import { app } from "../../server/server";
const supertest = require("supertest");
// const port = process.env.NODE_ENV === "test" ? 3001 : 3000;

test("GET /api/posts", async () => {
  const response = supertest(app).get("/");
  console.log(response);
});
