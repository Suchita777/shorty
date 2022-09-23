import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("I love suchi");
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
