import { Search, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StockMarketTable({ stocks }) {
  return (
    <section className="mt-12">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Equities
          </p>

          <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
            Stock Market
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Track selected stocks and their latest market movements.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search stocks..."
            className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none transition focus:border-blue-500"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-175 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                  Symbol
                </th>

                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                  Company
                </th>

                <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-slate-500">
                  Price
                </th>

                <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-slate-500">
                  Change
                </th>

                <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-slate-500">
                  Volume
                </th>
              </tr>
            </thead>

            <tbody>
              {stocks.map((stock) => {
                const isUp = stock.direction === "up";

                return (
                  <tr
                    key={stock.symbol}
                    className="border-b border-slate-100 transition last:border-b-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      <span className="text-sm font-extrabold text-slate-900">
                        {stock.symbol}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span className="text-sm text-slate-600">
                        {stock.name}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <span className="text-sm font-bold text-slate-900">
                        {stock.price}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <span
                        className={`inline-flex items-center gap-1 text-sm font-bold ${
                          isUp ? "text-emerald-600" : "text-red-500"
                        }`}
                      >
                        {isUp ? (
                          <ArrowUpRight size={15} />
                        ) : (
                          <ArrowDownRight size={15} />
                        )}

                        {stock.change}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <span className="text-sm text-slate-500">
                        {stock.volume}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
