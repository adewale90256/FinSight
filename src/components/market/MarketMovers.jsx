import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

function MoverRow({ stock, direction }) {
  const isUp = direction === "up";

  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-4 last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
          {stock.symbol.slice(0, 2)}
        </div>

        <div>
          <p className="text-sm font-bold text-slate-900">{stock.symbol}</p>

          <p className="mt-0.5 max-w-37.5 truncate text-xs text-slate-400">
            {stock.name}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-sm font-semibold text-slate-900">{stock.price}</p>

        <p
          className={`mt-1 flex items-center justify-end gap-1 text-xs font-bold ${
            isUp ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {isUp ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}

          {stock.change}
        </p>
      </div>
    </div>
  );
}

function MoversCard({ title, icon: Icon, stocks, direction }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
              direction === "up" ? "bg-emerald-50" : "bg-red-50"
            }`}
          >
            <Icon
              size={18}
              className={
                direction === "up" ? "text-emerald-600" : "text-red-500"
              }
            />
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-slate-950">{title}</h3>

            <p className="text-xs text-slate-400">Today's movement</p>
          </div>
        </div>

        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
          View all
        </button>
      </div>

      <div className="mt-3">
        {stocks.map((stock) => (
          <MoverRow key={stock.symbol} stock={stock} direction={direction} />
        ))}
      </div>
    </div>
  );
}

export default function MarketMovers({ gainers, losers }) {
  return (
    <section className="mt-12">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
          Market Activity
        </p>

        <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
          Market Movers
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          See which stocks are leading today's market movement.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <MoversCard
          title="Top Gainers"
          icon={TrendingUp}
          stocks={gainers}
          direction="up"
        />

        <MoversCard
          title="Top Losers"
          icon={TrendingDown}
          stocks={losers}
          direction="down"
        />
      </div>
    </section>
  );
}
