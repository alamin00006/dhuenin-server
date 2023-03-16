const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const productItemRoute = require("./routes/productItem.route");
const userRoute = require("./routes/user.route");
const orderRoute = require("./routes/order.route");

app.use("/api/v1/item", productItemRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/order", orderRoute);

app.get("/", (req, res) => {
  res.send("Route is Working");
});

app.use((err, req, res, next) => {
  if (err.message) {
    res.status(500).send(err.message);
  } else {
    res.status(500).send("There was an error");
  }
});
module.exports = app;
