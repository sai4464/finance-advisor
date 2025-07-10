export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
}

export interface Budget {
  category: string;
  allocated: number;
  spent: number;
  color: string;
}

export interface ChartData {
  label: string;
  value: number;
  color: string;
}