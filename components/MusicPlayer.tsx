"use client";
import { useEffect, useState } from "react";

let globalAudio: HTMLAudioElement | null = null;

function getAudio() {
  if (typeof window === "undefined") return null;
  if (!globalAudio) {
    globalAudio = new Audio("/Who I'm Meant To Be - Lyric Video  Anthem Lights.mp3");
    globalAudio.loop = true;
    globalAudio.volume = 0.4;
  }
  return globalAudio;
}

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = getAudio();
    if (!audio) return;
    setPlaying(!audio.paused);
  }, []);

  const toggle = () => {
    const audio = getAudio();
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      title={playing ? "Pause music" : "Play music"}
      className="fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full bg-[#c9a84c] text-black flex items-center justify-center shadow-lg hover:bg-[#e8c96a] transition-colors text-lg"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
    >
      {playing ? "⏸" : "▶"}
    </button>
  );
}
