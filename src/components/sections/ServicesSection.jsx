function ServiceIcon({ type }) {
  const common = "h-6 w-6 text-[#D5B223] transition-colors duration-300 group-hover:text-white";

  if (type === "architectural-design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 20h16" />
        <path d="M7 20V8l5-4 5 4v12" />
        <path d="M10 20v-6h4v6" />
      </svg>
    );
  }

  if (type === "structural-engineering") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M5 19h14" />
        <path d="M7 19V8l5-4 5 4v11" />
        <path d="M9 12h6" />
        <path d="M9 15h6" />
      </svg>
    );
  }

  if (type === "urban-planning") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 5h16v14H4z" />
        <path d="M8 5v14" />
        <path d="M4 10h16" />
        <path d="M13 19v-5" />
      </svg>
    );
  }

  if (type === "infrastructure-design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M4 12h16" />
        <path d="M6 8h4l2 4 2-4h4" />
        <path d="M6 16h12" />
      </svg>
    );
  }

  if (type === "water-engineering") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M12 3s-5 5-5 9a5 5 0 0 0 10 0c0-4-5-9-5-9Z" />
        <path d="M8 17c1.2.8 2.6 1.2 4 1.2s2.8-.4 4-1.2" />
      </svg>
    );
  }

  if (type === "feasibility-study") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
        <path d="M5 4h9l5 5v11H5z" />
        <path d="M14 4v5h5" />
        <path d="M8 14h8" />
        <path d="M8 17h6" />
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

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {data.items.map((service) => (
            <article
              key={service.title}
              className="group rounded-[1.5rem] border border-brand-gray200 bg-white p-5 text-brand-navy900 shadow-[0_10px_24px_rgba(13,40,74,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_36px_rgba(13,40,74,0.12)] sm:p-6"
            >
              <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-[#F4EED8] transition-colors duration-300 group-hover:bg-[#D5B223]">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="m-0 text-[1.2rem] font-extrabold leading-tight tracking-[-0.02em] text-brand-navy900 sm:text-[1.4rem]">
                {service.title}
              </h3>
              <p className="m-0 mt-3 text-[0.98rem] leading-7 text-brand-gray500 sm:text-[1.04rem]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
