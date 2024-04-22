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
const data = require("./init/data.js");

// // database setup
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://mannatjaiswal03:gH3ynGrAkyWHco17@cluster0.b2uavjr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
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

// upadating the db with health factor

/** homepage routes */

//categories and carousel images
app.get("/homepage", async (req, res) => {
  const initDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(data.data);
    console.log("data was initialised with the data in init/data.js");
  };

  initDB();

  for (let i = 0; i < homepage.categories.length; i++) {
    let category = homepage.categories[0];
    let unsortedData = await Product.find({ category });

    const sortedData = unsortedData.sort((a, b) => {
      return (
        a.harmful_substances.names.length - b.harmful_substances.names.length
      );
    });

    const newSortedData = sortedData.map((product) => {});
    console.log(sortedData);
  }

  // const sortedProducts = data.map((product) => {
  //   const sortedHarmfulSubstances = product.harmful_substances.sort((a, b) => {
  //     return b.names.length - a.names.length;
  //   });

  //   return { ...product, harmful_substances: sortedHarmfulSubstances };
  // });

  // res.json(sortedProducts);
  // console.log(data);

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
  } catch (error) {
    console.log(error);
  }
});

app.get("/:barcode", async (req, res) => {
  const { barcode } = req.params;
  try {
    const data = await Product.find({ barcode });
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

// app.listen()
app.listen("8080", () => {
  console.log("app is listening on port 8080");
});
