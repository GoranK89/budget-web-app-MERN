const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  registerUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

router.route("/").get(getUsers).post(registerUser);
router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

module.exports = router;
