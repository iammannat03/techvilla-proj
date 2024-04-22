const mongoose = require("mongoose");
const initData = require("./data.js");
const Product = require("../models/products.js");

// database setup
const MONGO_URL = "mongodb://127.0.0.1:27017/techvilla";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Product.deleteMany({});
  //   initData.data = initData.data.map((obj) => ({
  //     ...obj,
  //     owner: "659d6b3401be779797baf6e5",
  //     geometry: { type: "Point", coordinates: [80.2349272, 12.7839153] },
  //   }));
  await Product.insertMany(initData.data);
  console.log("data was initialised with the data in init/data.js");
};

initDB();
