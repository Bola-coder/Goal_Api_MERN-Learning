const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("./../models/userModel");
const bcrypt = require("bcryptjs/dist/bcrypt");

// @descr: Register new User
//  @Route: POST /api/users/register
// @Access: Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill out all fields");
  }

  //   Checking if user already exists.
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error(`User wit ${email} exist already!!!`);
  }
  //   Hashing password.
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //   Create user.
  const userObj = {
    name,
    email,
    password: hashedPassword,
  };
  const user = await User.create(userObj);
  if (user) {
    res.status(201).json({
      status: "success",
      data: {
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

// @descr:Authenticate a User
//  @Route: POST /api/users/login
// @Access: Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      status: "success",
      data: {
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

// @descr: Get current User
//  @Route: GET /api/users/me
// @Access: Private
const currentUser = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);
  console.log(req.user);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { registerUser, loginUser, currentUser };
