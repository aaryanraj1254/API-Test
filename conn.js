const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympics")
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.error("Error connecting to MongoDB:", e);
  });