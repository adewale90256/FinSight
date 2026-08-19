import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Business", path: "/business" },
  { name: "Markets", path: "/markets" },
  { name: "Economy", path: "/economy" },
  //{ name: "Tech", path: "/tech" },
  //{ name: "Crypto", path: "/crypto" },
  { name: "Companies", path: "/companies" },
  //{ name: "World", path: "/world" },
  //{ name: "Videos", path: "/videos" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-13.5 max-w-350 items-center justify-between px-5 sm:px-7">
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative flex h-full items-center text-sm font-semibold ${
                  isActive
                    ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                    : "text-slate-900 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* <button className="flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-blue-600">
            More
            <ChevronDown size={15} />
          </button> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-slate-900 hover:bg-slate-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col px-5 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-slate-100 py-3 text-sm font-semibold ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-900 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* <button className="flex items-center justify-between py-3 text-left text-sm font-semibold text-slate-900">
              <span>More</span>
              <ChevronDown size={15} />
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
}
