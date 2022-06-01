const express = require("express");
const {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const protect = require("./../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getAllGoals).post(protect, createGoal);

router.route("/:id").patch(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
