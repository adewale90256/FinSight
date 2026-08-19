import { ArrowRight, TrendingUp } from "lucide-react";
import { mockTrendingTopics } from "../../data/mockData";

export default function TrendingBar() {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-[1400px] items-center gap-4 overflow-x-auto px-5 py-3 sm:px-7">
        {/* Label */}
        <div className="flex shrink-0 items-center gap-2">
          <TrendingUp size={16} className="text-blue-600" />

          <span className="text-xs font-bold uppercase tracking-wide text-slate-700">
            Trending
          </span>
        </div>

        {/* Topics */}
        <div className="flex min-w-max items-center gap-2">
          {mockTrendingTopics.map((topic) => (
            <button
              key={topic}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              {topic}
            </button>
          ))}
        </div>

        {/* View all */}
        <button className="ml-auto hidden shrink-0 items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 lg:flex">
          View all
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
