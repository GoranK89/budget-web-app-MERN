const express = require("express");
const router = express.Router();

const {
  getBalance,
  createBalance,
  updateBalance,
} = require("../controllers/balanceController");

router.route("/").post(createBalance).patch(updateBalance);
router.route("/:user").get(getBalance);
module.exports = router;
