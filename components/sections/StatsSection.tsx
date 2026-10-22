"use client";

import { useEffect, useRef, useState, memo } from "react";
import { STATS } from "@/lib/constants";

// Hook: anima contador do 0 até `target` quando o elemento entra na viewport
function useCountUp(target: number, isVisible: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
}

// Memoizado: só re-renderiza se as props mudarem (evita recomputar os outros cards no scroll)
const StatItem = memo(function StatItem({ value, suffix, label, sublabel, delay }: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const count = useCountUp(value, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center group" style={{ animationDelay: `${delay}ms` }}>
      <div className="font-sora font-extrabold text-4xl md:text-5xl text-white mb-1
                      group-hover:text-brand-blue transition-colors duration-300">
        {count}<span className="text-brand-blue">{suffix}</span>
      </div>
      <p className="font-outfit font-semibold text-white text-sm mb-0.5">{label}</p>
      <p className="font-outfit text-gray-500 text-xs">{sublabel}</p>
    </div>
  );
});

export function StatsSection() {
  return (
    <section className="bg-brand-black border-y border-white/5 py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
