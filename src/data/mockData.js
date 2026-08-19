import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Landmark,
  // Cpu,
  // Bitcoin,
  Building2,
  // Globe2,
  // Play,
} from "lucide-react";

export const mockCategories = [
  {
    name: "Business",
    description: "Company news, startups, deals and business trends.",
    icon: BriefcaseBusiness,
    path: "/business",
  },
  {
    name: "Markets",
    description: "Stocks, indices, commodities and market movements.",
    icon: ChartNoAxesCombined,
    path: "/markets",
  },
  {
    name: "Economy",
    description: "Economic data, policies, inflation and interest rates.",
    icon: Landmark,
    path: "/economy",
  },
  // {
  //   name: "Tech",
  //   description: "Technology, AI, innovation and the digital economy.",
  //   icon: Cpu,
  //   path: "/tech",
  // },
  // {
  //   name: "Crypto",
  //   description: "Digital assets, blockchain and cryptocurrency markets.",
  //   icon: Bitcoin,
  //   path: "/crypto",
  // },
  {
    name: "Companies",
    description: "Company updates, earnings, leadership and corporate news.",
    icon: Building2,
    path: "/companies",
  },
  // {
  //   name: "World",
  //   description: "Global business, economic and financial developments.",
  //   icon: Globe2,
  //   path: "/world",
  // },
  // {
  //   name: "Videos",
  //   description: "Business interviews, market updates and analysis.",
  //   icon: Play,
  //   path: "/videos",
  // },
];

export const mockMarkets = [
  {
    symbol: "SP500",
    name: "S&P 500",
    value: "5,306.04",
    change: "0.84",
    direction: "up",
  },
  {
    symbol: "DOW",
    name: "Dow 30",
    value: "39,069.59",
    change: "0.60",
    direction: "up",
  },
  {
    symbol: "NASDAQ",
    name: "Nasdaq",
    value: "16,920.79",
    change: "1.51",
    direction: "up",
  },
  {
    symbol: "USDNGN",
    name: "USD/NGN",
    value: "1,620.00",
    change: "0.31",
    direction: "down",
  },
  {
    symbol: "BTCUSD",
    name: "BTC/USD",
    value: "66,885.21",
    change: "2.35",
    direction: "up",
  },
  {
    symbol: "GOLD",
    name: "Gold",
    value: "2,355.90",
    change: "0.19",
    direction: "up",
  },
];

export const mockTrendingTopics = [
  "Inflation",
  "Interest Rates",
  "Nigeria Economy",
  "Oil Prices",
  "AI",
  "Startups",
  "Earnings Season",
  "Bitcoin",
  "Federal Reserve",
];

export const mockHeroArticle = {
  id: "hero-001",
  category: "Business",
  title: "Nigeria's Economy Shows Strong Signs of Recovery as Investment Grows",
  description:
    "Businesses and investors are responding positively to improving economic conditions, with renewed activity across key sectors of the Nigerian economy.",
  image:
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  source: "Finsight",
  publishedAt: "2 hours ago",
};

export const mockLatestNews = [
  {
    id: "news-001",
    category: "Markets",
    title: "Global Markets Rally as Investors Respond to New Economic Data",
    description:
      "Major markets opened higher as investors assessed fresh economic indicators.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80",
    source: "Finsight Markets",
    publishedAt: "35 minutes ago",
  },
  {
    id: "news-002",
    category: "Economy",
    title: "Nigeria's Inflation Outlook Remains a Key Focus for Investors",
    description:
      "Analysts continue to monitor inflation and interest-rate developments.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    source: "Finsight Economy",
    publishedAt: "1 hour ago",
  },
  {
    id: "news-003",
    category: "Technology",
    title: "African Startups Attract Fresh Investment as Tech Sector Expands",
    description:
      "Technology companies across Africa continue to attract investors.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80",
    source: "Finsight Tech",
    publishedAt: "2 hours ago",
  },
  {
    id: "news-004",
    category: "Crypto",
    title: "Bitcoin Holds Above Key Level as Digital Assets Gain Momentum",
    description:
      "Crypto markets remain active as traders watch global economic developments.",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=600&q=80",
    source: "Finsight Crypto",
    publishedAt: "3 hours ago",
  },
];

export const mockMarketsOverview = [
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

export const mockExchangeRates = [
  {
    pair: "USD/NGN",
    value: "1,620.00",
    change: "+0.31%",
    direction: "up",
  },
  {
    pair: "GBP/NGN",
    value: "2,085.40",
    change: "-0.18%",
    direction: "down",
  },
  {
    pair: "EUR/NGN",
    value: "1,765.20",
    change: "+0.12%",
    direction: "up",
  },
];

export const mockPopularTopics = [
  {
    name: "Artificial Intelligence",
    count: "1,248 stories",
  },
  {
    name: "Nigeria Economy",
    count: "986 stories",
  },
  {
    name: "Oil & Gas",
    count: "842 stories",
  },
  {
    name: "Bitcoin",
    count: "731 stories",
  },
  {
    name: "Inflation",
    count: "654 stories",
  },
  {
    name: "Interest Rates",
    count: "529 stories",
  },
  {
    name: "Startups",
    count: "486 stories",
  },
  {
    name: "Stock Market",
    count: "423 stories",
  },
];
