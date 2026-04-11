import { motion } from "framer-motion";

function ContactSection({ data, className = "" }) {
  const officeAddressCard = Array.isArray(data?.contactCards)
    ? data.contactCards.find((card) => card.icon === "address")
    : null;
  const contactCards = Array.isArray(data?.contactCards)
    ? data.contactCards.filter((card) => card.icon !== "address")
    : [];
  const officeAddress = officeAddressCard ? officeAddressCard.lines.join(" ") : "";
  const mapSrc = officeAddress
    ? `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`
    : "";
  const mapsUrl = officeAddress
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`
    : "https://www.google.com/maps";

  const icons = {
    phone: (
      <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M5 4h4l2 5-2.5 1.8a16 16 0 0 0 4.2 4.2L14.5 13l5 2v4a2 2 0 0 1-2 2C10.6 21 3 13.4 3 6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    ),
    address: (
      <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  };

  function ContactCard({ card }) {
    const isPhone = card.icon === "phone";
    const isEmail = card.icon === "email";

    function toHref(line) {
      if (isPhone) {
        return `tel:${line.replace(/[^\d+]/g, "")}`;
      }

      if (isEmail) {
        return `mailto:${line}`;
      }

      return null;
    }

    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
        whileHover={{ scale: 1.03, y: -3 }}
        className="group flex h-full min-h-[158px] items-start gap-4 rounded-[18px] border border-white/20 bg-white/[0.07] p-6 shadow-[0_20px_46px_rgba(2,6,23,0.38)] backdrop-blur-xl transition duration-300 hover:border-[#D5B223]/55 hover:shadow-[0_26px_58px_rgba(2,6,23,0.48)]"
      >
        <div className="mt-0.5 inline-grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#D5B223]/40 bg-[#D5B223]/20 text-[#F8D66A] shadow-[0_0_0_6px_rgba(213,178,35,0.08)] transition duration-300 group-hover:border-[#F8D66A]/70 group-hover:bg-[#D5B223]/30">
          {icons[card.icon]}
        </div>
        <div className="min-w-0 space-y-2.5">
          <p className="m-0 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#D5B223]">{card.title}</p>
          <div className="space-y-1.5">
            {card.lines.map((line) => (
              toHref(line) ? (
                <a
                  key={line}
                  href={toHref(line)}
                  className="m-0 block break-words text-[1rem] leading-7 text-[#F3F4F6] transition hover:text-white focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
                >
                  {line}
                </a>
              ) : (
                <p key={line} className="m-0 break-words text-[1rem] leading-7 text-[#E5E7EB]">
                  {line}
                </p>
              )
            ))}
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.section
      id="get-in-touch"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal relative mt-8 -mx-3 scroll-mt-28 overflow-hidden px-3 py-20 [animation-delay:430ms] sm:-mx-6 sm:px-6 sm:py-24 lg:-mx-10 lg:px-10 lg:py-28 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(138deg,#081223_0%,#111827_52%,#1f2937_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_85%_12%,rgba(213,178,35,0.18)_0%,rgba(213,178,35,0)_65%),radial-gradient(70%_65%_at_8%_88%,rgba(56,88,138,0.28)_0%,rgba(56,88,138,0)_68%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-black/55" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1240px]">
        <div className="rounded-[28px] border border-white/15 bg-white/[0.04] p-5 shadow-[0_35px_70px_rgba(2,6,23,0.5)] backdrop-blur-md sm:p-7 lg:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.02fr_1.08fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
              className="self-start pt-1"
            >
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-14 bg-[#D5B223]" />
                <p className="m-0 text-[0.76rem] font-semibold uppercase tracking-[0.24em] text-[#D5B223]">HAVE PROJECT</p>
              </div>

              <h2 className="m-0 mt-7 font-['Poppins','Inter',sans-serif] text-[2.35rem] font-bold leading-[1.06] tracking-[-0.02em] text-white sm:text-[3rem] lg:text-[3.7rem]">
                {data.title}
              </h2>

              <p className="m-0 mt-7 max-w-[530px] text-[1.05rem] leading-8 text-[#D1D5DB] sm:text-[1.12rem]">
                {data.subtitle}
              </p>

              <div className="mt-8 hidden h-px w-full max-w-[420px] bg-gradient-to-r from-[#D5B223]/50 via-white/20 to-transparent lg:block" />
            </motion.div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-1">
                {contactCards.map((card) => (
                  <ContactCard key={card.title} card={card} />
                ))}
              </div>

              {mapSrc ? (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden rounded-[22px] border border-white/20 bg-white/[0.07] shadow-[0_24px_56px_rgba(2,6,23,0.42)] backdrop-blur-lg"
                >
                  <div className="flex flex-col gap-4 border-b border-white/15 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <div>
                      <p className="m-0 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[#D5B223]">Office Location</p>
                      <p className="m-0 mt-1 text-[0.96rem] leading-6 text-[#E5E7EB]">{officeAddress}</p>
                    </div>
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center rounded-xl border border-[#D5B223]/55 bg-[#D5B223]/20 px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#F8D66A] transition duration-300 hover:-translate-y-0.5 hover:border-[#F8D66A]/70 hover:bg-[#D5B223]/30 hover:text-[#FFE8A3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
                    >
                      Open in Maps
                    </a>
                  </div>
                  <div className="h-[300px] bg-[#0F172A] sm:h-[360px]">
                    <iframe
                      title="HH Consulting office location on Google Maps"
                      src={mapSrc}
                      className="h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              ) : null}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 0.61, 0.36, 1] }}
                className="relative overflow-hidden rounded-[20px] border border-white/20 bg-white/[0.06] px-6 py-7 text-white shadow-[0_20px_46px_rgba(2,6,23,0.38)] backdrop-blur-lg sm:px-7"
              >
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#D5B223]/20 blur-2xl" aria-hidden="true" />
                <p className="relative z-10 m-0 text-[1.38rem] font-bold leading-tight sm:text-[1.58rem]">{data.cta.title}</p>
                <p className="relative z-10 m-0 mt-3 text-[1rem] leading-7 text-[#E5E7EB]">{data.cta.subtitle}</p>
                <a
                  href="#get-in-touch"
                  className="relative z-10 mt-6 inline-flex items-center rounded-xl bg-[#D5B223] px-7 py-3 text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[#111827] shadow-[0_14px_28px_rgba(213,178,35,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E5C64C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5B223]"
                >
                  {data.cta.buttonLabel}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ContactSection;
