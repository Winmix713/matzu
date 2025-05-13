import React, { useMemo } from 'react';
import { useData } from '../context/DataContext';
import BalanceSection from '../components/sections/BalanceSection';
import IncomeSection from '../components/sections/IncomeSection';
import MetricsSection from '../components/sections/MetricsSection';
import TransactionsSection from '../components/sections/TransactionsSection';

/**
 * Dashboard component that displays financial information and analytics
 * 
 * Includes portfolio visualization, transaction history, performance metrics,
 * and regional income distribution in a responsive grid layout
 */
const Dashboard: React.FC = () => {
  // Get data from context
  const { 
    cryptos, 
    portfolio, 
    totalBalance,
    monthlyIncome,
    yearlyIncome,
    totalEarnings,
    totalSales,
    regions 
  } = useData();
  
  // Calculate any derived metrics (using useMemo for performance)
  const portfolioStats = useMemo(() => {
    if (!portfolio?.length) return null;
    
    const totalAssets = portfolio.reduce((sum, item) => sum + item.value, 0);
    const topPerformer = [...portfolio].sort((a, b) => b.growth - a.growth)[0];
    
    return {
      totalAssets,
      topPerformer,
      assetCount: portfolio.length
    };
  }, [portfolio]);
  
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8">
        {/* Main portfolio visualization (spans 8 columns on large screens) */}
        <div className="lg:col-span-8">
          <BalanceSection 
            totalBalance={totalBalance} 
            portfolio={portfolio} 
            cryptos={cryptos} 
            stats={portfolioStats}
          />
        </div>
        
        {/* Transactions section */}
        <div className="lg:col-span-4">
          <TransactionsSection />
        </div>
        
        {/* Performance metrics */}
        <div className="lg:col-span-12">
          <MetricsSection />
        </div>
        
        {/* Regional income visualization */}
        <div className="lg:col-span-12">
          <IncomeSection 
            monthlyIncome={monthlyIncome}
            yearlyIncome={yearlyIncome}
            regions={regions}
            totalEarnings={totalEarnings}
            totalSales={totalSales}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;