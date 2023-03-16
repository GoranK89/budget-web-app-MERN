const Income = require("../models/incomeModel");
const Users = require("../models/usersModel");

const getIncome = async (req, res) => {
  const income = await Income.find({ user: req.user.id });

  res.status(200).json(income);
};

const addIncome = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Please add income type and amount" });
    return;
  }

  const income = await Income.create({
    user: req.user.id,
    incomeType: req.body.incomeType,
    amount: req.body.amount,
  });

  res.status(200).json(income);
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
