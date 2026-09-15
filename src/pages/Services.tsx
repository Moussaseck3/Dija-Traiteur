import type { Page } from "../App";

interface ServicesProps {
  navigate: (page: Page, targetId?: string) => void;
}

export default function Services({ navigate }: ServicesProps) {
  return (
    <div className="bg-white">
      {/* ─── Banner Header ─── */}
      <section className="relative py-24 sm:py-32 bg-[#1a0a10] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/image7.jpeg"
            alt="Dija Traiteur Événements"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold mb-4">
            Ce que nous proposons
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nos Services &{" "}
            <span className="text-raspberry-light italic">Prestations</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold/50" />
            <GoldStar />
            <span className="h-px w-10 bg-gold/50" />
          </div>
          <p className="text-white/65 text-sm leading-relaxed">
            Mariages, baptêmes, séminaires, anniversaires ou commandes gourmandes —
            Dija Traiteur s'adapte à chaque moment avec soin et créativité.
          </p>
        </div>
      </section>

      {/* ─── Événements ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Prestations Événementielles" />

          <div className="space-y-20 mt-14">
            {eventServices.map((svc, i) => (
              <EventServiceRow key={svc.title} {...svc} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Commandes Spéciales ─── */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel label="Commandes Spéciales" />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Sucrées */}
            <SpecialOrderCard
              title="Plateaux Sucrés"
              subtitle="Pâtisseries & Douceurs"
              img="imagesucres.jpeg"
              items={[
                "Crêpe au chocolat",
                "Gâteaux d'anniversaire personnalisés",
                "Verrines sucrées",
                "Mignardises & petits fours",
                "Cookies & brownies gourmets",
                "Cake, madeleines, goffre",
                "Beignet, tartelette",
               
              ]}
              color="raspberry"
            />

            {/* Salées */}
            <SpecialOrderCard
              title="Plateaux Salés"
              subtitle="Finger Food & Apéritifs"
              img="imagesalees.jpeg"
              items={[
                "Mini-burgers gastronomiques, pizza",
                "Brochettes de viandes & légumes",
                "Wraps & brochette de poulet panée",
                "Saucisses en feuilleté, batbout",
                "Fataya, rissole, mini-tacos, tortilla panée",
                "Quiche, beignet-crevette ",
                "Croque-monsieur, samoussa",
              ]}
              color="gold"
            />
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 p-8 bg-[#1a0a10] rounded-sm text-center border border-gold/20">
            <div className="w-14 h-14 rounded-full bg-[#25D366] mx-auto flex items-center justify-center mb-4">
              <WhatsAppIcon />
            </div>
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Passez votre commande directement
            </h3>
            <p className="text-white/60 text-sm mb-6 max-w-sm mx-auto">
              Pour les plateaux sucrés & salés, contactez-nous sur WhatsApp
              avec vos préférences et la date souhaitée.
            </p>
            <a
              href="https://wa.me/221781767723?text=Bonjour%20Dija%20Traiteur%2C%20je%20souhaite%20passer%20une%20commande%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#25D366] text-white font-semibold text-sm rounded-sm hover:bg-[#20b857] transition-colors"
            >
              <WhatsAppIcon />
              Commander via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-raspberry text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Un projet en tête ?
          </h2>
          <p className="text-white/80 text-sm mb-7">
            Décrivez-nous votre événement et obtenez un devis personnalisé sous
            24h.
          </p>
          <button
            onClick={() => navigate("contact")}
            className="px-8 py-4 bg-white text-raspberry font-bold text-sm rounded-sm border border-gold hover:bg-cream transition-colors"
          >
            Demander un Devis
          </button>
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ──────────────────────────── */

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px flex-1 bg-[#D4AF37]/30" />
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold-dark">
        {label}
      </p>
      <span className="h-px flex-1 bg-[#D4AF37]/30" />
    </div>
  );
}

const eventServices = [
  {
    id: "mariages",
    title: "Mariages",
    badge: "Prestige",
    img: "image1.jpeg",
    tagline: "Le plus beau jour de votre vie, sublimé",
    desc: "Nous orchestrons l'expérience culinaire complète de votre mariage — du cocktail d'accueil au dîner de gala. Buffets premium, service à table élégant, menus franco-sénégalais ou fusion selon vos vœux. Chaque assiette est une déclaration.",
    features: [
      "Buffet de bienvenue & cocktail",
      "Dîner assis avec service",
      "Menu personnalisé selon le thème",
      "Pièce montée & wedding cake",
      "Personnel de service inclus",
    ],
  },
  {
    id: "baptemes",
    title: "Baptêmes",
    badge: "Famille",
    img: "bapteme.jpeg",
    tagline: "Une célébration douce et mémorable",
    desc: "Le baptême est un moment de joie partagée. Nous préparons des tables généreuses et joyeuses, avec des buffets familiaux, des plateaux de douceurs pour les petits et des mets festifs pour les grands.",
    features: [
      "Buffet familial complet",
      "Pâtisseries de baptême personnalisées",
      "Plateau sucré pour les invités",
      "Boissons & jus de fruits frais",
      "Décoration de table incluse",
    ],
  },
  {
    id: "seminaires",
    title: "Séminaires & Événements Corporate",
    badge: "Corporate",
    img: "image10.jpeg",
    tagline: "Votre professionnalisme, notre savoir-faire",
    desc: "Pauses café soignées, lunch boxes équilibrés ou grands buffets d'entreprise — nous accompagnons vos événements professionnels avec ponctualité et discrétion, pour des participants concentrés et rassasiés.",
    features: [
      "Pauses café & viennoiseries",
      "Lunch boxes et déjeuners sur place",
      "Buffets de networking",
      "Service discret et professionnel",
      "Facturation B2B disponible",
    ],
  },
  {
    id: "anniversaires",
    title: "Anniversaires",
    badge: "Fête",
    img: "image4.jpeg",
    tagline: "Chaque âge mérite d'être fêté avec style",
    desc: "Qu'il s'agisse d'un 1er anniversaire, d'une fête surprise ou d'un grand événement festif, nous créons des menus joyeux et colorés, des finger foods tendances et des gâteaux qui font des souvenirs.",
    features: [
      "Menu finger food festif",
      "Gâteau personnalisé",
      "Candybar & plateau de douceurs",
      "Animation culinaire en option",
      "Mise en place décorée incluse",
    ],
  },
];

function EventServiceRow({
  id,
  title,
  badge,
  img,
  tagline,
  desc,
  features,
  reverse,
}: (typeof eventServices)[0] & { reverse: boolean }) {
  const getSrc = (file: string) =>
    file.startsWith("http")
      ? file
      : file.startsWith("photo-")
      ? `https://images.unsplash.com/${file}?w=800&h=600&fit=crop&auto=format`
      : `/images/${file}`;

  return (
    <div
      id={id}
      className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="relative rounded-sm overflow-hidden aspect-[4/3] group shadow-lg">
          <img
            src={getSrc(img)}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <span className="absolute top-4 left-4 bg-raspberry text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm">
            {badge}
          </span>
        </div>
      </div>

      <div className={`${reverse ? "lg:order-1" : ""} py-2`}>
        <div className="w-8 h-[2px] bg-gold mb-4" />
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#1a0a10] mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h2>
        <p className="text-raspberry text-sm font-medium italic mb-4">{tagline}</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>

        <ul className="space-y-2.5">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SpecialOrderCard({
  title,
  subtitle,
  img,
  items,
  color,
}: {
  title: string;
  subtitle: string;
  img: string;
  items: string[];
  color: "raspberry" | "gold";
}) {
  const accent = color === "raspberry" ? "#C2255C" : "#D4AF37";
  const imgSrc = img.startsWith("http")
    ? img
    : img.startsWith("photo-")
    ? `https://images.unsplash.com/${img}?w=800&h=450&fit=crop&auto=format`
    : `/images/${img}`;

  return (
    <div className="rounded-sm overflow-hidden border border-[#D4AF37]/20 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a10]/70 to-transparent" />
        <div className="absolute bottom-4 left-5">
          <p className="text-[10px] font-semibold tracking-widest uppercase mb-1" style={{ color: accent }}>
            {subtitle}
          </p>
          <h3
            className="text-xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h3>
        </div>
      </div>
      <div className="p-6 bg-white">
        <ul className="space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7l3.5 3.5L12 3"
                  stroke={accent}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function GoldStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#D4AF37">
      <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" />
    </svg>
  );
}
