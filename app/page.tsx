import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import PageBackground from "@/components/PageBackground";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageBackground desktop="/Cover Desktop.png" />

      <main className="flex flex-col">
        {/* Hero */}
        <section className="flex flex-col items-center text-center px-4 sm:px-6 relative pt-24 sm:pt-32 pb-8 gap-5 sm:gap-7">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#c9a84c15_0%,_transparent_70%)] pointer-events-none" />

          <div>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight mb-1">
              <span className="gold-gradient">INSIEMEANTOBE</span>
            </h1>
            <p className="text-gray-400 tracking-widest uppercase text-xs sm:text-sm">Community</p>
          </div>

          <p className="text-gray-300 max-w-lg leading-relaxed text-xs sm:text-sm md:text-base px-2 italic">
            Together, Meant to Be: Small in size, strong in bond —{" "}<br />built on genuine friendship, shared moments, and real connections, both in-game and in real life.
          </p>

          <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
            <Link href="/about" className="px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-[#c9a84c] text-black font-bold text-sm sm:text-base hover:bg-[#e8c96a] transition-colors text-center">
              Tentang Kami
            </Link>
            <Link href="/members" className="px-7 sm:px-9 py-3 sm:py-3.5 rounded-full gold-border text-[#c9a84c] font-bold text-sm sm:text-base hover:bg-[#c9a84c11] transition-colors">
              30+ Members →
            </Link>
          </div>
        </section>

        {/* Collaboration + Find Us Here */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-6 pb-10 sm:pb-14">
          {/* Collaboration */}
          <div className="w-full max-w-sm sm:max-w-md">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 sm:mb-3 text-center">Collaboration</p>
            <div className="relative rounded-2xl border border-[#c9a84c33] bg-[#0d0d0d88] backdrop-blur-sm px-8 sm:px-14 py-4 sm:py-6 flex items-center justify-center gap-8 sm:gap-14">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_#c9a84c0a_0%,_transparent_70%)] pointer-events-none" />

              <a href="https://www.instagram.com/insiemeayodance.club" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group/logo">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#111] border-2 border-[#c9a84c88] overflow-hidden
                  shadow-[0_0_24px_#c9a84c55,0_0_48px_#c9a84c22]
                  group-hover/logo:shadow-[0_0_32px_#c9a84c88,0_0_64px_#c9a84c44]
                  group-hover/logo:scale-105 transition-all duration-300">
                  <Image src="/logo-komunitas1.png" alt="INSIEME" fill className="object-cover" />
                </div>
                <p className="text-[#c9a84c] text-[10px] sm:text-xs font-semibold tracking-widest uppercase group-hover/logo:underline">INSIEME</p>
              </a>

              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-6 bg-gradient-to-b from-transparent via-[#c9a84c66] to-transparent" />
                <span className="text-[#c9a84c] text-xl sm:text-3xl font-light">×</span>
                <div className="w-px h-6 bg-gradient-to-b from-transparent via-[#c9a84c66] to-transparent" />
              </div>

              <a href="https://www.instagram.com/me.bebyfie" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group/logo2">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#111] border-2 border-[#c9a84c88] overflow-hidden
                  shadow-[0_0_24px_#c9a84c55,0_0_48px_#c9a84c22]
                  group-hover/logo2:shadow-[0_0_32px_#c9a84c88,0_0_64px_#c9a84c44]
                  group-hover/logo2:scale-105 transition-all duration-300">
                  <Image src="/logo-komunitas2.jpeg" alt="MeantToBe" fill className="object-cover scale-110" />
                </div>
                <p className="text-[#c9a84c] text-[10px] sm:text-xs font-semibold tracking-widest group-hover/logo2:underline">MeantToBe</p>
              </a>
            </div>
          </div>

          {/* Find Us Here */}
          <div className="w-full border-t border-[#c9a84c22] pt-3 sm:pt-4 text-center">
            <p className="text-sm sm:text-base mb-2">Connect with us:</p>
            <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
              {[
                { label: "Facebook", href: "https://www.facebook.com/insiemeantobe", color: "#1877F2" },
                { label: "Instagram", href: "https://www.instagram.com/insiemeantobe.mb", color: "#E1306C" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-opacity hover:opacity-80 text-white"
                  style={{ backgroundColor: s.color }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
