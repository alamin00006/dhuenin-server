const mongoose = require("mongoose");
const productItemSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  ironPerPrice: {
    type: Number,
  },
  washPerPrice: {
    type: Number,
  },
  dryCleanPerPrice: {
    type: Number,
  },
});
const ProductItem = mongoose.model("ProductItem", productItemSchema);

module.exports = ProductItem;
