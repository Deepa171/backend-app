// // Controller-based route(Real project)

// const express = require("express");
// const router = express.Router();
// const { addUser, getUsers } = require("../controllers/userController");

// router.post("/add", addUser);
// router.get("/", getUsers);

// module.exports = router;

// Direct data-based route (Learning / Practice) ----

const express = require("express");
const router = express.Router();
const { addUser, getUsers } = require("../controllers/userController");
router.post("/add",addUser);
router.get("/",getUsers)
 

// let users = require("./../data/data");
 
// // 👉 GET API (Angular ke liye)
// router.get("", (req, res) => {
//   res.json(users);
// });
 
// router.get("/:id", (req, res) => {
//   const id = Number(req.params.id);
 
//   const user = users.find(u => u.id === id);
 
//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }
 
//   res.json(user);
// });
 
// // 👉 POST API (Angular se data aayega)
// router.post("/add", (req, res) => {
//   const newUser = {
//     id: users.length + 1,
//     name: req.body.name,
//     email: req.body.email
//   };
 
//   users.push(newUser);
//   res.json({
//     message: "User added successfully",
//     user: newUser
//   });
// });
 
module.exports = router;
 