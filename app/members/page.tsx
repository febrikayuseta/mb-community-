import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const members: string[] = [
  // Tambahkan nama member di sini
];

export default function MembersPage() {
  const placeholders = Array.from({ length: 30 }, (_, i) => `Member ${i + 1}`);
  const displayMembers = members.length > 0 ? members : placeholders;

  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <Image src="/Cover NoChara.png" alt="background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        <div className="text-center mb-16">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Members</p>
          <h1 className="text-4xl font-black gold-gradient">30+ Member</h1>
          <p className="text-gray-400 mt-3">Bergabung dan tumbuh bersama kami</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {displayMembers.map((name, i) => (
            <div
              key={i}
              className="card-bg gold-border rounded-xl p-4 flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center">
                <span className="text-lg font-bold gold-gradient">{name[0]}</span>
              </div>
              <p className="text-white text-xs font-medium text-center leading-tight">{name}</p>
              <p className="text-gray-500 text-xs">Member</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-12">
          * Daftar member akan diperbarui secara berkala
        </p>

      </main>
      <Footer />
    </>
  );
}
