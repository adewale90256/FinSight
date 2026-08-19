import { ArrowUpRight, ArrowDownRight, CircleDollarSign } from "lucide-react";

export default function ExchangeRates({ rates }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <div className="flex items-center gap-2">
          <CircleDollarSign size={18} className="text-blue-600" />

          <h2 className="text-base font-extrabold text-slate-950">
            Exchange Rates
          </h2>
        </div>

        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
          View all
        </button>
      </div>

      {/* Rates */}
      <div className="divide-y divide-slate-100">
        {rates.map((rate) => {
          const isUp = rate.direction === "up";

          return (
            <div
              key={rate.pair}
              className="flex items-center justify-between px-5 py-4"
            >
              <span className="text-sm font-semibold text-slate-800">
                {rate.pair}
              </span>

              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">
                  ₦{rate.value}
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

                  {rate.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
