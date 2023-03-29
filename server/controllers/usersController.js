const bcrypt = require("bcryptjs");
const Users = require("../models/usersModel");

const getUsers = async (req, res) => {
  const users = await Users.find();
  if (users.length <= 0) {
    return res.status(400).json({ message: "No users found" });
  }

  res.status(200).json(users);
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "No password or email" });
  }

  const userExists = await Users.findOne({ email });
  if (userExists) {
    return res
      .status(409)
      .json({ message: "User with this email already exists" });
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await Users.create({
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(400).json({ message: "Could not create new user" });
  }
};

const updateUser = async (req, res) => {
  if (!req?.body.id) {
    return res.status(400).json({ message: "ID parameter is required" });
  }

  const user = await Users.findOne({ _id: req.body.id }).exec();

  if (!user) {
    return res
      .status(204)
      .json({ message: `No user matches ID ${req.body.id}` });
  }
  if (req.body?.email) user.email = req.body.email;
  if (req.body?.password) user.password = req.body.password;
  const result = await user.save();
  res.json(result);
};

// TODO: Improve error handling, wrong ID crashes nodemon.. (actually the problem is not adding return statements)
const deleteUser = async (req, res) => {
  if (!req?.body.id) {
    return res.status(400).json({ message: "ID parameter is required" });
  }

  const user = await Users.findOne({ _id: req.body.id }).exec();

  if (!user) {
    return res
      .status(204)
      .json({ message: `No user matches ID ${req.body.id}` });
  }
  const result = await user.deleteOne({ _id: req.body.id });
  res.json(result);
};

module.exports = {
  getUsers,
  registerUser,
  updateUser,
  deleteUser,
};
