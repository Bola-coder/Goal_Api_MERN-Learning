const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db.js");
const app = require("./app.js");

const port = process.env.PORT || 5000;

// Connecting to database
connectDB();

// Creating a server.
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
