import React, { useState } from 'react';
import { LayoutDashboard, RefreshCcw, BarChart3, Wallet2, Activity, MessageSquare, UserCircle, Search } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'exchange', icon: RefreshCcw, label: 'Exchange' },
    { id: 'prices', icon: BarChart3, label: 'Prices' },
    { id: 'wallets', icon: Wallet2, label: 'Wallets' },
    { id: 'activity', icon: Activity, label: 'Activity' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'accounts', icon: UserCircle, label: 'Accounts' },
  ];
  
  return (
    <aside className="w-20 md:w-64 h-screen bg-[#131318] border-r border-gray-800 flex flex-col">
      {/* Search */}
      <div className="p-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 pl-10 pr-4 rounded-md bg-[#1A1A23] text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#7B61FF]"
          />
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-2 py-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              <a
                href="#"
                className={`flex items-center p-2 rounded-md transition-all hover:bg-[#1A1A23] ${
                  activeItem === item.id ? 'bg-[#1A1A23] text-[#7B61FF]' : 'text-gray-400'
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <item.icon className="h-5 w-5" />
                <span className="ml-3 hidden md:block">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Latest trends */}
      <div className="px-4 py-2 border-t border-gray-800 hidden md:block">
        <p className="text-xs text-gray-400 mb-2">Latest trends</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-[#1A1A23] transition-colors">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-[#FFAD0F] flex items-center justify-center mr-2">
                <span className="text-xs font-bold">₿</span>
              </div>
              <div>
                <p className="text-sm text-white">Bitcoin</p>
                <p className="text-xs text-gray-400">BTC</p>
              </div>
            </div>
            <p className="text-sm text-white">$5,540</p>
          </div>
          
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-[#1A1A23] transition-colors">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-[#FF5B79] flex items-center justify-center mr-2">
                <span className="text-xs font-bold">A</span>
              </div>
              <div>
                <p className="text-sm text-white">Avalanche</p>
                <p className="text-xs text-gray-400">AVAX</p>
              </div>
            </div>
            <p className="text-sm text-white">$210</p>
          </div>
          
          <div className="flex items-center justify-between p-2 rounded-md hover:bg-[#1A1A23] transition-colors">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-[#0E76FD] flex items-center justify-center mr-2">
                <span className="text-xs font-bold">C</span>
              </div>
              <div>
                <p className="text-sm text-white">Cardano</p>
                <p className="text-xs text-gray-400">ADA</p>
              </div>
            </div>
            <p className="text-sm text-white">$1,290</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;