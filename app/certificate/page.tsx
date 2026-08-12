"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { useState, useEffect, useRef, useCallback } from "react";

const albums = [
  {
    title: "Opening mB Event",
    portrait: false,
    cover: "/certificate/OpeningmB EVENT (0).png",
    photos: [
      "/certificate/OpeningmB EVENT (0).png",
      "/certificate/OpeningmB EVENT (1).jpg",
      "/certificate/OpeningmB EVENT (2).png",
      "/certificate/OpeningmB EVENT (3).jpg",
    ],
  },
  {
    title: "Vero Birthday Event",
    portrait: false,
    cover: "/certificate/VeroBirthday-Event (1).jpg",
    photos: [
      "/certificate/VeroBirthday-Event (1).jpg",
      "/certificate/VeroBirthday-Event (2).jpg",
      "/certificate/VeroBirthday-Event (3).jpg",
    ],
  },
  {
    title: "Ambrosia Event",
    portrait: false,
    cover: "/certificate/AmbrosiaEvent-AV (1).jpg",
    photos: [
      "/certificate/AmbrosiaEvent-AV (1).jpg",
      "/certificate/AmbrosiaEvent-AV (2).jpg",
      "/certificate/AmbrosiaEvent-AV (3).jpg",
    ],
  },
  {
    title: "COTM Event",
    portrait: false,
    cover: "/certificate/COTM-Event (0).jpg",
    photos: [
      "/certificate/COTM-Event (0).jpg",
      "/certificate/COTM-Event (1).jpg",
      "/certificate/COTM-Event (2).jpg",
      "/certificate/COTM-Event (4).jpg",
      "/certificate/COTM-Event (5).jpg",
    ],
  },
  {
    title: "COTM Selfie",
    portrait: true,
    cover: "/certificate/COTM-Selfie (0).jpg",
    photos: [
      "/certificate/COTM-Selfie (0).jpg",
      "/certificate/COTM-Selfie (00).jpg",
      "/certificate/COTM-Selfie (1).png",
      "/certificate/COTM-Selfie (2).png",
      "/certificate/COTM-Selfie (3).png",
      "/certificate/COTM-Selfie (4).png",
      "/certificate/COTM-Selfie (5).png",
    ],
  },
  {
    title: "mB Petarunk",
    portrait: true,
    cover: "/certificate/mB Petarunk (0).png",
    photos: [
      "/certificate/mB Petarunk (0).png",
      "/certificate/mB Petarunk (1).png",
      "/certificate/mB Petarunk (2).png",
      "/certificate/mB Petarunk (3).png",
      "/certificate/mB Petarunk (4).png",
      "/certificate/mB Petarunk (5).png",
      "/certificate/mB Petarunk (6).png",
      "/certificate/mB Petarunk (7).png",
      "/certificate/mB Petarunk (8).png",
      "/certificate/mB Petarunk (9).png",
    ],
  },
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
      style={{ aspectRatio: album.portrait ? "3 / 4" : "4 / 3" }}
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
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      currentRef.current = index;
      setVisible(true);
    }, 250);
  }, []);

  const prev = () => goTo((currentRef.current - 1 + album.photos.length) % album.photos.length);
  const next = () => goTo((currentRef.current + 1) % album.photos.length);

  return (
    <div className="fixed inset-0 z-40 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4" onClick={onClose}>
      <div
        className="bg-[#0f0f0f]/95 rounded-2xl sm:rounded-3xl w-full max-w-lg sm:max-w-2xl gold-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4">
          <div>
            <p className="text-[#c9a84c] text-xs uppercase tracking-widest mb-0.5">Certificate & Events</p>
            <h2 className="text-base sm:text-lg font-black text-white">{album.title}</h2>
            <p className="text-gray-500 text-xs">{current + 1} / {album.photos.length}</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-colors text-lg sm:text-xl">×</button>
        </div>

        {/* Photo */}
        <div className="relative w-full h-[260px] sm:h-[360px] md:h-[420px]">
          <img
            src={album.photos[current]}
            alt={album.title}
            className="w-full h-full object-contain transition-all duration-300"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(1.02)" }}
          />
          <button onClick={prev} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white text-xl sm:text-2xl flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-colors">‹</button>
          <button onClick={next} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white text-xl sm:text-2xl flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-colors">›</button>
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

export default function CertificatePage() {
  const [openAlbum, setOpenAlbum] = useState<Album | null>(null);

  return (
    <>
      <Navbar />
      <PageBackground />

      {openAlbum && <AlbumModal album={openAlbum} onClose={() => setOpenAlbum(null)} />}

      <main className="w-[92%] max-w-[1400px] mx-auto pt-20 sm:pt-24 pb-8 sm:pb-12">
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">Album</p>
          <h1 className="text-3xl sm:text-4xl font-black gold-gradient">Certificate & Events</h1>
          <p className="text-gray-400 mt-2 text-sm italic">ᴛᴏɢᴇᴛʜᴇʀ ᴡᴇ ꜱᴛᴀɴᴅ, ʙᴇᴄᴀᴜꜱᴇ ᴡᴇ&apos;ʀᴇ ᴍᴇᴀɴᴛ ᴛᴏ ʙᴇ</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-2xl md:max-w-4xl mx-auto">
          {albums.map((album) => (
            <div key={album.title}>
              <AlbumCover album={album} onClick={() => setOpenAlbum(album)} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
