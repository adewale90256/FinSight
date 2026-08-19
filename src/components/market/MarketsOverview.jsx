import { ArrowUpRight, ArrowDownRight, BarChart3 } from "lucide-react";

export default function MarketsOverview({ markets }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-blue-600" />

          <h2 className="text-base font-extrabold text-slate-950">Markets</h2>
        </div>

        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
          View all
        </button>
      </div>

      {/* Markets */}
      <div className="divide-y divide-slate-100">
        {markets.map((market) => {
          const isUp = market.direction === "up";

          return (
            <div
              key={market.symbol}
              className="flex items-center justify-between px-5 py-4"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {market.name}
                </p>

                <p className="mt-0.5 text-xs text-slate-400">{market.symbol}</p>
              </div>

              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">
                  {market.value}
                </p>

                <p
                  className={`mt-0.5 flex items-center justify-end gap-1 text-xs font-semibold ${
                    isUp ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {isUp ? (
                    <ArrowUpRight size={13} />
                  ) : (
                    <ArrowDownRight size={13} />
                  )}

                  {market.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
