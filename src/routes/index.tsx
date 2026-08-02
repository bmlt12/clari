import { createFileRoute } from "@tanstack/react-router";
import { HeartCanvas } from "@/components/HeartCanvas";
import { FloatingHearts, Reveal } from "@/components/Atmosphere";
import { MusicPlayer } from "@/components/MusicPlayer";
import { TapHeart } from "@/components/TapHeart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clarita — Queen Of My Universe" },
      {
        name: "description",
        content:
          "A love letter written in starlight for Clarita: happy girlfriend's day, my queen. You attract, you never chase. Greatness in your exams and always.",
      },
      { property: "og:title", content: "Clarita — Queen Of My Universe" },
      {
        property: "og:description",
        content:
          "Happy girlfriend's day, Clarita. A letter about how beautiful you are, how lucky I am, and the greatness waiting for you.",
      },
    ],
  }),
  component: LoveLetter,
});

const letter = [
 "My Clarita, before you, life was a quiet song waiting for its melody. Then you walked in  softspoken, breathtaking, impossibly you  and every heartbeat became music, every breath became poetry. People talk about beauty like it’s only a face. But yours is in your laugh, in the way your eyes go bright when you’re excited, in the calm you carry into rooms that don’t deserve you. You are beautiful in a way that makes me quiet.",
"And I know exactly what I wish for. Out of everyone in this whole wide world, I wish it was me you chose  to be the one who gets your good mornings, your voice notes, your stubborn opinions, your softness. If loving you is a privilege, then let me spend forever being grateful for it.",
"But never forget who you are you are a queen in your own world. Queens don’t chase  they attract. You don’t run after anything that’s meant for you; you stand tall, you shine and life bends toward you. Never lower your crown to be chosen, my love. Anything that requires you to beg for it was never worthy of you in the first place. I fell for the woman who knows her worth  please never unlearn that.",
"And can I tell you something funny? Sometimes when I’m being stubborn you know how I get  the way you handle me,is exactly how my granny used to do it. My granny is called Adwoa. And your soul name is Adwoa too. Tell me that’s a coincidence. Two Adwoa's, both sent to love the stubbornness out of me. I think heaven planned that.",
"But Clarita, before you there was Mimi. She was beautiful, with a good heart and she treated me like a brother. Even though we weren’t in the same school, her letters and calls pushed me to study harder  it was like her presence was always around me, shouting at me to go and learn. I was proud to have her, proud of her character, proud of her beauty. For two years I thought she was my forever. But then she told me something that broke me few days before she start knust that she can’t marry someone without a university degree. I laughed at first, thinking she was joking, but she was serious. Her words cut me deeper than I could explain. I cried, I felt small, I felt left behind while she climbed ahead.",
"Now she wants us to be together again, but I am a free man. I don’t want to cry again, especially if she starts climbing while I’m down. I’ve even told her about you  how silly I am in love with someone’s girlfriend, how you became the miracle that helped me forget the pain I thought would last forever. You helped me move on from a heartbreak I thought would define me and for that I’ll always be grateful. That’s why I got you that necklace not just a gift, but a symbol of appreciation, a reminder of how much you mean to me.",
"So today, even though we’re not as close as we once were, I’m not just saying happy girlfriend’s day I’m saying thank you for being mine in spirit, thank you for being the one who healed me. And as our exams come, hear me clearly  you will excel. That brilliant head of yours will remember everything it needs to. Go in calm, come out shining. I’m praying for us, cheering for you and already proud of us.",
  "I promise you, with every fibre of my being, my feelings will never fade. They will grow stronger with each sunrise, deeper with each sunset and eternal with every star above us. You are my miracle, my queen, my Adwoa, my forever wish.",

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
            Happy Girlfriend's Day, my queen
          </p>
        </Reveal>

        <Reveal delay={200}>
          <h1 className="text-gradient-rose mt-8 font-display text-6xl leading-[0.95] font-light tracking-[0.08em] sm:text-8xl md:text-[9rem]">
            Clarita
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
            You are my universe — and I'm the lucky one.
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
              My Darling Clarita…
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
              "Happy Girlfriend's Day, my queen",
              "Attract, never chase — you are the prize",
              "Greatness in your exams, my Adwoa",
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
            I love you endlessly, my forever bae 😘
          </p>
        </Reveal>
      </section>
    </main>
  );
}
