import React from "react";
import { ArrowRight, Cloud, Calendar, Clock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { POSTS } from "../data/content";

export default function Blog() {
  const { dark } = useTheme();

  return (
    <section id='blog' className='max-w-7xl mx-auto px-5 sm:px-8 py-10'>
      <div className='flex items-center justify-between mb-6'>
        <h2
          className={`text-2xl font-bold ${dark ? "text-white" : "text-slate-900"}`}>
          Latest Blog Posts
        </h2>
        <button className='text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center gap-1'>
          View All Posts
          <ArrowRight className='w-3.5 h-3.5' />
        </button>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {POSTS.map(({ date, read, title, accent }) => (
          <div
            key={title}
            className={`rounded-xl overflow-hidden border transition-transform hover:-translate-y-1 ${
              dark
                ? "border-white/5 bg-white/[0.02]"
                : "border-slate-200 bg-white"
            }`}>
            <div
              className={`h-32 bg-gradient-to-br ${accent} flex items-center justify-center`}>
              <Cloud className='w-9 h-9 text-white/80' />
            </div>
            <div className='p-5'>
              <h3
                className={`font-semibold mb-3 leading-snug ${dark ? "text-white" : "text-slate-900"}`}>
                {title}
              </h3>
              <div
                className={`flex items-center gap-3 text-xs ${dark ? "text-slate-500" : "text-slate-400"}`}>
                <span className='flex items-center gap-1'>
                  <Calendar className='w-3.5 h-3.5' />
                  {date}
                </span>
                <span className='flex items-center gap-1'>
                  <Clock className='w-3.5 h-3.5' />
                  {read}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
