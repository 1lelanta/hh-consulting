import { motion } from "framer-motion";

function ContactSection({ data, className = "" }) {
  const icons = {
    phone: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M5 4h4l2 5-2.5 1.8a16 16 0 0 0 4.2 4.2L14.5 13l5 2v4a2 2 0 0 1-2 2C10.6 21 3 13.4 3 6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    ),
    address: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  };

  const fieldBase =
    "peer w-full border-0 border-b-[0.5px] border-white/20 bg-transparent px-0 pb-2 pt-7 text-[1rem] text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-orange-500 focus:outline-none focus:[box-shadow:0_1px_0_0_rgba(249,115,22,0.55)] focus:[text-shadow:0_0_6px_rgba(249,115,22,0.24)] [&:not(:placeholder-shown)]:border-orange-500 [&:not(:placeholder-shown)]:[box-shadow:0_1px_0_0_rgba(249,115,22,0.4)]";

  function ContactCard({ card }) {
    return (
      <article className="flex min-h-[132px] items-start gap-4 rounded-[16px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
        <div className="mt-0.5 inline-grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/5 text-[#D5B223] [filter:drop-shadow(0_0_6px_rgba(213,178,35,0.35))]">
          {icons[card.icon]}
        </div>
        <div className="min-w-0">
          <p className="m-0 text-[0.86rem] font-bold uppercase tracking-[0.12em] text-slate-100">{card.title}</p>
          <div className="mt-2 space-y-1.5">
            {card.lines.map((line) => (
              <p key={line} className="m-0 break-words text-[0.98rem] leading-7 text-slate-400">
                {line}
              </p>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
      viewport={{ once: true, amount: 0.2 }}
      className={`animate-reveal relative mt-8 -mx-3 scroll-mt-28 overflow-hidden bg-[#0F172A] px-3 py-16 [animation-delay:430ms] sm:-mx-6 sm:px-6 sm:py-20 lg:-mx-10 lg:px-10 lg:py-24 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,1) 0, rgba(255,255,255,1) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,1) 0, rgba(255,255,255,1) 1px, transparent 1px, transparent 40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="section-eyebrow text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 text-[2rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[3.3rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-4 text-[1.1rem] leading-8 text-white/75">{data.subtitle}</p>
        </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <div className="relative">
            <span
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[220px] font-black leading-none text-transparent opacity-5 lg:text-[300px]"
              style={{ WebkitTextStroke: "1.5px rgba(255,255,255,1)" }}
              aria-hidden="true"
            >
              07
            </span>

            <article id="contact-form" className="relative z-20 rounded-[24px] border border-white/10 bg-transparent p-5 sm:p-6">
              <span className="pointer-events-none absolute -left-2 -top-2 text-[12px] font-bold leading-none text-white/55" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute -right-2 -top-2 text-[12px] font-bold leading-none text-white/55" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute -bottom-2 -left-2 text-[12px] font-bold leading-none text-white/55" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute -bottom-2 -right-2 text-[12px] font-bold leading-none text-white/55" aria-hidden="true">+</span>

              <h3 className="relative z-20 m-0 text-[1.45rem] font-extrabold tracking-[-0.02em] text-white sm:text-[1.8rem]">
                {data.form.title}
              </h3>

              <form className="mt-5 space-y-4">
                {data.form.fields.map((field) => (
                  <div key={field.name} className="relative">
                    {field.type === "textarea" ? (
                      <>
                        <textarea
                          id={field.name}
                          name={field.name}
                          rows={5}
                          placeholder={field.placeholder}
                          className={`${fieldBase} resize-none`}
                        />
                        <label
                          className="pointer-events-none absolute left-0 top-5 text-[0.92rem] font-semibold text-slate-300 transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.72rem] peer-focus:text-orange-500 peer-focus:[text-shadow:0_0_6px_rgba(249,115,22,0.26)] peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-[0.72rem] peer-[&:not(:placeholder-shown)]:text-orange-500"
                          htmlFor={field.name}
                        >
                          {field.label}
                        </label>
                      </>
                    ) : (
                      <>
                        <input id={field.name} name={field.name} type={field.type} placeholder={field.placeholder} className={fieldBase} />
                        <label
                          className="pointer-events-none absolute left-0 top-5 text-[0.92rem] font-semibold text-slate-300 transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.72rem] peer-focus:text-orange-500 peer-focus:[text-shadow:0_0_6px_rgba(249,115,22,0.26)] peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-[0.72rem] peer-[&:not(:placeholder-shown)]:text-orange-500"
                          htmlFor={field.name}
                        >
                          {field.label}
                        </label>
                      </>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="mt-2 w-full rounded-[16px] bg-[#FF5500] px-6 py-4 text-[0.9rem] font-extrabold uppercase tracking-widest text-white shadow-[0_14px_28px_rgba(255,85,0,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  {data.form.buttonLabel}
                </button>
              </form>
            </article>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {data.contactCards.map((card) => (
                <ContactCard key={card.title} card={card} />
              ))}
            </div>

            <div className="mt-6 rounded-[24px] bg-gradient-to-br from-[#112B56] to-[#1F3E65] px-6 py-6 text-white shadow-[0_16px_34px_rgba(13,40,74,0.16)] sm:px-7">
              <p className="m-0 text-[1.35rem] font-extrabold leading-tight sm:text-[1.55rem]">{data.cta.title}</p>
              <p className="m-0 mt-2 text-[1.02rem] leading-7 text-white/80">{data.cta.subtitle}</p>
              <a
                href="#contact-form"
                className="mt-5 inline-flex rounded-2xl bg-[#FF5500] px-8 py-3 text-[0.86rem] font-extrabold uppercase tracking-widest text-white shadow-[0_10px_20px_rgba(255,85,0,0.32)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
              >
                {data.cta.buttonLabel}
              </a>
            </div>

            <div className="pointer-events-none relative mt-6 h-[190px] overflow-hidden">
              <span
                className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 font-['JetBrains_Mono',monospace] text-[250px] font-black leading-none text-transparent opacity-50"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,1)" }}
                aria-hidden="true"
              >
                07
              </span>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default ContactSection;
