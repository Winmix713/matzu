import React from 'react';
import Card from '../ui/Card';
import { performanceMetrics } from '../../data/mockData';
import { formatCurrency } from '../../utils/formatters';
import { 
  CircleDollarSign, 
  TrendingUp, 
  LineChart,
  BadgeDollarSign
} from 'lucide-react';

const MetricsSection: React.FC = () => {
  // Map icon strings to actual components
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'CircleDollarSign': return <CircleDollarSign className="h-6 w-6" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6" />;
      case 'LineChart': return <LineChart className="h-6 w-6" />;
      case 'BadgeDollarSign': return <BadgeDollarSign className="h-6 w-6" />;
      default: return <CircleDollarSign className="h-6 w-6" />;
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {performanceMetrics.map((metric) => (
        <Card key={metric.id} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div 
                className="h-10 w-10 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: `${metric.color}20` }}
              >
                <div className="text-[#7B61FF]">
                  {getIcon(metric.icon)}
                </div>
              </div>
              <span className="text-sm text-gray-400">{metric.title}</span>
            </div>
          </div>
          
          <div className="text-2xl font-bold font-mono mb-2">
            {formatCurrency(metric.value)}
          </div>
          
          <div className="flex items-center">
            <span 
              className={`mr-2 ${metric.changePercent > 0 ? 'text-[#00E5A1]' : 'text-[#FF5B79]'}`}
            >
              {metric.changePercent > 0 ? '↑' : '↓'}{Math.abs(metric.changePercent)}%
            </span>
            <span className="text-gray-400 text-sm">
              ${metric.change.toLocaleString()}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MetricsSection;