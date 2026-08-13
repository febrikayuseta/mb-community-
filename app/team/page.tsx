"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const team = {
  founders: [
    { name: "Sherly", nickname: "YUME-mB", role: "Co-Founder", image: "/sherly.jpeg" },
    { name: "Fiefy", nickname: "bebyelle-mB", role: "Co-Founder", image: "/fiefy.jpeg" },
  ],
  leadership: [
    { name: "Selvi", nickname: "SVXLEmB", role: "Leader", image: "/Selvi.jpeg" },
    { name: "Vero Zhang", nickname: "mBxella-TD", role: "Vice Leader", image: "/Veroo.jpeg" },
  ],
  staff: [
    { name: "Tine", nickname: "kirara-mB", role: "Staff", image: "/Tine.jpeg" },
    { name: "Aida", nickname: "sparkles-mB", role: "Staff", image: "/Aida.jpeg" },
    { name: "Vikki", nickname: "mBvicii-yX", role: "Staff", image: "/Vikki.jpeg" },
    { name: "Aceng", nickname: "asLucas-mB", role: "Staff", image: "/Aceng.jpeg" },
  ],
};

type Member = { name: string; nickname?: string; role: string; image?: string };

function PairCarousel({ members, highlight }: { members: Member[]; highlight?: boolean }) {
  const pageCount = Math.ceil(members.length / 2);
  const [page, setPage] = useState(0);
  const [sliding, setSliding] = useState<"left" | "right" | null>(null);
  const [paused, setPaused] = useState(false);
  const [openMember, setOpenMember] = useState<Member | null>(null);
  const pageRef = useRef(0);
  const slidingRef = useRef(false);

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

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      const next = (pageRef.current + 1) % pageCount;
      goTo(next, "left");
    }, 3500);
    return () => clearInterval(interval);
  }, [pageCount, goTo, paused]);

  const handlePrev = () => goTo((pageRef.current - 1 + pageCount) % pageCount, "right");
  const handleNext = () => goTo((pageRef.current + 1) % pageCount, "left");

  const pair = [members[page * 2], members[page * 2 + 1]].filter(Boolean);

  const slideStyle: React.CSSProperties = {
    transition: "transform 350ms ease, opacity 350ms ease",
    transform: sliding === "left" ? "translateX(-60px)" : sliding === "right" ? "translateX(60px)" : "translateX(0)",
    opacity: sliding ? 0 : 1,
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Card area */}
      <div className="relative flex items-center justify-center w-full min-h-[240px] sm:min-h-[290px] md:min-h-[330px]">
        {/* Prev */}
        <button
          onClick={handlePrev}
          className="absolute left-0 sm:left-2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white text-xl sm:text-2xl flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-colors"
        >‹</button>

        {/* 2 Cards */}
        <div style={slideStyle} className="flex gap-4 sm:gap-6 md:gap-8 justify-center">
          {pair.map((m) => {
            const isFounder = highlight && m.role === "Co-Founder";
            return (
              <div
                key={m.name}
                className="cursor-pointer"
                onClick={() => { if (m.image) { setOpenMember(m); setPaused(true); } }}
              >
                <TeamCard
                  name={m.name}
                  nickname={m.nickname}
                  role={m.role}
                  image={m.image}
                  highlight={highlight}
                  zoom={isFounder}
                  zoomClass={m.name === "Fiefy" ? "scale-125" : isFounder ? "scale-110" : undefined}
                  objectPosition={m.name === "Fiefy" ? "center 75%" : m.name === "Aida" ? "center 10%" : undefined}
                />
              </div>
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          className="absolute right-0 sm:right-2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 text-white text-xl sm:text-2xl flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-colors"
        >›</button>
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-3 sm:mt-4">
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > pageRef.current ? "left" : "right")}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === page ? "bg-[#c9a84c] w-6" : "bg-white/30 w-1.5"}`}
          />
        ))}
      </div>

      {/* Photo Modal */}
      {openMember && openMember.image && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => { setOpenMember(null); setPaused(false); }}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm" onClick={(e) => e.stopPropagation()}>
            <img src={openMember.image} alt={openMember.name} className="w-full rounded-2xl object-cover shadow-2xl" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl px-4 py-3 sm:px-5 sm:py-4">
              <p className="text-white font-bold text-base sm:text-lg">{openMember.name}</p>
              {openMember.nickname && <p className="text-[#c9a84c] text-xs sm:text-sm">{openMember.nickname}</p>}
              <p className="text-gray-300 text-xs sm:text-sm">{openMember.role}</p>
            </div>
            <button
              onClick={() => { setOpenMember(null); setPaused(false); }}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#c9a84c] hover:text-black transition-colors"
            >×</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TeamPage() {
  const allLeadership = [...team.founders, ...team.leadership];

  return (
    <>
      <Navbar />
      <PageBackground />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">

        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl font-black gold-gradient">Meet The Team</h1>
          <Link href="/members" className="inline-block mt-4 px-5 py-2 rounded-full gold-border text-[#c9a84c] font-semibold text-sm hover:bg-[#c9a84c11] transition-colors">
            30+ Members →
          </Link>
        </div>

        {/* Founders + Leadership */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-xs uppercase tracking-widest text-[#c9a84c] mb-6 sm:mb-8 text-center">Founder & Leadership</h2>
          <PairCarousel members={allLeadership} highlight />
        </section>

        {/* Staff */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-xs uppercase tracking-widest text-[#c9a84c] mb-6 sm:mb-8 text-center">Staff</h2>
          <PairCarousel members={team.staff} />
        </section>

        {/* Quote */}
        <section className="text-center card-bg gold-border rounded-2xl py-6 sm:py-10 px-4 sm:px-8">
          <p className="text-gray-300 leading-relaxed italic text-sm sm:text-base md:text-lg">
            &quot;Together, Meant to Be: Small in size, strong in bond — built on genuine friendship, shared moments, and real connections, both in-game and in real life.&quot;
          </p>
        </section>

      </main>
      <Footer />
    </>
  );
}
