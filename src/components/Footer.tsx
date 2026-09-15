import type { Page } from "../App";

interface FooterProps {
  navigate: (page: Page, targetId?: string) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-[#1a0a10] text-white">
      {/* Gold divider */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/40 shrink-0 bg-white">
                <img
                  src="/images/logo dija.jpg"
                  alt="Logo Dija Traiteur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div
                  className="text-2xl font-bold text-raspberry-light leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Dija Traiteur
                </div>
                <div className="text-[10px] text-gold tracking-[0.2em] uppercase mt-1">
                  Excellence Culinaire
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mt-3">
              Traiteur événementiel & créations gourmandes sucrées et salées à
              Dakar. L'art de sublimer vos moments précieux.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@dijatraiteur221"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-raspberry transition-colors flex items-center justify-center"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/221781767723"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] transition-colors flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-sm font-semibold text-gold tracking-widest uppercase mb-5"
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {(
                [
                  ["Accueil", "home"],
                  ["Services", "services"],
                  ["À Propos", "about"],
                  ["Contact", "contact"],
                ] as [string, Page][]
              ).map(([label, page]) => (
                <li key={page}>
                  <button
                    onClick={() => navigate(page)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-gold tracking-widest uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <PinIcon />
                <span>Grand Yoff / Scat Urbam, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon />
                <a
                  href="tel:+221781767723"
                  className="hover:text-white transition-colors"
                >
                  +221 78 176 77 23
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon />
                <a
                  href="mailto:seckk1945@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  seckk1945@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <TikTokIcon />
                <a
                  href="https://www.tiktok.com/@dijatraiteur221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @dijatraiteur221
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Dija Traiteur — Tous droits réservés.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <MapBadge />
            <span>Grand Yoff / Scat Urbam, Dakar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.99a8.27 8.27 0 0 0 4.84 1.55V7.1a4.85 4.85 0 0 1-1.07-.41z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="2"
      className="mt-0.5 shrink-0"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="2"
      className="shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.09 6.09l.88-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="2"
      className="shrink-0"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapBadge() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#D4AF37"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
