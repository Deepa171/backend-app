const User = require("./../models/user");

// POST: Frontend → DB (with auto userId)
exports.addUser = async (req, res) => {
  try {
    // 👉 last user nikalo (highest userId)
    const lastUser = await User.findOne().sort({ userId: -1 });

    let newUserId = 1;
    if (lastUser && lastUser.userId) {
      newUserId = lastUser.userId + 1;
    }

    const user = new User({
      userId: newUserId,     // 👈 auto id
      name: req.body.name,
      email: req.body.email,
      age: req.body.age
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);

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
  const users = await User.find().sort({ userId: 1 }); // ordered list
  res.json(users);
};
