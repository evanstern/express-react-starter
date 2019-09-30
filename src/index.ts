import express, { Application } from "express";

const app: Application = express();

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("App is listening on port 8000!");
});
