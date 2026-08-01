import { useEffect, useRef } from "react";

type P = { x: number; y: number; z: number; s: number };

function buildHeart(count: number): P[] {
  const pts: P[] = [];
  for (let i = 0; i < count; i++) {
    const t = Math.random() * Math.PI * 2;
    const shrink = 0.55 + Math.random() * 0.45;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    const z = (Math.random() - 0.5) * 9;
    pts.push({ x: x * shrink, y: y * shrink, z, s: 0.5 + Math.random() * 1.4 });
  }
  return pts;
}

/** A slowly rotating particle heart, drawn on a 2D canvas. */
export function HeartCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pts = buildHeart(1400);
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
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
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 0.5;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 0.35;
    };
    window.addEventListener("pointermove", onMove);

    let start = performance.now();
    const draw = (now: number) => {
      const t = (now - start) / 1000;
      const scrolled = window.scrollY / Math.max(window.innerHeight, 1);
      ctx.clearRect(0, 0, w, h);

      const ay = t * 0.35 + scrolled * 2.2 + pointer.x * 2;
      const ax = Math.sin(t * 0.25) * 0.22 + pointer.y * 1.2;
      const pulse = 1 + Math.sin(t * 1.6) * 0.035;
      const scale = (Math.min(w, h) / 46) * pulse * (1 + scrolled * 0.12);
      const cx = w / 2;
      const cy = h / 2;

      const cosY = Math.cos(ay);
      const sinY = Math.sin(ay);
      const cosX = Math.cos(ax);
      const sinX = Math.sin(ax);

      for (const p of pts) {
        let x = p.x * cosY + p.z * sinY;
        let z = p.z * cosY - p.x * sinY;
        let y = p.y * cosX - z * sinX;
        z = z * cosX + p.y * sinX;

        const persp = 320 / (320 - z * scale * 0.8);
        const px = cx + x * scale * persp;
        const py = cy + y * scale * persp;
        const depth = (z + 5) / 10;
        const r = p.s * persp * (0.6 + depth * 0.7);

        ctx.beginPath();
        ctx.arc(px, py, Math.max(r, 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${344 + depth * 22}, 92%, ${58 + depth * 22}%, ${0.24 + depth * 0.6})`;
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
      className="pointer-events-none fixed inset-0 h-full w-full opacity-80"
    />
  );
}
