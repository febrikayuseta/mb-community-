import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <Image src="/Cover Desktop.png" alt="background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <main className="min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Hero */}
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 relative pt-16 sm:pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#c9a84c15_0%,_transparent_70%)] pointer-events-none" />

          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight mb-2">
            <span className="gold-gradient">INSIEMEANTOBE</span>
          </h1>
          <p className="text-gray-400 tracking-widest uppercase text-xs sm:text-sm">Community</p>
          <p className="text-gray-300 max-w-lg mt-3 leading-relaxed text-xs sm:text-sm md:text-base px-2 italic">
            &quot;Together, Meant to Be: Small in size, strong in bond — built on genuine friendship, shared moments, and real connections, both in-game and in real life.&quot;
          </p>
          <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-5 flex-wrap justify-center">
            <Link href="/about" className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#c9a84c] text-black font-semibold text-xs sm:text-sm hover:bg-[#e8c96a] transition-colors">
              Tentang Kami
            </Link>
            <Link href="/members" className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full gold-border text-[#c9a84c] font-semibold text-xs sm:text-sm hover:bg-[#c9a84c11] transition-colors">
              30+ Members →
            </Link>
          </div>

          {/* Collaboration */}
          <div className="mt-6 sm:mt-8">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 sm:mb-4">Collaboration</p>
            <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap">
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#1a1a1a] gold-border relative overflow-hidden">
                  <Image src="/logo-komunitas1.png" alt="INSIEME" fill className="object-cover" />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">INSIEME</p>
              </div>
              <div className="text-[#c9a84c] text-xl sm:text-3xl font-light">×</div>
              <div className="flex flex-col items-center gap-1 sm:gap-2">
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#1a1a1a] gold-border relative overflow-hidden">
                  <Image src="/logo-komunitas2.png" alt="MeantToBe" fill className="object-cover scale-125" />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm">MeantToBe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Find Us Here */}
        <section className="py-3 sm:py-5 px-4 sm:px-6 border-t border-[#c9a84c22]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3">🔗 Find Us Here</p>
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
        </section>

        <Footer />
      </main>
    </>
  );
}
