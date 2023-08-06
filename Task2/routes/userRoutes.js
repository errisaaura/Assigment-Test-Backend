const express = require("express");
const user = require("../controllers/userController");

const router = express.Router();

router.get("/", user.getUser);
router.post("/create", user.createUser);
router.put("/edit/:id", user.updateUser);
router.delete("/delete/:id", user.deleteUser);
router.post("/birthday-message", user.sendBirthdayMessage);

module.exports = router;
