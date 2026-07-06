import React from "react";

export default function OrbitNode({ icon: Icon, label, className, iconBg }) {
  return (
    <div className={`absolute flex flex-col items-center gap-2 ${className}`}>
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${iconBg}`}
      >
        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
      </div>
      <span className="text-xs text-slate-300 text-center leading-tight whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
