const mongoose = require("mongoose");

const DB = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`DB connected: ${conn.connection.host}`.blue.underline);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
