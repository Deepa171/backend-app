const User = require("./../models/user");

// POST: Frontend → DB
exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    console.log("Saved user:", savedUser);
    res.status(201).json({
      message: "User saved successfully",
      user: savedUser
    });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({
      message: "Error saving user",
      error: error.message
    });
  }
};


// GET: DB → Frontend
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
