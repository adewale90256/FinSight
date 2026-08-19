import { NavLink } from "react-router-dom";

const categories = [
  { name: "Companies", path: "/business?category=companies" },
  { name: "Startups", path: "/business?category=startups" },
  { name: "Finance", path: "/business?category=finance" },
  { name: "Energy", path: "/business?category=energy" },
  { name: "Retail", path: "/business?category=retail" },
  {
    name: "Manufacturing",
    path: "/business?category=manufacturing",
  },
];

export default function BusinessSubNav() {
  return (
    <div className="overflow-x-auto border-y border-slate-200 bg-white">
      <div className="mx-auto flex min-w-max max-w-350 gap-7 px-5 sm:px-7">
        {categories.map((category) => (
          <NavLink
            key={category.name}
            to={category.path}
            className="border-b-2 border-transparent py-4 text-sm font-semibold text-slate-600 transition hover:border-blue-600 hover:text-blue-600"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
