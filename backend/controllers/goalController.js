const asyncHandler = require("express-async-handler");

// @descr: Get all Goals
//  @Route: GET /api/v1/goals
// @Access: PRIVATE
exports.getAllGoals = asyncHandler((req, res) => {
  res.status(200).json({ staus: "success", message: "Sent from Goals API" });
});

// @descr: Create new Goal
//  @Route: POST /api/v1/goals
// @Access: PRIVATE
exports.createGoal = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw Error("Please include a text. field");
  }
  res.status(201).json({ staus: "success", message: "New Goal Created" });
});

// @descr: Update Goal
//  @Route: PATCH /api/v1/goals/:id
// @Access: PRIVATE
exports.updateGoal = asyncHandler((req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({ staus: "success", message: `Goal ${id} updated` });
});

// @descr: Delete Goal
//  @Route: DELETE /api/v1/goals/:id
// @Access: PRIVATE
exports.deleteGoal = asyncHandler(async (req, res) => {
  const id = req.params.id * 1;
  res.status(204).json({ staus: "success", message: `Goal ${id} deleted` });
});
