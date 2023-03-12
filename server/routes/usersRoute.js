const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

module.exports = router;
