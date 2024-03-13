const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

// app.engine("ejs", ejs);
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render('boilerplate/boilerplate');
});

app.get("/about", (req, res) => {
  res.send('about');
});

app.listen("3000", () => {
  console.log("Listening on port 3000");
});
