const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// CONNECTING TO DB
connectDB();

app.use(cors(corsOptions));

app.use(express.json());

// ROUTES
app.use("/users", require("./routes/usersRoute"));
app.use("/income", require("./routes/incomeRoute"));
app.use("/auth", require("./routes/authRoute"));

// STARTING SERVER
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
});
