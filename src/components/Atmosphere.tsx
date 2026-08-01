import { useEffect, useRef, useState } from "react";

/** Soft hearts drifting upward across the page. */
export function FloatingHearts({ count = 14 }: { count?: number }) {
  const [seeds, setSeeds] = useState<{ left: number; delay: number; dur: number; size: number }[]>(
    [],
  );

  useEffect(() => {
    setSeeds(
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 14,
        dur: 14 + Math.random() * 12,
        size: 10 + Math.random() * 20,
      })),
    );
  }, [count]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      {seeds.map((s, i) => (
        <span
          key={i}
          className="absolute bottom-[-10vh] text-rose"
          style={{
            left: `${s.left}%`,
            fontSize: `${s.size}px`,
            animation: `drift-up ${s.dur}s linear ${s.delay}s infinite`,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}

/** Reveal-on-scroll wrapper. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
