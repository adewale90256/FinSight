import { ArrowUpRight, ArrowDownRight, Activity } from "lucide-react";

export default function MarketIndices({ indices }) {
  return (
    <section className="mt-10">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
          Market Overview
        </p>

        <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
          Market Indices
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {indices.map((index) => {
          const isUp = index.direction === "up";

          return (
            <div
              key={index.symbol}
              className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {index.name}
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {index.symbol}
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                  <Activity size={17} className="text-slate-500" />
                </div>
              </div>

              <p className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950">
                {index.value}
              </p>

              <div
                className={`mt-2 flex items-center gap-1 text-sm font-bold ${
                  isUp ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {isUp ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <ArrowDownRight size={16} />
                )}

                <span>{index.change}</span>
              </div>

              <p className="mt-1 text-xs text-slate-400">Today</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
