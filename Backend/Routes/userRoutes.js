const express = require("express");
const router = express.Router();

const {
   addContact,
   showallusers,
   deleteUser,
   editUser,
   getUserById
   
    

  } = require("../controllers/userControllers");





router.post("/addcontact",addContact)
router.get("/allUsers",showallusers)
router.delete("/deleteUsers/:id",deleteUser)
router.get("/getuser/:id",getUserById)

router.put('/edituser/:id',editUser)


module.exports = router;