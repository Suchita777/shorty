import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bodyparser from "body-parser";

const app: Express = express();
const prisma = new PrismaClient();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.get("/:id", async (req: Request, res: Response) => {
  const temp = await prisma.links.findUnique({ where: { id: req.params.id } });
  const link = temp?.link;
  res.redirect(`${link}`);
});

app.post("/api/shorten", async (req: Request, res: Response) => {
  const newShort = await prisma.links.create({ data: { link: req.body.link } });
  const link = newShort.id;
  res.render("shortened", { link });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
