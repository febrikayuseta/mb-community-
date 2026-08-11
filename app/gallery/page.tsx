"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { useState, useEffect, useRef, useCallback } from "react";

const albums = [
  { title: "BUKBER 2026", cover: "/BUKBER (1).png", photos: ["/BUKBER (1).png", "/BUKBER (2).png"] },
  { title: "CIMORY - Bogor", cover: "/CIMORY BOGOR (1).jpg", photos: ["/CIMORY BOGOR (1).jpg", "/CIMORY BOGOR (2).jpg"] },
  { title: "Birthday mB", cover: "/BIRTHDAY (1).jpg", photos: ["/BIRTHDAY (1).jpg", "/BIRTHDAY (2).jpg", "/BIRTHDAY (3).jpeg"] },
  { title: "Central Park", cover: "/CENTRAL PARK (1).jpg", photos: ["/CENTRAL PARK (1).jpg", "/CENTRAL PARK (2).jpg"] },
  { title: "Snowville", cover: "/SNOWVILLE (2).jpg", photos: ["/SNOWVILLE (1.jpg", "/SNOWVILLE (2).jpg", "/SNOWVILLE (3).jpeg", "/SNOWVILLE (4).jpg", "/SNOWVILLE (5).jpg"] },
  { title: "PHOTOBOOTH EDITION", cover: "/PHOTOBOOTH (1).jpg", photos: ["/PHOTOBOOTH (1).jpg", "/PHOTOBOOTH (2).jpg", "/PHOTOBOOTH (3).jpg", "/PHOTOBOOTH (4).jpg", "/PHOTOBOOTH (5).jpg", "/PHOTOBOOTH (6).jpg", "/PHOTOBOOTH (7).jpg", "/PHOTOBOOTH (8).jpg"] },
];

type Album = typeof albums[0];

function AlbumCover({ album, onClick }: { album: Album; onClick: () => void }) {
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
      className="group cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden gold-border relative w-full"
      style={{ aspectRatio: "3 / 4" }}
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
        <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-0.5 sm:mb-1">{album.photos.length} foto</p>
        <p className="text-white font-bold text-sm sm:text-lg">{album.title}</p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-[#c9a84c] text-black text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full">Lihat Album</span>
      </div>
    </div>
  );
}

function AlbumModal({ album, onClose }: { album: Album; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const next = (currentRef.current + 1) % album.photos.length;
      setVisible(false);
      setTimeout(() => {
        setCurrent(next);
        currentRef.current = next;
        setVisible(true);
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
      if (!paused) startTimer();
    }, 250);
  }, [paused, startTimer]);

  const prev = () => goTo((currentRef.current - 1 + album.photos.length) % album.photos.length);
  const next = () => goTo((currentRef.current + 1) % album.photos.length);

  const handleClose = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4" onClick={handleClose}>
      <div
        className="bg-[#0f0f0f]/95 rounded-2xl sm:rounded-3xl w-full max-w-lg sm:max-w-2xl gold-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4">
          <div>
            <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-0.5">Album</p>
            <h2 className="text-base sm:text-lg font-black text-white">{album.title}</h2>
            <p className="text-gray-500 text-xs">{current + 1} / {album.photos.length}</p>
          </div>
          <button onClick={handleClose} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-colors text-lg sm:text-xl">×</button>
        </div>

        {/* Photo */}
        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px]">
          <img
            src={album.photos[current]}
            alt={album.title}
            className="w-full h-full object-contain transition-all duration-300 cursor-pointer"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(1.02)" }}
            onClick={() => setPaused(p => !p)}
          />
          <button
            onClick={prev}
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white text-xl sm:text-2xl flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-colors"
          >‹</button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white text-xl sm:text-2xl flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-colors"
          >›</button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 py-3 sm:py-5">
          {album.photos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#c9a84c] w-6" : "bg-white/30 w-1.5"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [openAlbum, setOpenAlbum] = useState<Album | null>(null);
  const isOdd = albums.length % 2 !== 0;

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
          <p className="text-xs uppercase tracking-widest text-[#c9a84c] mb-3 text-center">Community of The Month</p>
          <a href="https://ayodance.megaxus.com/v1/news/06/07/2026/community-of-the-month-insiemeantobe" target="_blank" rel="noopener noreferrer" className="block rounded-2xl sm:rounded-3xl overflow-hidden gold-border relative w-full max-w-2xl mx-auto hover:opacity-90 transition-opacity">
            <img src="/COTM.jpg" alt="Community of The Month" className="w-full h-auto object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <p className="text-white font-bold text-sm sm:text-base">Community of The Month</p>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {albums.map((album) => (
            <AlbumCover key={album.title} album={album} onClick={() => setOpenAlbum(album)} />
          ))}
          {isOdd && <div />}
        </div>
      </main>
      <Footer />
    </>
  );
}
