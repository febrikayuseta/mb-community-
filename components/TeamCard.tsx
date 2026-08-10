interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  highlight?: boolean;
  zoom?: boolean;
  zoomClass?: string;
  objectPosition?: string;
}

export default function TeamCard({ name, role, image, highlight, zoom, zoomClass, objectPosition }: TeamCardProps) {
  if (image) {
    return (
      <div
        className={`relative w-32 h-44 sm:w-44 sm:h-60 md:w-52 md:h-72 rounded-2xl overflow-hidden gold-border transition-transform hover:-translate-y-1 ${
          highlight ? "ring-1 ring-[#c9a84c]" : ""
        }`}
      >
        <img src={image} alt={name} className={`w-full h-full object-cover ${zoomClass ?? (zoom ? "scale-110" : "")}`} style={{ objectPosition: objectPosition ?? "center top" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-center">
          <p className="font-semibold text-white text-xs sm:text-sm">{name}</p>
          <p className={`text-[10px] sm:text-xs mt-0.5 ${highlight ? "text-[#c9a84c] font-semibold" : "text-gray-300"}`}>
            {role}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-32 h-44 sm:w-44 sm:h-60 md:w-52 md:h-72 rounded-2xl overflow-hidden gold-border transition-transform hover:-translate-y-1 card-bg flex flex-col items-center justify-center gap-2 ${
        highlight ? "ring-1 ring-[#c9a84c]" : ""
      }`}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-[#2a2a2a] flex items-center justify-center">
        <span className="text-xl sm:text-2xl font-bold gold-gradient">{name[0]}</span>
      </div>
      <div className="text-center px-2">
        <p className="font-semibold text-white text-xs sm:text-sm">{name}</p>
        <p className={`text-[10px] sm:text-xs mt-0.5 ${highlight ? "text-[#c9a84c] font-semibold" : "text-gray-400"}`}>
          {role}
        </p>
      </div>
    </div>
  );
}
