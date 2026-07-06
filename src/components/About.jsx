import React from "react";
import { ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import me from "./me.png";

export default function About() {
  const { dark } = useTheme();

  return (
    <div
      className={`rounded-2xl p-8 border ${dark ? "border-white/5 bg-white/[0.02]" : "border-slate-200 bg-white"}`}>
      <h2
        className={`text-2xl font-bold mb-6 ${dark ? "text-white" : "text-slate-900"}`}>
        About Me
      </h2>
      <div className='flex flex-col sm:flex-row gap-6 items-start'>
        <div className='group w-32 h-auto rounded-xl overflow-hidden shrink-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-3xl font-bold text-white'>
          <img
            src={me}
            alt='About Me'
            className='w-32 h-auto object-contain mx-auto transition-all duration-300 drop-shadow-md group-hover:drop-shadow-xl group-hover:scale-105'
          />
        </div>
        <div className='flex-1'>
          <p
            className={`text-sm leading-relaxed mb-4 ${dark ? "text-slate-400" : "text-slate-600"}`}>
            I recently earned my Microsoft Azure Fundamentals (AZ-900)
            certification and I'm on a journey to become a skilled Azure Cloud
            Engineer.
          </p>
          <p
            className={`text-sm leading-relaxed mb-5 ${dark ? "text-slate-400" : "text-slate-600"}`}>
            I enjoy working with cloud services, infrastructure, networking,
            security and automation. I love documenting what I learn and sharing
            it with others.
          </p>
          <button className='flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors'>
            <ExternalLink className='w-4 h-4' />
            More About Me
          </button>
        </div>
      </div>
    </div>
  );
}
