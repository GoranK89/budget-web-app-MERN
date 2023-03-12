const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter a valid email"],
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

module.exports = mongoose.model("Users", usersSchema);
