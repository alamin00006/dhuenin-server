const ProductItem = require("../models/ProductItem");

exports.createProduct = async (req, res) => {
  try {
    console.log(req.body);
    const product = new ProductItem(req.body);

    const result = await product.save();

    res.status(200).json({
      status: "success",
      message: "Item Create Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Sorry Something is Wrong",
      error: error.message,
    });
  }
};
