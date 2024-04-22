const mongoose = require("mongoose");
const Product = require("../models/products.js");

// database setup
// const MONGO_URL =
//   ;

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
  await Product.insertMany(initData.data);
  console.log("data was initialised with the data in init/data.js");
};

initDB();
