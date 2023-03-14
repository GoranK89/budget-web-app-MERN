const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Users = require("../models/usersModel");

const getUsers = async (req, res) => {
  const users = await Users.find();
  if (users.length <= 0) {
    res.status(400).json({ message: "No users found" });
  }

  res.status(200).json(users);
};

const getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.send(user);
  } catch (err) {
    res.status(204).json(err);
  }
};

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "No password or email" });
    return;
  }

  const userExists = await Users.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: "User with this email already exists" });
    return;
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
    res
      .status(201)
      .json({ _id: user.id, email: user.email, password: user.password });
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

// TODO: Improve error handling, wrong ID crashes nodemon..
const deleteUser = async (req, res) => {
  if (!req?.body.id) {
    res.status(400).json({ message: "ID parameter is required" });
    return;
  }

  const user = await Users.findOne({ _id: req.body.id }).exec();

  if (!user) {
    res.status(204).json({ message: `No user matches ID ${req.body.id}` });
    return;
  }
  const result = await user.deleteOne({ _id: req.body.id });
  res.json(result);
};

module.exports = {
  getUsers,
  getUser,
  registerUser,
  updateUser,
  deleteUser,
};
