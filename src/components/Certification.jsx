import React from "react";
import { Calendar, BadgeCheck, ExternalLink } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import cert from "./azure-fundamentals.png";

export default function Certification() {
  const { dark } = useTheme();

  return (
    <div
      id='certification'
      className={`rounded-2xl p-8 border ${dark ? "border-white/5 bg-white/[0.02]" : "border-slate-200 bg-white"}`}>
      <h2
        className={`text-2xl font-bold mb-6 ${dark ? "text-white" : "text-slate-900"}`}>
        Certification
      </h2>
      <div className='flex flex-col sm:flex-row gap-6 items-start'>
        <div className='group w-48 h-48 shrink-0 rounded-lg  flex flex-col items-center text-white p-2 text-center'>
          <img
            src={cert}
            alt='Microsoft Certified Azure Badge'
            className='w-32 h-32 object-contain mx-auto transition-all duration-300 drop-shadow-md group-hover:drop-shadow-xl group-hover:scale-105'
          />
        </div>
        <div className='flex-1'>
          <h3
            className={`font-bold text-lg ${dark ? "text-white" : "text-slate-900"}`}>
            Microsoft Azure Fundamentals
          </h3>
          <p className='text-blue-500 font-semibold mb-3'>AZ-900</p>
          <div
            className={`flex items-center gap-2 text-sm mb-1.5 ${dark ? "text-slate-400" : "text-slate-500"}`}>
            <Calendar className='w-4 h-4' />
            Issued: June 17, 2026
          </div>
          <div
            className={`flex items-center gap-2 text-sm mb-3 ${dark ? "text-slate-400" : "text-slate-500"}`}>
            <BadgeCheck className='w-4 h-4' />
            Credential ID: 28B9DFBE580F312B
          </div>
          <a
            href='https://learn.microsoft.com/api/credentials/share/en-us/MarcFrancisSurban-6827/28B9DFBE580F312B?sharingId=29B83443EDA6E2A4'
            aria-label='Microsoft Azure Certification'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-400 text-sm font-medium'>
            <ExternalLink className='w-4 h-4' />
            Verify Credential
          </a>
        </div>
      </div>
    </div>
  );
}
