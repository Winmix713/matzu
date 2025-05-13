import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Card from '../ui/Card';
import BubbleChart from '../visualizations/BubbleChart';
import { CryptoData, PortfolioData } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface BalanceSectionProps {
  totalBalance: number;
  portfolio: PortfolioData;
  cryptos: CryptoData[];
}

const BalanceSection: React.FC<BalanceSectionProps> = ({ 
  totalBalance,
  portfolio,
  cryptos
}) => {
  const [timeframe, setTimeframe] = useState('Month');
  const timeframes = ['Day', 'Week', 'Month', 'Year'];
  
  return (
    <Card className="relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Balance</h2>
        <div className="relative">
          <div className="flex items-center bg-[#1A1A23] px-3 py-1.5 rounded-md cursor-pointer">
            <span className="text-sm mr-2">{timeframe}</span>
            <ChevronDown size={16} />
          </div>
          {/* Dropdown menu would go here */}
        </div>
      </div>
      
      <div className="text-5xl font-bold font-mono mb-8">
        {formatCurrency(totalBalance)}
      </div>
      
      <div className="relative h-80">
        <BubbleChart cryptos={cryptos} portfolio={portfolio} />
      </div>
    </Card>
  );
};

export default BalanceSection;