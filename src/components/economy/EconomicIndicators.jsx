import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";

function IndicatorCard({ indicator }) {
  const isUp = indicator.direction === "up";
  const isDown = indicator.direction === "down";
  const isNeutral = indicator.direction === "neutral";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-bold text-slate-900">{indicator.name}</p>

      <p className="mt-1 text-xs text-slate-400">{indicator.period}</p>

      <p className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950">
        {indicator.value}
      </p>

      <div
        className={`mt-2 flex items-center gap-1 text-xs font-bold ${
          isUp ? "text-emerald-600" : isDown ? "text-red-500" : "text-slate-500"
        }`}
      >
        {isUp && <ArrowUpRight size={14} />}
        {isDown && <ArrowDownRight size={14} />}
        {isNeutral && <Minus size={14} />}

        {indicator.change}
      </div>
    </div>
  );
}

export default function EconomicIndicators({ indicators }) {
  return (
    <section className="mt-10">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
          Economic Data
        </p>

        <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
          Key Economic Indicators
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Track important indicators that provide insight into Nigeria's
          economic performance.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {indicators.map((indicator) => (
          <IndicatorCard key={indicator.name} indicator={indicator} />
        ))}
      </div>
    </section>
  );
}
