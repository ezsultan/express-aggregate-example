const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
});

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

/**
 * @typedef Product
 */
const Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
