const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      unique: [true, "A Goal title should be unique"],
      required: [true, "A Goal should have a title"],
    },
    text: {
      type: String,
      required: [true, "A Goal should have a text"],
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
