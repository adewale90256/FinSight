import MarketTicker from "../components/market/MarketTicker";
import EconomicIndicators from "../components/economy/EconomicIndicators";
import NigeriaEconomy from "../components/economy/NigeriaEconomy";
import GlobalEconomy from "../components/economy/GlobalEconomy";
import EconomicSpotlight from "../components/economy/EconomicSpotlight";
import LatestEconomyNews from "../components/economy/LatestEconomyNews";

import { mockMarkets } from "../data/mockData";
import {
  mockEconomicIndicators,
  mockNigeriaEconomy,
  mockGlobalEconomy,
  mockEconomicSpotlight,
  mockLatestEconomyNews,
} from "../data/economyMockData";

function Economy() {
  return (
    <div className="bg-slate-50">
      {/* Market ticker */}
      <MarketTicker markets={mockMarkets} />

      {/* Economy heading */}
      <section className="bg-white">
        <div className="mx-auto max-w-350 px-5 py-10 sm:px-7">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Finsight Economy
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Economy
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Follow economic developments, key indicators, policy decisions and
            trends shaping Nigeria and the global economy.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-350 px-5 pb-16 sm:px-7">
        <EconomicIndicators indicators={mockEconomicIndicators} />
        <NigeriaEconomy articles={mockNigeriaEconomy} />
        <GlobalEconomy articles={mockGlobalEconomy} />
        <EconomicSpotlight spotlight={mockEconomicSpotlight} />
        <LatestEconomyNews articles={mockLatestEconomyNews} />
      </main>
    </div>
  );
}

export default Economy;
