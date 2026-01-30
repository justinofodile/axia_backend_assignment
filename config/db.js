const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to database!!!!");
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully!!!!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
