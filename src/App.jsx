import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useScrollNav } from "./hooks/useScrollNav";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Certification from "./components/Certification";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function PageContent() {
  const { dark } = useTheme();
  const { active, menuOpen, setMenuOpen, scrollTo } = useScrollNav();

  return (
    <div
      className={
        dark
          ? "dark bg-[#0a0e1a] text-slate-200 min-h-screen font-sans"
          : "bg-slate-50 text-slate-800 min-h-screen font-sans"
      }
    >
      <Navbar active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Features />

      <section id="about" className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-2 gap-6">
        <About />
        <Certification />
      </section>

      <Skills />
      <Projects />
      <Blog />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PageContent />
    </ThemeProvider>
  );
}
