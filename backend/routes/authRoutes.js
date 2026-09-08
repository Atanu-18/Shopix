const express = require("express");
const router = express.Router();
const {protect} = require("../middleware/authMiddleware");
const {registerUser, loginUser, getUsers} = require("../controllers/authController");
const {admin} = require("../middleware/adminMiddleware");


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", protect, admin, getUsers);


module.exports = router;
