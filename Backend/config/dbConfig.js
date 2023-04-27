const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Pranav:Pranav1!@shoplifter.k1oygu5.mongodb.net/Ecommerce" );

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successful");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;