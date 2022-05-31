exports.getAllGoals = (req, res) => {
  try {
    res.status(200).json({ staus: "success", message: "Sent from Goals API" });
  } catch (err) {
    res.status(400).json({ staus: "fail", message: err.message });
  }
};

exports.createGoal = (req, res) => {
  try {
    res.status(201).json({ staus: "success", message: "New Goal Created" });
  } catch (err) {
    res.status(400).json({ staus: "fail", message: err.message });
  }
};

exports.updateGoal = (req, res) => {
  try {
    res.status(200).json({ staus: "success", message: "Goal Updated" });
  } catch (err) {
    res.status(400).json({ staus: "fail", message: err.message });
  }
};

exports.deleteGoal = (req, res) => {
  try {
    res.status(204).json({ staus: "success", message: "Goal Deleted" });
  } catch (err) {
    res.status(400).json({ staus: "fail", message: err.message });
  }
};
