import { useEffect, useState } from 'react';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';
import BudgetOverview from './components/BudgetOverview';
import Charts from './components/Charts';
import TipsPanel from './components/TipsPanel';
import SetBudgetForm from './components/SetBudgetForm';

import { Transaction } from './types';
import {
  generateCategoryBudgetData,
  generateExpenseChartData,
  generateMonthlySpendingData
} from './utils/dataTransform';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [adviceTips, setAdviceTips] = useState<string[]>([]);
  const [monthlyBudget, setMonthlyBudget] = useState<number>(2000);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch transactions from backend
  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await fetch('http://localhost:5050/api/transactions');
      const data = await res.json();
      setTransactions(data);
      setIsLoading(false);
    };

    fetchTransactions();
  }, []);

  // Fetch AI tips when transactions or budget changes
  useEffect(() => {
    if (transactions.length > 0) {
      fetchAdvice();
    }
  }, [transactions, monthlyBudget]);

  const fetchAdvice = async () => {
    const res = await fetch('http://localhost:5050/api/advice', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        transactions,
        monthlyBudget,
      }),
    });

    const data = await res.json();
    setAdviceTips(data.tips);
  };

  const handleAddTransaction = async (transaction: Omit<Transaction, 'id'>) => {
    const res = await fetch('http://localhost:5050/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction),
    });

    const saved = await res.json();
    setTransactions((prev) => [saved, ...prev]);
  };

  const handleDeleteTransaction = async (id: string) => {
    await fetch(`http://localhost:5050/api/transactions/${id}`, {
      method: 'DELETE',
    });

    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  // Generate dynamic chart and budget data
  const categoryBudgetData = generateCategoryBudgetData(transactions, monthlyBudget);
  const expenseChart = generateExpenseChartData(transactions);
  const monthlyChart = generateMonthlySpendingData(transactions);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 animate-pulse">Loading your financial dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-slide-up">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold gradient-text mb-2">Dashboard</h1>
          <p className="text-gray-600 text-lg">Welcome back! Here's your financial overview.</p>
        </div>

        {/* 🔧 Budget input */}
        <SetBudgetForm budget={monthlyBudget} onChange={setMonthlyBudget} />

        {/* 💳 Summary & Transactions */}
        <SummaryCards transactions={transactions} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 animate-slide-up">
          <TransactionList
            transactions={transactions.slice(0, 5)}
            onDelete={handleDeleteTransaction}
          />
          <AddTransactionForm onAddTransaction={handleAddTransaction} />
        </div>

        {/* 🧠 AI Tips */}
        <TipsPanel tips={adviceTips} />

        {/* 📊 Charts & Budget Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 animate-slide-up">
          <div className="lg:col-span-1">
            <BudgetOverview budgets={categoryBudgetData} />
          </div>
          <div className="lg:col-span-2">
            <Charts
              expenseData={expenseChart}
              monthlyData={monthlyChart}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
