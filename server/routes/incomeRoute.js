const express = require("express");
const router = express.Router();
const {
  addIncome,
  getIncome,
  updateIncome,
  deleteIncome,
} = require("../controllers/incomeController");

router.route("/").post(addIncome);

router.route("/:user").get(getIncome).patch(updateIncome).delete(deleteIncome);

module.exports = router;
