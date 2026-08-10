export default function Footer() {
  return (
    <footer className="border-t border-[#c9a84c22] mt-auto py-4 sm:py-6 text-center text-gray-500 text-xs sm:text-sm">
      <p className="gold-gradient font-bold text-sm sm:text-base inline-block mb-1">INSIEMEANTOBE COMMUNITY</p>
      <p>© {new Date().getFullYear()} mB · All rights reserved</p>
    </footer>
  );
}
