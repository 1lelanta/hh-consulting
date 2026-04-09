function ServiceIcon({ type }) {
  const common = "h-6 w-6 text-white";

  if (type === "infrastructure") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="17" cy="17" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "road") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M3 8h18" />
        <path d="M6 8l2 10" />
        <path d="M12 8v10" />
        <path d="M18 8l-2 10" />
        <path d="M10 4h4" />
      </svg>
    );
  }

  if (type === "bridge") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M3 16h18" />
        <path d="M5 16c2-5 4-7 7-7s5 2 7 7" />
        <path d="M8 16v-3" />
        <path d="M12 16v-4" />
        <path d="M16 16v-3" />
      </svg>
    );
  }

  if (type === "irrigation") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 3s-5 5-5 9a5 5 0 0 0 10 0c0-4-5-9-5-9Z" />
      </svg>
    );
  }

  if (type === "environment") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 4c4 3 6 6 6 9a6 6 0 1 1-12 0c0-3 2-6 6-9Z" />
        <path d="M9 14h6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h3" />
    </svg>
  );
}

function ServicesSection({ data, className = "" }) {
  return (
    <section
      id="services"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-14 [animation-delay:200ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[700px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-5 text-[2rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-navy900 sm:text-[2.45rem] lg:text-[3.3rem]">
            {data.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.items.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl bg-gradient-to-br from-[#112B56] to-[#1F3E65] p-6 text-white shadow-[0_8px_18px_rgba(13,40,74,0.2)]"
            >
              <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-[#D5B223]">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="m-0 text-[2rem] font-extrabold leading-tight sm:text-[1.95rem]">{service.title}</h3>
              <p className="m-0 mt-3 text-[1.12rem] leading-8 text-white/75">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
