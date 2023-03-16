const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  registerUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getUsers).post(registerUser);
router.route("/:id").put(updateUser).delete(deleteUser);
router.route("/you").get(protect, getUser);

module.exports = router;
