const User = require("../models/user");

exports.addUser = async (req, res) => {
  try {
    // Last userId find karo
    const lastUser = await User.findOne().sort({ userId: -1 });
    const newUserId = lastUser ? lastUser.userId + 1 : 1;

    const user = new User({
      userId: newUserId, // ✅ backend generate
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
};

exports.getUsers = async (req, res) => {
  const users = await User.find().sort({ userId: 1 });
  res.json(users);
};
