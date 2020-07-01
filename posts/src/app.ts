import express from "express";
import bodyParser from "body-parser";
import { randomBytes } from "crypto";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

interface post {
  id: string;
  title: string;
}

var posts: Array<post> = [];

app.get("/posts", (req, res, next) => {
  res.status(200).json(posts);
});

app.post("/posts", (req, res, next) => {
  const title: string = req.body.title;
  const id: string = randomBytes(16).toString("hex");
  posts.push({ id: id, title: title });
  res.status(201).json({ message: "Post Added" });
});

app.listen(5000, () => {
  console.log("Posts service listening on port", 5000);
});
