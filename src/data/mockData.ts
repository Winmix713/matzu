import { CryptoData, PortfolioData, RegionData, Transaction, PerformanceMetric } from '../types';
import { Bitcoin, Feather as Ethereum, Feather as Tether, Car as Cardano, DollarSign } from 'lucide-react';

// Cryptocurrency data
export const cryptoData: CryptoData[] = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 5042.21,
    amount: 0.86,
    trend: 30,
    color: '#FFAD0F',
    icon: 'Bitcoin'
  },
  {
    id: 'ada',
    name: 'Cardano',
    symbol: 'ADA',
    price: 4540.00,
    amount: 1.25,
    trend: 10,
    color: '#0E76FD',
    icon: 'Cardano'
  },
  {
    id: 'stx',
    name: 'Stacks',
    symbol: 'STX',
    price: 3959.01,
    amount: 2.10,
    trend: 5,
    color: '#7B61FF',
    icon: 'DollarSign'
  },
  {
    id: 'ava',
    name: 'Avalanche',
    symbol: 'AVA',
    price: 2002.50,
    amount: 4.32,
    trend: 12,
    color: '#FF5B79',
    icon: 'DollarSign'
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3254.84,
    amount: 1.76,
    trend: 8,
    color: '#00E5A1',
    icon: 'Ethereum'
  }
];

// Portfolio data
export const portfolioData: PortfolioData = {
  totalValue: 34394,
  dailyChange: 3440,
  dailyChangePercent: 4.5,
  holdings: [
    { id: 'btc', percentage: 51, value: 17540 },
    { id: 'eth', percentage: 80, value: 6879 },
    { id: 'ada', percentage: 25, value: 4325 },
    { id: 'stx', percentage: 32, value: 3650 },
    { id: 'ava', percentage: 42, value: 2000 }
  ]
};

// Regional data for circular chart
export const regionData: RegionData[] = [
  { name: 'Los Angeles', value: 201192, color: '#00E5A1' },
  { name: 'New York', value: 192054, color: '#7B61FF' },
  { name: 'Canada', value: 166401, color: '#FFAD0F' },
  { name: 'China', value: 164299, color: '#FF5B79' },
  { name: 'Tokyo', value: 162227, color: '#0E76FD' }
];

// Transaction history
export const transactionData: Transaction[] = [
  {
    id: '1',
    type: 'sent',
    amount: 6403,
    currency: 'USD',
    date: '01/21/2021',
    cardNumber: '4300',
    trend: -6403
  },
  {
    id: '2',
    type: 'sent',
    amount: 178,
    currency: 'USD',
    date: '04/01/2021',
    cardNumber: '5500',
    trend: -178
  },
  {
    id: '3',
    type: 'sent',
    amount: 900,
    currency: 'USD',
    date: '01/21/2021',
    cardNumber: '9800',
    trend: -900
  },
  {
    id: '4',
    type: 'sent',
    amount: 550,
    currency: 'USD',
    date: '02/21/2021',
    cardNumber: '1200',
    trend: -550
  },
  {
    id: '5',
    type: 'sent',
    amount: 123,
    currency: 'USD',
    date: '02/01/2021',
    cardNumber: '4300',
    trend: -123
  },
  {
    id: '6',
    type: 'sent',
    amount: 2500,
    currency: 'USD',
    date: '01/11/2021',
    cardNumber: '6700',
    trend: 2500
  },
  {
    id: '7',
    type: 'sent',
    amount: 2500,
    currency: 'USD',
    date: '01/01/2021',
    cardNumber: '6700',
    trend: -2500
  }
];

// Performance metrics
export const performanceMetrics: PerformanceMetric[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    value: 34394,
    change: 3440,
    changePercent: 4.5,
    color: '#FF5B79',
    icon: 'CircleDollarSign'
  },
  {
    id: 'performance',
    title: 'Performance today',
    value: 1970,
    change: 140,
    changePercent: 1.2,
    color: '#00E5A1',
    icon: 'TrendingUp'
  },
  {
    id: 'profit',
    title: 'All time profit',
    value: 5534394,
    change: 24440,
    changePercent: 12.5,
    color: '#FFAD0F',
    icon: 'LineChart'
  },
  {
    id: 'dividends',
    title: 'Dividends',
    value: 3782,
    change: 840,
    changePercent: 1.1,
    color: '#0E76FD',
    icon: 'BadgeDollarSign'
  }
];