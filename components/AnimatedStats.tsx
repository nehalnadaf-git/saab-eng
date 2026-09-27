"use client";

import { useEffect, useRef, useState } from "react";

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  nearStart?: boolean;
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function Counter({
  value,
  suffix,
  label,
  nearStart = false,
  triggered,
  duration = 1800,
}: StatItem & { triggered: boolean; duration?: number }) {
  const [display, setDisplay] = useState(nearStart ? value - 8 : 0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }
    if (!triggered) return;

    const from = nearStart ? Math.max(value - 8, 0) : 0;
    startRef.current = null;

    function step(ts: number) {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - (startRef.current as number);
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      setDisplay(Math.round(from + (value - from) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [triggered, value, nearStart, duration]);

  return (
    <div className="stat-item">
      <strong>
        {display}
        <span className="accent">{suffix}</span>
      </strong>
      <span>{label}</span>
    </div>
  );
}

interface AnimatedStatsProps {
  stats: StatItem[];
  ariaLabel?: string;
}

export default function AnimatedStats({ stats, ariaLabel }: AnimatedStatsProps) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats" ref={ref} aria-label={ariaLabel}>
      {stats.map((s) => (
        <Counter key={s.label} {...s} triggered={triggered} />
      ))}
    </div>
  );
}
