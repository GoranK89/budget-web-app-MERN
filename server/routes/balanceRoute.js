const express = require("express");
const router = express.Router();

const {
  getBalance,
  createBalance,
} = require("../controllers/balanceController");

router.route("/").post(createBalance);
router.get("/:user", getBalance);
module.exports = router;
