import { useCallback, useState } from "react";

type Burst = { id: number; x: number; y: number; dx: number; rot: number; dur: number };

/** The tappable heart — every touch scatters more of them. */
export function TapHeart() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const tap = useCallback(() => {
    const now = Date.now();
    const next: Burst[] = Array.from({ length: 12 }, (_, i) => ({
      id: now + i,
      x: (Math.random() - 0.5) * 120,
      y: 0,
      dx: (Math.random() - 0.5) * 260,
      rot: (Math.random() - 0.5) * 120,
      dur: 1400 + Math.random() * 1200,
    }));
    setBursts((b) => [...b, ...next]);
    window.setTimeout(() => {
      setBursts((b) => b.filter((item) => !next.some((n) => n.id === item.id)));
    }, 2700);
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={tap}
        aria-label="Tap the heart"
        className="relative text-6xl leading-none text-rose transition-transform duration-300 active:scale-90 sm:text-7xl"
        style={{ animation: "breathe 2.8s ease-in-out infinite" }}
      >
        ❤
      </button>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {bursts.map((b) => (
          <span
            key={b.id}
            className="absolute top-1/2 left-1/2 text-rose-glow"
            style={{
              fontSize: `${14 + Math.random() * 16}px`,
              transform: `translate(${b.x}px, 0)`,
              animation: `burst-${b.id % 2} ${b.dur}ms var(--ease-silk) forwards`,
              ["--dx" as string]: `${b.dx}px`,
              ["--rot" as string]: `${b.rot}deg`,
            }}
          >
            ❤
          </span>
        ))}
      </div>

      <style>{`
        @keyframes burst-0 {
          from { opacity: 1; transform: translate(0, 0) scale(0.6) rotate(0deg); }
          to { opacity: 0; transform: translate(var(--dx), -220px) scale(1.2) rotate(var(--rot)); }
        }
        @keyframes burst-1 {
          from { opacity: 1; transform: translate(0, 0) scale(0.5) rotate(0deg); }
          to { opacity: 0; transform: translate(var(--dx), -300px) scale(1.35) rotate(var(--rot)); }
        }
      `}</style>
    </div>
  );
}
