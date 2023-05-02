const Income = require("../models/incomeModel");
const Balance = require("../models/balanceModel");
const Users = require("../models/usersModel");

const getIncome = async (req, res) => {
  const userId = req.params.user;

  const income = await Income.find({ user: userId }).lean();
  if (!income || income.length <= 0) {
    return res.status(400).json({ message: "No income found" });
  }

  res.status(200).json(income);
};

const addIncome = async (req, res) => {
  const { user, incomeType, incomeAmount } = req.body;

  if (!user || !incomeType || !incomeAmount) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const income = await Income.create({
    user,
    incomeType,
    incomeAmount,
  });

  if (income) {
    const balance = await Balance.findOne({ user });
    if (balance) {
      balance.balance += income.incomeAmount;
      await balance.save();
    } else {
      await Balance.create({
        user,
        balance: income.incomeAmount,
      });
    }
    res.status(201).json({ message: "Income added" });
  } else {
    res.status(400).json({ message: "Error adding income" });
  }
};

const updateIncome = async (req, res) => {
  const income = await Income.findById(req.params.id);

  if (!income) {
    res.status(400).json({ message: "no income found" });
    return;
  }

  const user = await Users.findById(req.user.id);

  if (!user) {
    res.status(401).json({ message: "User not found" });
    return;
  }

  if (income.user.toString() !== user.id) {
    res.status(401).json({ message: "User not authorized" });
  }

  const updatedIncome = await Income.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedIncome);
};

const deleteIncome = async (req, res) => {
  const income = await Income.findById(req.params.id);

  if (!income) {
    res.status(400).json({ message: "no income found" });
  }

  const user = await Users.findById(req.user.id);

  if (!user) {
    res.status(401).json({ message: "User not found" });
    return;
  }

  if (income.user.toString() !== user.id) {
    res.status(401).json({ message: "User not authorized" });
  }

  await income.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = { getIncome, addIncome, updateIncome, deleteIncome };
