const mongoose = require("mongoose");

const incomeSchema = mongoose.Schema(
  {
    //NOTE: this associates the income to a user
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    incomeType: {
      type: String,
      required: [true, "Type of income"],
    },
    incomeAmount: {
      type: Number,
      required: [true, "Add ammount"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Income", incomeSchema);
