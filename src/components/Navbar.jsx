import React from "react";
import { Moon, Sun, Download, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { NAV_LINKS } from "../data/content";

export default function Navbar({ active, menuOpen, setMenuOpen, scrollTo }) {
  const { dark, toggleTheme } = useTheme();

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur border-b ${
        dark ? "bg-[#0a0e1a]/90 border-white/5" : "bg-white/90 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
            AZ
          </div>
          <span className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>
            Cloud Portfolio
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-sm font-medium transition-colors relative pb-1 ${
                active === link
                  ? "text-blue-500"
                  : dark
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link}
              {active === link && (
                <span className="absolute left-0 -bottom-[1px] w-full h-0.5 bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${
              dark
                ? "border-white/10 text-slate-300 hover:bg-white/5"
                : "border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className={dark ? "text-white w-6 h-6" : "text-slate-900 w-6 h-6"} />
          ) : (
            <Menu className={dark ? "text-white w-6 h-6" : "text-slate-900 w-6 h-6"} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          className={`lg:hidden px-5 pb-4 flex flex-col gap-3 border-t ${
            dark ? "border-white/5" : "border-slate-200"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-left text-sm font-medium py-1 ${
                active === link ? "text-blue-500" : dark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {link}
            </button>
          ))}
          <button className="mt-2 flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg">
            <Download className="w-4 h-4" />
            Download Resume
          </button>
        </div>
      )}
    </header>
  );
}
