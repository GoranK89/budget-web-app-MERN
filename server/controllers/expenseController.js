const Expense = require("../models/expenseModel");
const Balance = require("../models/balanceModel");
const Users = require("../models/usersModel");

const getExpense = async (req, res) => {
  const userId = req.params.user;

  const expense = await Expense.find({ user: userId }).lean();
  if (!expense || expense.length <= 0) {
    return res.status(400).json({ message: "No expense found" });
  }

  res.status(200).json(expense);
};

const addExpense = async (req, res) => {
  const { user, expenseType, expenseAmount } = req.body;

  if (!user || !expenseType || !expenseAmount) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const expense = await Expense.create({
    user,
    expenseType,
    expenseAmount,
  });

  if (expense) {
    const balance = await Balance.findOne({ user });
    if (balance) {
      balance.balance -= expense.expenseAmount;
      await balance.save();
    } else {
      await Balance.create({
        user,
        balance: balance.expenseAmount,
      });
    }
    res.status(201).json({ message: "Expense added" });
  } else {
    res.status(400).json({ message: "Error adding expense" });
  }
};

module.exports = { getExpense, addExpense };
