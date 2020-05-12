const express = require("express");
const app = express();

const myLogger = require("./logger");

app.use(myLogger());

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Application is up on port 3000");
});
