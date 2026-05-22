"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Gavel,
  FileText,
  CheckSquare,
  ReceiptText,
  Sun,
  Moon,
} from "lucide-react";
import { FloatingCard } from "./components/FloatingCard";
import { PortalCard } from "./components/PortalCard";

/* ─────────────────────────────────────────────────────────────────────────
   Fixed canvas dimensions (in px). Cards are placed at absolute pixel
   positions mirroring the reference screenshot. A CSS scale() shrinks
   the whole canvas on smaller viewports — the layout stays identical.
   Card width = 340 px, so max right edge = left + 340 (≤ CANVAS_W).
───────────────────────────────────────────────────────────────────────── */
const CANVAS_W = 840;
const CANVAS_H = 520;

/* ── Framer Motion variants for the left text panel ─────────────────────── */
const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const textLine = {
  hidden: { opacity: 0, x: -36 },
  show:   { opacity: 1, x:   0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Home() {
  const [dark, setDark] = useState(false);

  /* Initialise from localStorage / system preference */
  useEffect(() => {
    const saved       = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark      = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#eef0f9] dark:bg-[#0b0f19]
        text-[#1e1b4b]  dark:text-slate-100
        transition-colors duration-500
        flex flex-col lg:flex-row
        items-center justify-center
        relative overflow-hidden
        font-sans
        px-6 sm:px-12 lg:px-20
        py-16 lg:py-0
        gap-12 lg:gap-0
      "
    >

      {/* ── Decorative background blobs ─────────────────────────────────── */}
      {/* Right-side pill blobs */}
      <motion.div
        className="absolute top-[16%] right-[-7%] w-[210px] h-[54px] rounded-full bg-[#d4dcf7] dark:bg-slate-800/20 pointer-events-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
      />
      <motion.div
        className="absolute top-[37%] right-[-11%] w-[290px] h-[64px] rounded-full bg-[#d4dcf7] dark:bg-slate-800/20 pointer-events-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.8 }}
      />
      <motion.div
        className="absolute top-[58%] right-[-7%] w-[190px] h-[50px] rounded-full bg-[#d4dcf7] dark:bg-slate-800/20 pointer-events-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
      />
      {/* Left-side pill blobs */}
      <motion.div
        className="absolute top-[46%] left-[-13%] w-[145px] h-[44px] rounded-full bg-[#d4dcf7] dark:bg-slate-800/20 pointer-events-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
      />
      <motion.div
        className="absolute top-[67%] left-[-9%] w-[225px] h-[56px] rounded-full bg-[#d4dcf7] dark:bg-slate-800/20 pointer-events-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.8 }}
      />
      {/* Bottom blob */}
      <motion.div
        className="absolute bottom-[9%] left-[5%] w-[310px] h-[68px] rounded-full bg-[#d4dcf7] dark:bg-slate-800/20 pointer-events-none"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
      />

      {/* ── Dark mode toggle ─────────────────────────────────────────────── */}
      <motion.button
        onClick={toggleDark}
        aria-label="Toggle dark mode"
        className="
          absolute top-5 right-5 z-30
          w-11 h-11 rounded-full
          border border-slate-300 dark:border-slate-700
          bg-white/80 dark:bg-slate-900/70
          backdrop-blur-sm
          flex items-center justify-center
          text-slate-600 dark:text-slate-300
          shadow-md cursor-pointer
        "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        {dark
          ? <Sun  size={18} className="text-amber-400" />
          : <Moon size={18} />
        }
      </motion.button>

      {/* ── LEFT: Headline + sub-text ────────────────────────────────────── */}
      <motion.div
        className="relative z-10 w-full lg:w-[44%] shrink-0 flex flex-col items-start gap-7"
        variants={textContainer}
        initial="hidden"
        animate="show"
      >
        {/* Heading block */}
        <div className="flex flex-col" style={{ lineHeight: 1.12 }}>

          {/* Line 1 — light grey, regular weight */}
          <motion.h1
            variants={textLine}
            className="
              font-normal
              text-[#9097b8] dark:text-slate-400
              text-[clamp(2rem,4.8vw,4.6rem)]
              tracking-tight
            "
          >
            A single platform to
          </motion.h1>

          {/* Line 2 — dark navy, "manage" bold */}
          <motion.h1
            variants={textLine}
            className="
              font-normal
              text-[#2e3060] dark:text-slate-100
              text-[clamp(2rem,4.8vw,4.6rem)]
              tracking-tight
            "
          >
            <strong className="font-extrabold">manage</strong> every part of
          </motion.h1>

          {/* Line 3 — dark navy, "legal work" bold */}
          <motion.h1
            variants={textLine}
            className="
              font-normal
              text-[#2e3060] dark:text-slate-100
              text-[clamp(2rem,4.8vw,4.6rem)]
              tracking-tight
            "
          >
            your <strong className="font-extrabold">legal work</strong>
          </motion.h1>
        </div>

        {/* Sub-text */}
        <motion.p
          variants={textLine}
          className="
            text-[#2563eb] dark:text-blue-400
            text-[0.92rem] sm:text-[1.05rem]
            font-medium leading-relaxed
            max-w-[340px]
          "
        >
          Track matters, coordinate schedules, manage clients,
          centralize documents, and handle communication – all in one system.
        </motion.p>
      </motion.div>

      {/* ── RIGHT: Floating card canvas ──────────────────────────────────── */}
      {/*
        The canvas is always CANVAS_W × CANVAS_H px internally.
        CSS scale() compresses it proportionally on narrow viewports so the
        exact rotations, overlaps and card sizes are preserved at every breakpoint.
      */}
      <div className="relative z-10 w-full lg:w-[56%] flex items-center justify-center">

        {/* Shell — reserves the correct layout space after scale */}
        <div
          style={{
            width:    `min(${CANVAS_W}px, 92vw)`,
            height:   `min(${CANVAS_H}px, calc(92vw * ${CANVAS_H} / ${CANVAS_W}))`,
            position: "relative",
          }}
        >
          {/* Fixed inner canvas — scaled to viewport */}
          <div
            style={{
              position:        "absolute",
              top:             0,
              left:            0,
              width:           CANVAS_W,
              height:          CANVAS_H,
              transformOrigin: "top left",
              scale:           `min(1, calc(min(${CANVAS_W}px, 92vw) / ${CANVAS_W}px))`,
            }}
          >

            {/*
              Card positions (top, left) chosen to replicate reference screenshot.
              Each card is 340 px wide; all must satisfy left + 340 ≤ 840.

                Billing   : (30,  370) → right edge 710 ✓
                Matters   : (200,   8) → right edge 348 ✓
                Portal    : (208, 388) → right edge 728 ✓  (zIndex 10 → on top)
                Tasks     : (375, 165) → right edge 505 ✓
                Documents : (382, 480) → right edge 820 ✓
            */}

            {/* ── 1. Billing — top-right, −10° ─────────────────────────── */}
            <div className="absolute" style={{ top: 30, left: 370 }}>
              <FloatingCard
                color="blue"
                icon={ReceiptText}
                label="Billing"
                deg={-10}
                entryDelay={0.35}
                floatDelay={0}
                floatDuration={5.5}
                floatPx={14}
              />
            </div>

            {/* ── 2. Matters — mid-left, +12° ──────────────────────────── */}
            <div className="absolute" style={{ top: 200, left: 8 }}>
              <FloatingCard
                color="orange"
                icon={Gavel}
                label="Matters"
                deg={12}
                entryDelay={0.5}
                floatDelay={1.1}
                floatDuration={6}
                floatPx={12}
              />
            </div>

            {/* ── 3. John Doe – Portal — center-right, −5° ─────────────── */}
            <div className="absolute" style={{ top: 208, left: 388, zIndex: 10 }}>
              <FloatingCard
                color="lavender"
                deg={-5}
                entryDelay={0.65}
                floatDelay={0.6}
                floatDuration={5.8}
                floatPx={13}
              >
                <PortalCard />
              </FloatingCard>
            </div>

            {/* ── 4. Tasks — bottom-center, −8° ────────────────────────── */}
            <div className="absolute" style={{ top: 378, left: 165 }}>
              <FloatingCard
                color="dark"
                icon={CheckSquare}
                label="Tasks"
                deg={-8}
                entryDelay={0.45}
                floatDelay={0.4}
                floatDuration={5.2}
                floatPx={11}
              />
            </div>

            {/* ── 5. Documents — bottom-right, +8° ─────────────────────── */}
            <div className="absolute" style={{ top: 385, left: 480 }}>
              <FloatingCard
                color="dark"
                icon={FileText}
                label="Documents"
                deg={8}
                entryDelay={0.55}
                floatDelay={2.0}
                floatDuration={6.2}
                floatPx={15}
              />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
