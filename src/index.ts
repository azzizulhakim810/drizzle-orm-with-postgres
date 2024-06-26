import express, { Express, Request, Response } from "express";
import { db } from "./db/db";
import { User } from "./db/schema";
require("dotenv").config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  runQuery();

  res.send("Hello From Typescript Express Server");
});

const runQuery = async () => {
  const result = await db.insert(User).values({
    fullName: "Azzizul",
    phone: "01611725282",
    email: "azzizul.hakim202@gmail.com",
  });
  console.log(JSON.stringify(result, null, 2));

  const resultRes = await db.select().from(User);
  console.log(JSON.stringify(resultRes, null, 2));
};

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
