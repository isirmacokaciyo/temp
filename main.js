const exp = require("express");
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
app.listen(3000, () => {
  console.log("listening on port 3000");
});
