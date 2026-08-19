export const mockMarketIndices = [
  {
    name: "S&P 500",
    symbol: "SPX",
    value: "5,306.04",
    change: "+0.84%",
    direction: "up",
  },
  {
    name: "Dow Jones",
    symbol: "DJI",
    value: "39,069.59",
    change: "+0.60%",
    direction: "up",
  },
  {
    name: "Nasdaq",
    symbol: "IXIC",
    value: "16,920.79",
    change: "+1.51%",
    direction: "up",
  },
  {
    name: "NGX All-Share",
    symbol: "NGX",
    value: "98,412.67",
    change: "+0.42%",
    direction: "up",
  },
];

export const mockMarketGainers = [
  {
    symbol: "DANGCEM",
    name: "Dangote Cement",
    price: "₦412.50",
    change: "+8.42%",
  },
  {
    symbol: "GTCO",
    name: "Guaranty Trust Holding",
    price: "₦48.75",
    change: "+6.18%",
  },
  {
    symbol: "AIRTELAFRI",
    name: "Airtel Africa",
    price: "₦2,145.00",
    change: "+4.93%",
  },
  {
    symbol: "BUAFOODS",
    name: "BUA Foods",
    price: "₦385.20",
    change: "+4.21%",
  },
  {
    symbol: "ZENITH",
    name: "Zenith Bank",
    price: "₦52.10",
    change: "+3.87%",
  },
];

export const mockMarketLosers = [
  {
    symbol: "MTNN",
    name: "MTN Nigeria",
    price: "₦318.00",
    change: "-5.21%",
  },
  {
    symbol: "SEPLAT",
    name: "Seplat Energy",
    price: "₦2,940.00",
    change: "-4.12%",
  },
  {
    symbol: "UBA",
    name: "United Bank for Africa",
    price: "₦28.50",
    change: "-3.87%",
  },
  {
    symbol: "FBNH",
    name: "FBN Holdings",
    price: "₦35.80",
    change: "-3.42%",
  },
  {
    symbol: "ACCESSCORP",
    name: "Access Holdings",
    price: "₦24.60",
    change: "-2.95%",
  },
];

export const mockStocks = [
  {
    symbol: "DANGCEM",
    name: "Dangote Cement",
    price: "₦412.50",
    change: "+8.42%",
    direction: "up",
    volume: "12.4M",
  },
  {
    symbol: "GTCO",
    name: "Guaranty Trust Holding",
    price: "₦48.75",
    change: "+6.18%",
    direction: "up",
    volume: "8.7M",
  },
  {
    symbol: "MTNN",
    name: "MTN Nigeria",
    price: "₦318.00",
    change: "-5.21%",
    direction: "down",
    volume: "6.3M",
  },
  {
    symbol: "ZENITH",
    name: "Zenith Bank",
    price: "₦52.10",
    change: "+3.87%",
    direction: "up",
    volume: "10.1M",
  },
  {
    symbol: "AIRTELAFRI",
    name: "Airtel Africa",
    price: "₦2,145.00",
    change: "+4.93%",
    direction: "up",
    volume: "2.8M",
  },
  {
    symbol: "UBA",
    name: "United Bank for Africa",
    price: "₦28.50",
    change: "-3.87%",
    direction: "down",
    volume: "7.5M",
  },
  {
    symbol: "FBNH",
    name: "FBN Holdings",
    price: "₦35.80",
    change: "-3.42%",
    direction: "down",
    volume: "5.9M",
  },
  {
    symbol: "BUAFOODS",
    name: "BUA Foods",
    price: "₦385.20",
    change: "+4.21%",
    direction: "up",
    volume: "4.2M",
  },
];

export const mockForexCommodities = [
  {
    name: "US Dollar / Naira",
    symbol: "USD/NGN",
    value: "₦1,620.00",
    change: "+0.31%",
    direction: "up",
    unit: "Per USD",
    type: "forex",
  },
  {
    name: "British Pound / Naira",
    symbol: "GBP/NGN",
    value: "₦2,080.00",
    change: "-0.18%",
    direction: "down",
    unit: "Per GBP",
    type: "forex",
  },
  {
    name: "Euro / Naira",
    symbol: "EUR/NGN",
    value: "₦1,790.00",
    change: "+0.22%",
    direction: "up",
    unit: "Per EUR",
    type: "forex",
  },
  {
    name: "Gold",
    symbol: "XAU/USD",
    value: "$2,355.90",
    change: "+0.19%",
    direction: "up",
    unit: "Per ounce",
    type: "gold",
  },
  {
    name: "Crude Oil",
    symbol: "WTI",
    value: "$78.42",
    change: "-0.64%",
    direction: "down",
    unit: "Per barrel",
    type: "oil",
  },
];

export const mockMarketNews = [
  {
    id: "market-news-1",
    category: "Markets",
    title: "Global Markets React as Investors Assess New Economic Data",
    description:
      "Investors are watching economic indicators closely as markets respond to changing expectations around growth and interest rates.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "35 minutes ago",
  },
  {
    id: "market-news-2",
    category: "Stocks",
    title: "African Equities Attract Increased Investor Attention",
    description:
      "Investors continue to monitor opportunities across African stock markets.",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80",
    publishedAt: "1 hour ago",
  },
  {
    id: "market-news-3",
    category: "Forex",
    title: "Currency Markets Remain Focused on Dollar Movements",
    description:
      "Currency traders continue to monitor developments affecting the dollar and emerging-market currencies.",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    publishedAt: "2 hours ago",
  },
  {
    id: "market-news-4",
    category: "Commodities",
    title: "Oil Prices Move as Traders Assess Global Supply Outlook",
    description:
      "Crude oil markets remain sensitive to supply expectations and global demand.",
    image:
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=800&q=80",
    publishedAt: "3 hours ago",
  },
];
