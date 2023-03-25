const ProductItem = require("../models/ProductItem");

exports.createProduct = async (req, res) => {
  try {

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

exports.getItmes = async (req, res, next) => {
  try {
    const items = await ProductItem.find({});

    res.status(200).json({
      status: "success",
      message: "data get Success",
      data: items,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not found",
      error: error.message,
    });
  }
};


exports.updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updateitem = {
      itemName: req.body.itemName,
      ironPerPrice: req.body.ironPerPrice,
      washPerPrice: req.body.washPerPrice,
      dryCleanPerPrice: req.body.dryCleanPerPrice,
    };

    const result = await ProductItem.updateOne(
      { _id: id },
      { $set: updateitem },
      { runValidators: true }
    );
    res.status(200).json({
      status: "success",
      message: "Item updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Item not updated",
      error: error.message,
    });
  }
};





exports.deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
      const house = await ProductItem.findByIdAndDelete({ _id: id });

    res.status(200).json({
      status: "success",
      message: "delete Successfully",
      data: house,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "data not delete",
      error: error.message,
    });
  }
};
