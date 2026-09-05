import type { Page } from "../App";

interface AboutProps {
  navigate: (page: Page) => void;
}

export default function About({ navigate }: AboutProps) {
  return (
    <div className="bg-white">
      {/* ─── Banner ─── */}
      <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-dark text-xs tracking-[0.35em] uppercase font-semibold mb-4">
            Notre Histoire
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a0a10]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            À Propos de{" "}
            <span className="text-raspberry italic">Dija Traiteur</span>
          </h1>
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="h-px w-10 bg-gold/50" />
            <GoldStar />
            <span className="h-px w-10 bg-gold/50" />
          </div>
        </div>
      </section>

      {/* ─── Story ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="w-10 h-[2px] bg-gold mb-6" />
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1a0a10] mb-6 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                La Passion de la
                <br />
                <span className="text-raspberry">Gastronomie au Service</span>
                <br />
                de vos Émotions
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                <p>
                  Dija Traiteur est née d'une passion profonde pour la cuisine et
                  l'hospitalité sénégalaise. Fondée au cœur de Dakar, dans le
                  quartier vivant de Grand Yoff, notre maison de traiteur a grandi
                  avec un seul objectif : faire de chaque repas une expérience
                  inoubliable.
                </p>
                <p>
                  Depuis nos débuts, nous avons toujours cru que la nourriture
                  est bien plus qu'un simple repas — elle est le langage de
                  l'amour, de la célébration et du partage. Chaque plat que nous
                  préparons porte en lui l'histoire de nos racines culinaires
                  sénégalaises, enrichies d'influences internationales.
                </p>
                <p>
                  Avec des centaines d'événements réussis — mariages grandioses,
                  baptêmes intimes, séminaires d'entreprise et anniversaires
                  mémorables — Dija Traiteur s'est imposée comme la référence
                  incontournable de la restauration événementielle à Dakar.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="text-3xl font-bold text-raspberry mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-400 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-sm overflow-hidden aspect-[3/4] shadow-md">
                  <img
                    src="/images/image6.jpeg"
                    alt="Chef préparant des plats avec soin"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-sm overflow-hidden aspect-square shadow-md">
                  <img
                    src="/images/image11.jpeg"
                    alt="Table élégamment dressée"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
               <div className="rounded-sm overflow-hidden aspect-[4/3] shadow-md col-span-2 mt-6">
  <img
    src="/images/image12.jpeg"
    alt="Décoration de salle de réception"
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
  />
</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Valeurs ─── */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-gold-dark text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              Ce qui nous définit
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1a0a10]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Nos Valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-gold-dark text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              En Images
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1a0a10]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Notre Galerie
            </h2>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Coulisses, préparations, tables dressées et créations signature.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((g, i) => (
              <div
                key={i}
                className={`rounded-sm overflow-hidden group ${g.tall ? "row-span-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${g.tall ? "aspect-[3/4]" : "aspect-square"}`}>
                  <img
                    src={
                      g.img.startsWith("http")
                        ? g.img
                        : g.img.startsWith("photo-")
                        ? `https://images.unsplash.com/${g.img}?w=400&h=${
                            g.tall ? 530 : 400
                          }&fit=crop&auto=format`
                        : `/images/${g.img}`
                    }
                    alt={g.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1a0a10]/0 group-hover:bg-[#1a0a10]/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full border-2 border-white/70 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-[#1a0a10] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Travaillons ensemble
          </h2>
          <p className="text-white/65 text-sm mb-7">
            Chaque événement est unique. Parlons de votre projet et créons
            ensemble quelque chose d'exceptionnel.
          </p>
          <button
            onClick={() => navigate("contact")}
            className="px-8 py-4 bg-raspberry text-white font-bold text-sm rounded-sm border border-gold hover:bg-raspberry-dark transition-colors"
          >
            Discutons de votre Projet
          </button>
        </div>
      </section>
    </div>
  );
}

const stats = [
  { value: "500+", label: "Événements réalisés" },
  { value: "25 ans", label: "D'expérience à Dakar" },
  { value: "100%", label: "Clients satisfaits" },
];

const values = [
  {
    icon: "✦",
    title: "Qualité",
    desc: "Des ingrédients soigneusement sélectionnés et une préparation rigoureuse pour chaque plat.",
    color: "#C2255C",
  },
  {
    icon: "◈",
    title: "Présentation",
    desc: "L'œil mange avant la bouche. Chaque assiette est une œuvre, chaque buffet une scénographie.",
    color: "#D4AF37",
  },
  {
    icon: "♨",
    title: "Saveur",
    desc: "Des recettes qui marient traditions sénégalaises et créativité gastronomique internationale.",
    color: "#C2255C",
  },
  {
    icon: "◎",
    title: "Fiabilité",
    desc: "Ponctualité, professionnalisme et engagement : votre tranquillité d'esprit est notre priorité.",
    color: "#D4AF37",
  },
];

function ValueCard({
  icon,
  title,
  desc,
  color,
}: (typeof values)[0]) {
  return (
    <div className="p-7 bg-white rounded-sm border border-[#D4AF37]/20 hover:border-raspberry/25 hover:shadow-md transition-all duration-300 text-center">
      <div
        className="text-3xl mb-4"
        style={{ color }}
        aria-hidden
      >
        {icon}
      </div>
      <h3
        className="text-lg font-bold text-[#1a0a10] mb-3"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

const galleryImages = [
  { img: "image1.jpeg", alt: "Table gastronomique élégante", tall: false },
  { img: "image2.jpeg", alt: "Finger food raffinés", tall: true },
  { img: "image9.jpeg", alt: "Pâtisseries artisanales", tall: false },
  { img: "photo-1555244162-803834f70033", alt: "Buffet événementiel complet", tall: false },
  { img: "image7.jpeg", alt: "Salle de mariage décorée", tall: false },
  { img: "image5.jpeg", alt: "Verrines et amuse-bouches", tall: true },
  { img: "image8.jpeg", alt: "Chef en pleine préparation", tall: false },
  { img: "image3.jpeg", alt: "Décoration de table festive", tall: false },
];

function GoldStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="#D4AF37">
      <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" />
    </svg>
  );
}
