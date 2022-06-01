const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("./../controllers/userController");
const protect = require("./../middlewares/authMiddleware");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/me").get(protect, currentUser);

// router.route("/:id").patch().delete();

module.exports = router;
