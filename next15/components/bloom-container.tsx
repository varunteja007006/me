"use client";

import React, { useRef } from "react";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export default function BloomContainer({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // px
    const y = e.clientY - rect.top; // px
    // set CSS vars on the element so the ::before can read them
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  }

  function onEnter() {
    ref.current?.classList.add("hovered");
  }

  function onLeave() {
    ref.current?.classList.remove("hovered");
    // optionally reset to center
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--x", `${rect.width / 2}px`);
      el.style.setProperty("--y", `${rect.height / 2}px`);
    }
  }

  return (
    <div
      ref={ref}
      className={`pattern-container ${className}`}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      role="presentation"
    >
      {children}
    </div>
  );
}
