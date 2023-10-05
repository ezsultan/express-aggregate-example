const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    index: true
  },
  address: {
    type: String,
    required: true,
    index: true
  },
});

// add plugin that converts mongoose to json
customerSchema.plugin(toJSON);
customerSchema.plugin(paginate);

/**
 * @typedef Customer
 */
const Customer = mongoose.model("Customer", customerSchema, "customers");

module.exports = Customer;
