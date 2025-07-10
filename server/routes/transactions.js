const express = require('express');
const router = express.Router();
const {
  getTransactions,
  addTransaction,
} = require('../controllers/transactionsController');

router.get('/', getTransactions);
router.post('/', addTransaction);

module.exports = router;

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    const index = transactions.findIndex((t) => t.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
  
    const deleted = transactions.splice(index, 1)[0];
    res.json({ message: 'Deleted', transaction: deleted });
  });
  