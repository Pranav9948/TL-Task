const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    


    mobileNumber:{
      type: String,
      required: true,
    },

    

  },

  {
    timestamps: true,
  }
);

const Users = mongoose.model("users", userSchema);

module.exports = Users;