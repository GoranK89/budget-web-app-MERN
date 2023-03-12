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

const createUser = async (req, res) => {
  const user = new Users({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// NOTE: Remember! req.params.id is for routes, req.body.id is for JSON
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
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
