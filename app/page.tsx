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

const CANVAS_W = 840;
const CANVAS_H = 520;

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const textLine = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  function toggleDarkMode() {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  }

  const backgroundBlobs = [
    { top: "16%", right: "-7%", width: "210px", height: "54px", delay: 0.2 },
    { top: "37%", right: "-11%", width: "290px", height: "64px", delay: 0.35 },
    { top: "58%", right: "-7%", width: "190px", height: "50px", delay: 0.5 },
    { top: "46%", left: "-13%", width: "145px", height: "44px", delay: 0.3 },
    { top: "67%", left: "-9%", width: "225px", height: "56px", delay: 0.45 },
    { bottom: "9%", left: "5%", width: "310px", height: "68px", delay: 0.6 },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-[#eef0f9] dark:bg-[#0b0f19]
        text-[#1e1b4b] dark:text-slate-100
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
      {backgroundBlobs.map((style, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-[#d4dcf7] dark:bg-slate-800/20 pointer-events-none"
          style={style as React.CSSProperties}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: style.delay, duration: 0.8 }}
        />
      ))}

      <motion.button
        onClick={toggleDarkMode}
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
        {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
      </motion.button>

      <motion.div
        className="relative z-10 w-full lg:w-[44%] shrink-0 flex flex-col items-start gap-7"
        variants={textContainer}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col" style={{ lineHeight: 1.12 }}>
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

      <div className="relative z-10 w-full lg:w-[56%] flex items-center justify-center">
        <div
          style={{
            width: `min(${CANVAS_W}px, 92vw)`,
            height: `min(${CANVAS_H}px, calc(92vw * ${CANVAS_H} / ${CANVAS_W}))`,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: CANVAS_W,
              height: CANVAS_H,
              transformOrigin: "top left",
              scale: `min(1, calc(min(${CANVAS_W}px, 92vw) / ${CANVAS_W}px))`,
            }}
          >
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
