const express = require("express");
const router = express.Router();
const {
  addIncome,
  getIncome,
  updateIncome,
  deleteIncome,
} = require("../controllers/incomeController");

router
  .route("/")
  .get(getIncome)
  .post(addIncome)
  .patch(updateIncome)
  .delete(deleteIncome);

module.exports = router;
