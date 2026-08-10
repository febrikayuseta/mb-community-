import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const albums = [
  { title: "BUKBER 2026", photos: [] as string[] },
  { title: "CIMORY - Bogor", photos: [] as string[] },
  { title: "April Birthday", photos: [] as string[] },
  { title: "17 Mei Central Park", photos: [] as string[] },
  { title: "Snowville", photos: [] as string[] },
  { title: "Mami", photos: [] as string[] },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <Image src="/Cover NoChara.png" alt="background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">

        <div className="text-center mb-12">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-3">Gallery</p>
          <h1 className="text-4xl font-black gold-gradient">Gallery</h1>
          <p className="text-gray-400 mt-3">Moments bersama mB</p>
        </div>

        <div className="flex flex-col gap-12">
          {albums.map((album) => (
            <section key={album.title}>
              <h2 className="text-sm font-bold text-[#c9a84c] uppercase tracking-widest mb-4 border-b border-[#c9a84c22] pb-2">
                {album.title}
              </h2>
              {album.photos.length === 0 ? (
                <div className="card-bg gold-border rounded-2xl py-10 text-center">
                  <p className="text-gray-500 text-sm">📸 Foto akan segera hadir</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {album.photos.map((src, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden gold-border aspect-square relative">
                      <Image src={src} alt={`${album.title} ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}
