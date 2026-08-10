import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function OpenTestPage() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <Image src="/Cover NoChara.png" alt="background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <main className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 gap-4 py-24">

        <div className="text-center">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Recruitment</p>
          <h1 className="text-2xl sm:text-3xl font-black gold-gradient">Open Test</h1>
          <p className="text-gray-400 text-sm mt-1">INSIEMEANTOBE Community (mB)</p>
        </div>

        {/* OT Photo */}
        <div className="rounded-2xl overflow-hidden w-full max-w-2xl">
          <Image src="/OT.png" alt="Open Test mB Community" width={1200} height={600} className="w-full h-auto object-contain" />
        </div>

        {/* Find Us Here */}
        <div className="text-center">
          <p className="text-lg mb-3">🔗 Find Us Here</p>
          <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
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
                className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-opacity hover:opacity-80 text-white"
                style={{ backgroundColor: s.color }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

      </main>
    </>
  );
}
