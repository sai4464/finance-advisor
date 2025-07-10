import { Transaction, Budget, ChartData } from '../types';

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    title: 'Salary Payment',
    amount: 5000,
    category: 'Salary',
    date: '2024-01-15',
    type: 'income'
  },
  {
    id: '2',
    title: 'Grocery Shopping',
    amount: -120,
    category: 'Food',
    date: '2024-01-14',
    type: 'expense'
  },
  {
    id: '3',
    title: 'Freelance Project',
    amount: 800,
    category: 'Freelance',
    date: '2024-01-13',
    type: 'income'
  },
  {
    id: '4',
    title: 'Electric Bill',
    amount: -85,
    category: 'Utilities',
    date: '2024-01-12',
    type: 'expense'
  },
  {
    id: '5',
    title: 'Gas Station',
    amount: -45,
    category: 'Transportation',
    date: '2024-01-11',
    type: 'expense'
  },
  {
    id: '6',
    title: 'Investment Dividend',
    amount: 150,
    category: 'Investment',
    date: '2024-01-10',
    type: 'income'
  }
];

export const mockBudget: Budget[] = [
  { category: 'Food', allocated: 500, spent: 320, color: '#EF4444' },
  { category: 'Transportation', allocated: 200, spent: 145, color: '#F59E0B' },
  { category: 'Utilities', allocated: 150, spent: 125, color: '#3B82F6' },
  { category: 'Entertainment', allocated: 300, spent: 180, color: '#8B5CF6' },
  { category: 'Healthcare', allocated: 200, spent: 75, color: '#10B981' }
];

export const expenseChartData: ChartData[] = [
  { label: 'Food', value: 320, color: '#EF4444' },
  { label: 'Transportation', value: 145, color: '#F59E0B' },
  { label: 'Utilities', value: 125, color: '#3B82F6' },
  { label: 'Entertainment', value: 180, color: '#8B5CF6' },
  { label: 'Healthcare', value: 75, color: '#10B981' }
];

export const monthlySpendingData: ChartData[] = [
  { label: 'Oct', value: 1200, color: '#3B82F6' },
  { label: 'Nov', value: 1350, color: '#3B82F6' },
  { label: 'Dec', value: 1100, color: '#3B82F6' },
  { label: 'Jan', value: 845, color: '#10B981' }
];
