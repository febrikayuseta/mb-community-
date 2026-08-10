import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import Link from "next/link";
import Image from "next/image";

const founders = [
  { name: "Sherly", role: "Co-Founder", image: "/sherly.jpeg" },
  { name: "Fiefy", role: "Co-Founder", image: "/fiefy.jpeg" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen relative">
        <div className="fixed inset-0 -z-10">
          <Image src="/Cover Desktop.png" alt="background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero */}
        <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#c9a84c15_0%,_transparent_70%)] pointer-events-none" />
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-3">
            <span className="gold-gradient">INSIEMEANTOBE</span>
          </h1>
          <p className="text-gray-400 tracking-widest uppercase text-xs sm:text-sm">Community</p>
          <p className="text-gray-400 max-w-lg mt-4 leading-relaxed text-sm sm:text-base px-2">
            Gabungan dua club, INSIEME dan MeantToBe, yang dipertemukan melalui mabar dan akhirnya menjadi satu komunitas. Resmi berdiri pada 3 Januari 2026, mB kini beranggotakan 30+ orang dari berbagai daerah di Indonesia. <span className="font-bold text-white">Together, Meant To Be —</span><br /><br /><span className="font-bold text-white">bersama karena memang sudah ditakdirkan.</span>
          </p>
          <div className="flex gap-3 mt-6 flex-wrap justify-center">
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-full bg-[#c9a84c] text-black font-semibold text-sm hover:bg-[#e8c96a] transition-colors"
            >
              Tentang Kami
            </Link>
            <Link
              href="/members"
              className="px-5 py-2.5 rounded-full gold-border text-[#c9a84c] font-semibold text-sm hover:bg-[#c9a84c11] transition-colors"
            >
              30+ Members →
            </Link>
          </div>
        </section>

        {/* Collab Section */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 border-t border-[#c9a84c22]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">Collaboration</p>
            <div className="flex items-center justify-center gap-8 sm:gap-12 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-[#1a1a1a] gold-border relative overflow-hidden">
                  <Image src="/logo-komunitas1.png" alt="INSIEME" fill className="object-cover" />
                </div>
                <p className="text-gray-400 text-sm">INSIEME</p>
              </div>
              <div className="text-[#c9a84c] text-2xl sm:text-3xl font-light">×</div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-[#1a1a1a] gold-border relative overflow-hidden">
                  <Image src="/logo-komunitas2.png" alt="MeantToBe" fill className="object-cover scale-125" />
                </div>
                <p className="text-gray-400 text-sm">MeantToBe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 border-t border-[#c9a84c22]">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 text-center">Founder</p>
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">Pendiri Komunitas</h2>
            <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
              {founders.map((f) => (
                <TeamCard key={f.name} name={f.name} role={f.role} image={f.image} highlight zoom zoomClass={f.name === "Fiefy" ? "scale-125" : "scale-110"} objectPosition={f.name === "Fiefy" ? "center 75%" : undefined} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/team" className="text-[#c9a84c] text-sm hover:underline">
                Lihat seluruh tim →
              </Link>
            </div>
          </div>
        </section>

        {/* Find Us Here */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 border-t border-[#c9a84c22]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl sm:text-2xl mb-6">🔗 Find Us Here</p>
            <div className="flex justify-center gap-3 flex-wrap">
              {[
                { label: "Facebook", href: "https://www.facebook.com/insiemeantobe", color: "#1877F2" },
                { label: "Instagram", href: "https://www.instagram.com/insiemeantobe.mb", color: "#E1306C" },
                { label: "WhatsApp Group", href: "https://chat.whatsapp.com/IYMX00SKr5pGL5uDUTqqt1?mode=gi_t", color: "#25D366" },
                { label: "Discord", href: "#", color: "#5865F2" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-opacity hover:opacity-80 text-white"
                  style={{ backgroundColor: s.color }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
