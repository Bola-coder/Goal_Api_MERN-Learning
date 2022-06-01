const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("./../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Checking if we have a bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("User not Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("User Token not found. - User not authorized");
  }
});

module.exports = protect;
