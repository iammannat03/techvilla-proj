const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({
  name: String,
  barcode: String,
  description: String,
  category: String,
  ingredients: [String], // List of ingredients
  harmful_substances: {
    names: [String], // List of harmful substance names
    descriptions: [String], // List of corresponding descriptions
  },
  nutritional_information: {
    calories: Number,
    serving_size: String,
    details: String, // Textual details for chart generation
    summary: String, // Summary of nutritional value
  },
  images: [String], // List of image URLs
});

const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
