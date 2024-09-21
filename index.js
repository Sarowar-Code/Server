require("dotenv").config();
//console.log(process.env);  remove this after you've confirmed it is working
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/sarw", function (req, res) {
  res.send("Hello sarw");
});

app.listen(process.env.PORT, function (req, res) {
  console.log(`Listining to port ${process.env.PORT}`);
});
