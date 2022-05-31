const dotenv = require("dotenv").config();
const app = require("./app.js");

const port = process.env.PORT || 5000;

// Creating a server.
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
