import React from 'react';
import { Budget } from '../types';

interface BudgetOverviewProps {
  budgets: Budget[];
}

const BudgetOverview: React.FC<BudgetOverviewProps> = ({ budgets }) => {
  const totalBudget = budgets.reduce((sum, budget) => sum + budget.allocated, 0);
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0);
  const overallProgress = (totalSpent / totalBudget) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Budget Overview</h2>
      
      <div className="mb-6 animate-fade-in">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Budget</span>
          <span className="text-sm text-gray-600">${totalSpent.toLocaleString()} / ${totalBudget.toLocaleString()}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className={`h-3 rounded-full transition-all duration-1000 animate-progress ${
              overallProgress > 90 ? 'bg-red-500' : overallProgress > 70 ? 'bg-yellow-500' : 'bg-green-500'
            }`}
            style={{ width: `${Math.min(overallProgress, 100)}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">{overallProgress.toFixed(1)}% used</p>
      </div>

      <div className="space-y-4 animate-slide-up">
        {budgets.map((budget, index) => {
          const progress = (budget.spent / budget.allocated) * 100;
          return (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-200 hover:shadow-sm group cursor-pointer animate-slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125"
                    style={{ backgroundColor: budget.color }}
                  ></div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                    {budget.category}
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  ${budget.spent.toLocaleString()} / ${budget.allocated.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-2 rounded-full transition-all duration-1000 animate-progress"
                  style={{ 
                    width: `${Math.min(progress, 100)}%`,
                    backgroundColor: budget.color 
                  }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{progress.toFixed(1)}% used</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetOverview;