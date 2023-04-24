const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema(
  {
    //NOTE: this associates the expense to a user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    expenseType: {
      type: String,
      required: [true, "Type of expense"],
    },
    expenseAmount: {
      type: Number,
      required: [true, "Add ammount"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseSchema);
