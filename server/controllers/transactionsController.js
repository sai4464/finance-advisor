let transactions = [];

const getTransactions = (req, res) => {
  res.json(transactions);
};

const addTransaction = (req, res) => {
  const { title, amount, category, type, date } = req.body;

  const newTransaction = {
    id: Date.now().toString(),
    title,
    amount: parseFloat(amount),
    category,
    type,
    date,
  };

  transactions.unshift(newTransaction);
  res.status(201).json(newTransaction);
};

module.exports = { getTransactions, addTransaction };
