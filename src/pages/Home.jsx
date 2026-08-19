import MarketTicker from "../components/market/MarketTicker";
import TrendingBar from "../components/news/TrendingBar";
import HeroStory from "../components/news/HeroStory";
import LatestNews from "../components/news/LatestNews";
import MarketsOverview from "../components/market/MarketsOverview";
import ExchangeRates from "../components/market/ExchangeRates";
import CategoryCard from "../components/categories/CategoryCard";
import { mockCategories } from "../data/mockData";
import PopularTopics from "../components/topics/PopularTopics";
import {
  mockMarkets,
  mockHeroArticle,
  mockLatestNews,
  mockMarketsOverview,
  mockExchangeRates,
  mockPopularTopics,
} from "../data/mockData";
import Newsletter from "../components/newsletter/NewsLetter";

function Home() {
  return (
    <div className="bg-white">
      {/* Market ticker */}
      <MarketTicker markets={mockMarkets} />

      {/* Trending topics */}
      <TrendingBar />

      {/* Main content */}
      <main className="mx-auto max-w-350 px-5 py-8 sm:px-7">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Left */}
          <HeroStory article={mockHeroArticle} />

          {/* Right */}
          <LatestNews articles={mockLatestNews} />
        </div>

        {/* Market section */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <MarketsOverview markets={mockMarketsOverview} />

          <ExchangeRates rates={mockExchangeRates} />
        </div>

        {/* Explore Categories */}
        <section className="mt-12">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Explore
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
              Explore Categories
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-slate-500">
              Explore the latest stories, insights and developments across
              business, markets, technology and the global economy.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mockCategories.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
          </div>
        </section>

        {/* Popular Topics */}
        <PopularTopics topics={mockPopularTopics} />

        {/* Newsletter */}
        <Newsletter />
      </main>
    </div>
  );
}

export default Home;
