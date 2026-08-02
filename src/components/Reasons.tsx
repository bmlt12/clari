import { useState } from "react";

const reasons = [
  { title: "Your laugh", body: "It rearranges my whole day into something lighter." },
  { title: "Your calm", body: "You walk into noise and it softens. That's a gift, Adwoa." },
  { title: "Your mind", body: "Brilliant, stubborn, curious — the exams don't stand a chance." },
  { title: "Your worth", body: "You attract. You never chase. Queens don't beg." },
  { title: "Your softness", body: "You healed a heart you didn't break. I'll never forget that." },
  { title: "Your name", body: "Adwoa — the same name that loved the stubbornness out of me before." },
];

/** Tap-to-open cards of small reasons. */
export function Reasons() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {reasons.map((r, i) => (
        <button
          key={r.title}
          onClick={() => setOpen(open === i ? null : i)}
          className="glass-card group rounded-3xl px-6 py-8 text-left transition-all duration-500 hover:-translate-y-1 hover:border-rose"
        >
          <span className="font-body text-[0.6rem] tracking-[0.35em] text-gold uppercase">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 font-script text-2xl text-rose-glow">{r.title}</p>
          <p
            className="font-display text-base leading-relaxed font-light text-foreground/85 transition-all duration-500"
            style={{
              maxHeight: open === i ? "9rem" : 0,
              opacity: open === i ? 1 : 0,
              marginTop: open === i ? "0.75rem" : 0,
              overflow: "hidden",
            }}
          >
            {r.body}
          </p>
          <p className="mt-3 font-body text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
            {open === i ? "— close" : "tap to open"}
          </p>
        </button>
      ))}
    </div>
  );
}
