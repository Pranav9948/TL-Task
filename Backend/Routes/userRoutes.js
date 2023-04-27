const express = require("express");
const router = express.Router();

const {
   addContact,
   showallusers
    

  } = require("../controllers/userControllers");



router.post("/addcontact",addContact)
router.get("/allUsers",showallusers)


module.exports = router;