const User = require("../models/user");
const Counter = require("../models/counter");

// POST: Frontend → DB
exports.addUser = async (req, res) => {
  try {
   const counter = await Counter.findByIdAndUpdate(
     { _id: "userId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
   );

    const user = new User({
      userId: counter.seq,
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    });

    const savedUser = await user.save();

    res.status(201).json({ message: "User saved!", user: savedUser });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Error saving user", error: error.message });
  }
  console.log("AUTO ID CONTROLLER WORKING 🔥");
  
};

// GET: DB → Frontend
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
