import express from "express";
import bodyParser from "body-parser";
import { randomBytes } from "crypto";

const app = express();

app.use(bodyParser.json());

interface post {
  id: string;
  title: string;
}

var comments: { [id: string]: post } = {};

app.listen(5000, () => {
  console.log("Posts service listening on port", 5000);
});
