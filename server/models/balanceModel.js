const mongoose = require("mongoose");

const balanceSchema = mongoose.Schema({
  //NOTE: this associates the balance to a user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  balance: {
    type: Number,
    required: [true, "Add ammount"],
  },
});

module.exports = mongoose.model("Balance", balanceSchema);
