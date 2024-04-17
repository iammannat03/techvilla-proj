// if (process.env.NODE_ENV != "production") {
//   require("dotenv").config();
// }
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const AppTest = require("./models/test.js");
app.use(express.urlencoded({ extended: true }));

// // database setup
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/techvilla");
}

// testing app server
app.get("/test", (req, res) => {
  res.json({ message: "hello, testing is complete" });
});
app.get("/testDB", (req, res) => {
  const data = AppTest.find({});
  console.log(data);
  // res.json(JSON.parse(data));
});

// app.listen()
app.listen("8080", () => {
  console.log("app is listening on port 8080");
});
