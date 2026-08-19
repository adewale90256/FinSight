import {
  ArrowUpRight,
  ArrowDownRight,
  CircleDollarSign,
  Coins,
  Fuel,
} from "lucide-react";

function MarketAssetCard({ asset }) {
  const isUp = asset.direction === "up";

  const getIcon = () => {
    if (asset.type === "forex") {
      return <CircleDollarSign size={18} />;
    }

    if (asset.type === "gold") {
      return <Coins size={18} />;
    }

    return <Fuel size={18} />;
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
          {getIcon()}
        </div>

        <span
          className={`flex items-center gap-1 text-xs font-bold ${
            isUp ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}

          {asset.change}
        </span>
      </div>

      <p className="mt-5 text-sm font-bold text-slate-900">{asset.name}</p>

      <p className="mt-1 text-xs text-slate-400">{asset.symbol}</p>

      <p className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950">
        {asset.value}
      </p>

      <p className="mt-1 text-xs text-slate-400">{asset.unit}</p>
    </div>
  );
}

export default function ForexCommodities({ assets }) {
  return (
    <section className="mt-12">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
          Global Markets
        </p>

        <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
          Forex & Commodities
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Follow major currencies and commodity prices.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {assets.map((asset) => (
          <MarketAssetCard key={asset.symbol} asset={asset} />
        ))}
      </div>
    </section>
  );
}
