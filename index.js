const express = require("express");
const path = require("path");

const ejsMate = require("ejs-mate")

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views/"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render('home');
});

app.get("/login", (req, res) => {
  res.render('users/login');
});

app.get("/register", (req, res) => {
  res.render('users/register');
});

app.get("/about", (req, res) => {
  res.send('about');
});

app.listen("3000", () => {
  console.log("Listening on port 3000");
});
