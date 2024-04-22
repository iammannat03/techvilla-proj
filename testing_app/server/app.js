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

// get req for scanning the product barcode -> done
app.get("/scan", async (req, res) => {
  let { barcode } = req.query;
  const data = await Product.find({ barcode: barcode });
  res.json(data);
  // res.redirect(`/${barcode}`);
});

// search page -> done
app.get("/search-products", async (req, res) => {
  let { name } = req.query;
  try {
    const data = await Product.find({
      name: { $regex: name, $options: "i" },
    });
    res.json(data);
    // res.redirect(`./${result.barcode}`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});

// categories
app.get("/homepage/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const data = await Product.find({ category });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/:barcode", async (req, res) => {
  try {
    const { barcode } = req.params;
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
