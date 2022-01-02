const exp = require("express");
const conf = require("./src/configs/conf.json");
require("ejs");

var app = exp();

// configs \\
app.set("view engine", "ejs");
app.set("views", "./src/views");
// configs end \\

// pages \\
app.get("/", function (req, res) {
  res.render("main");
});

// end pages \\
app.listen(conf.port, function () {
  console.log("listening on port 3000");
});
