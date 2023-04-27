const express = require("express");
const router = express.Router();

const {
   addContact
    

  } = require("../controllers/userControllers");



router.post("/addcontact",addContact)


module.exports = router;