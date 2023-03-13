const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter a valid email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please enter a valid password"],
  },
  creationDate: {
    type: Date,
    require: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
