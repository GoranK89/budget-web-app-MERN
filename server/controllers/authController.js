const bcrypt = require("bcryptjs");
const Users = require("../models/usersModel");

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({ _id: user.id, email: user.email, password: user.password });
  } else {
    res.status(400).json({ message: "Invalid login credentials" });
  }
};

module.exports = { handleLogin };
