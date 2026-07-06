import React from "react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { PROJECTS } from "../data/content";

export default function Projects() {
  const { dark } = useTheme();

  return (
    <section id="projects" className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>
          Featured Projects
        </h2>
        <button className="text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center gap-1">
          View All Projects
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {PROJECTS.map(({ tag, icon: Icon, title, desc }) => (
          <div
            key={title}
            className={`rounded-xl overflow-hidden border transition-transform hover:-translate-y-1 ${
              dark ? "border-white/5 bg-white/[0.02]" : "border-slate-200 bg-white"
            }`}
          >
            <div
              className={`h-28 flex items-center justify-center ${
                dark
                  ? "bg-gradient-to-br from-slate-800 to-slate-900"
                  : "bg-gradient-to-br from-blue-50 to-slate-100"
              }`}
            >
              <Icon className="w-9 h-9 text-blue-500" />
            </div>
            <div className="p-5">
              <h3 className={`font-semibold mb-2 ${dark ? "text-white" : "text-slate-900"}`}>
                {title}
              </h3>
              <p className={`text-sm mb-4 leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>
                {desc}
              </p>
              <span
                className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md ${
                  dark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"
                }`}
              >
                {tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
