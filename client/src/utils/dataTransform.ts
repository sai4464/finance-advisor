import { Transaction, Budget, ChartData } from '../types';

export const generateCategoryBudgetData = (
  transactions: Transaction[],
  monthlyBudget: number
): Budget[] => {
  const categories = ['Food', 'Transportation', 'Utilities', 'Entertainment', 'Healthcare'];
  const portion = 1 / categories.length;

  const categorySpent: Record<string, number> = {};

  transactions.forEach((t) => {
    if (t.type === 'expense') {
      categorySpent[t.category] = (categorySpent[t.category] || 0) + Math.abs(t.amount);
    }
  });

  return categories.map((category) => ({
    category,
    allocated: Math.round(monthlyBudget * portion),
    spent: categorySpent[category] || 0,
    color: getColorForCategory(category),
  }));
};

export const generateExpenseChartData = (transactions: Transaction[]): ChartData[] => {
  const data: Record<string, number> = {};

  transactions.forEach((t) => {
    if (t.type === 'expense') {
      data[t.category] = (data[t.category] || 0) + Math.abs(t.amount);
    }
  });

  return Object.entries(data).map(([label, value]) => ({
    label,
    value,
    color: getColorForCategory(label),
  }));
};

export const generateMonthlySpendingData = (transactions: Transaction[]): ChartData[] => {
  const monthlyTotals: Record<string, number> = {};

  transactions.forEach((t) => {
    if (t.type === 'expense') {
      const month = new Date(t.date).toLocaleString('default', { month: 'short' });
      monthlyTotals[month] = (monthlyTotals[month] || 0) + Math.abs(t.amount);
    }
  });

  return Object.entries(monthlyTotals).map(([label, value]) => ({
    label,
    value,
    color: '#3B82F6',
  }));
};

const getColorForCategory = (category: string): string => {
  const colors: Record<string, string> = {
    Food: '#EF4444',
    Transportation: '#F59E0B',
    Utilities: '#3B82F6',
    Entertainment: '#8B5CF6',
    Healthcare: '#10B981',
  };
  return colors[category] || '#9CA3AF'; // fallback: gray
};
