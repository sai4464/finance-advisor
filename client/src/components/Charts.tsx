import React from 'react';
import { ChartData } from '../types';

interface ChartsProps {
  expenseData: ChartData[];
  monthlyData: ChartData[];
}

const Charts: React.FC<ChartsProps> = ({ expenseData, monthlyData }) => {
  const total = expenseData.reduce((sum, item) => sum + item.value, 0);
  const maxMonthly = Math.max(...monthlyData.map(item => item.value));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
      {/* Pie Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300 group">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Expenses by Category</h3>
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4 group-hover:scale-105 transition-transform duration-300">
            <svg className="w-full h-full transform -rotate-90 animate-spin-slow" viewBox="0 0 100 100">
              {expenseData.map((item, index) => {
                const percentage = (item.value / total) * 100;
                const circumference = 2 * Math.PI * 40;
                const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
                const rotate = expenseData.slice(0, index).reduce((acc, prev) => acc + (prev.value / total) * 360, 0);
                
                return (
                  <circle
                    key={index}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="8"
                    strokeDasharray={strokeDasharray}
                    transform={`rotate(${rotate} 50 50)`}
                    className="transition-all duration-500 hover:stroke-width-10"
                  />
                );
              })}
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-2 w-full">
            {expenseData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 hover:bg-gray-50 p-1 rounded transition-colors duration-200 cursor-pointer group">
                <div 
                  className="w-3 h-3 rounded-full transition-transform duration-300 group-hover:scale-125"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-200">{item.label}</span>
                <span className="text-sm font-medium text-gray-900 group-hover:scale-105 transition-transform duration-200">${item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Spending</h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {monthlyData.map((item, index) => {
            const height = (item.value / maxMonthly) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col items-center group cursor-pointer">
                <div className="w-full flex flex-col items-center">
                  <div className="text-xs text-gray-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    ${item.value}
                  </div>
                  <div 
                    className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80 group-hover:scale-105 animate-grow-up"
                    style={{ 
                      height: `${height}%`,
                      backgroundColor: item.color,
                      minHeight: '20px',
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 mt-2 group-hover:text-blue-600 transition-colors duration-200 group-hover:font-medium">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Charts;