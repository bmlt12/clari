import { useState } from "react";

/** A wax-sealed P.S. the reader has to open. */
export function SealedNote() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full max-w-xl flex-col items-center">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="glass-card flex flex-col items-center gap-4 rounded-full px-12 py-12 transition-all duration-500 hover:scale-105 hover:border-rose"
          style={{ animation: "breathe 3.4s ease-in-out infinite" }}
        >
          <span aria-hidden="true" className="text-4xl text-rose">
            ❤
          </span>
          <span className="font-body text-[0.65rem] tracking-[0.4em] text-gold uppercase">
            Open my P.S.
          </span>
        </button>
      ) : (
        <div className="glass-card animate-scale-in rounded-4xl px-8 py-12 text-center sm:px-14">
          <p className="font-body text-[0.6rem] tracking-[0.45em] text-gold uppercase">P.S.</p>
          <p className="mt-6 font-display text-xl leading-[1.9] font-light text-foreground/90 sm:text-2xl">
            If the world ever makes you doubt how rare you are, come back here and read this again.
            You are chosen, Clarita. Not settled for — chosen. Every single day.
          </p>
          <p className="mt-8 font-script text-3xl text-rose-glow">Yours, always — Nana Yaw</p>
        </div>
      )}
    </div>
  );
}
