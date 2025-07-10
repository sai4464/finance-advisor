import React from 'react';
import { TrendingUp, TrendingDown, Wallet, DollarSign } from 'lucide-react';
import { Transaction } from '../types';

interface SummaryCardsProps {
  transactions: Transaction[];
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ transactions }) => {
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);
  
  const savings = totalIncome - totalExpenses;

  const cards = [
    {
      title: 'Total Income',
      amount: totalIncome,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Total Expenses',
      amount: totalExpenses,
      icon: TrendingDown,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      title: 'Savings',
      amount: savings,
      icon: Wallet,
      color: savings >= 0 ? 'text-blue-600' : 'text-red-600',
      bgColor: savings >= 0 ? 'bg-blue-50' : 'bg-red-50',
      borderColor: savings >= 0 ? 'border-blue-200' : 'border-red-200'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-white rounded-xl shadow-sm border ${card.borderColor} p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{card.title}</p>
              <p className={`text-2xl font-bold ${card.color} mt-2 transition-all duration-300 group-hover:scale-105`}>
                ${Math.abs(card.amount).toLocaleString()}
              </p>
              <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full ${card.color.replace('text-', 'bg-')} rounded-full transition-all duration-1000 animate-progress`} 
                     style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className={`${card.bgColor} ${card.color} p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
              <card.icon size={24} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;