const express = require("express");
const goalController = require("./../controller/goalController");

const router = express.Router();

router
  .route("/")
  .get(goalController.getAllGoals)
  .post(goalController.createGoal)
  .patch(goalController.updateGoal)
  .delete(goalController.deleteGoal);

module.exports = router;
