const express = require("express");
const router = express.Router();

const {
   addContact,
   showallusers,
   deleteUser
   
    

  } = require("../controllers/userControllers");



router.post("/addcontact",addContact)
router.get("/allUsers",showallusers)
router.delete("/deleteUsers/:id",deleteUser)


module.exports = router;