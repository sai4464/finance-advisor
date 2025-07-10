import React from 'react';
import { Transaction } from '../types';
import { Trash } from 'lucide-react';

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onDelete }) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Salary': 'bg-green-100 text-green-800',
      'Freelance': 'bg-blue-100 text-blue-800',
      'Investment': 'bg-purple-100 text-purple-800',
      'Food': 'bg-red-100 text-red-800',
      'Transportation': 'bg-yellow-100 text-yellow-800',
      'Utilities': 'bg-indigo-100 text-indigo-800',
      'Entertainment': 'bg-pink-100 text-pink-800',
      'Healthcare': 'bg-emerald-100 text-emerald-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        Recent Transactions
        <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </h2>
      <div className="space-y-4 animate-fade-in-up">
        {transactions.map((transaction, index) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5 group cursor-pointer animate-slide-in-right"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {transaction.title}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(transaction.category)} transition-all duration-200 group-hover:scale-105`}>
                  {transaction.category}
                </span>
                <span className="text-sm text-gray-500">{transaction.date}</span>
              </div>
            </div>
            <div className="text-right flex items-center gap-3">
              <p className={`text-lg font-semibold ${
                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
              } transition-all duration-200 group-hover:scale-105`}>
                {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
              </p>
              <button
                onClick={() => onDelete(transaction.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <Trash size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
