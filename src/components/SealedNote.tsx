import { useState } from "react";

/** A wax-sealed P.S. the reader has to open. */
export function SealedNote() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full max-w-xl flex-col items-center">
      {!open ? (
        <button
          onClick={() => {
            setOpen(true);
            navigator.vibrate?.([12, 40, 18]);
          }}
          className="glass-card flex size-40 flex-col items-center justify-center gap-3 rounded-full px-6 text-center transition-all duration-500 active:scale-95 sm:size-56 sm:gap-4 sm:hover:scale-105 sm:hover:border-rose"
          style={{ animation: "breathe 3.4s ease-in-out infinite" }}
        >
          <span aria-hidden="true" className="text-3xl text-rose sm:text-4xl">
            ❤
          </span>
          <span className="font-body text-[0.6rem] leading-relaxed tracking-[0.35em] text-gold uppercase sm:text-[0.65rem] sm:tracking-[0.4em]">
            Open my P.S.
          </span>
        </button>
      ) : (
        <div className="glass-card animate-scale-in rounded-4xl px-6 py-10 text-center sm:px-14 sm:py-12">
          <p className="font-body text-[0.6rem] tracking-[0.4em] text-gold uppercase sm:tracking-[0.45em]">
            P.S.
          </p>
          <p className="mt-5 font-display text-lg leading-[1.85] font-light text-foreground/90 sm:mt-6 sm:text-2xl sm:leading-[1.9]">
            If the world ever makes you doubt how rare you are, come back here and read this again.
            You are chosen, Clarita. Not settled for — chosen. Every single day.
          </p>
          <p className="mt-7 font-script text-2xl text-rose-glow sm:mt-8 sm:text-3xl">
            Yours, always — Nana Yaw
          </p>
        </div>
      )}
    </div>
  );
}
