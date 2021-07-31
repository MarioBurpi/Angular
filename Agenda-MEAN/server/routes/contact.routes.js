const express = require("express");
const router = express.Router();
const contactCtrl = require("../controllers/contact.controller");

router.get("/", contactCtrl.getAllContacts);
router.post("/", contactCtrl.addContact);
router.get("/:id", contactCtrl.getContact);
router.put("/:id", contactCtrl.editContact);
router.delete("/:id", contactCtrl.deleteContact);

module.exports = router;