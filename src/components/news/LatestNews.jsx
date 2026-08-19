import NewsCard from "./NewsCard";

export default function LatestNews({ articles }) {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-slate-950">Latest News</h2>

        <button className="text-xs font-bold text-blue-600 hover:text-blue-700">
          View all
        </button>
      </div>

      <div>
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
