const asyncHandler = require("express-async-handler");
const Goal = require("./../models/goalModel");

// @descr: Get all Goals
//  @Route: GET /api/v1/goals
// @Access: PRIVATE
exports.getAllGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({
    staus: "success",
    result: goals.length,
    data: {
      goals,
    },
  });
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

  const goal = await Goal.create({
    title: req.body.title,
    text: req.body.text,
  });

  res.status(201).json({
    staus: "success",
    data: {
      goal,
    },
  });
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
