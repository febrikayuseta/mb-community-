import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <Image src="/Cover NoChara.png" alt="background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl font-black mb-4">
            <span className="gold-gradient">INSIEMEANTOBE</span>
          </h1>
          <p className="text-gray-400 text-sm tracking-widest">COMMUNITY (mB)</p>
        </div>

        {/* About Text */}
        <div className="card-bg gold-border rounded-2xl p-8 mb-12">
          <p className="text-gray-300 leading-relaxed italic text-lg">
            &quot;Together, Meant to Be: Small in size, strong in bond — built on genuine friendship, shared moments, and real connections, both in-game and in real life.&quot;
          </p>
        </div>


        {/* Collab */}
        <div className="text-center">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-8">Partner & Kolaborasi</p>
          <div className="flex items-center justify-center gap-16 flex-wrap">
            <div className="flex flex-col items-center gap-3">
              <div className="w-28 h-28 rounded-full bg-[#1a1a1a] gold-border relative overflow-hidden">
                <Image src="/logo-komunitas1.png" alt="INSIEME" fill className="object-cover" />
              </div>
              <p className="text-gray-400 text-sm">INSIEME</p>
            </div>
            <div className="text-[#c9a84c] text-3xl">×</div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-28 h-28 rounded-full bg-[#1a1a1a] gold-border relative overflow-hidden">
                <Image src="/logo-komunitas2.png" alt="MeantToBe" fill className="object-cover scale-125" />
              </div>
              <p className="text-gray-400 text-sm">MeantToBe</p>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
