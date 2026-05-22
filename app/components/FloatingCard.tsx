"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

/* ─── Types ─────────────────────────────────────────────────────────────── */

export type CardColor = "blue" | "orange" | "dark" | "lavender";

export interface FloatingCardProps {
  /** Background colour theme */
  color?: CardColor;
  /** Lucide icon to show on simple cards */
  icon?: LucideIcon;
  /** Label text for simple cards */
  label?: string;
  /** Extra classes forwarded to the pill div */
  className?: string;
  /** Slot for fully custom content (used by PortalCard variant) */
  children?: ReactNode;
  /** Rotation angle in degrees (positive = clockwise) */
  deg?: number;
  /** Vertical float amplitude in px */
  floatPx?: number;
  /** Float oscillation period in seconds */
  floatDuration?: number;
  /** Delay before the entrance animation starts (stagger) */
  entryDelay?: number;
  /** Phase offset for the float loop (stops all cards bobbing in sync) */
  floatDelay?: number;
}

/* ─── Colour map ─────────────────────────────────────────────────────────── */

const palette: Record<CardColor, string> = {
  blue:
    "bg-[#3b5bdb] text-white shadow-blue-500/25",
  orange:
    "bg-[#d47030] text-white shadow-orange-500/25",
  dark:
    "bg-[#272133] text-[#f59e42] shadow-black/30",
  lavender:
    "bg-[#c5ceff]/75 backdrop-blur-md border border-[#a5b4fc]/50 text-[#1e1b4b]" +
    " dark:bg-[#3730a3]/30 dark:border-indigo-400/30 dark:text-indigo-100" +
    " shadow-indigo-200/25 dark:shadow-indigo-900/20",
};

const iconColour: Record<CardColor, string> = {
  blue:     "text-white",
  orange:   "text-white",
  dark:     "text-[#f59e42]",
  lavender: "text-[#3730a3] dark:text-indigo-300",
};

/* ─── Animation variants ─────────────────────────────────────────────────── */

const entryVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 60 },
  show:   { opacity: 1, scale: 1,   y: 0   },
};

/* ─────────────────────────────────────────────────────────────────────────
   FloatingCard
   ─────────────────────────────────────────────────────────────────────────
   Two‑layer motion structure:
     1. Outer  → entrance (fade + scale‑up from below, staggered)
     2. Inner  → continuous vertical float + rotation + hover response
────────────────────────────────────────────────────────────────────────── */

export function FloatingCard({
  color        = "blue",
  icon: Icon,
  label,
  className    = "",
  children,
  deg          = 0,
  floatPx      = 14,
  floatDuration= 5.5,
  entryDelay   = 0,
  floatDelay   = 0,
}: FloatingCardProps) {
  return (
    /* ── 1. Entrance ── */
    <motion.div
      variants={entryVariants}
      initial="hidden"
      animate="show"
      transition={{
        duration: 0.75,
        delay:    entryDelay,
        ease:     "easeOut",
      }}
    >
      {/* ── 2. Float + Rotate + Hover ── */}
      <motion.div
        animate={{ y: [0, -floatPx, 0] }}
        transition={{
          y: {
            duration:   floatDuration,
            repeat:     Infinity,
            ease:       "easeInOut",
            delay:      floatDelay,
            repeatType: "loop",
          },
        }}
        style={{ rotate: deg }}
        whileHover={{
          scale:  1.09,
          filter: "brightness(1.13)",
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.97 }}
      >
        {/* ── 3. The actual pill ── */}
        <div
          className={`
            flex items-center gap-4
            rounded-[50px]
            px-8 py-[18px]
            w-[340px]
            shadow-xl
            cursor-pointer
            select-none
            ${palette[color]}
            ${className}
          `}
        >
          {children ?? (
            <>
              {Icon && (
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon size={30} className={`shrink-0 ${iconColour[color]}`} />
                </motion.div>
              )}
              {label && (
                <span className="font-bold text-xl tracking-wide leading-none flex-1">
                  {label}
                </span>
              )}
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
