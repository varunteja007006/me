"use client";

import React from "react";

import { motion } from "motion/react";
import Link from "next/link";

export default function Icon() {
  const text = "<Developer />";

  return (
    <motion.div
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      whileHover={{ translateY: [null, 3, 0, 3, 0] }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <Link href="/" aria-label="Home">
        <motion.span
          aria-hidden={false}
          style={{
            display: "inline-block",
            fontWeight: 700,
            fontSize: "1rem",
            lineHeight: 1,
            // Use CSS variables from globals.css so light/dark themes match site palette
            // Use the secondary-foreground (lighter, contrast-aware) as the end stop so the
            // gradient doesn't darken too much at the tail in some themes.
            background: "linear-gradient(90deg, var(--primary), var(--secondary-foreground))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            // Fallback color when background-clip isn't supported; primary-foreground is theme-aware
            color: "var(--primary-foreground)",
            // For WebKit-based browsers ensure the text shows the gradient
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
            // subtle contrast lift (can be tuned)
            textShadow: "0 1px 6px rgba(0,0,0,0.04)",
          }}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              style={{ display: "inline-block" }}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.03, type: "spring", stiffness: 500, damping: 30 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </Link>
    </motion.div>
  );
}
