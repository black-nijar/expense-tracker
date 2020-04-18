const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Transaction added');
});

router.get('/', (req, res) => {
  res.send('History');
})

router.delete('/:id', (req, res) => {
  res.send('Deleted')
})
module.exports = router;