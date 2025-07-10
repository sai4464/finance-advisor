const express = require('express');
const router = express.Router();
const { generateAdvice } = require('../../ai-engine/advisor');

router.post('/', (req, res) => {
  const { transactions, monthlyBudget } = req.body;

  if (!transactions || !Array.isArray(transactions)) {
    return res.status(400).json({ error: 'Invalid transactions data' });
  }

  const tips = generateAdvice(transactions, monthlyBudget || 2000);
  res.json({ tips });
});

module.exports = router;
