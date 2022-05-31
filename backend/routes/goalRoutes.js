const express = require("express");
const {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const router = express.Router();

router.route("/").get(getAllGoals).post(createGoal);

router.route("/:id").patch(updateGoal).delete(deleteGoal);

module.exports = router;
