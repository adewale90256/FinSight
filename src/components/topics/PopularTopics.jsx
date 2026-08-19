import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function PopularTopics({ topics }) {
  return (
    <section className="mt-12">
      {/* Section heading */}
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp size={18} className="text-blue-600" />

            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Trending Now
            </p>
          </div>

          <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
            Popular Topics
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Discover the topics readers are following across business, markets
            and technology.
          </p>
        </div>

        <button className="hidden items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 sm:flex">
          View all
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Topics */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic, index) => (
          <Link
            key={topic.name}
            to={`/search?q=${encodeURIComponent(topic.name)}`}
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
          >
            <div className="flex items-center gap-3">
              {/* Number */}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600">
                  {topic.name}
                </h3>

                <p className="mt-0.5 text-xs text-slate-400">{topic.count}</p>
              </div>
            </div>

            <ArrowRight
              size={15}
              className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
            />
          </Link>
        ))}
      </div>

      {/* Mobile view all */}
      <button className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600 sm:hidden">
        View all
        <ArrowRight size={15} />
      </button>
    </section>
  );
}
