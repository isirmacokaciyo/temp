const exp = require("express");
const mongoose = require("mongoose");
const conf = require("./src/configs/conf.json");
require("ejs");

var app = exp();

// database connection \\
mongoose.connect(conf.mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

mongoose.connection.on("error", () => {
  console.error("Connection Error!");
});
// database connection end \\

// configs \\
app.set("view engine", "ejs");
app.set("views", "./src/views");
// configs end \\

// pages \\
app.get("/", function (req, res) {
  res.render("main");
});

// end pages \\
app.listen(3000, () => {
  console.log("listening on port 3000");
});
