import MarketTicker from "../components/market/MarketTicker";
import MarketIndices from "../components/market/MarketIndices";
import MarketMovers from "../components/market/MarketMovers";
import StockMarketTable from "../components/market/StockMarketTable";
import ForexCommodities from "../components/market/ForexCommodities";
import MarketNews from "../components/market/MarketNews";

import { mockMarkets } from "../data/mockData";
import {
  mockMarketIndices,
  mockMarketGainers,
  mockMarketLosers,
  mockStocks,
  mockForexCommodities,
  mockMarketNews,
} from "../data/marketsMockData";

function Markets() {
  return (
    <div className="bg-slate-50">
      {/* Market ticker */}
      <MarketTicker markets={mockMarkets} />

      {/* Page heading */}
      <section className="bg-white">
        <div className="mx-auto max-w-350 px-5 py-10 sm:px-7">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Finsight Markets
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Markets
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Track global and Nigerian markets, stocks, indices, currencies and
            commodities in one place.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-350 px-5 pb-16 sm:px-7">
        <MarketIndices indices={mockMarketIndices} />
        <MarketMovers gainers={mockMarketGainers} losers={mockMarketLosers} />
        <StockMarketTable stocks={mockStocks} />
        <ForexCommodities assets={mockForexCommodities} />
        <MarketNews articles={mockMarketNews} />
      </main>
    </div>
  );
}

export default Markets;
