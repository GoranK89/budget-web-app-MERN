const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const DB = process.env.DATABASE;

app.use(cors());
app.use(express.json());

// CONNECTING TO DB
mongoose.connect(DB).then((con) => {
  console.log("Connected to database");
});

// ROUTING
const usersRoute = require("./routes/usersRoute");
app.use("/api/users", usersRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
