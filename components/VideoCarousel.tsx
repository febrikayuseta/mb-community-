"use client";
import { useRef } from "react";

const videos = [
  "gl5nICKyIQo","g4_u5ygqwHA","Ydwb7A1q_kU","N8rudJOn5u8","ZGDbtYLOXp0","LQ-AgpQuHAI","gJgiUluSn40","VJ4oegGNcP8",
  "48_jcCv1TeE","VPzk1W4MKec","E5C1u93Q7AY",
  "SMNxvZU6aK0",
];

export default function VideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };

  const onMouseUp = () => { isDragging.current = false; };

  return (
    <div className="w-full pt-3 sm:pt-4">
      <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 text-center">Video</p>
      <div className="relative max-w-[680px] mx-auto">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 rounded-full bg-black/70 text-white text-xl flex items-center justify-center hover:bg-[#5b9bd5] hover:text-black transition-colors"
        >‹</button>

        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory select-none"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {videos.map((id) => (
            <div key={id} className="rounded-xl overflow-hidden gold-border flex-shrink-0 snap-start" style={{ width: 150, height: 267 }}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 rounded-full bg-black/70 text-white text-xl flex items-center justify-center hover:bg-[#5b9bd5] hover:text-black transition-colors"
        >›</button>
      </div>
    </div>
  );
}
