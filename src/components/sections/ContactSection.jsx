function ContactSection({ data, className = "" }) {
  const icons = {
    phone: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M5 4h4l2 5-2.5 1.8a16 16 0 0 0 4.2 4.2L14.5 13l5 2v4a2 2 0 0 1-2 2C10.6 21 3 13.4 3 6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    ),
    address: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    website: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    ),
  };

  const fieldBase =
    "w-full rounded-[16px] border border-brand-gray200 bg-white px-4 py-4 text-[1rem] text-brand-navy900 outline-none transition-all duration-300 placeholder:text-brand-gray400 focus:border-[#D5B223] focus:shadow-[0_0_0_4px_rgba(213,178,35,0.12)]";

  function ContactCard({ card }) {
    return (
      <article className="flex min-h-[132px] items-start gap-4 rounded-[16px] border border-brand-gray200 bg-white p-4 shadow-[0_10px_24px_rgba(13,40,74,0.06)]">
        <div className="mt-0.5 inline-grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F4EED8] text-[#D5B223]">
          {icons[card.icon]}
        </div>
        <div className="min-w-0">
          <p className="m-0 text-[0.86rem] font-bold uppercase tracking-[0.12em] text-[#D5B223]">{card.title}</p>
          <div className="mt-2 space-y-1.5">
            {card.lines.map((line) => (
              <p key={line} className="m-0 break-words text-[0.98rem] leading-7 text-brand-navy900">
                {line}
              </p>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <section
      id="contact"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-16 [animation-delay:430ms] sm:-mx-6 sm:px-6 sm:py-20 lg:-mx-10 lg:px-10 lg:py-24 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[860px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 text-[2rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-navy900 sm:text-[2.45rem] lg:text-[3.3rem]">
            {data.title}
          </h2>

          <p className="m-0 mt-4 text-[1.1rem] leading-8 text-brand-gray500">{data.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="relative overflow-hidden rounded-[24px] border border-brand-gray200 bg-white shadow-[0_16px_34px_rgba(13,40,74,0.08)]">
            <img src={data.image} alt={data.imageAlt} className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[100%] lg:min-h-[620px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08192D]/28 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/92 px-4 py-3 shadow-[0_12px_28px_rgba(6,19,36,0.12)] backdrop-blur">
              <p className="m-0 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#D5B223]">Addis Ababa, Ethiopia</p>
              <p className="m-0 mt-1 text-[0.98rem] font-semibold text-brand-navy900">Consulting office / location map visual</p>
            </div>
          </div>

          <div>
            <article id="contact-form" className="rounded-[24px] border border-brand-gray200 bg-white p-5 shadow-[0_16px_34px_rgba(13,40,74,0.08)] sm:p-6">
              <h3 className="m-0 text-[1.45rem] font-extrabold tracking-[-0.02em] text-brand-navy900 sm:text-[1.8rem]">
                {data.form.title}
              </h3>

              <form className="mt-5 space-y-4">
                {data.form.fields.map((field) => (
                  <div key={field.name}>
                    <label className="mb-2 block text-[0.92rem] font-semibold text-brand-navy900" htmlFor={field.name}>
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows={5}
                        placeholder={field.placeholder}
                        className={`${fieldBase} resize-none`}
                      />
                    ) : (
                      <input id={field.name} name={field.name} type={field.type} placeholder={field.placeholder} className={fieldBase} />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="mt-2 w-full rounded-[16px] bg-brand-navy900 px-6 py-4 text-[1rem] font-semibold text-white shadow-[0_14px_28px_rgba(13,40,74,0.18)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#0A234A]"
                >
                  {data.form.buttonLabel}
                </button>
              </form>
            </article>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {data.contactCards.map((card) => (
                <ContactCard key={card.title} card={card} />
              ))}
            </div>

            <div className="mt-6 rounded-[24px] bg-gradient-to-br from-[#112B56] to-[#1F3E65] px-6 py-6 text-white shadow-[0_16px_34px_rgba(13,40,74,0.16)] sm:px-7">
              <p className="m-0 text-[1.35rem] font-extrabold leading-tight sm:text-[1.55rem]">{data.cta.title}</p>
              <p className="m-0 mt-2 text-[1.02rem] leading-7 text-white/80">{data.cta.subtitle}</p>
              <a
                href="#contact-form"
                className="mt-5 inline-flex rounded-2xl bg-[#D5B223] px-6 py-3 text-[1rem] font-semibold text-white shadow-[0_10px_20px_rgba(190,154,90,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {data.cta.buttonLabel}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
