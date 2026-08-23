"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageBackground from "@/components/PageBackground";
import { useState, useEffect, useRef, useCallback } from "react";

const members: {
  female: { name: string; nickname: string | null; photo: string | null }[];
  male: { name: string; nickname: string | null; photo: string | null }[];
} = {
  female: [
    { name: "Cindy",    nickname: "cincla-mB",         photo: "/members/Cindy.jpeg" },
    { name: "Erica",    nickname: "mBrights1de-nLv",   photo: "/members/Erica.jpg" },
    { name: "Gabriella",nickname: "gbriella-mB",       photo: "/members/Gabriella.jpeg" },
    { name: "Indah",    nickname: "VonzymB",           photo: "/members/Indah.jpeg" },
    { name: "Juwita",   nickname: "PlumeriaX5-mB",     photo: "/members/Juwita.jpg" },
    { name: "Lea",      nickname: "mBLeeyaa",          photo: "/members/Lea.png" },
    { name: "Melzi",    nickname: "nEMelzimB-BTR",     photo: "/members/Melzi.jpeg" },
    { name: "Putee",    nickname: "pxtcyRAR-mB",       photo: "/members/Pute.jpeg" },
    { name: "Ririn",    nickname: "RinsF-mB",          photo: "/members/Ririn.jpg" },
    { name: "Silvi",    nickname: "maplewine-mB",      photo: "/members/Silvi.jpeg" },
    { name: "Tika",     nickname: "Chiizue-mB",        photo: "/members/Tika.jpeg" },
    { name: "Veronika", nickname: "4FMuse-mB",         photo: "/members/Veronika.jpeg" },
    { name: "Vina",     nickname: "Puggymax-mB",       photo: "/members/Vina.jpeg" },
    { name: "Vio",      nickname: "Cien-mB",           photo: "/members/Vio.jpeg" },
  ],
  male: [
    { name: "Ajot",     nickname: "lavmB1Fc / GRz-Kyllua-mB", photo: "/members/Ajot.jpg" },
    { name: "Alan",     nickname: "mBLanzi-yX",        photo: "/members/Alan.jpeg" },
    { name: "Alex",     nickname: "voree-mB",          photo: "/members/Alex.jpg" },
    { name: "Andre",    nickname: "impostorWHY-mB",    photo: "/members/Andre.jpg" },
    { name: "Aris",     nickname: "FS-Boris-mB",       photo: "/members/Aris.jpeg" },
    { name: "Celvin",   nickname: "mBLAZE-X5",         photo: "/members/Celvin.jpg" },
    { name: "Dennis",   nickname: "KH-Luxie-mB",       photo: "/members/Dennis.jpeg" },
    { name: "Dhani",    nickname: "imCreamB-X5",         photo: "/members/Dhani.jpeg" },
    { name: "Eric",     nickname: "mBRick-nLv",        photo: "/members/Eric.jpeg" },
    { name: "Indra",    nickname: "YunB-mB",           photo: "/members/Indra.webp" },
    { name: "Isal",     nickname: "RexXmB-REN",        photo: "/members/Isal.jpeg" },
    { name: "Iskandar", nickname: "summer-mB",          photo: "/members/Iskandar.jpg" },
    { name: "Jordi",    nickname: "sinner-mB",         photo: "/members/Jordi.jpeg" },
    { name: "Khrisna",  nickname: "5sMerl-mB",         photo: "/members/Khrisna.png" },
    { name: "Marcel",   nickname: "wine-mB",           photo: "/members/Marcel.jpeg" },
    { name: "Mikel",    nickname: "mojiceRAR-mB",      photo: "/members/Mikel.jpeg" },
    { name: "Rahman",   nickname: "mBcyleX5",          photo: "/members/Rahman.jpeg" },
    { name: "Rizki",    nickname: "SchatzNexa-mB",     photo: "/members/Rizky-f.jpg" },
    { name: "Robby",    nickname: "douglas-mB",        photo: "/members/Robby.jpg" },
    { name: "San",      nickname: "Xann-mB",           photo: "/members/San.jpeg" },
    { name: "Steve",    nickname: "NailongmB-nLv",     photo: "/members/Steve.jpg" },
    { name: "Tito",     nickname: "Dyvette-mB",        photo: "/members/Tito.jpg" },
  ],
};

type MemberType = { name: string; nickname: string | null; photo: string | null };

function MemberCarousel({ members, gender }: { members: MemberType[]; gender: "F" | "M" }) {
  const [perPage, setPerPage] = useState(4);
  useEffect(() => {
    const update = () => setPerPage(window.innerWidth >= 768 ? 6 : 4);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const pageCount = Math.ceil(members.length / perPage);
  const [page, setPage] = useState(0);
  const [sliding, setSliding] = useState<"left" | "right" | null>(null);
  const [openMember, setOpenMember] = useState<MemberType | null>(null);
  const pageRef = useRef(0);
  const slidingRef = useRef(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => { pageRef.current = page; }, [page]);

  const goTo = useCallback((next: number, dir: "left" | "right") => {
    if (slidingRef.current) return;
    slidingRef.current = true;
    setSliding(dir);
    setTimeout(() => {
      setPage(next);
      pageRef.current = next;
      setSliding(null);
      slidingRef.current = false;
    }, 350);
  }, []);

  const handlePrev = () => goTo((pageRef.current - 1 + pageCount) % pageCount, "right");
  const handleNext = () => goTo((pageRef.current + 1) % pageCount, "left");

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? handleNext() : handlePrev();
    touchStartX.current = null;
  };

  const group = members.slice(page * perPage, page * perPage + perPage);

  const slideStyle: React.CSSProperties = {
    transition: "opacity 350ms ease",
    opacity: sliding ? 0 : 1,
  };

  return (
    <div className="relative flex flex-col items-center">
      <div
        className="relative flex items-center justify-center w-full"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Prev */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white text-xl sm:text-2xl flex items-center justify-center hover:bg-[#5b9bd5] hover:text-black transition-colors"
        >‹</button>

        {/* Cards */}
        <div style={slideStyle} className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full px-1 justify-items-center">
          {group.map((m) => (
            <div
              key={m.name}
              className="relative w-36 h-52 md:w-44 md:h-60 rounded-2xl overflow-hidden gold-border cursor-pointer hover:-translate-y-1 transition-transform"
              onClick={() => m.photo && setOpenMember(m)}
            >
              {m.photo ? (
                <Image src={m.photo} alt={m.name} fill className="object-cover object-top" />
              ) : (
                <div className={`w-full h-full flex items-center justify-center ${gender === "F" ? "bg-pink-500/20" : "bg-blue-500/20"}`}>
                  <span className={`text-3xl font-bold ${gender === "F" ? "text-pink-300" : "text-blue-300"}`}>{m.name[0]}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                <p className="text-white font-semibold text-[10px] sm:text-xs leading-tight truncate w-full">{m.nickname ?? m.name}</p>
                {m.nickname && <p className="text-gray-300 text-[9px] sm:text-[10px] mt-0.5">{m.name}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white text-xl sm:text-2xl flex items-center justify-center hover:bg-[#5b9bd5] hover:text-black transition-colors"
        >›</button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-3 sm:mt-4 flex-wrap justify-center max-w-[280px]">
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > pageRef.current ? "left" : "right")}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === page ? "bg-[#5b9bd5] w-6" : "bg-white/30 w-1.5"}`}
          />
        ))}
      </div>

      {/* Photo Modal */}
      {openMember && openMember.photo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpenMember(null)}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm" onClick={(e) => e.stopPropagation()}>
            <img src={openMember.photo} alt={openMember.name} className="w-full rounded-2xl object-cover shadow-2xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl px-4 py-3">
              <p className="text-white font-bold text-base sm:text-lg">{openMember.nickname ?? openMember.name}</p>
              {openMember.nickname && <p className="text-gray-300 text-xs sm:text-sm">{openMember.name}</p>}
            </div>
            <button
              onClick={() => setOpenMember(null)}
              className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#5b9bd5] hover:text-black transition-colors"
            >×</button>
          </div>
        </div>
      )}
    </div>
  );
}

function SearchCard({ m, gender, onClick }: { m: MemberType; gender: "F" | "M"; onClick: (m: MemberType) => void }) {
  return (
    <div
      className="relative w-40 h-56 sm:w-52 sm:h-72 md:w-60 md:h-80 rounded-2xl overflow-hidden gold-border cursor-pointer hover:-translate-y-1 transition-transform flex-shrink-0"
      onClick={() => m.photo && onClick(m)}
    >
      {m.photo ? (
        <Image src={m.photo} alt={m.name} fill className="object-cover object-top" />
      ) : (
        <div className={`w-full h-full flex items-center justify-center ${gender === "F" ? "bg-pink-500/20" : "bg-blue-500/20"}`}>
          <span className={`text-3xl font-bold ${gender === "F" ? "text-pink-300" : "text-blue-300"}`}>{m.name[0]}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
        <p className="text-white font-semibold text-[10px] sm:text-xs leading-tight truncate w-full">{m.nickname ?? m.name}</p>
        {m.nickname && <p className="text-gray-300 text-[9px] sm:text-[10px] mt-0.5">{m.name}</p>}
      </div>
    </div>
  );
}

export default function MembersPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<"F" | "M">("F");
  const [openMember, setOpenMember] = useState<MemberType | null>(null);

  const allMembers = [...members.female.map(m => ({ ...m, gender: "F" as const })), ...members.male.map(m => ({ ...m, gender: "M" as const }))];

  const filtered = query.trim()
    ? allMembers.filter(m =>
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        (m.nickname && m.nickname.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const isSearching = query.trim().length > 0;

  return (
    <>
      <Navbar />
      <PageBackground />

      <main className="max-w-4xl md:max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-10">

        {/* Header */}
        <div className="text-center py-4 sm:py-6 flex-shrink-0">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Members</p>
          <h1 className="text-2xl sm:text-4xl font-black gold-gradient">30+ Member</h1>
          <p className="text-gray-400 mt-1 text-xs sm:text-sm italic">ᴛᴏɢᴇᴛʜᴇʀ ᴡᴇ ꜱᴛᴀɴᴅ, ʙᴇᴄᴀᴜꜱᴇ ᴡᴇ&apos;ʀᴇ ᴍᴇᴀɴᴛ ᴛᴏ ʙᴇ</p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto w-full mb-3 sm:mb-4 flex-shrink-0">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama atau nickname..."
            className="w-full bg-[#111]/80 border border-[#5b9bd544] rounded-full px-5 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#5b9bd5] transition-colors"
          />
          {query && (
            <button onClick={() => setQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors text-lg">×</button>
          )}
        </div>

        {isSearching ? (
          /* Search Results */
          <div className="flex-1 overflow-y-auto pb-6">
            <p className="text-gray-500 text-xs mb-4 text-center">{filtered.length} member ditemukan</p>
            {filtered.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">
                {filtered.map((m) => (
                  <SearchCard key={m.name} m={m} gender={m.gender} onClick={setOpenMember} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 text-sm mt-8">Tidak ada member dengan nama atau nickname tersebut.</p>
            )}
          </div>
        ) : (
          <>
            {/* Tab Toggle */}
            <div className="flex justify-center gap-2 mb-4 sm:mb-6 flex-shrink-0">
              <button
                onClick={() => setTab("F")}
                className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${tab === "F" ? "bg-pink-500 text-white" : "border border-pink-500/40 text-pink-400 hover:bg-pink-500/10"}`}
              >♀ Female</button>
              <button
                onClick={() => setTab("M")}
                className={`px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${tab === "M" ? "bg-blue-500 text-white" : "border border-blue-500/40 text-blue-400 hover:bg-blue-500/10"}`}
              >♂ Male</button>
            </div>

            {/* Carousel */}
            <div className="flex flex-col justify-center">
              {tab === "F"
                ? <MemberCarousel key="F" members={members.female} gender="F" />
                : <MemberCarousel key="M" members={members.male} gender="M" />
              }
            </div>
          </>
        )}
      </main>

      {/* Modal */}
      {openMember && openMember.photo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setOpenMember(null)}>
          <div className="relative w-full max-w-xs sm:max-w-sm" onClick={(e) => e.stopPropagation()}>
            <img src={openMember.photo} alt={openMember.name} className="w-full rounded-2xl object-cover shadow-2xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl px-4 py-3">
              <p className="text-white font-bold text-base sm:text-lg">{openMember.nickname ?? openMember.name}</p>
              {openMember.nickname && <p className="text-gray-300 text-xs sm:text-sm">{openMember.name}</p>}
            </div>
            <button onClick={() => setOpenMember(null)} className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#5b9bd5] hover:text-black transition-colors">×</button>
          </div>
        </div>
      )}
    </>
  );
}
