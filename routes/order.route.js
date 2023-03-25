const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
router
  .route("/")
  .post(orderController.createOrder)
  .get(orderController.getAllOrders);
router.route("/:id").delete(orderController.deleteOrder);
router.route('/orderDetails/:id').get(orderController.getOrderDetails)
module.exports = router;
