import React from 'react';
import { User, Bell, Settings } from 'lucide-react';
import logo from '../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 animate-fade-in">
          <div className="flex items-center">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Finance Advisor Logo" 
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h1 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                Finance Advisor
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 group">
              <Bell size={20} />
              <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 hover:rotate-12">
              <Settings size={20} />
            </button>
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <User size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700 hidden sm:block transition-colors duration-300 group-hover:text-blue-600">
                John Doe
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;