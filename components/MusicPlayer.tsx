"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/Who I'm Meant To Be - Lyric Video  Anthem Lights.mp3" loop />
      <button
        onClick={toggle}
        title={playing ? "Pause music" : "Play music"}
        className="fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full bg-[#c9a84c] text-black flex items-center justify-center shadow-lg hover:bg-[#e8c96a] transition-colors text-lg"
      >
        {playing ? "⏸" : "▶"}
      </button>
    </>
  );
}
