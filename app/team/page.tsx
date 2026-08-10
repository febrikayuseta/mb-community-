import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import Image from "next/image";

const team = {
  founders: [
    { name: "Sherly", role: "Co-Founder", image: "/sherly.jpeg" },
    { name: "Fiefy", role: "Co-Founder", image: "/fiefy.jpeg" },
  ],
  leadership: [
    { name: "Selvi", role: "Leader", image: "/Selvi.jpeg" },
    { name: "Vero Zhang", role: "Vice Leader", image: "/Veroo.jpeg" },
  ],
  staff: [
    { name: "Tine", role: "Staff", image: "/Tine.jpeg" },
    { name: "Aida", role: "Staff", image: "/Aida.jpeg" },
    { name: "Vikki", role: "Staff", image: "/Vikki.jpeg" },
    { name: "Aceng", role: "Staff", image: "/Aceng.jpeg" },
  ],
};

const members = {
  female: ["Cindy", "Erica", "Gabriella", "Indah", "Juwita", "Lea", "Melzi", "Putee", "Ririn", "Silvi", "Tika", "Veronika", "Vina", "Vio"],
  male: ["Ajot", "Alan", "Alex", "Andre", "Aris", "Celvin", "Dennis", "Dhani", "Eric", "Indra", "Isal", "Iskandar", "Jordi", "Khrisna", "Marcel", "Mikel", "Rahman", "Rizki", "Robby", "San", "Steve", "Tito"],
};

function MemberChip({ name, gender }: { name: string; gender: "F" | "M" }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-xl card-bg gold-border`}>
      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${gender === "F" ? "bg-pink-500/30 text-pink-300" : "bg-blue-500/30 text-blue-300"}`}>
        {name[0]}
      </div>
      <span className="text-white text-xs font-medium">{name}</span>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <Image src="/Cover NoChara.png" alt="background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        <div className="text-center mb-16">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Meet The Team</p>
          <h1 className="text-4xl font-black gold-gradient">Meet The Team</h1>
          <p className="text-gray-400 mt-3">The People Behind mB</p>
        </div>

        {/* Founders + Leadership */}
        <section className="mb-14">
          <h2 className="text-xs uppercase tracking-widest text-[#c9a84c] mb-6 text-center">Founder & Leadership</h2>
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            {[...team.founders, ...team.leadership].map((m) => (
              <TeamCard key={m.name} name={m.name} role={m.role} image={"image" in m ? m.image : undefined} highlight zoom={team.founders.some(f => f.name === m.name)} zoomClass={m.name === "Fiefy" ? "scale-125" : undefined} objectPosition={m.name === "Fiefy" ? "center 75%" : undefined} />
            ))}
          </div>
        </section>

        {/* Staff */}
        <section className="mb-14">
          <h2 className="text-xs uppercase tracking-widest text-[#c9a84c] mb-6 text-center">Staff</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {team.staff.map((s) => (
              <TeamCard key={s.name} name={s.name} role={s.role} image={s.image} zoomClass={s.name === "Aida" ? "scale-110" : undefined} objectPosition={s.name === "Aida" ? "center 10%" : undefined} />
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="text-center card-bg gold-border rounded-2xl py-10 px-8 mb-14">
          <p className="text-gray-300 leading-relaxed italic text-lg">
            &quot;Together, Meant to Be: Small in size, strong in bond — built on genuine friendship, shared moments, and real connections, both in-game and in real life.&quot;
          </p>
        </section>

        {/* Members */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-[#c9a84c] mb-8 text-center">Members</h2>

          <div className="mb-8">
            <p className="text-pink-400 text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span>♀</span> Female
            </p>
            <div className="flex flex-wrap gap-2">
              {members.female.map((name) => (
                <MemberChip key={name} name={name} gender="F" />
              ))}
            </div>
          </div>

          <div>
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span>♂</span> Male
            </p>
            <div className="flex flex-wrap gap-2">
              {members.male.map((name) => (
                <MemberChip key={name} name={name} gender="M" />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
