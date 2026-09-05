import type { Page } from "../App";

interface HomeProps {
  navigate: (page: Page) => void;
}

export default function Home({ navigate }: HomeProps) {
  return (
    <div className="bg-white">
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&h=1200&fit=crop&auto=format"
            alt="Table élégamment dressée avec des plats gastronomiques"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a10]/85 via-[#3b0a1e]/70 to-[#1a0a10]/80" />
        </div>

        {/* Gold ornament line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold/60" />
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Dakar · Sénégal
            </span>
            <span className="h-px w-12 bg-gold/60" />
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            L'Excellence Culinaire
            <br />
            <span className="text-raspberry-light italic">
              pour vos Événements
            </span>
            <br />
            Inoubliables
          </h1>

          <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-10 font-light tracking-wide">
            Traiteur événementiel & créations gourmandes sucrées et salées à Dakar
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("services")}
              className="px-8 py-4 bg-raspberry text-white font-semibold text-sm tracking-wide rounded-sm border border-gold hover:bg-raspberry-dark transition-all duration-200 hover:shadow-lg hover:shadow-raspberry/30"
            >
              Découvrir nos services
            </button>
            <button
              onClick={() => navigate("contact")}
              className="px-8 py-4 bg-transparent text-white font-semibold text-sm tracking-wide rounded-sm border border-white/40 hover:border-gold hover:text-gold transition-all duration-200"
            >
              Nous Contacter
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50">
          <span className="text-[10px] tracking-widest uppercase">Défiler</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─── Nos Spécialités ─── */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Savoir-faire & Créativité"
            title="Nos Spécialités"
            desc="Des créations gourmandes pensées avec passion, entre douceurs artisanales et délices salés qui font l'identité de Dija Traiteur."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {/* Sucrées */}
            <div className="group relative rounded-sm overflow-hidden shadow-lg aspect-[4/3] cursor-pointer">
              <img
                src="/images/imagesucres.jpeg"
                alt="Créations sucrées, pâtisseries et desserts"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a10]/80 via-[#1a0a10]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="w-8 h-[2px] bg-gold mb-3" />
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Commandes Sucrées
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Plateaux de pâtisseries, gâteaux, macarons, verrines
                  sucrées & douceurs de fête
                </p>
              </div>
            </div>

            {/* Salées */}
            <div className="group relative rounded-sm overflow-hidden shadow-lg aspect-[4/3] cursor-pointer">
              <img
                src="/images/imagesalees.jpeg"
                alt="Plateaux salés, finger food et plats traiteur"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a10]/80 via-[#1a0a10]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="w-8 h-[2px] bg-gold mb-3" />
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Commandes Salées
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Mini-burgers, verrines salées, canapés, brochettes &
                  plateaux cocktail pour tous vos événements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Événements ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Nous Couvrons"
            title="Événements Principaux"
            desc="De l'intime au grand événement, nous mettons notre expertise au service de chaque occasion."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {events.map((ev) => (
              <EventCard key={ev.title} {...ev} onMore={() => navigate("services")} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pourquoi Nous Choisir ─── */}
      <section className="py-20 sm:py-28 bg-[#1a0a10] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Notre Engagement"
            title="Pourquoi Nous Choisir"
            dark
            desc="Chaque détail compte. Chaque plat raconte une histoire. Dija Traiteur, c'est l'assurance d'une expérience culinaire hors du commun."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {whyUs.map((item) => (
              <WhyCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TikTok / Réseaux ─── */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Suivez-nous"
            title="Nos Créations en Vidéo"
            desc="Découvrez nos coulisses, nos préparations et nos réalisations sur TikTok."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14">
            {tiktokPreviews.map((preview) => (
              <TikTokCard key={preview.id} {...preview} />
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.tiktok.com/@dijatraiteur221"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-raspberry text-raspberry font-semibold text-sm rounded-sm hover:bg-raspberry hover:text-white transition-colors"
            >
              <TikTokSmall />
              Voir toutes nos vidéos @dijatraiteur221
            </a>
          </div>
        </div>
      </section>

      {/* ─── CTA Band ─── */}
      <section className="py-16 bg-raspberry text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Prêt à vivre une expérience gastronomique unique ?
          </h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed">
            Contactez-nous pour un devis personnalisé. Nous créons des menus
            sur-mesure selon vos envies et votre budget.
          </p>
          <button
            onClick={() => navigate("contact")}
            className="px-9 py-4 bg-white text-raspberry font-bold text-sm tracking-wide rounded-sm border border-gold hover:bg-cream transition-colors"
          >
            Obtenir un Devis Gratuit
          </button>
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ──────────────────────────── */

function SectionHeader({
  subtitle,
  title,
  desc,
  dark = false,
}: {
  subtitle: string;
  title: string;
  desc: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <p
        className={`text-xs font-semibold tracking-[0.3em] uppercase mb-3 ${
          dark ? "text-gold" : "text-gold-dark"
        }`}
      >
        {subtitle}
      </p>
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-4 ${
          dark ? "text-white" : "text-[#1a0a10]"
        }`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mb-5">
        <span className="h-px w-10 bg-gold/50" />
        <svg width="14" height="14" viewBox="0 0 14 14" fill="#D4AF37">
          <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" />
        </svg>
        <span className="h-px w-10 bg-gold/50" />
      </div>
      <p className={`text-sm leading-relaxed ${dark ? "text-white/65" : "text-gray-500"}`}>
        {desc}
      </p>
    </div>
  );
}

const events = [
  {
    title: "Mariages",
    emoji: "💍",
    img: "image1.jpeg",
    desc: "Buffets premium, service à table et menus personnalisés pour votre grand jour.",
    badge: "Prestige",
  },
  {
    title: "Baptêmes",
    emoji: "🍼",
    img: "bapteme.jpeg",
    desc: "Cocktails familiaux et gourmandises de cérémonie pour accueillir le nouveau-né.",
    badge: "Famille",
  },
  {
    title: "Séminaires",
    emoji: "💼",
    img: "image10.jpeg",
    desc: "Pauses café, lunch boxes et buffets d'entreprise pour vos événements professionnels.",
    badge: "Corporate",
  },
  {
    title: "Anniversaires",
    emoji: "🎂",
    img: "image4.jpeg",
    desc: "Menus sur-mesure, finger food et mise en place festive pour vos célébrations.",
    badge: "Fête",
  },
];

function EventCard({
  title,
  img,
  desc,
  badge,
  onMore,
}: (typeof events)[0] & { onMore: () => void }) {
  const imgSrc = img.startsWith("http")
    ? img
    : img.startsWith("photo-")
    ? `https://images.unsplash.com/${img}?w=800&h=600&fit=crop&auto=format`
    : `/images/${img}`;

  return (
    <div className="group rounded-sm overflow-hidden border border-[#D4AF37]/20 hover:border-raspberry/30 hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
        />
        <span className="absolute top-3 right-3 bg-raspberry text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm">
          {badge}
        </span>
      </div>
      <div className="p-5 bg-white">
        <h3
          className="text-lg font-bold text-[#1a0a10] mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
        <button
          onClick={onMore}
          className="text-raspberry text-xs font-semibold tracking-wide hover:underline flex items-center gap-1"
        >
          En savoir plus →
        </button>
      </div>
    </div>
  );
}

const whyUs = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Ingrédients Frais",
    desc: "Nous sélectionnons rigoureusement des produits frais et locaux, pour des saveurs authentiques et une qualité irréprochable.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Menus Personnalisés",
    desc: "Chaque événement est unique. Nous concevons des menus sur-mesure adaptés à vos goûts, vos invités et votre budget.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Expertise Locale",
    desc: "Ancrés à Dakar depuis des années, nous maîtrisons les traditions culinaires sénégalaises et internationales.",
  },
];

function WhyCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 border border-white/10 hover:border-gold/30 rounded-sm transition-all duration-300 hover:bg-white/5">
      <div className="w-14 h-14 rounded-sm bg-raspberry/20 border border-raspberry/30 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3
        className="text-xl font-semibold text-white mb-3"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

const tiktokPreviews = [
  {
    id: 1,
    url: "https://vt.tiktok.com/ZSqFak1oE/",
    img: "tiktok1.jpeg",
    caption: "Préparation de nos plateaux sucrés & viennoiseries 🎂✨",
    views: "12.4K",
  },
  {
    id: 2,
    url: "https://vt.tiktok.com/ZSqFaywjM/",
    img: "tiktok2.jpeg",
    caption: "Nos verrines salées & créations traiteur façon cocktail 😍",
    views: "8.7K",
  },
  {
    id: 3,
    url: "https://vt.tiktok.com/ZSqFa6UQj/",
    img: "tiktok3.jpeg",
    caption: "Buffet complet & douceurs gourmandes à Dakar 🍽️🙌",
    views: "21.1K",
  },
];

function TikTokCard({
  url,
  img,
  caption,
  views,
}: {
  url?: string;
  img: string;
  caption: string;
  views: string;
}) {
  const videoUrl = url || "https://www.tiktok.com/@dijatraiteur221";
  const imgSrc = img.startsWith("http")
    ? img
    : img.startsWith("photo-")
    ? `https://images.unsplash.com/${img}?w=400&h=700&fit=crop&auto=format`
    : `/images/${img}`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-sm overflow-hidden relative aspect-[9/16] shadow-lg max-w-[300px] mx-auto w-full"
    >
      <img
        src={imgSrc}
        alt={caption}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
      />
      {/* TikTok dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
      {/* Bottom info */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
            <TikTokSmall size={9} dark />
          </div>
          <span className="text-white text-xs font-semibold">@dijatraiteur221</span>
        </div>
        <p className="text-white/90 text-xs leading-snug">{caption}</p>
        <p className="text-white/60 text-[10px] mt-1">👁 {views} vues</p>
      </div>
    </a>
  );
}

function TikTokSmall({ size = 14, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={dark ? "#000" : "#C2255C"}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.99a8.27 8.27 0 0 0 4.84 1.55V7.1a4.85 4.85 0 0 1-1.07-.41z" />
    </svg>
  );
}
