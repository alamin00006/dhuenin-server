const express = require("express");
const router = express.Router();
const productItemController = require("../controllers/productItem.controller");

router
  .route("/")
  .get(productItemController.getItmes)
  .post(productItemController.createProduct);

// router.route("/:id").patch(productItemController.updateHotel);
// router
//   .route("/:id")
//   .get(productItemController.getHotelDetails)
//   .delete(productItemController.deleteHotel);

module.exports = router;
