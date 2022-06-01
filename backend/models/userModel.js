const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add in your name"],
    },
    email: {
      type: String,
      required: [true, "Please add in your email"],
    },
    password: {
      type: String,
      required: [true, "Please add in your password"],
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
