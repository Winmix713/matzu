import React, { useState } from 'react';
import Card from '../ui/Card';
import CircularChart from '../visualizations/CircularChart';
import { RegionData } from '../../types';
import { formatCurrency, formatCurrencyCompact } from '../../utils/formatters';
import { TrendingUp, LineChart } from 'lucide-react';

interface IncomeSectionProps {
  monthlyIncome: number;
  yearlyIncome: number;
  regions: RegionData[];
  totalEarnings: number;
  totalSales: number;
}

const IncomeSection: React.FC<IncomeSectionProps> = ({
  monthlyIncome,
  yearlyIncome,
  regions,
  totalEarnings,
  totalSales
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CircularChart regions={regions} />
      </Card>
      
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Monthly Income */}
          <Card className="p-6 flex flex-col justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-[#00E5A1]/10 flex items-center justify-center mr-3">
                <TrendingUp className="h-5 w-5 text-[#00E5A1]" />
              </div>
              <span className="text-sm text-gray-400">Monthly</span>
            </div>
            
            <div className="my-3">
              <div className="text-4xl font-bold font-mono">
                {formatCurrency(monthlyIncome)}
              </div>
              <div className="flex items-center mt-2">
                <span className="text-[#00E5A1] mr-2">↑19.6%</span>
                <span className="text-gray-400 text-sm">44.214 USD</span>
              </div>
            </div>
          </Card>
          
          {/* Yearly Income */}
          <Card className="p-6 flex flex-col justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-[#FFAD0F]/10 flex items-center justify-center mr-3">
                <LineChart className="h-5 w-5 text-[#FFAD0F]" />
              </div>
              <span className="text-sm text-gray-400">Yearly</span>
            </div>
            
            <div className="my-3">
              <div className="text-4xl font-bold font-mono">
                {formatCurrency(yearlyIncome)}
              </div>
              <div className="flex items-center mt-2">
                <span className="text-[#00E5A1] mr-2">↑2.5%</span>
                <span className="text-gray-400 text-sm">301.002 USD</span>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Region Data */}
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Top Regions</h3>
          <div className="space-y-4">
            {regions.map((region) => (
              <div key={region.name} className="flex items-center justify-between">
                <span className="text-gray-300">{region.name}</span>
                <span className="font-mono font-semibold">{formatCurrencyCompact(region.value)}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="h-10 w-10 rounded-md bg-[#7B61FF]/20 flex items-center justify-center mr-3">
                  <LineChart className="h-6 w-6 text-[#7B61FF]" />
                </div>
                <span className="text-gray-400">Total earning</span>
              </div>
              <span className="text-2xl font-bold font-mono">{formatCurrencyCompact(totalEarnings)}</span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <div className="h-10 w-10 rounded-md bg-gray-800 flex items-center justify-center mr-3">
                  <LineChart className="h-6 w-6 text-gray-400" />
                </div>
                <span className="text-gray-400">Sales</span>
              </div>
              <span className="text-2xl font-bold font-mono">{formatCurrencyCompact(totalSales)}</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default IncomeSection;