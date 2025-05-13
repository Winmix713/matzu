import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { cryptoData, portfolioData, regionData, transactionData } from '../data/mockData';
import { CryptoData, PortfolioData, RegionData, Transaction } from '../types';

interface DataContextType {
  cryptos: CryptoData[];
  portfolio: PortfolioData;
  regions: RegionData[];
  transactions: Transaction[];
  totalBalance: number;
  monthlyIncome: number;
  yearlyIncome: number;
  totalEarnings: number;
  totalSales: number;
  timeframe: 'day' | 'week' | 'month' | 'year';
  setTimeframe: (timeframe: 'day' | 'week' | 'month' | 'year') => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [timeframe, setTimeframe] = useState<'day' | 'week' | 'month' | 'year'>('month');
  const [data, setData] = useState({
    cryptos: cryptoData,
    portfolio: portfolioData,
    regions: regionData,
    transactions: transactionData,
    totalBalance: 140504,
    monthlyIncome: 8097,
    yearlyIncome: 312134,
    totalEarnings: 540320,
    totalSales: 1403200
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => ({
        ...prevData,
        cryptos: prevData.cryptos.map(crypto => ({
          ...crypto,
          price: crypto.price * (1 + (Math.random() * 0.02 - 0.01)),
          trend: Math.random() > 0.5 ? crypto.trend : crypto.trend * (1 + (Math.random() * 0.04 - 0.02))
        }))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DataContext.Provider 
      value={{ 
        ...data, 
        timeframe, 
        setTimeframe 
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};