const express = require("express");

const app = express();

// Express middleware
// app.use((req, res, next) => {
//   console.log("<h1>Hello</h1>");
//   next();
// });

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  // console.log(req.query)
  // req.body
  // req.header
  // req.params
  res.status(404).send("not found");
  res.send("getting root");
});

app.get("/profile", (req, res) => {
  res.send("getting profile");
});

app.post("/profile", (req, res) => {
  console.log(req.body);
  res.send("Success");
});

app.delete("/profile", (req, res) => {
  const user = {
    name: "Sally",
    hobby: "Football",
  };
  res.send(user);
});

app.listen(3000);
