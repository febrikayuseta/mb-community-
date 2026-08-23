"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { useState, useEffect, useRef, useCallback } from "react";

const offlineAlbums = [
  { title: "BUKBER 2026", cover: "/offline/BUKBER (1).png", photos: ["/offline/BUKBER (1).png", "/offline/BUKBER (2).png", "/offline/BUKBER (3).jpeg"] },
  { title: "CIMORY - Bogor", cover: "/offline/CIMORY BOGOR (1).jpg", photos: ["/offline/CIMORY BOGOR (1).jpg", "/offline/CIMORY BOGOR (2).jpg"] },
  { title: "Birthday mB", cover: "/offline/BIRTHDAY (1).jpg", photos: ["/offline/BIRTHDAY (1).jpg", "/offline/BIRTHDAY (2).jpg", "/offline/BIRTHDAY (3).jpeg"] },
  { title: "Central Park", cover: "/offline/CENTRAL PARK (1).jpg", photos: ["/offline/CENTRAL PARK (1).jpg", "/offline/CENTRAL PARK (2).jpg"] },
  { title: "Snowville", cover: "/offline/SNOWVILLE (2).jpg", photos: ["/offline/SNOWVILLE (1).jpg", "/offline/SNOWVILLE (2).jpg", "/offline/SNOWVILLE (3).jpeg", "/offline/SNOWVILLE (4).jpg", "/offline/SNOWVILLE (5).jpg"] },
  { title: "PHOTOBOOTH EDITION", cover: "/offline/PHOTOBOOTH (1).jpg", photos: ["/offline/PHOTOBOOTH (1).jpg", "/offline/MTB-meet 1.jpg", "/offline/PHOTOBOOTH (2).jpg", "/offline/PHOTOBOOTH (3).jpg", "/offline/MTB-meet 2.jpg", "/offline/PHOTOBOOTH (4).jpg", "/offline/PHOTOBOOTH (5).jpg", "/offline/MTB-meet 3.jpg", "/offline/PHOTOBOOTH (6).jpg", "/offline/PHOTOBOOTH (7).jpg", "/offline/PHOTOBOOTH (8).jpg"] },
  { title: "Jakarta Meet", cover: "/offline/Jakarta Meet (1).jpg", photos: ["/offline/Jakarta Meet (1).jpg", "/offline/Jakarta Meet (2).jpg", "/offline/Jakarta Meet (3).jpg", "/offline/Jakarta Meet (4).jpg", "/offline/Jakarta Meet (5).jpg", "/offline/Jakarta Meet (6).jpg"] },
  { title: "Medan Meet", cover: "/offline/mB Medan (1).jpeg", photos: ["/offline/mB Medan (1).jpeg", "/offline/mB Medan (2).jpeg", "/offline/mB Medan (3).jpeg"] },
];

const videos = [
  "gl5nICKyIQo","g4_u5ygqwHA","Ydwb7A1q_kU","N8rudJOn5u8","ZGDbtYLOXp0","LQ-AgpQuHAI","gJgiUluSn40","VJ4oegGNcP8",
  "48_jcCv1TeE","VPzk1W4MKec","E5C1u93Q7AY",
  "SMNxvZU6aK0",
];

const onlineAlbums: typeof offlineAlbums = [
  { title: "mB MABAR", cover: "/online/mb-ROOM (1).jpg", photos: ["/online/mb-ROOM (1).jpg", "/online/mb-ROOM (2).jpg", "/online/mb-ROOM (3).jpg", "/online/mb-ROOM (4).jpg", "/online/mb-ROOM (5).jpg", "/online/mb-ROOM (6).jpg", "/online/mb-ROOM (7).jpg", "/online/mb-ROOM (8).jpg", "/online/mb-ROOM (9).jpg"] },
  { title: "mB ART", cover: "/online/mB ART (1).png", photos: ["/online/mB ART (1).png", "/online/mB ART (2).png", "/online/mB ART (3).png"] },
  { title: "Ayodance Post", cover: "/online/Community-Gallery.png", photos: ["/online/Community-Gallery.png", "/online/COTM-AV.png", "/online/DOTM-Gab.png", "/online/TEAM mB.jfif", "/online/TEAM mB (2).jfif"] },
  { title: "Friendly Match", cover: "/online/Friendly-Match (0).png", photos: ["/online/Friendly-Match (0).png", "/online/Friendly-Match (1).jfif", "/online/Friendly-Match (2).jfif", "/online/Friendly-Match (3).png", "/online/Friendly-Match (4).jfif"] },
];

type Album = typeof offlineAlbums[0];

function AlbumCover({ album, onClick, landscape, landscapeOnSm }: { album: Album; onClick: () => void; landscape?: boolean; landscapeOnSm?: boolean }) {
  const [current, setCurrent] = useState(0);
  const currentRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentRef.current + 1) % album.photos.length;
      setCurrent(next);
      currentRef.current = next;
    }, 2500);
    return () => clearInterval(interval);
  }, [album.photos.length]);

  return (
    <div
      className={`group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden gold-border relative w-full ${landscapeOnSm ? "aspect-[3/4] sm:aspect-[16/9]" : ""}`}
      style={landscapeOnSm ? undefined : { aspectRatio: landscape ? "16 / 9" : "3 / 4" }}
      onClick={onClick}
    >
      {album.photos.map((photo, i) => (
        <img
          key={photo}
          src={photo}
          alt={album.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/90" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
        <p className="text-[#5b9bd5] text-xs uppercase tracking-widest mb-0.5 sm:mb-1">{album.photos.length} foto</p>
        <p className="text-white font-bold text-sm sm:text-lg">{album.title}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-[#5b9bd5] text-black text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full">Lihat Album</span>
      </div>
    </div>
  );
}

function AlbumModal({ album, onClose }: { album: Album; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetZoom = () => { setZoom(1); setOffset({ x: 0, y: 0 }); };

  const startTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const next = (currentRef.current + 1) % album.photos.length;
      setVisible(false);
      setTimeout(() => {
        setCurrent(next);
        currentRef.current = next;
        setVisible(true);
        resetZoom();
      }, 250);
      startTimer();
    }, 4000);
  }, [album.photos.length]);

  useEffect(() => {
    if (!paused) startTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [paused, startTimer]);

  const goTo = useCallback((index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      currentRef.current = index;
      setVisible(true);
      resetZoom();
      if (!paused) startTimer();
    }, 250);
  }, [paused, startTimer]);

  const prev = () => goTo((currentRef.current - 1 + album.photos.length) % album.photos.length);
  const next = () => goTo((currentRef.current + 1) % album.photos.length);

  const handleClose = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    onClose();
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom(z => Math.min(4, Math.max(1, z - e.deltaY * 0.001)));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !dragStart.current) return;
    setOffset({ x: dragStart.current.ox + e.clientX - dragStart.current.x, y: dragStart.current.oy + e.clientY - dragStart.current.y });
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div className="fixed inset-0 z-40 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4" onClick={handleClose}>
      <div
        className="bg-[#0f0f0f]/95 rounded-2xl sm:rounded-3xl w-full max-w-2xl sm:max-w-4xl gold-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4">
          <div>
            <p className="text-[#5b9bd5] text-xs uppercase tracking-widest mb-0.5">Album</p>
            <h2 className="text-base sm:text-lg font-black text-white">{album.title}</h2>
            <p className="text-gray-500 text-xs">{current + 1} / {album.photos.length}</p>
          </div>
          <div className="flex items-center gap-2">
            {/* Zoom controls */}
            <button onClick={() => setZoom(z => Math.min(4, z + 0.5))} className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#5b9bd5] hover:text-black transition-colors text-base">+</button>
            <span className="text-gray-500 text-xs w-8 text-center">{Math.round(zoom * 100)}%</span>
            <button onClick={() => { setZoom(z => Math.max(1, z - 0.5)); if (zoom <= 1.5) resetZoom(); }} className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#5b9bd5] hover:text-black transition-colors text-base">−</button>
            <button onClick={handleClose} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#5b9bd5] hover:text-black transition-colors text-lg sm:text-xl ml-1">×</button>
          </div>
        </div>

        {/* Photo */}
        <div
          className="relative w-full h-[320px] sm:h-[500px] md:h-[600px] overflow-hidden"
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "default" }}
        >
          <img
            src={album.photos[current]}
            alt={album.title}
            className="w-full h-full object-contain transition-opacity duration-300 select-none"
            style={{
              opacity: visible ? 1 : 0,
              transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
              transition: dragging ? "opacity 0.3s" : "opacity 0.3s, transform 0.2s",
            }}
            draggable={false}
            onClick={() => { if (zoom === 1) setPaused(p => !p); }}
          />
          {zoom === 1 && <>
            <button onClick={prev} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white text-xl sm:text-2xl flex items-center justify-center hover:bg-[#5b9bd5] hover:text-black transition-colors">‹</button>
            <button onClick={next} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white text-xl sm:text-2xl flex items-center justify-center hover:bg-[#5b9bd5] hover:text-black transition-colors">›</button>
          </>}
          {zoom > 1 && (
            <button onClick={resetZoom} className="absolute bottom-2 right-2 px-3 py-1 rounded-full bg-black/60 text-[#5b9bd5] text-xs hover:bg-[#5b9bd5] hover:text-black transition-colors">Reset</button>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 py-3 sm:py-5">
          {album.photos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#5b9bd5] w-6" : "bg-white/30 w-1.5"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [openAlbum, setOpenAlbum] = useState<Album | null>(null);
  const [tab, setTab] = useState<"online" | "offline" | "video">("online");

  const albums = tab === "offline" ? offlineAlbums : onlineAlbums;
  const desktopRemainder = albums.length % 3;
  const mainAlbums = desktopRemainder === 0 ? albums : albums.slice(0, -desktopRemainder);
  const tailAlbums = desktopRemainder === 0 ? [] : albums.slice(-desktopRemainder);
  const mobileRemainder = albums.length % 2;
  const mobileMainAlbums = mobileRemainder === 0 ? albums : albums.slice(0, -1);
  const mobileTailAlbum = mobileRemainder === 1 ? albums[albums.length - 1] : null;

  return (
    <>
      <Navbar />
      <PageBackground />

      {openAlbum && <AlbumModal album={openAlbum} onClose={() => setOpenAlbum(null)} />}

      <main className="w-[92%] max-w-[1400px] mx-auto pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-4xl font-black gold-gradient">Gallery</h1>
          <p className="text-gray-400 mt-2 text-sm">Moments bersama mB</p>
        </div>

        {/* COTM - Featured */}
        <div className="mb-6 sm:mb-8">
          <p className="text-xs uppercase tracking-widest text-[#5b9bd5] mb-3 text-center">Community of The Month</p>
          <a href="https://ayodance.megaxus.com/v1/news/06/07/2026/community-of-the-month-insiemeantobe" target="_blank" rel="noopener noreferrer" className="block rounded-2xl sm:rounded-3xl overflow-hidden gold-border relative w-full max-w-2xl mx-auto hover:opacity-90 transition-opacity">
            <img src="/COTM.png" alt="Community of The Month" className="w-full h-auto object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <p className="text-white font-bold text-sm sm:text-base">Community of The Month</p>
            </div>
          </a>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center gap-3 mb-6 sm:mb-8">
          {(["online", "offline", "video"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-8 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all capitalize ${tab === t ? "bg-[#5b9bd5] text-black" : "border border-[#5b9bd5]/40 text-[#5b9bd5] hover:bg-[#5b9bd5]/10"}`}>
              {t === "video" ? "Video" : t === "online" ? "Online" : "Offline"}
            </button>
          ))}
        </div>

        {tab === "video" ? (
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {videos.map((id) => (
              <div key={id} className="rounded-xl overflow-hidden gold-border w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)] md:w-[calc(25%-9px)] lg:w-[calc(20%-10px)]" style={{ aspectRatio: "9/16" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        ) : albums.length === 0 ? (
          <div className="text-center py-16 text-gray-500 text-sm">Belum ada album — segera hadir!</div>
        ) : (
          <>
            {/* Mobile layout: 2-col, tail 1 landscape centered */}
            <div className="sm:hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-2 gap-5">
                {mobileMainAlbums.map((album) => (
                  <AlbumCover key={album.title} album={album} onClick={() => setOpenAlbum(album)} />
                ))}
              </div>
              {mobileTailAlbum && (
                <div className="mt-5">
                  <AlbumCover album={mobileTailAlbum} onClick={() => setOpenAlbum(mobileTailAlbum)} landscape />
                </div>
              )}
            </div>

            {/* Desktop layout: 3-col, tail landscape */}
            <div className="hidden sm:block max-w-4xl mx-auto">
              <div className="grid grid-cols-3 gap-6">
                {mainAlbums.map((album) => (
                  <AlbumCover key={album.title} album={album} onClick={() => setOpenAlbum(album)} />
                ))}
              </div>
              {tailAlbums.length === 1 && (
                <div className="mt-6">
                  <AlbumCover album={tailAlbums[0]} onClick={() => setOpenAlbum(tailAlbums[0])} landscape />
                </div>
              )}
              {tailAlbums.length === 2 && (
                <div className="grid grid-cols-2 gap-6 mt-6">
                  {tailAlbums.map((album) => (
                    <AlbumCover key={album.title} album={album} onClick={() => setOpenAlbum(album)} landscape />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
