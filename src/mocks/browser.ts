import { rest, setupWorker } from "msw";
import { usersData } from "./data/usersData";
export const worker = setupWorker(
  rest.get("/api/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersData));
  })
);
