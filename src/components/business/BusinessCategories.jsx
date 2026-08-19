import { ArrowRight } from "lucide-react";

export default function BusinessCategories({ categories }) {
  return (
    <section className="mt-12">
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
          Explore Business
        </p>

        <h2 className="mt-1 text-2xl font-extrabold text-slate-950">
          Business Categories
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Explore the latest developments across the sectors shaping businesses
          and the economy.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <button
            key={category.name}
            className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900 transition group-hover:text-blue-600">
                {category.name}
              </h3>

              <p className="mt-2 text-sm leading-5 text-slate-500">
                {category.description}
              </p>
            </div>

            <ArrowRight
              size={18}
              className="ml-4 shrink-0 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
