const Users = require("../Models/userModel");

const addContact = async (req, res) => {
    try {
  
      console.log("123",req.body);
     
      const {username,mobileNumber}=req.body

      const newUser = await new Users(req.body);

      const createdUser = await newUser.save();

      if (createdUser) {
        res
          .status(200)
          .send({ message: "user created successfully...", success: true });
      } else {
        res
          .status(200)
          .send({ message: "user creation failed", success: false });
      }  
      
    } 
    
    catch (err) {
      res
        .status(500)
        .send({ message: "something went wrong", success: false, err });
        console.log("kkk",err)
    }
  };


  const showallusers=async (req, res) => {
    try {
  

        const showusers=await Users.find({})

        console.log('123',showusers);
     

     
        res
          .status(200)
          .send({ message: "user fetched successfully...", success: true ,showusers });
      
      
    } 
    
    catch (err) {
      res
        .status(500)
        .send({ message: "something went wrong", success: false, err });
        console.log("kkk",err)
    }
  };







  module.exports = {
    addContact,
    showallusers
    
  };