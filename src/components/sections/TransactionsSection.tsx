import React, { useState } from 'react';
import Card from '../ui/Card';
import { useData } from '../../context/DataContext';
import { formatCurrency } from '../../utils/formatters';
import { ChevronDown, Search } from 'lucide-react';

const TransactionsSection: React.FC = () => {
  const { transactions, cryptos } = useData();
  const [filter, setFilter] = useState('All transaction');
  
  // Card brand colors for different card numbers
  const getCardBrandColor = (cardNumber: string) => {
    const firstDigit = cardNumber.charAt(0);
    switch(firstDigit) {
      case '4': return 'bg-[#FF5B79]'; // Visa
      case '5': return 'bg-[#0E76FD]'; // Mastercard
      case '3': return 'bg-[#FFAD0F]'; // Amex
      case '6': return 'bg-[#7B61FF]'; // Discover
      default: return 'bg-gray-500';
    }
  };
  
  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">History</h2>
        <div className="relative">
          <div className="flex items-center bg-[#1A1A23] px-3 py-1.5 rounded-md cursor-pointer">
            <span className="text-sm mr-2">{filter}</span>
            <ChevronDown size={16} />
          </div>
          {/* Dropdown would go here */}
        </div>
      </div>
      
      {/* Search transaction (disabled in this version) */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search transaction"
          className="w-full h-10 pl-10 pr-4 rounded-md bg-[#1A1A23] text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#7B61FF]"
          disabled
        />
      </div>
      
      {/* Transaction headers */}
      <div className="grid grid-cols-3 mb-2 text-xs text-gray-400">
        <div>Currency</div>
        <div>Date & time</div>
        <div className="text-right">Trend</div>
      </div>
      
      {/* Transaction list */}
      <div className="space-y-3 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="grid grid-cols-3 items-center py-2 border-b border-gray-800">
            <div className="flex items-center">
              <div className={`h-8 w-12 ${getCardBrandColor(transaction.cardNumber)} rounded flex items-center justify-center mr-2`}>
                <span className="text-xs font-bold text-white">{transaction.cardNumber}</span>
              </div>
              <div>
                <p className="text-xs text-gray-400">Credit card</p>
              </div>
            </div>
            
            <div>
              <p className="text-sm">{transaction.type === 'sent' ? 'Sent' : 'Received'}</p>
              <p className="text-xs text-gray-400">{transaction.date}</p>
            </div>
            
            <div className="text-right">
              <p className={`text-sm ${transaction.trend > 0 ? 'text-[#00E5A1]' : 'text-[#FF5B79]'}`}>
                {transaction.trend > 0 ? '+' : '-'} {formatCurrency(Math.abs(transaction.trend))}
              </p>
              <p className="text-xs text-gray-400">${transaction.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TransactionsSection;