import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryCard({ name, description, icon: Icon, path }) {
  return (
    <Link
      to={path}
      className="group rounded-xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={21} />
        </div>

        <ArrowRight
          size={18}
          className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
        />
      </div>

      <h3 className="mt-5 text-base font-bold text-slate-900">{name}</h3>

      <p className="mt-2 text-sm leading-5 text-slate-500">{description}</p>
    </Link>
  );
}
