import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageBackground from "@/components/PageBackground";

const rules = [
  { num: "01", title: "No Cheat", desc: "Dilarang keras menggunakan cheat atau program ilegal dalam game." },
  { num: "02", title: "No Drama", desc: "Dilarang keras membuat onar atau drama yang menyangkut Community mB." },
  { num: "03", title: "Respect Everyone", desc: "Dilarang menjelekkan atau melakukan tindakan rasis terhadap sesama member maupun staff mB." },
  { num: "04", title: "Maximum 3 Community", desc: "Maksimal 3 community dalam 1 akun. Tidak menerima hode atau akun kedua, only first account. Pengecualian hanya berlaku jika sudah mendapatkan approval khusus." },
  { num: "05", title: "Stay Active", desc: "Bersedia aktif, baik di dalam game maupun di chat grup WhatsApp. Jika selama 2 minggu tidak memberikan kabar, member dapat dikeluarkan dari community." },
  { num: "06", title: "Authentic Identity", desc: "Dilarang menggunakan foto palsu atau foto orang lain sebagai biodata diri." },
  { num: "07", title: "No Money Lending", desc: "Dilarang keras meminjam uang kepada staff atau member lainnya." },
];

export default function OpenTestPage() {
  return (
    <>
      <Navbar />
      <PageBackground />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24 flex flex-col gap-8 sm:gap-10">

        {/* Header */}
        <div className="text-center">
          <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mb-1">Recruitment</p>
          <h1 className="text-2xl sm:text-3xl font-black gold-gradient">Open Test</h1>
          <p className="text-gray-400 text-[10px] sm:text-sm mt-0.5">INSIEMEANTOBE Community (mB)</p>
        </div>

        {/* OT Photo */}
        <div className="rounded-2xl overflow-hidden w-full">
          <Image
            src="/OT.png"
            alt="Open Test mB Community"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Follow Us */}
        <div className="text-center">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Follow Us</p>
          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
            {[
              { label: "Instagram", href: "https://www.instagram.com/insiemeantobe.mb", color: "#E1306C" },
              { label: "WhatsApp Group", href: "https://chat.whatsapp.com/IYMX00SKr5pGL5uDUTqqt1?mode=gi_t", color: "#25D366" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-opacity hover:opacity-80 text-white"
                style={{ backgroundColor: s.color }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Format Nick */}
        <div className="card-bg gold-border rounded-2xl p-4 sm:p-6">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2">Format Nick</p>
          <div className="flex flex-wrap gap-2">
            {["mBnick", "mBnick-", "nickmB", "nickmB-", "nick-mB"].map((fmt) => (
              <span key={fmt} className="px-3 py-1 rounded-full border border-[#c9a84c55] text-[#c9a84c] text-xs sm:text-sm font-mono">
                {fmt}
              </span>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div>
          <h2 className="text-lg sm:text-xl font-black gold-gradient mb-1 text-center">RULES</h2>
          <p className="text-gray-400 text-xs sm:text-sm mb-4 text-center">Rules berlaku setelah menjadi bagian dari INSIEMEANTOBE (mB):</p>
          <div className="flex flex-col gap-3">
            {rules.map((r) => (
              <div key={r.num} className="card-bg gold-border rounded-xl p-3 sm:p-4 flex gap-3 sm:gap-4 items-start">
                <span className="text-[#c9a84c] font-black text-sm sm:text-base min-w-[28px]">{r.num}</span>
                <div>
                  <p className="text-white font-semibold text-xs sm:text-sm">{r.title}</p>
                  <p className="text-gray-400 text-[11px] sm:text-xs mt-0.5 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sanksi */}
        <div className="card-bg border border-red-500/30 rounded-2xl p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-black text-red-400 mb-2 text-center">SANKSI</h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-center">
            Jika terbukti melanggar salah satu rules yang berlaku, maka member akan dikeluarkan langsung secara tidak hormat dari community.
          </p>
        </div>

        {/* Closing */}
        <div className="text-center py-4">
          <p className="text-[#c9a84c] text-sm sm:text-base tracking-widest italic">
            ᴛᴏɢᴇᴛʜᴇʀ ᴡᴇ ꜱᴛᴀɴᴅ, ʙᴇᴄᴀᴜꜱᴇ ᴡᴇ&apos;ʀᴇ ᴍᴇᴀɴᴛ ᴛᴏ ʙᴇ
          </p>
        </div>

      </main>
      <Footer />
    </>
  );
}
