import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const members = {
  female: ["Cindy", "Erica", "Gabriella", "Indah", "Juwita", "Lea", "Melzi", "Putee", "Ririn", "Silvi", "Tika", "Veronika", "Vina", "Vio"],
  male: ["Ajot", "Alan", "Alex", "Andre", "Aris", "Celvin", "Dennis", "Dhani", "Eric", "Indra", "Isal", "Iskandar", "Jordi", "Khrisna", "Marcel", "Mikel", "Rahman", "Rizki", "Robby", "San", "Steve", "Tito"],
};

function MemberCard({ name, gender }: { name: string; gender: "F" | "M" }) {
  return (
    <div className="card-bg gold-border rounded-xl p-2 sm:p-4 flex flex-col items-center gap-1 sm:gap-2 hover:-translate-y-1 transition-transform">
      <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${gender === "F" ? "bg-pink-500/20" : "bg-blue-500/20"}`}>
        <span className={`text-sm sm:text-lg font-bold ${gender === "F" ? "text-pink-300" : "text-blue-300"}`}>{name[0]}</span>
      </div>
      <p className="text-white text-[10px] sm:text-xs font-medium text-center leading-tight">{name}</p>
    </div>
  );
}

export default function MembersPage() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <Image src="/Cover NoChara.png" alt="background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">

        <div className="text-center mb-8 sm:mb-12">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-2 sm:mb-3">Members</p>
          <h1 className="text-3xl sm:text-4xl font-black gold-gradient">30+ Member</h1>
          <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">Bergabung dan tumbuh bersama kami</p>
        </div>

        <div className="mb-8 sm:mb-10">
          <p className="text-pink-400 text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">♀ Female</p>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2 sm:gap-3">
            {members.female.map((name) => (
              <MemberCard key={name} name={name} gender="F" />
            ))}
          </div>
        </div>

        <div>
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">♂ Male</p>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2 sm:gap-3">
            {members.male.map((name) => (
              <MemberCard key={name} name={name} gender="M" />
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
