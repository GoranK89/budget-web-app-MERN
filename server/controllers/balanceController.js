const Balance = require("../models/balanceModel");

const getBalance = async (req, res) => {
  const userId = req.params.user;
  const balance = await Balance.findOne({ user: userId }).lean();
  if (!balance || balance.length <= 0) {
    return res.status(400).json({ message: "Balance doesnt exist" });
  } else {
    return res.status(200).json(balance);
  }
};

const createBalance = async (req, res) => {
  const { user, balance } = req.body;

  if (!user || !balance) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingBalance = await Balance.findOne({ user }).lean();
  if (existingBalance) {
    return res.status(400).json({ message: "Balance already exists" });
  }

  try {
    const newBalance = await Balance.create({
      user,
      balance,
    });

    if (newBalance) {
      res.status(201).json({ message: "Balance created" });
    } else {
      res.status(400).json({ message: "Error creating balance" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error creating balance" });
  }
};

const updateBalance = async (req, res) => {
  const { user, balance } = req.body;

  if (!user || !balance) {
    return res
      .status(400)
      .json({ message: "User ID and a new balance are required" });
  }

  try {
    const updatedBalance = await Balance.findOneAndUpdate(
      { user },
      { balance },
      { new: true }
    );

    if (updatedBalance) {
      res.status(200).json({ message: "Balance updated" });
    } else {
      res.status(400).json({ message: "Error updating balance" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error updating balance" });
  }
};

module.exports = { getBalance, createBalance, updateBalance };
