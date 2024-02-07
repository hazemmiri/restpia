const express = require("express");
const router = express.Router();
const {postContact ,
        getContacts ,
        getContactById , 
        deleteContact , 
        updateContact 
    } = require("../controllers/contactController");

router.post("/",postContact);
router.get("/",getContacts);
router.get("/:id",getContactById);
router.delete("/:id",deleteContact);
router.put("/:id",updateContact); 
module.exports = router