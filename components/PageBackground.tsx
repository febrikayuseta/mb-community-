import Image from "next/image";

export default function PageBackground({ desktop = "/Cover NoChara.jpeg" }: { desktop?: string }) {
  return (
    <div className="fixed inset-0 -z-10">
      <Image src={desktop} alt="background" fill className="object-cover hidden sm:block" />
      <Image src="/Cover Mobile.jpg" alt="background" fill className="object-cover sm:hidden" />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
}
