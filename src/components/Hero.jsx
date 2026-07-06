import React from "react";
import { ArrowRight, Send } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useTheme } from "../context/ThemeContext";
import { ORBIT_NODES, SOCIAL_LINKS } from "../data/content";
import OrbitNode from "./OrbitNode";
import TextTexture from "./ui/TextTexture";

export default function Hero({ scrollTo }) {
  const { dark } = useTheme();

  return (
    <section id='home' className='relative overflow-hidden'>
      <div
        className={`absolute inset-0 pointer-events-none ${
          dark
            ? "bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_60%)]"
            : "bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08),transparent_60%)]"
        }`}
      />
      <div className='max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-16 items-center relative'>
        <div>
          <p
            className={`mb-2 text-lg ${dark ? "text-slate-300" : "text-slate-500"}`}>
            Hello, I'm
          </p>
          <h1
            className={`text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 ${
              dark ? "text-white" : "text-slate-900"
            }`}>
            Mackoy <span className='text-blue-500'>Surban</span>
          </h1>
          <p className='text-blue-500 font-semibold mb-1'>AZ-900 Certified</p>
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-5 ${
              dark ? "text-white" : "text-slate-900"
            }`}>
            Aspiring Azure Cloud Engineer
          </h2>
          <p
            className={`max-w-lg mb-8 leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
            Passionate about building scalable cloud solutions on Microsoft
            Azure. I enjoy learning, automating and solving real-world problems
            using the cloud.
          </p>
          <div className='flex flex-wrap gap-4 mb-8'>
            <button
              onClick={() => scrollTo("Projects")}
              className='flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-3 rounded-lg transition-colors'>
              <ArrowRight className='w-4 h-4' />
              View Projects
            </button>
            <button
              onClick={() => scrollTo("Contact")}
              className={`flex items-center gap-2 font-medium px-5 py-3 rounded-lg border transition-colors ${
                dark
                  ? "border-white/15 text-white hover:bg-white/5"
                  : "border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}>
              <Send className='w-4 h-4' />
              Contact Me
            </button>
          </div>
          <div className='flex items-center gap-4'>
            <span
              className={`text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
              Let's connect:
            </span>
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                target='_blank'
                rel='noopener noreferrer'
                className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors ${
                  dark
                    ? "border-white/10 text-slate-300 hover:bg-white/5"
                    : "border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}>
                <Icon className='w-4 h-4' size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className='relative h-[420px] hidden md:block'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='relative w-52 h-52 flex items-center justify-center'>
              <div className='absolute inset-0 rounded-full bg-blue-500/20 blur-3xl' />
              <svg
                viewBox='0 0 24 24'
                className='w-32 h-32 relative z-10 drop-shadow-[0_0_25px_rgba(56,150,255,0.6)]'>
                <path
                  fill='#3b93ff'
                  d='M10.5 2.5 4.3 19.8a.6.6 0 0 0 .57.8h4.2l3.4-9.9 2.7 7.9-4.2 2h9.7a.6.6 0 0 0 .56-.82L13.8 2.5a.7.7 0 0 0-.64-.5h-2a.7.7 0 0 0-.66.5z'
                />
              </svg>
              <svg
                className='absolute w-72 h-72 text-slate-500/30'
                viewBox='0 0 100 100'
                fill='none'>
                <circle
                  cx='50'
                  cy='50'
                  r='46'
                  stroke='currentColor'
                  strokeDasharray='2 4'
                />
              </svg>
            </div>
          </div>
          {ORBIT_NODES.map((node) => (
            <OrbitNode key={node.label} {...node} />
          ))}
        </div>
      </div>
    </section>
  );
}
