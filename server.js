const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const mongoose = require("mongoose");



dotenv.config();
connectDB(); // DB connect

const app = express();
app.use(express.json()); // frontend se JSON lene ke liye
app.use(cors());
app.use("/api/users", require("./routes/userRoutes"));

// Debug endpoint (safe: does not expose URI)
app.get("/api/debug", (req, res) => {
  res.json({
    MONGO_URI_present: !!process.env.MONGO_URI,
    mongoose_readyState: mongoose.connection.readyState,
    dbName: mongoose.connection.db ? mongoose.connection.db.databaseName : null
  });
});

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// console.log("server is running ");
