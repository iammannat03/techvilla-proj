const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  num: {
    type: String,
  },
});

const AppTest = new mongoose.model("AppTest", testSchema);
module.exports = AppTest;
