"use client";

import React from "react";

export function PortalCard() {
  return (
    <div className="flex items-center gap-3 w-[276px]">
      <div className="w-[5px] h-12 rounded-full bg-[#d47030] shrink-0" />

      <div className="w-14 h-14 rounded-full bg-[#dde4ff] dark:bg-indigo-900 border-2 border-white/50 dark:border-indigo-400/30 shrink-0 overflow-hidden flex items-center justify-center shadow-md">
        <svg
          viewBox="0 0 100 100"
          className="w-13 h-13 translate-y-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 45C25 25 35 15 50 15C65 15 75 25 75 45C75 45 78 50 78 55C75 58 72 58 72 58C72 58 70 42 50 42C30 42 28 58 28 58C28 58 25 58 22 55C22 50 25 45 25 45Z"
            fill="#1e1b4b"
          />
          <circle cx="21" cy="52" r="7" fill="#8c583c" />
          <circle cx="79" cy="52" r="7" fill="#8c583c" />
          <path
            d="M50 24C34 24 30 35 30 52C30 68 39 76 50 76C61 76 70 68 70 52C70 35 66 24 50 24Z"
            fill="#9c6644"
          />
          <path
            d="M30 56C30 68 39 80 50 80C61 80 70 68 70 56C70 64 63 74 50 74C37 74 30 64 30 56Z"
            fill="#2d221c"
          />
          <circle cx="41" cy="48" r="5" fill="#f8fafc" />
          <circle cx="59" cy="48" r="5" fill="#f8fafc" />
          <circle cx="41" cy="48" r="2.2" fill="#1e293b" />
          <circle cx="59" cy="48" r="2.2" fill="#1e293b" />
          <rect x="33" y="43" width="16" height="11" rx="3" stroke="#1e1b4b" strokeWidth="3" fill="none" />
          <rect x="51" y="43" width="16" height="11" rx="3" stroke="#1e1b4b" strokeWidth="3" fill="none" />
          <line x1="49" y1="48" x2="52" y2="48" stroke="#1e1b4b" strokeWidth="3" />
          <path d="M34 40C37 38 43 38 46 41" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M66 40C63 38 57 38 54 41" stroke="#1e1b4b" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 51C48 54 50 56 52 54" stroke="#7c4a30" strokeWidth="2" strokeLinecap="round" />
          <path d="M44 63C47 66 53 66 56 63" stroke="#2d221c" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <p className="font-bold text-[0.82rem] text-[#1e1b4b] dark:text-indigo-100 leading-tight truncate">
          John Doe – Portal
        </p>
        <p className="text-[0.68rem] text-[#4338ca]/75 dark:text-indigo-300/80 leading-snug line-clamp-2">
          Hey! Could you please review a document for me?
        </p>
        <span className="text-[0.58rem] font-semibold tracking-widest uppercase text-[#4338ca]/50 dark:text-indigo-400/50 mt-0.5">
          MAT-2233 · 2 h ago
        </span>
      </div>
    </div>
  );
}
