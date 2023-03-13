const Users = require("../models/usersModel");

// TODO: improve login with jwt & bcrypt
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const foundUser = await Users.findOne({ email }).exec();
  if (!foundUser) return res.sendStatus(401);
  if (password === foundUser.password) {
    res.json({ message: `User ${foundUser._id} logged in` });
  } else {
    res.status(401).send("Wrong password");
  }
};

module.exports = { handleLogin };
