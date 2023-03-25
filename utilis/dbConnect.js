const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: true,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4,
};

const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.f0fljak.mongodb.net/dhuenin?retryWrites=true&w=majority`;

// const uri = "mongodb://localhost:27017/dhuenin";



const connectWithDB = async() => {
  await mongoose
    .connect(uri, options)
    .then(() => {
      console.log("database connection succefully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectWithDB;
