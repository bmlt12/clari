import { createFileRoute } from "@tanstack/react-router";
import { HeartCanvas } from "@/components/HeartCanvas";
import { FloatingHearts, Reveal } from "@/components/Atmosphere";
import { MusicPlayer } from "@/components/MusicPlayer";
import { TapHeart } from "@/components/TapHeart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Victoria — You Are My Universe" },
      {
        name: "description",
        content:
          "A love letter written in starlight for Victoria: every heartbeat became music, every breath became poetry. Forever yours.",
      },
      { property: "og:title", content: "Victoria — You Are My Universe" },
      {
        property: "og:description",
        content: "A love letter written in starlight for Victoria. Forever yours, Nana Yaw.",
      },
    ],
  }),
  component: LoveLetter,
});

const letter = [
  "My love, before you, life was a quiet song waiting for its melody. Then you came, and suddenly every heartbeat became music, every breath became poetry. You are not just the light in my world — you are the world itself. My days begin with the thought of you and end with the dream of us, wrapped in forever.",
  "You are the gentle sunrise that paints my mornings with hope, the steady moon that guards my nights with peace. In your eyes I see galaxies; in your smile, I find home. You are my anchor when storms rage, my wings when I long to fly, and my safe place when the world feels too heavy.",
  "I promise you, with every fibre of my being, that my love will never fade. It will grow stronger with each sunrise, deeper with each sunset, and eternal with every star that shines above us. You are my miracle, my destiny, my forever.",
];

function LoveLetter() {
  return (
    <main className="relative">
      <HeartCanvas />
      <FloatingHearts />
      <MusicPlayer />

      {/* Opening */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <p className="font-body text-[0.7rem] tracking-[0.55em] text-muted-foreground uppercase">
            For the one who holds my whole heart
          </p>
        </Reveal>

        <Reveal delay={200}>
          <h1 className="text-gradient-rose mt-8 font-display text-6xl leading-[0.95] font-light tracking-[0.08em] sm:text-8xl md:text-[9rem]">
            Victoria
          </h1>
        </Reveal>

        <Reveal delay={420}>
          <div
            className="mx-auto mt-8 h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
            style={{ animation: "shimmer-line 2s var(--ease-silk) 0.6s both" }}
          />
        </Reveal>

        <Reveal delay={560}>
          <p className="mt-8 max-w-md font-script text-3xl text-rose-glow sm:text-4xl">
            You are my universe.
          </p>
        </Reveal>

        <Reveal delay={720}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <TapHeart />
            <p className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
              Tap the heart
            </p>
          </div>
        </Reveal>

        <Reveal delay={900}>
          <p
            className="mt-16 font-body text-[0.65rem] tracking-[0.4em] text-muted-foreground uppercase"
            style={{ animation: "float-slow 3s ease-in-out infinite" }}
          >
            Scroll down ↓
          </p>
        </Reveal>
      </section>

      {/* The letter */}
      <section className="relative flex min-h-screen items-center justify-center px-6 py-28">
        <Reveal className="w-full max-w-2xl">
          <article className="glass-card relative rounded-4xl px-7 py-14 sm:px-14 sm:py-16">
            <span
              aria-hidden="true"
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl text-rose"
              style={{ animation: "float-slow 4.5s ease-in-out infinite" }}
            >
              ❤
            </span>

            <h2 className="text-center font-script text-4xl text-rose-glow sm:text-5xl">
              My Darling…
            </h2>

            <div className="mt-10 space-y-7">
              {letter.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="font-display text-lg leading-[1.85] font-light text-foreground/90 sm:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-8 text-right">
              <p className="font-display text-base tracking-wide text-muted-foreground italic">
                Forever yours, in this life and beyond…
              </p>
              <p className="mt-3 font-script text-3xl text-gold">Nana Yaw</p>
            </div>
          </article>
        </Reveal>
      </section>

      {/* Closing */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-28 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-light tracking-[0.28em] text-foreground uppercase sm:text-6xl">
            Forever
          </h2>
          <h2 className="text-gradient-rose mt-2 font-script text-5xl sm:text-7xl">& Always</h2>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-14 grid max-w-3xl gap-5 sm:grid-cols-3">
            {[
              "Enjoy your day, my love",
              "I love you — endlessly",
              "The luckiest person alive, because of you",
            ].map((line, i) => (
              <div
                key={line}
                className="glass-card rounded-3xl px-6 py-10 font-display text-lg leading-relaxed font-light"
                style={{ animation: `float-slow ${5 + i}s ease-in-out ${i * 0.4}s infinite` }}
              >
                {line}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={500}>
          <p className="mt-16 font-script text-2xl text-rose-glow">
            Happy always, my forever bae 😘
          </p>
        </Reveal>
      </section>
    </main>
  );
}
