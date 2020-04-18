const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// Create
router.post("/", async (req, res) => {
  try {
    const { text, amount } = req.body;
    console.log('DETAILS :', text, amount)
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

router.get("/", (req, res) => {
  res.send("History");
});

router.delete("/:id", (req, res) => {
  res.send("Deleted");
});
module.exports = router;
