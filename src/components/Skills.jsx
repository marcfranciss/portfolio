import React from "react";
import { useTheme } from "../context/ThemeContext";
import { SKILLS } from "../data/content";

export default function Skills() {
  const { dark } = useTheme();

  return (
    <section id="skills" className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
      <h2 className={`text-2xl font-bold mb-6 ${dark ? "text-white" : "text-slate-900"}`}>
        Skills &amp; Technologies
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {SKILLS.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            className={`rounded-xl p-5 border ${dark ? "border-white/5 bg-white/[0.02]" : "border-slate-200 bg-white"}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <Icon className="w-4 h-4 text-blue-500" />
              <h3 className={`font-semibold text-sm ${dark ? "text-white" : "text-slate-900"}`}>
                {title}
              </h3>
            </div>
            <ul className={`text-sm space-y-1.5 ${dark ? "text-slate-400" : "text-slate-500"}`}>
              {items.map((it) => (
                <li key={it} className="flex items-start gap-1.5">
                  <span className="text-blue-500 mt-0.5">•</span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
