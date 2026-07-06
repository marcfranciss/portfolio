import React, { useState } from "react";
import { Linkedin, Mail, Send } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useTheme } from "../context/ThemeContext";
import { FOOTER_LINKS } from "../data/content";

export default function Footer({ scrollTo }) {
  const { dark } = useTheme();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer
      id='contact'
      className={`mt-16 border-t ${dark ? "border-white/5 bg-white/[0.02]" : "border-slate-200 bg-white"}`}>
      <div className='max-w-7xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div>
          <h3
            className={`font-bold text-lg mb-2 ${dark ? "text-white" : "text-slate-900"}`}>
            Let's build something amazing
          </h3>
          <p
            className={`text-sm mb-5 ${dark ? "text-slate-400" : "text-slate-500"}`}>
            I'm open to opportunities and exciting Azure cloud projects.
          </p>
          <button className='flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors'>
            <Send className='w-4 h-4' />
            Get In Touch
          </button>
        </div>

        <div>
          <h4
            className={`font-semibold mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
            Quick Links
          </h4>
          <ul
            className={`grid grid-cols-2 gap-x-4 gap-y-2 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
            {FOOTER_LINKS.map((l) => (
              <li key={l}>
                <button
                  onClick={() => scrollTo(l)}
                  className='hover:text-blue-500 transition-colors text-left w-full'>
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4
            className={`font-semibold mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
            Connect With Me
          </h4>
          <ul
            className={`space-y-2 text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
            <li className='flex items-center gap-2 hover:text-blue-500 transition-colors text-left'>
              <Linkedin className='w-4 h-4' />
              <a
                href='https://linkedin.com/in/marcfrancissurban'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'>
                LinkedIn
              </a>
            </li>
            <li className='flex items-center gap-2 hover:text-blue-500 transition-colors text-left'>
              <SiGithub className='w-4 h-4' size={16} />
              <a
                href='https://github.com/marcfranciss'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'>
                GitHub
              </a>
            </li>
            <li className='flex items-center gap-2 hover:text-blue-500 transition-colors text-left'>
              <Mail className='w-4 h-4' />{" "}
              <a
                href='mailto:marcfrancissurban@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Mail'>
                Email
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4
            className={`font-semibold mb-4 ${dark ? "text-white" : "text-slate-900"}`}>
            Newsletter
          </h4>
          <p
            className={`text-sm mb-4 ${dark ? "text-slate-400" : "text-slate-500"}`}>
            Subscribe to my portfolio to get the latest updates.
          </p>
          <form onSubmit={handleSubscribe} className='flex gap-2'>
            <input
              type='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className={`flex-1 min-w-0 text-sm px-3 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500 ${
                dark
                  ? "bg-white/5 border-white/10 text-white placeholder:text-slate-500"
                  : "bg-slate-50 border-slate-200 text-slate-800"
              }`}
            />
            <button
              type='submit'
              className='bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shrink-0'>
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className='text-emerald-500 text-xs mt-2'>
              Thanks for subscribing!
            </p>
          )}
        </div>
      </div>
      <div
        className={`border-t py-5 text-center text-xs ${
          dark
            ? "border-white/5 text-slate-500"
            : "border-slate-200 text-slate-400"
        }`}>
        © 2026 John Doe. All rights reserved.
      </div>
    </footer>
  );
}
