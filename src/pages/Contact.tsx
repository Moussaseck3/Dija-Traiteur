import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    evenement: "",
    date: "",
    invites: "",
    message: "",
  });

  

  const [submitted, setSubmitted] = useState(false);

  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Bonjour Dija Traiteur, voici une nouvelle demande de réservation :
- *Nom* : ${form.nom}
- *Email* : ${form.email}
- *Téléphone* : ${form.telephone}
- *Événement* : ${form.evenement}
${form.date ? `- *Date* : ${form.date}\n` : ""}${
      form.invites ? `- *Invités* : ${form.invites}\n` : ""
    }${form.message ? `- *Message* : ${form.message}\n` : ""}`;

    const url = `https://wa.me/221781767723?text=${encodeURIComponent(text)}`;
    setWhatsappUrl(url);
    setSubmitted(true);
    window.open(url, "_blank");
  };

  const handleReset = () => {
    setForm({
      nom: "",
      email: "",
      telephone: "",
      evenement: "",
      date: "",
      invites: "",
      message: "",
    });
    setSubmitted(false);
    setWhatsappUrl("");
  };

  return (
    <div className="bg-white">
      {/* ─── Banner ─── */}
      <section className="relative py-24 sm:py-32 bg-[#1a0a10] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute inset-0 opacity-8">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=600&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <p className="text-gold text-xs tracking-[0.35em] uppercase font-semibold mb-4">
            Parlons de votre projet
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contactez{" "}
            <span className="text-raspberry-light italic">Dija Traiteur</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed">
            Un événement à organiser ? Une commande à passer ? Nous sommes
            là pour vous accompagner.
          </p>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Info column */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="w-8 h-[2px] bg-gold mb-5" />
                <h2
                  className="text-2xl font-bold text-[#1a0a10] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Informations de contact
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Nous répondons dans les plus brefs délais — généralement
                  sous 24h.
                </p>
              </div>

              <div className="space-y-4">
                {contactItems.map((item) => (
                  <ContactInfoCard key={item.label} {...item} />
                ))}
              </div>

              {/* Social */}
              <div className="pt-4">
                <p className="text-xs font-semibold text-gold-dark tracking-widest uppercase mb-4">
                  Réseaux Sociaux
                </p>
                <div className="flex gap-3">
                  <SocialButton
                    href="https://www.tiktok.com/@dijatraiteur221"
                    label="TikTok @dijatraiteur221"
                    color="bg-[#010101]"
                  >
                    <TikTokIcon />
                  </SocialButton>
                  <SocialButton
                    href="https://wa.me/221781767723"
                    label="WhatsApp"
                    color="bg-[#25D366]"
                  >
                    <WhatsAppIcon />
                  </SocialButton>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-5 bg-cream rounded-sm border border-[#D4AF37]/20">
                <p className="text-sm font-semibold text-[#1a0a10] mb-1">
                  Commande rapide
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Pour les plateaux sucrés & salés, passez commande
                  directement sur WhatsApp.
                </p>
                <a
                  href="https://wa.me/221781767723?text=Bonjour%20Dija%20Traiteur%2C%20je%20souhaite%20passer%20une%20commande%20!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white text-sm font-semibold rounded-sm hover:bg-[#20b857] transition-colors"
                >
                  <WhatsAppIcon />
                  Commander sur WhatsApp
                </a>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3">
              {submitted ? (
                <SuccessMessage whatsappUrl={whatsappUrl} onReset={handleReset} />
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 p-8 bg-cream rounded-sm border border-[#D4AF37]/20 shadow-sm"
                >
                  <div>
                    <div className="w-6 h-[2px] bg-gold mb-4" />
                    <h2
                      className="text-2xl font-bold text-[#1a0a10]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Formulaire de Réservation
                    </h2>
                    <p className="text-gray-500 text-xs mt-1">
                      Tous les champs marqués * sont obligatoires.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="Nom complet *"
                      name="nom"
                      type="text"
                      placeholder="Votre nom"
                      value={form.nom}
                      onChange={handleChange}
                      required
                    />
                    <Field
                      label="Email *"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="Téléphone *"
                      name="telephone"
                      type="tel"
                      placeholder="+221 XX XXX XX XX"
                      value={form.telephone}
                      onChange={handleChange}
                      required
                    />
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5 tracking-wide">
                        Type d'événement *
                      </label>
                      <select
                        name="evenement"
                        value={form.evenement}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-sm border border-[#D4AF37]/30 rounded-sm bg-white focus:outline-none focus:border-raspberry focus:ring-1 focus:ring-raspberry/20 transition-colors text-gray-700"
                      >
                        <option value="">Sélectionner...</option>
                        <option value="mariage">Mariage</option>
                        <option value="bapteme">Baptême</option>
                        <option value="seminaire">Séminaire</option>
                        <option value="anniversaire">Anniversaire</option>
                        <option value="sucre-sale">Commande sucrée / salée</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="Date de l'événement"
                      name="date"
                      type="date"
                      placeholder=""
                      value={form.date}
                      onChange={handleChange}
                    />
                    <Field
                      label="Nombre d'invités"
                      name="invites"
                      type="number"
                      placeholder="Ex: 50"
                      value={form.invites}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 tracking-wide">
                      Message / Détails
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Décrivez votre événement, vos préférences culinaires, vos contraintes alimentaires..."
                      className="w-full px-4 py-3 text-sm border border-[#D4AF37]/30 rounded-sm bg-white focus:outline-none focus:border-raspberry focus:ring-1 focus:ring-raspberry/20 transition-colors resize-none text-gray-700 placeholder:text-gray-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-raspberry text-white font-semibold text-sm rounded-sm border border-gold hover:bg-raspberry-dark transition-all duration-200 hover:shadow-md tracking-wide"
                  >
                    Envoyer ma Demande de Réservation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Google Maps Section ─── */}
      <section className="relative bg-[#1a0a10] border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Notre Emplacement à Dakar
                </h3>
              </div>
              <p className="text-white/60 text-sm mt-1">
                Grand Yoff / Scat Urbam, Dakar · Sénégal · Service traiteur & livraison
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=14.734995,-17.455011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-[#1a0a10] font-semibold text-xs rounded-sm hover:bg-gold-light transition-colors shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Ouvrir dans Google Maps
            </a>
          </div>

          {/* Interactive Map Iframe */}
          <div className="w-full h-80 sm:h-96 rounded-sm overflow-hidden border border-gold/30 shadow-lg relative bg-[#1a0a10]">
            <iframe
              title="Localisation Dija Traiteur"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=14.734995,-17.455011&t=&z=16&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ──────────────────────────── */

const contactItems = [
  {
    label: "Adresse",
    value: "Grand Yoff / Scat Urbam, Dakar, Sénégal",
    href: undefined,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Téléphone / WhatsApp",
    value: "+221 78 176 77 23",
    href: "tel:+221781767723",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.59 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.09 6.09l.88-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "seckk1945@gmail.com",
    href: "mailto:seckk1945@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    value: "@dijatraiteur221",
    href: "https://www.tiktok.com/@dijatraiteur221",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.99a8.27 8.27 0 0 0 4.84 1.55V7.1a4.85 4.85 0 0 1-1.07-.41z" />
      </svg>
    ),
  },
];

function ContactInfoCard({
  label,
  value,
  href,
  icon,
}: (typeof contactItems)[0]) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-sm border border-[#D4AF37]/15 hover:border-raspberry/20 hover:bg-[#fff0f5] transition-all duration-200">
      <div className="w-10 h-10 rounded-sm bg-raspberry/10 border border-raspberry/20 text-raspberry flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-semibold tracking-widest text-gold-dark uppercase mb-0.5">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-sm text-gray-700 hover:text-raspberry transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-gray-700">{value}</p>
        )}
      </div>
    </div>
  );
}

function SocialButton({
  href,
  label,
  color,
  children,
}: {
  href: string;
  label: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-4 py-2.5 ${color} text-white text-xs font-semibold rounded-sm hover:opacity-90 transition-opacity`}
      aria-label={label}
    >
      {children}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1.5 tracking-wide">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 text-sm border border-[#D4AF37]/30 rounded-sm bg-white focus:outline-none focus:border-raspberry focus:ring-1 focus:ring-raspberry/20 transition-colors placeholder:text-gray-400 text-gray-700"
      />
    </div>
  );
}

function SuccessMessage({
  whatsappUrl,
  onReset,
}: {
  whatsappUrl: string;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-8 bg-cream rounded-sm border border-[#D4AF37]/20 h-full">
      <div className="w-16 h-16 rounded-full bg-raspberry/10 border border-raspberry/20 flex items-center justify-center mb-5">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C2255C" strokeWidth="2">
          <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeLinecap="round" />
        </svg>
      </div>
      <h3
        className="text-2xl font-bold text-[#1a0a10] mb-3"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Demande envoyée avec succès !
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-6">
        Merci pour votre demande. Votre récapitulatif a été préparé.
      </p>

      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#25D366] text-white text-sm font-semibold rounded-sm hover:bg-[#20b857] transition-colors mb-4 shadow-sm"
        >
          <WhatsAppIcon />
          Ouvrir / Confirmer sur WhatsApp
        </a>
      )}

      <button
        onClick={onReset}
        className="mt-2 text-xs font-semibold text-raspberry hover:underline tracking-wide"
      >
        ← Envoyer une autre demande
      </button>

      <div className="mt-6 flex items-center gap-2 text-xs text-gold-dark">
        <GoldStar />
        <span>Réponse garantie sous 24h</span>
        <GoldStar />
      </div>
    </div>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.99a8.27 8.27 0 0 0 4.84 1.55V7.1a4.85 4.85 0 0 1-1.07-.41z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function GoldStar() {
  return (
    <svg width="10" height="10" viewBox="0 0 14 14" fill="#a8880d">
      <path d="M7 0l1.5 5.5L14 7l-5.5 1.5L7 14l-1.5-5.5L0 7l5.5-1.5z" />
    </svg>
  );
}
