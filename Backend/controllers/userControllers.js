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

 

  const deleteUser=async(req,res)=>{

    try{

        const {id} = req.params;

        console.log('1235',id);

        Users.findByIdAndRemove(id)
          .then((result) => {
            console.log("Removed User : ");
          })
          .catch((error) => {
            console.log(error);
          });
    
        res.status(200).send({
          message: "deleting userslist successfull",
          success: true,
        });

    }

    catch(err){

        console.log('123',err)

        res
        .status(500)
        .send({ message: "deleting userslist failed", err, success: false });
    }
  }



 
  const  editUser = async (req, res) => {
    try {
      
        const {id} = req.params;
  
      console.log("2244", req.body);
      const data = req.body;
  
      Users.findByIdAndUpdate(id, data)
        .then((result) => {
          console.log("Updated User : ", result);
        })
        .catch((error) => {
          console.log(err);
        });
  
      const updatedUser = await Users.find({ _id: id });
      console.log("editable", updatedUser);
  
      res.status(200).send({
        message: "User updated successfully",
        success: true,
        updatedUser,
      });
    } catch (err) {
      console.log("erroccured", err);
      res
        .status(500)
        .send({ message: "some error occured", success: false, err });
    }
  };




  const getUserById=async(req,res)=>{

       try{

        const {id} = req.params;

        const userDetails = await Users.find({ _id: id });

        console.log("cv", userDetails);
    
        res.status(200).send({
          message: "userDetails fetched successfully",
          success: true,
          userDetails,
        });



       }

       catch(err){
         console.log(err)

         res
         .status(500)
         .send({ message: "userDetails fetching failed", err, success: false });
     }
       }
  



  module.exports = {
    addContact,
    showallusers,
    deleteUser,
    editUser,
    getUserById
    
  };