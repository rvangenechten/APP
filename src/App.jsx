import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Flame, Zap, DollarSign, Users, Eye, Star, ArrowUp, ArrowDown, Wallet, Settings, Bell, Search, Filter } from 'lucide-react';

// MemeCard Component
const MemeCard = ({ coin, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const isPositive = coin.change >= 0;
  
  return (
    <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <div className="bg-gradient-to-br from-red-950/80 to-black/90 backdrop-blur-sm rounded-xl p-4 mb-4 border border-red-800/30 hover:border-red-600/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-900/20">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-xl font-bold shadow-lg">
              {coin.symbol.substring(0, 2)}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{coin.name}</h3>
              <p className="text-red-300 text-sm">${coin.symbol}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-white font-bold text-xl">${coin.price}</span>
            <div className={`flex items-center ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
              {isPositive ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
              <span className="font-medium">{Math.abs(coin.change)}%</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-red-300">Market Cap</div>
            <div className="text-white font-semibold">{coin.marketCap}</div>
          </div>
          <div className="text-center">
            <div className="text-red-300">Volume</div>
            <div className="text-white font-semibold">{coin.volume}</div>
          </div>
          <div className="text-center">
            <div className="text-red-300">Holders</div>
            <div className="text-white font-semibold">{coin.holders}</div>
          </div>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <button className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-200 transform hover:scale-105">
            Buy
          </button>
          <button className="flex-1 border border-red-600 text-red-400 py-2 px-4 rounded-lg font-semibold hover:bg-red-600/10 transition-all duration-200">
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

// Portfolio Banner Component
const PortfolioBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-900/80 via-red-800/80 to-red-900/80 backdrop-blur-sm rounded-xl p-4 mb-6 border border-red-700/40">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white text-xl font-bold mb-1">🚀 Portfolio Value</h2>
          <p className="text-3xl font-bold text-white">$42,069.42</p>
          <div className="flex items-center text-green-400 mt-1">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="font-medium">+420.69% (24h)</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-red-300 text-sm">Unrealized P&L</div>
          <div className="text-green-400 text-xl font-bold">+$31,420</div>
          <div className="text-red-300 text-sm">SOL Balance: 156.9</div>
        </div>
      </div>
    </div>
  );
};

// Hot Picks Component
const HotPicks = () => {
  const picks = ['🐸 PEPE +420%', '🚀 MOON +1337%', '💎 GEM +69%', '🔥 FIRE +999%'];
  
  return (
    <div className="bg-gradient-to-r from-red-800/40 via-orange-800/40 to-red-800/40 rounded-xl p-4 mb-6 border border-orange-600/40">
      <div className="flex items-center space-x-2 mb-2">
        <Flame className="w-5 h-5 text-orange-400" />
        <span className="text-orange-400 font-semibold">Hot Picks Today</span>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {picks.map((pick, i) => (
          <div key={i} className="flex-shrink-0 bg-orange-900/30 rounded-lg px-3 py-2 text-orange-200 text-sm font-medium">
            {pick}
          </div>
        ))}
      </div>
    </div>
  );
};

// Search Bar Component
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 w-5 h-5 text-red-400" />
      <input
        type="text"
        placeholder="Search memecoins..."
        className="w-full bg-red-950/30 border border-red-800/40 rounded-xl pl-10 pr-12 py-3 text-white placeholder-red-300 focus:outline-none focus:border-red-600 transition-colors"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="absolute right-3 top-3 text-red-400 hover:text-red-300 transition-colors">
        <Filter className="w-5 h-5" />
      </button>
    </div>
  );
};

// Tab Navigation Component
const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'trending', label: 'Trending', icon: Flame },
    { id: 'gainers', label: 'Gainers', icon: TrendingUp },
    { id: 'new', label: 'New', icon: Zap }
  ];

  return (
    <div className="flex px-4 pb-4">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                : 'bg-red-950/20 text-red-300 hover:bg-red-900/30 hover:text-red-200'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

// Header Component
const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
          SolanaMemes 🚀
        </h1>
        <div className="flex space-x-3">
          <button className="p-2 rounded-full bg-red-900/30 hover:bg-red-800/40 transition-colors">
            <Bell className="w-5 h-5 text-red-400" />
          </button>
          <button className="p-2 rounded-full bg-red-900/30 hover:bg-red-800/40 transition-colors">
            <Wallet className="w-5 h-5 text-red-400" />
          </button>
          <button className="p-2 rounded-full bg-red-900/30 hover:bg-red-800/40 transition-colors">
            <Settings className="w-5 h-5 text-red-400" />
          </button>
        </div>
      </div>
      
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

// Bottom Navigation Component
const BottomNavigation = () => {
  const navItems = [
    { icon: TrendingUp, label: 'Markets', active: true },
    { icon: Wallet, label: 'Portfolio', active: false },
    { icon: Users, label: 'Social', active: false },
    { icon: Star, label: 'Watchlist', active: false }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-red-800/30">
      <div className="grid grid-cols-4 py-2">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <button
              key={i}
              className={`flex flex-col items-center py-3 transition-colors ${
                item.active 
                  ? 'text-red-400' 
                  : 'text-red-600 hover:text-red-400'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Floating Action Button Component
const FloatingActionButton = () => {
  return (
    <button className="fixed bottom-20 right-4 w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-red-900/50 transition-all duration-300 hover:scale-110">
      <DollarSign className="w-6 h-6 text-white" />
    </button>
  );
};

// Coin List Component
const CoinList = ({ coins }) => {
  return (
    <div className="space-y-4">
      {coins.map((coin, index) => (
        <MemeCard key={coin.symbol} coin={coin} index={index} />
      ))}
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');
  
  const memeCoins = [
    {
      name: "DogeCoin Classic", 
      symbol: "DOGC", 
      price: "0.00042", 
      change: 1337.5, 
      marketCap: "$69M", 
      volume: "$12M", 
      holders: "42K"
    },
    {
      name: "Pepe Moon", 
      symbol: "PEPM", 
      price: "0.000069", 
      change: -4.20, 
      marketCap: "$420K", 
      volume: "$69K", 
      holders: "1.2K"
    },
    {
      name: "Wojak Tears", 
      symbol: "WJKT", 
      price: "0.00001", 
      change: 69.0, 
      marketCap: "$1.3M", 
      volume: "$234K", 
      holders: "5.6K"
    },
    {
      name: "Chad Energy", 
      symbol: "CHAD", 
      price: "0.0042", 
      change: 420.69, 
      marketCap: "$33M", 
      volume: "$7.8M", 
      holders: "28K"
    },
    {
      name: "Diamond Hands", 
      symbol: "DMND", 
      price: "0.000420", 
      change: -13.37, 
      marketCap: "$8.7M", 
      volume: "$2.1M", 
      holders: "15K"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950/20 to-black text-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-red-800/30">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <PortfolioBanner />
        <HotPicks />
        <CoinList coins={memeCoins} />
      </div>

      <BottomNavigation />
      <FloatingActionButton />
    </div>
  );
};

export default App;