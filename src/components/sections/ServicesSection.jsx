function formatGhostNumber(index) {
  return String(index + 1).padStart(2, "0");
}

function ServiceIcon({ type }) {
  const common = "h-7 w-7 text-[#D5B223] sm:h-8 sm:w-8";

  if (type === "architectural-design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M4 20h16" />
        <path d="M7 20V8l5-4 5 4v12" />
        <path d="M10 20v-6h4v6" />
      </svg>
    );
  }

  if (type === "structural-engineering") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M5 19h14" />
        <path d="M7 19V8l5-4 5 4v11" />
        <path d="M9 12h6" />
        <path d="M9 15h6" />
      </svg>
    );
  }

  if (type === "urban-planning") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M4 5h16v14H4z" />
        <path d="M8 5v14" />
        <path d="M4 10h16" />
        <path d="M13 19v-5" />
      </svg>
    );
  }

  if (type === "infrastructure-design") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M4 12h16" />
        <path d="M6 8h4l2 4 2-4h4" />
        <path d="M6 16h12" />
      </svg>
    );
  }

  if (type === "water-engineering") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M12 3s-5 5-5 9a5 5 0 0 0 10 0c0-4-5-9-5-9Z" />
        <path d="M8 17c1.2.8 2.6 1.2 4 1.2s2.8-.4 4-1.2" />
      </svg>
    );
  }

  if (type === "feasibility-study") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
        <path d="M5 4h9l5 5v11H5z" />
        <path d="M14 4v5h5" />
        <path d="M8 14h8" />
        <path d="M8 17h6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={common}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h3" />
    </svg>
  );
}

function ServicesSection({ data, className = "" }) {
  const staggerMap = ["lg:self-start", "lg:self-center", "lg:self-end"];

  return (
    <section
      id="services"
      className={`animate-reveal mt-8 -mx-3 scroll-mt-28 bg-[#F3F5F8] px-3 py-12 [animation-delay:200ms] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-20 2xl:-mx-14 2xl:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[700px]">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-14 bg-[#D5B223]" />
            <p className="m-0 text-[0.95rem] font-extrabold uppercase tracking-[0.14em] text-[#D5B223]">
              {data.eyebrow}
            </p>
          </div>

          <h2 className="m-0 mt-4 text-[1.75rem] font-extrabold leading-[1.14] tracking-[-0.02em] text-brand-navy900 sm:mt-5 sm:text-[2.45rem] lg:text-[3.3rem]">
            {data.title}
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:items-stretch lg:gap-x-12 lg:gap-y-16">
          {data.items.map((service, index) => {
            return (
              <article
                key={service.title}
                className={[
                  "relative min-h-[220px]",
                  "flex flex-col items-start justify-start",
                  staggerMap[index % staggerMap.length],
                ].join(" ")}
              >
                <span
                  className="pointer-events-none absolute -left-1 top-[-28px] z-0 text-[120px] font-black leading-none text-transparent sm:text-[128px] lg:text-[144px]"
                  style={{ WebkitTextStroke: "1px #e2e8f0" }}
                  aria-hidden="true"
                >
                  {formatGhostNumber(index)}
                </span>

                <div className="relative z-10 flex w-full flex-col items-center text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
                    <ServiceIcon type={service.icon} />
                  </div>

                  <span className="mt-4 block h-[1px] w-[50px] bg-[#D5B223]" aria-hidden="true" />

                  <h3 className="m-0 mt-4 text-[0.86rem] font-extrabold uppercase leading-[1.45] tracking-[0.18em] text-brand-navy900 sm:text-[0.92rem]">
                    {service.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
