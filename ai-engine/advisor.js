function generateAdvice(transactions, monthlyBudget = 2000) {
    const tips = [];
  
    const expenses = transactions.filter((t) => t.type === 'expense');
    const income = transactions.filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const spent = expenses.reduce((sum, t) => sum + Math.abs(t.amount), 0);
  
    if (spent > monthlyBudget) {
      tips.push("You've exceeded your monthly budget.");
    } else if (spent > 0.9 * monthlyBudget) {
      tips.push("You're very close to hitting your monthly budget.");
    }
  
    const categoryTotals = {};
    for (const t of expenses) {
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + Math.abs(t.amount);
    }
  
    for (const [category, amount] of Object.entries(categoryTotals)) {
      if (amount > 0.3 * monthlyBudget) {
        tips.push(`You're spending a lot on "${category}". Consider reducing it.`);
      }
    }
  
    if (income > 0 && spent < 0.5 * income) {
      tips.push("Great job! You're spending less than 50% of your income.");
    }
  
    if (tips.length === 0) {
      tips.push("Your spending looks healthy this month!");
    }
  
    return tips;
  }
  
  module.exports = { generateAdvice };
  