const express = require("express");
const morgan = require("morgan");
const goalRoutes = require("./routes/goalRoutes.js");
const { errorHandler } = require("./middlewares/errorMiddleware.js");

const app = express();

//  Using the morgan middleware for logging route parameters
if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/goals", goalRoutes);

app.use(errorHandler);

module.exports = app;
