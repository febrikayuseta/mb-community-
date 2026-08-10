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
      <main className="h-[100dvh] overflow-hidden flex flex-col items-center justify-center px-4 gap-2 sm:gap-3 pt-12">

        <div className="text-center">
          <p className="text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mb-1">Recruitment</p>
          <h1 className="text-lg sm:text-2xl font-black gold-gradient">Open Test</h1>
          <p className="text-gray-400 text-[10px] sm:text-sm mt-0.5">INSIEMEANTOBE Community (mB)</p>
        </div>

        {/* OT Photo */}
        <div className="rounded-2xl overflow-hidden w-full max-w-xl flex-shrink-0">
          <Image
            src="/OT.png"
            alt="Open Test mB Community"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
            style={{ maxHeight: "48dvh" }}
          />
        </div>

        {/* Follow Us */}
        <div className="text-center">
          <p className="text-xs sm:text-base mb-1.5 sm:mb-2">Follow Us</p>
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
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-opacity hover:opacity-80 text-white"
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
