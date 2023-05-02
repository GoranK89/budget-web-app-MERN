const express = require("express");
const router = express.Router();
const { addExpense, getExpense } = require("../controllers/expenseController");

router.route("/").post(addExpense);

router.route("/:user").get(getExpense);

module.exports = router;
