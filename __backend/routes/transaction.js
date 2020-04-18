const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// POST Transaction
router.post("/", async (req, res) => {
  try {
    const { text, amount } = req.body;
    const newTransaction = new Transaction({
      text,
      amount,
    });
    let transaction = await newTransaction.save();
    res.json(transaction);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

// GET Transaction
router.get("/", async (req, res) => {
  try {
    let transaction = await Transaction.find({});
    res.json(transaction);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
});

router.delete("/:id", (req, res) => {
  res.send("Deleted");
});
module.exports = router;
