import React from 'react';
import { Settings, Bell, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const { toggleTheme } = useTheme();
  
  return (
    <header className="h-16 px-6 border-b border-gray-800 flex items-center justify-between bg-[#131318]">
      {/* Logo and title */}
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-[#FF5B79] rounded-md flex items-center justify-center mr-2">
            <span className="font-bold text-white">E</span>
          </div>
          <span className="text-xl font-bold text-white">ECLIPSE</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex ml-12">
          <a href="#" className="text-white mx-4 hover:text-[#7B61FF] transition-colors">Overview</a>
          <a href="#" className="text-gray-400 mx-4 hover:text-white transition-colors">Operations</a>
          <a href="#" className="text-gray-400 mx-4 hover:text-white transition-colors">Analytics</a>
          <a href="#" className="text-gray-400 mx-4 hover:text-white transition-colors">Catalogue</a>
        </nav>
      </div>
      
      {/* Actions and profile */}
      <div className="flex items-center">
        <button className="p-2 text-gray-400 hover:text-white transition-colors">
          <Search size={20} />
        </button>
        <button className="p-2 ml-2 text-gray-400 hover:text-white transition-colors" onClick={toggleTheme}>
          <Settings size={20} />
        </button>
        <button className="p-2 ml-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
        </button>
        <div className="ml-4 flex items-center">
          <div className="h-8 w-8 bg-purple-600 rounded-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100" 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-2 hidden md:block">
            <p className="text-sm font-semibold text-white">Justin Humphrey</p>
            <p className="text-xs text-gray-400">Product Designer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;