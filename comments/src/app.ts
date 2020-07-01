import express from "express";
import bodyParser from "body-parser";
import { randomBytes } from "crypto";
import { nextTick } from "process";

const app = express();

app.use(bodyParser.json());

interface comment {
  id: string;
  content: string;
}

var commentsByPostId: { [PostId: string]: Array<comment> } = {};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.get("/post/:id/comments", (req, res, next) => {
  res.status(200).json(commentsByPostId[req.params.id]);
});

app.post("/post/:id/comments", (req, res, next) => {
  const postID: string = req.params.id;
  const commentID = randomBytes(16).toString("hex");
  var newComment = {
    id: commentID,
    content: req.body.content,
  };
  console.log(req.body.content);
  if (commentsByPostId[postID]) {
    commentsByPostId[postID].push(newComment);
    res.status(200).json(commentsByPostId[req.params.id]);
  } else {
    commentsByPostId[postID] = [];
    commentsByPostId[postID].push(newComment);
    res.status(200).json(commentsByPostId[req.params.id]);
  }
});

app.listen(5001, () => {
  console.log("Comments service listening on port", 5001);
});
