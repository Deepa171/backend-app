const dotenv = require("dotenv");
dotenv.config(); // 👈 THIS WAS MISSING

const connectDB = require("./config/db");
const User = require("./models/user");
const UserData = require("./data/data");

const importData = async () => {
  try {
    await connectDB();
    await User.insertMany(UserData);
    console.log("✅ Data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting data:", error.message);
    process.exit(1);
  }
};

importData();
