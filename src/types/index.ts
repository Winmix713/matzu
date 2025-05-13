// Cryptocurrency data types
export interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  price: number;
  amount: number;
  trend: number;
  color: string;
  icon: string;
}

// Portfolio data structure
export interface PortfolioData {
  totalValue: number;
  dailyChange: number;
  dailyChangePercent: number;
  holdings: {
    id: string;
    percentage: number;
    value: number;
  }[];
}

// Regional data for circular chart
export interface RegionData {
  name: string;
  value: number;
  color: string;
}

// Transaction history data
export interface Transaction {
  id: string;
  type: 'sent' | 'received';
  amount: number;
  currency: string;
  date: string;
  cardNumber: string;
  trend: number;
}

// Performance metrics
export interface PerformanceMetric {
  id: string;
  title: string;
  value: number;
  change: number;
  changePercent: number;
  color: string;
  icon: string;
}