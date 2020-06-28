import express from "express";
import bodyParser from "body-parser";
import { randomBytes } from "crypto";

const app = express();

app.use(bodyParser.json());

var posts: { [id: string]: string } = {};

app.get("/posts", (req, res, next) => {
  res.status(200).json(posts);
});

app.post("/posts", (req, res, next) => {
  const title: string = req.body.title;
  const id: string = randomBytes(16).toString("hex");
  posts[id] = title;
  res.status(201).json({ message: "Post Added" });
});

app.listen(5000, () => {
  console.log("Posts service listening on port", 5000);
});
