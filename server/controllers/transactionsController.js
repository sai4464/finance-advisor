const { v4: uuidv4 } = require('uuid');

// In-memory store
let transactions = [];

const getTransactions = (req, res) => {
  res.json(transactions);
};

const addTransaction = (req, res) => {
  let { text, amount, type, category, date } = req.body;

  // Convert and validate amount
  amount = Number(amount);

  if (!text || isNaN(amount) || !type || !category || !date) {
    console.log('Invalid data received:', req.body);
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  const newTransaction = {
    id: uuidv4(),
    text,
    amount,
    type,
    category,
    date
  };

  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
};

const deleteTransaction = (req, res) => {
  const { id } = req.params;
  const index = transactions.findIndex((t) => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Transaction not found' });
  }
  const deleted = transactions.splice(index, 1)[0];
  res.json({ message: 'Deleted', transaction: deleted });
};

// ✅ Export all three handlers as functions
module.exports = {
  getTransactions,
  addTransaction,
  deleteTransaction
};
