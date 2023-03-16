const mongoose = require("mongoose");
// Schema Design
const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: [true, "Please Provide Your Mobile Number"],
  },
  orderDate: {
    type: Date,
    required: [true, "Please Provide Order Date"],
  },

  fullAddress: {
    type: String,
    required: [true, "Please Provide Your Address"],
  },
  orderNote: {
    type: String,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
