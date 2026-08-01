import { useEffect, useRef } from "react";

type P = { t: number; r: number; s: number; tw: number };

/** Particles sampled around the classic heart curve, filled inward. */
function buildHeart(count: number): P[] {
  return Array.from({ length: count }, () => ({
    t: Math.random() * Math.PI * 2,
    r: 0.35 + Math.pow(Math.random(), 0.55) * 0.65,
    s: 0.5 + Math.random() * 1.5,
    tw: Math.random() * Math.PI * 2,
  }));
}

/** A softly breathing heart of light behind the letter. */
export function HeartCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pts = buildHeart(1600);
    let raf = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const pointer = { x: 0, y: 0 };
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 26;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 18;
    };
    window.addEventListener("pointermove", onMove);

    const start = performance.now();
    const draw = (now: number) => {
      const time = (now - start) / 1000;
      const scrolled = window.scrollY / Math.max(window.innerHeight, 1);
      ctx.clearRect(0, 0, w, h);

      const pulse = 1 + Math.sin(time * 1.5) * 0.04;
      const scale = (Math.min(w, h) / 42) * pulse * (1 + scrolled * 0.18);
      const cx = w / 2 + pointer.x;
      const cy = h / 2 + pointer.y - Math.min(w, h) * 0.02;
      const sway = Math.sin(time * 0.4 + scrolled * 2) * 0.05;

      for (const p of pts) {
        const t = p.t;
        const hx = 16 * Math.pow(Math.sin(t), 3);
        const hy = -(
          13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t)
        );
        // fill inward toward the heart's centre
        let x = hx * p.r;
        let y = hy * p.r - 1.2 * (1 - p.r);
        // gentle sway rotation
        const rx = x * Math.cos(sway) - y * Math.sin(sway);
        const ry = x * Math.sin(sway) + y * Math.cos(sway);
        x = rx;
        y = ry;

        const twinkle = 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(time * 2 + p.tw));
        const edge = p.r;
        ctx.beginPath();
        ctx.arc(cx + x * scale, cy + y * scale, Math.max(p.s * edge, 0.35), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${348 - edge * 14}, 95%, ${62 + edge * 16}%, ${(0.14 + edge * 0.5) * twinkle})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full opacity-70"
    />
  );
}
