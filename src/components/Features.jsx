import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FEATURES } from "../data/content";

export default function Features() {
  const { dark } = useTheme();

  return (
    <section className={`border-y ${dark ? "border-white/5 bg-white/[0.02]" : "border-slate-200 bg-white"}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col gap-3">
            <div
              className={`w-11 h-11 rounded-lg flex items-center justify-center border ${
                dark ? "border-blue-500/30 text-blue-400" : "border-blue-200 text-blue-600 bg-blue-50"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <h3 className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{title}</h3>
            <p className={`text-sm leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
