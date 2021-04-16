const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  image: {
    type: String,
    trim: true,
    required: "Image is required",
  },
  link: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
