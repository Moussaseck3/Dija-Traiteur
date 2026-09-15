import { useState, useEffect } from "react";
import type { Page } from "../App";

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page, targetId?: string) => void;
}

const menuItems: { label: string; page: Page }[] = [
  { label: "Accueil", page: "home" },
  { label: "Services", page: "services" },
  { label: "À Propos", page: "about" },
  { label: "Contact", page: "contact" },
];

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 shadow-md backdrop-blur-sm"
          : "bg-white border-b border-[#D4AF37]/25"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-3 group"
          >
            <LogoMark />
            <div className="text-left">
              <div
                className="text-[1.3rem] font-bold text-raspberry leading-none tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dija Traiteur
              </div>
              <div className="text-[9px] text-gold font-semibold tracking-[0.2em] uppercase leading-none mt-1">
                Yaay Chef
              </div>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                className={`text-sm font-medium transition-colors relative pb-0.5 ${
                  currentPage === item.page
                    ? "text-raspberry"
                    : "text-gray-600 hover:text-raspberry"
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-raspberry rounded-full" />
                )}
              </button>
            ))}
            <button
              onClick={() => navigate("contact")}
              className="ml-2 px-5 py-2.5 bg-raspberry text-white text-sm font-semibold rounded-sm border border-gold hover:bg-raspberry-dark transition-all duration-200 hover:shadow-md"
            >
              Commander / Réserver
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-raspberry"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-[#D4AF37]/20 py-3">
            {menuItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  navigate(item.page);
                  setMobileOpen(false);
                }}
                className={`flex w-full text-left px-2 py-3 text-sm font-medium transition-colors hover:text-raspberry ${
                  currentPage === item.page ? "text-raspberry" : "text-gray-600"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 pb-1">
              <button
                onClick={() => {
                  navigate("contact");
                  setMobileOpen(false);
                }}
                className="w-full px-5 py-3 bg-raspberry text-white text-sm font-semibold rounded-sm border border-gold"
              >
                Commander / Réserver
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function LogoMark() {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-sm shrink-0 bg-white">
      <img
        src="/images/logo dija.jpg"
        alt="Logo Dija Traiteur"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
