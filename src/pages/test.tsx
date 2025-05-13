import React from "react";
import { Icon } from "@iconify/react";
import { 
  Card, 
  Tabs, 
  Tab, 
  Chip, 
  Button, 
  Tooltip, 
  Divider, 
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@heroui/react";
import { motion } from "framer-motion";

export default function App() {
  const [selected, setSelected] = React.useState("dashboard");
  const [timeframe, setTimeframe] = React.useState("Month");
  
  // Bubble chart data
  const bubbles = [
    {
      id: "btc",
      size: 180,
      x: 50,
      y: 45,
      color: "primary",
      icon: "logos:bitcoin",
      label: "BTC",
      percentage: 80,
      animationDelay: 0,
    },
    {
      id: "eth",
      size: 140,
      x: 70,
      y: 30,
      color: "secondary",
      icon: "logos:ethereum",
      label: "ETH",
      percentage: 51,
      animationDelay: 1,
    },
    {
      id: "ada",
      size: 100,
      x: 25,
      y: 60,
      color: "danger",
      icon: "logos:cardano",
      label: "ADA",
      percentage: 42,
      animationDelay: 2,
    },
    {
      id: "sol",
      size: 120,
      x: 80,
      y: 65,
      color: "warning",
      icon: "logos:solana",
      label: "SOL",
      percentage: 63,
      animationDelay: 1.5,
    },
    {
      id: "dot",
      size: 90,
      x: 30,
      y: 25,
      color: "success",
      icon: "logos:polkadot",
      label: "DOT",
      percentage: 37,
      animationDelay: 0.5,
    },
    {
      id: "bnb",
      size: 70,
      x: 15,
      y: 40,
      color: "warning",
      icon: "logos:binance-coin",
      label: "BNB",
      percentage: 29,
      animationDelay: 2.5,
    },
    {
      id: "xrp",
      size: 60,
      x: 65,
      y: 15,
      color: "secondary",
      icon: "logos:ripple",
      label: "XRP",
      percentage: 22,
      animationDelay: 1.8,
    },
  ];

  // Coins list data
  const coins = [
    { id: "btc", name: "Bitcoin", symbol: "BTC", icon: "logos:bitcoin", price: 5042.21, change: 30 },
    { id: "ada", name: "Cardano", symbol: "ADA", icon: "logos:cardano", price: 4540.00, change: 10 },
    { id: "stx", name: "Stacks", symbol: "STX", icon: "logos:stacks-icon", price: 3959.01, change: 5 },
    { id: "ava", name: "Avalanche", symbol: "AVA", icon: "logos:avalanche", price: 2002.50, change: 12 },
  ];

  // Transaction history data
  const transactions = [
    { 
      id: "tx1", 
      type: "visa", 
      amount: 6403, 
      direction: "sent", 
      date: "02.01.2021", 
      cardNumber: "4300" 
    },
    { 
      id: "tx2", 
      type: "visa", 
      amount: 178, 
      direction: "sent", 
      date: "04.01.2021", 
      cardNumber: "5500" 
    },
    { 
      id: "tx3", 
      type: "mastercard", 
      amount: 900, 
      direction: "sent", 
      date: "05.01.2021", 
      cardNumber: "9800" 
    },
    { 
      id: "tx4", 
      type: "mastercard", 
      amount: 550, 
      direction: "sent", 
      date: "02.01.2021", 
      cardNumber: "1200" 
    },
    { 
      id: "tx5", 
      type: "visa", 
      amount: 123, 
      direction: "sent", 
      date: "02.01.2021", 
      cardNumber: "4300" 
    },
  ];

  // Performance metrics data
  const metrics = [
    {
      id: "portfolio",
      title: "Portfolio",
      value: 34394,
      change: 4.5,
      changeValue: 3440,
      icon: "lucide:briefcase",
      color: "primary",
      data: [
        { month: "Jan", value: 30000 },
        { month: "Feb", value: 28000 },
        { month: "Mar", value: 32000 },
        { month: "Apr", value: 31000 },
        { month: "May", value: 34394 },
      ],
    },
    {
      id: "performance",
      title: "Performance today",
      value: 1970,
      change: 1.2,
      changeValue: 140,
      icon: "lucide:activity",
      color: "success",
      data: [
        { month: "Jan", value: 1200 },
        { month: "Feb", value: 1500 },
        { month: "Mar", value: 1800 },
        { month: "Apr", value: 1700 },
        { month: "May", value: 1970 },
      ],
    },
    {
      id: "profit",
      title: "All time profit",
      value: 534394,
      change: 12.5,
      changeValue: 24440,
      icon: "lucide:trending-up",
      color: "success",
      data: [
        { month: "Jan", value: 480000 },
        { month: "Feb", value: 490000 },
        { month: "Mar", value: 510000 },
        { month: "Apr", value: 520000 },
        { month: "May", value: 534394 },
      ],
    },
    {
      id: "dividends",
      title: "Dividends",
      value: 3782,
      change: 1.1,
      changeValue: 840,
      icon: "lucide:pie-chart",
      color: "warning",
      data: [
        { month: "Jan", value: 2800 },
        { month: "Feb", value: 3000 },
        { month: "Mar", value: 3200 },
        { month: "Apr", value: 3500 },
        { month: "May", value: 3782 },
      ],
    },
  ];

  // Sales report data
  const regions = [
    { name: "Los Angeles", value: 201192 },
    { name: "New York", value: 192054 },
    { name: "Canada", value: 166401 },
    { name: "China", value: 164299 },
    { name: "Tokyo", value: 162227 },
  ];

  // Chart segments data
  const segments = [
    { color: "#00E5A1", percentage: 35, startAngle: 0 },
    { color: "#FFAD0F", percentage: 25, startAngle: 35 },
    { color: "#FF5B79", percentage: 20, startAngle: 60 },
    { color: "#7B61FF", percentage: 15, startAngle: 80 },
    { color: "#0E76FD", percentage: 5, startAngle: 95 },
  ];

  // Navigation items
  const navItems = [
    { key: "dashboard", icon: "lucide:layout-dashboard", label: "Dashboard" },
    { key: "exchange", icon: "lucide:repeat", label: "Exchange" },
    { key: "prices", icon: "lucide:bar-chart-2", label: "Prices" },
    { key: "wallets", icon: "lucide:wallet", label: "Wallets" },
    { key: "activity", icon: "lucide:activity", label: "Activity" },
    { key: "messages", icon: "lucide:message-square", label: "Messages" },
    { key: "accounts", icon: "lucide:user", label: "Accounts" },
  ];

  // State for selected performance metric
  const [selectedMetric, setSelectedMetric] = React.useState(metrics[0]);

  // Utility functions
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const formatChange = (change) => {
    return `${change > 0 ? '+' : ''}${change}%`;
  };

  const getChangeColor = (change) => {
    return change > 0 ? "success" : "danger";
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const formatValue = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getColorValue = (color) => {
    const colorMap = {
      primary: "#7B61FF",
      success: "#00E5A1",
      danger: "#FF5B79",
      warning: "#FFAD0F",
      secondary: "#0E76FD"
    };
    
    return colorMap[color] || colorMap.primary;
  };

  // Custom chart renderer function
  const renderCustomChart = (data, color) => {
    const maxValue = Math.max(...data.map(item => item.value));
    const minValue = Math.min(...data.map(item => item.value));
    const range = maxValue - minValue;
    
    return (
      <div className="relative h-[150px] w-full">
        {/* Chart background */}
        <div className="absolute inset-0 flex items-end">
          <div className="h-full w-full border-b border-l border-white/10">
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 translate-y-[-33%]"></div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 translate-y-[-66%]"></div>
          </div>
        </div>
        
        {/* Data points */}
        <div className="absolute inset-0 flex items-end justify-between px-2">
          {data.map((item, index) => {
            const height = range === 0 ? 50 : ((item.value - minValue) / range) * 80 + 10;
            return (
              <div key={index} className="flex h-full flex-col items-center justify-end">
                <motion.div 
                  className="w-1 rounded-t-sm"
                  style={{ 
                    height: `${height}%`, 
                    backgroundColor: getColorValue(color)
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
                <div className="mt-1 text-[10px] text-default-500">{item.month}</div>
              </div>
            );
          })}
        </div>
        
        {/* Value indicators */}
        <div className="absolute left-2 top-0 text-[10px] text-default-500">
          {formatValue(maxValue)}
        </div>
        <div className="absolute bottom-6 left-2 text-[10px] text-default-500">
          {formatValue(minValue)}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      {/* Sidebar */}
      <aside className="flex w-[70px] flex-col items-center border-r border-divider bg-content1 py-6 sm:w-[70px] lg:w-[240px]">
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
          <Icon icon="lucide:bitcoin" className="text-2xl text-white" />
        </div>
        
        <nav className="flex flex-1 flex-col items-center gap-2 lg:items-stretch">
          {navItems.map((item) => (
            <Tooltip
              key={item.key}
              content={item.label}
              placement="right"
              isDisabled={window.innerWidth >= 1024}
            >
              <Button
                variant={selected === item.key ? "flat" : "light"}
                color={selected === item.key ? "primary" : "default"}
                className={`relative w-12 justify-center lg:w-full lg:justify-start ${
                  selected === item.key ? "bg-primary/10" : ""
                }`}
                onPress={() => setSelected(item.key)}
              >
                {selected === item.key && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <Icon icon={item.icon} className="text-xl" />
                <span className="hidden lg:inline-block">{item.label}</span>
              </Button>
            </Tooltip>
          ))}
        </nav>
        
        <Button
          variant="light"
          color="danger"
          className="mt-auto w-12 justify-center lg:w-full lg:justify-start"
        >
          <Icon icon="lucide:log-out" className="text-xl" />
          <span className="hidden lg:inline-block">Logout</span>
        </Button>
      </aside>
      
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-divider bg-content1 px-6 py-3">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">ECLIPSE</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <Tooltip content="Search" placement="bottom">
              <Button isIconOnly variant="light" radius="full" aria-label="Search">
                <Icon icon="lucide:search" className="text-lg" />
              </Button>
            </Tooltip>
            
            <Tooltip content="Notifications" placement="bottom">
              <Button isIconOnly variant="light" radius="full" aria-label="Notifications">
                <div className="relative">
                  <Icon icon="lucide:bell" className="text-lg" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                    3
                  </span>
                </div>
              </Button>
            </Tooltip>
            
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Button variant="light" className="gap-2" radius="full">
                  <Avatar
                    src="https://img.heroui.chat/image/avatar?w=40&h=40&u=user1"
                    size="sm"
                    className="border-2 border-primary"
                  />
                  <span className="hidden sm:inline-block">Justin Humphrey</span>
                  <Icon icon="lucide:chevron-down" className="text-sm" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User actions">
                <DropdownItem key="profile" startContent={<Icon icon="lucide:user" />}>Profile</DropdownItem>
                <DropdownItem key="settings" startContent={<Icon icon="lucide:settings" />}>Settings</DropdownItem>
                <DropdownItem key="help" startContent={<Icon icon="lucide:help-circle" />}>Help & Feedback</DropdownItem>
                <DropdownItem key="logout" startContent={<Icon icon="lucide:log-out" />} className="text-danger" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <div className="flex items-center gap-3">
                <Tabs 
                  aria-label="Time period" 
                  color="primary"
                  variant="light"
                  radius="full"
                  size="sm"
                  className="bg-content2 p-1 rounded-full"
                >
                  <Tab key="day" title="Day" />
                  <Tab key="week" title="Week" />
                  <Tab key="month" title={
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:calendar" className="text-sm" />
                      <span>Month</span>
                    </div>
                  } />
                  <Tab key="year" title="Year" />
                </Tabs>
                
                <Tooltip content="Refresh data">
                  <Button isIconOnly variant="flat" color="primary" radius="full" aria-label="Refresh">
                    <Icon icon="lucide:refresh-cw" className="text-lg" />
                  </Button>
                </Tooltip>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Balance Visualization */}
              <Card className="glass-card col-span-1 lg:col-span-2 overflow-visible">
                <div className="relative h-[500px] w-full overflow-hidden p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">Balance</h3>
                      <Dropdown>
                        <DropdownTrigger>
                          <Button variant="light" className="mt-1 h-6 min-w-0 p-0">
                            <span className="text-sm text-default-500 flex items-center gap-1">
                              {timeframe} <Icon icon="lucide:chevron-down" className="text-xs" />
                            </span>
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu 
                          aria-label="Time periods"
                          onAction={(key) => setTimeframe(key.toString())}
                        >
                          <DropdownItem key="Day">Day</DropdownItem>
                          <DropdownItem key="Week">Week</DropdownItem>
                          <DropdownItem key="Month">Month</DropdownItem>
                          <DropdownItem key="Year">Year</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="flat" color="primary">
                        <Icon icon="lucide:plus" className="text-sm" />
                        Buy coins
                      </Button>
                      <Button size="sm" variant="flat">
                        <Icon icon="lucide:arrow-up-down" className="text-sm" />
                        Sell
                      </Button>
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:more-vertical" className="text-lg" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-4xl font-bold number-font">$140,504</h2>
                      <div className="mt-2 flex items-center justify-center gap-1">
                        <Chip color="success" size="sm" variant="flat" radius="sm">
                          <Icon icon="lucide:trending-up" className="mr-1 text-xs" />
                          +4.5%
                        </Chip>
                        <span className="text-xs text-default-500">vs last {timeframe.toLowerCase()}</span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Bubbles */}
                  {bubbles.map((bubble) => (
                    <motion.div
                      key={bubble.id}
                      className={`bubble bubble-${bubble.color}`}
                      style={{
                        width: bubble.size,
                        height: bubble.size,
                        left: `${bubble.x}%`,
                        top: `${bubble.y}%`,
                        background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05) 70%)`,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: bubble.animationDelay * 0.2,
                        ease: "easeOut" 
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="flex flex-col items-center justify-center"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 3 + bubble.animationDelay,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <div className="relative mb-1">
                          <Icon icon={bubble.icon} className="text-2xl" />
                          <svg className="absolute -top-1 -left-1 h-[calc(100%+8px)] w-[calc(100%+8px)]" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="48"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeDasharray={`${bubble.percentage * 3} ${300 - bubble.percentage * 3}`}
                              strokeLinecap="round"
                              className={`text-${bubble.color}`}
                              transform="rotate(-90 50 50)"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-medium">{bubble.label}</div>
                        <div className="text-xs opacity-80">{bubble.percentage}%</div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </Card>
              
              {/* Coins List */}
              <Card className="glass-card">
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Coins</h3>
                    <div className="flex gap-2">
                      <Chip color="primary" variant="flat" size="sm">Buy coins</Chip>
                      <Chip variant="flat" size="sm">Sell</Chip>
                    </div>
                  </div>
                  
                  <Table 
                    removeWrapper
                    aria-label="Cryptocurrency coins list"
                    classNames={{
                      base: "max-h-[300px]",
                      table: "min-h-[100px]",
                    }}
                  >
                    <TableHeader>
                      <TableColumn>Currency</TableColumn>
                      <TableColumn>Amount</TableColumn>
                      <TableColumn>Trend</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {coins.map((coin, index) => (
                        <TableRow key={coin.id}>
                          <TableCell>
                            <motion.div 
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <Icon icon={coin.icon} className="text-xl" />
                              <div>
                                <div className="font-medium">{coin.symbol}</div>
                                <div className="text-xs text-default-500">{coin.name}</div>
                              </div>
                            </motion.div>
                          </TableCell>
                          <TableCell>
                            <motion.div 
                              className="number-font font-medium"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                            >
                              {formatPrice(coin.price)}
                            </motion.div>
                          </TableCell>
                          <TableCell>
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                            >
                              <Chip 
                                color={getChangeColor(coin.change)} 
                                variant="flat" 
                                size="sm"
                                startContent={coin.change > 0 ? 
                                  <Icon icon="lucide:trending-up" className="text-xs" /> : 
                                  <Icon icon="lucide:trending-down" className="text-xs" />
                                }
                              >
                                {formatChange(coin.change)}
                              </Chip>
                            </motion.div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Sales Report */}
              <Card className="glass-card col-span-1 lg:col-span-1">
                <div className="p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Sales Report</h3>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="relative mb-8 h-[220px] w-[220px]">
                      {/* Circular chart segments */}
                      <svg viewBox="0 0 100 100" className="circular-chart">
                        {segments.map((segment, index) => {
                          const startAngle = (segment.startAngle / 100) * 360;
                          const endAngle = ((segment.startAngle + segment.percentage) / 100) * 360;
                          const largeArcFlag = segment.percentage > 50 ? 1 : 0;
                          
                          // Calculate coordinates
                          const startX = 50 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180));
                          const startY = 50 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180));
                          const endX = 50 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180));
                          const endY = 50 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180));
                          
                          return (
                            <motion.path
                              key={index}
                              className="circular-chart-segment"
                              d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                              fill={segment.color}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                            />
                          );
                        })}
                        
                        {/* Inner circle */}
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="25"
                          fill="#131318"
                          initial={{ opacity: 0, r: 0 }}
                          animate={{ opacity: 1, r: 25 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        />
                      </svg>
                      
                      {/* Center content */}
                      <motion.div 
                        className="circular-chart-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <div className="number-font text-2xl font-bold">22,317</div>
                        <div className="text-xs text-default-500">SUMMARY</div>
                      </motion.div>
                    </div>
                    
                    <div className="grid w-full grid-cols-2 gap-4">
                      <motion.div 
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className="flex items-center gap-1">
                          <Icon icon="lucide:calendar" className="text-success" />
                          <span className="text-sm">Monthly</span>
                        </div>
                        <div className="number-font text-2xl font-bold">$8,097</div>
                        <div className="flex items-center gap-1 text-xs">
                          <Chip color="success" size="sm" variant="flat" className="h-5 min-h-0">
                            <Icon icon="lucide:trending-up" className="mr-1 text-xs" />
                            19.6%
                          </Chip>
                          <span className="text-default-500">44,214 USD</span>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <div className="flex items-center gap-1">
                          <Icon icon="lucide:calendar" className="text-warning" />
                          <span className="text-sm">Yearly</span>
                        </div>
                        <div className="number-font text-2xl font-bold">$312,134</div>
                        <div className="flex items-center gap-1 text-xs">
                          <Chip color="success" size="sm" variant="flat" className="h-5 min-h-0">
                            <Icon icon="lucide:trending-up" className="mr-1 text-xs" />
                            2.5%
                          </Chip>
                          <span className="text-default-500">301,002 USD</span>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="mt-6 w-full">
                      <h4 className="mb-3 text-sm font-medium">Regional Breakdown</h4>
                      <div className="space-y-3">
                        {regions.map((region, index) => (
                          <motion.div
                            key={region.name}
                            className="flex items-center justify-between"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          >
                            <span className="text-sm">{region.name}</span>
                            <span className="number-font text-sm font-medium">{formatNumber(region.value)}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Performance Metrics */}
              <Card className="glass-card col-span-1 lg:col-span-1">
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Performance</h3>
                  </div>
                  
                  <div className="mb-4 grid grid-cols-2 gap-2">
                    {metrics.map((metric, index) => (
                      <motion.div
                        key={metric.id}
                        className={`cursor-pointer rounded-lg p-3 transition-all ${
                          selectedMetric.id === metric.id ? `bg-${metric.color}/20` : "bg-content2"
                        }`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => setSelectedMetric(metric)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-md bg-${metric.color}/30`}>
                            <Icon icon={metric.icon} className={`text-${metric.color}`} />
                          </div>
                          <div className="text-xs font-medium">{metric.title}</div>
                        </div>
                        <div className="mt-2 number-font text-lg font-bold">{formatValue(metric.value)}</div>
                        <div className="mt-1 flex items-center gap-1 text-xs">
                          <span className={`text-${metric.change > 0 ? "success" : "danger"}`}>
                            {metric.change > 0 ? "+" : ""}{metric.change}%
                          </span>
                          <span className="text-default-500">
                            {formatValue(metric.changeValue)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <motion.div
                      key={selectedMetric.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="h-[150px] w-full"
                    >
                      {renderCustomChart(selectedMetric.data, selectedMetric.color)}
                    </motion.div>
                  </div>
                </div>
              </Card>
              
              {/* Transaction History */}
              <Card className="glass-card col-span-1 lg:col-span-1">
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">History</h3>
                    <Chip variant="flat" size="sm">All transactions</Chip>
                  </div>
                  
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                    {transactions.map((transaction, index) => (
                      <motion.div
                        key={transaction.id}
                        className="flex items-center justify-between rounded-lg bg-content2 p-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-md ${
                            transaction.type === "visa" ? "bg-primary/20" : "bg-warning/20"
                          }`}>
                            <Icon 
                              icon={transaction.type === "visa" ? "logos:visa" : "logos:mastercard"} 
                              className="text-xl" 
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Sent</div>
                            <div className="text-xs text-default-500">
                              {transaction.date} • Credit card {transaction.cardNumber}
                            </div>
                          </div>
                        </div>
                        <div className="number-font text-sm font-medium text-danger">
                          - {formatValue(transaction.amount)}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Button 
                    className="mt-4 w-full" 
                    variant="flat" 
                    color="primary"
                    size="sm"
                  >
                    View All Transactions
                  </Button>
                </div>
              </Card>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
