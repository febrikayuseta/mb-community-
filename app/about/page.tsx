import Navbar from "@/components/Navbar";
import Image from "next/image";
import PageBackground from "@/components/PageBackground";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageBackground />
      <main className="flex flex-col items-center px-4 sm:px-6 gap-5 sm:gap-7 pt-24 sm:pt-32 pb-16">

        {/* Header */}
        <div className="text-center">
          <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mb-1">About Us</p>
          <h1 className="text-xl sm:text-3xl font-black">
            <span className="gold-gradient">INSIEMEANTOBE</span>
          </h1>
          <p className="text-gray-400 text-[10px] sm:text-sm tracking-widest">COMMUNITY (mB)</p>
        </div>

        {/* About Text */}
        <div className="card-bg gold-border rounded-2xl p-3 sm:p-6 max-w-2xl w-full">
          <p className="text-gray-300 leading-relaxed text-[11px] sm:text-sm text-justify">
            <span className="font-bold text-white">INSIEMEANTOBE Community (mB)</span> merupakan gabungan dua club, INSIEME dan MeantToBe, yang dipertemukan melalui mabar hingga akhirnya menjadi satu komunitas yang hangat dan solid.
          </p>
          <p className="text-gray-300 leading-relaxed text-[11px] sm:text-sm mt-2 sm:mt-3 text-justify">
            Resmi berdiri pada 3 Januari 2026, mB kini beranggotakan 30+ orang dari berbagai daerah di Indonesia. Nama INSIEMEANTOBE memiliki makna <span className="font-bold text-white">&quot;Together, Meant To Be&quot;</span> — bersama karena memang sudah ditakdirkan.
          </p>
          <p className="text-gray-300 leading-relaxed text-[11px] sm:text-sm mt-2 sm:mt-3 text-justify">
            Dari sebuah kolaborasi sederhana, kami tumbuh menjadi komunitas yang dibangun atas kebersamaan, persahabatan, dan kekompakan, dengan dukungan para founder, leader, dan staff yang berperan sejak awal.
          </p>
        </div>

        {/* Collab */}
        <div className="text-center">
          <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-3">Partner & Kolaborasi</p>
          <div className="flex items-center justify-center gap-6 sm:gap-12">
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#1a1a1a] gold-border relative overflow-hidden">
                <Image src="/logo-komunitas1.png" alt="INSIEME" fill className="object-cover" />
              </div>
              <p className="text-gray-400 text-[10px] sm:text-sm">INSIEME</p>
            </div>
            <div className="text-[#5b9bd5] text-lg sm:text-2xl">×</div>
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#1a1a1a] gold-border relative overflow-hidden">
                <Image src="/logo-komunitas2.jpeg" alt="MeantToBe" fill className="object-cover scale-110" />
              </div>
              <p className="text-gray-400 text-[10px] sm:text-sm">MeantToBe</p>
            </div>
          </div>
        </div>

      </main>
    </>
  );
}
