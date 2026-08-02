import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import musicAsset from "@/music.mp3.asset.json";

/** Background song with a gentle, always-visible control. */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.55;

    const tryPlay = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
      remove();
    };
    const remove = () => {
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("keydown", tryPlay);
      window.removeEventListener("scroll", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
    };
    window.addEventListener("pointerdown", tryPlay);
    window.addEventListener("keydown", tryPlay);
    window.addEventListener("scroll", tryPlay, { passive: true });
    window.addEventListener("touchstart", tryPlay, { passive: true });
    return remove;
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setPlaying(true));
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicAsset.url} loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause our song" : "Play our song"}
        className="fixed top-5 right-5 z-50 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs tracking-[0.2em] uppercase backdrop-blur-md transition-all duration-500 hover:border-rose hover:text-rose-glow"
      >
        {playing ? <Pause className="size-3.5" /> : <Music className="size-3.5" />}
        <span className="hidden sm:inline">{playing ? "Our song" : "Play our song"}</span>
      </button>
    </>
  );
}
