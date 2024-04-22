// if (process.env.NODE_ENV != "production") {
//   require("dotenv").config();
// }
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const { homepage } = require("./data");
const Product = require("./models/products.js");
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

app.get("/testDB", async (req, res) => {
  try {
    const data = await Product.find({});
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

/** homepage routes */

//categories and carousel images
app.get("/homepage", async (req, res) => {
  res.json(homepage);
});

// post req for scanning the product barcode
app.get("/scan", (req, res) => {
  let { barcode } = req.query;
  console.log(barcode);
  // res.redirect(`/${barcode}`);
});

// search page
app.get("/search-products", async (req, res) => {
  let { result } = req.query;
  try {
    const data = await Product.find({
      name: { $regex: result, $options: "i" },
    });
    res.send("data");
    // res.redirect(`./${result.barcode}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

// categories
app.get("/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const data = await Product.find({ category });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/:barcode", async (req, res) => {
  const { barcode } = req.params;
  try {
    const data = await Product.find({ barcode });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

// app.listen()
app.listen("8080", () => {
  console.log("app is listening on port 8080");
});
